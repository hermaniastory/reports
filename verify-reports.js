#!/usr/bin/env node
/* ============================================================
   verify-reports.js — PANDEMONIUM-04 // сверка языковых пар отчётов
   ------------------------------------------------------------
   Проверяет, что два языковых файла одного отчёта совместимы:
   одинаковая структура, одинаковые картинки/штампы/коды, целая
   вёрстка. Это страховка схемы «два файла на отчёт» и постоянный
   регрессионный сторож.

   ЗАПУСК:
     node verify-reports.js report-kaelaRU.js report-kaelaEN.js
     node verify-reports.js            (по умолчанию — пара Каэлы)

   Код выхода 0 = всё сходится, 1 = есть расхождения.
   Файлы сайта НЕ трогает — только читает.
   ============================================================ */

const fs = require('fs');
const vm = require('vm');

const files = process.argv.slice(2);
const A = files[0] || 'report-kaelaRU.js';
const B = files[1] || 'report-kaelaEN.js';

// ── выполняем файл отчёта в песочнице, ловим объект registerReport ──
function loadReport(path) {
  let captured = null;
  const sandbox = {
    PD_IMG_BASE: '',                       // пусто → src == чистый путь от корня, языконезависимо
    registerReport: (r) => { captured = r; },
    // ph повторяет реальный вывод достаточно, чтобы посчитать <img src>:
    ph: (p, cap) => `<img src="${p}">` + (cap ? `<span class="ph-cap">${cap}</span>` : ''),
    console,
  };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path, 'utf8'), sandbox, { filename: path });
  if (!captured) throw new Error(`${path}: registerReport не вызван`);
  return captured;
}

// ── анализ одной вкладки по её финальному html ──
const rxImg   = /src="([^"]+)"/g;
const rxDay   = /DAY\s*\d{3,4}/g;
const rxCode  = /\bA-\d{2}\b/g;
const rxHead  = /class="[^"]*\br-heading\b[^"]*"/g;
function analyzeTab(html) {
  const all = (re) => { const o = []; let m; re.lastIndex = 0; while ((m = re.exec(html))) o.push(m[1] ?? m[0]); return o; };
  const opens = (html.match(/<div\b/g) || []).length;
  const closes = (html.match(/<\/div>/g) || []).length;
  return {
    imgs: all(rxImg).sort(),
    days: all(rxDay).sort(),
    codes: all(rxCode).sort(),
    headings: all(rxHead).length,
    divOpen: opens, divClose: closes, divBalance: opens - closes,
  };
}

// ── сравнение мультимножеств ──
const eqArr = (x, y) => x.length === y.length && x.every((v, i) => v === y[i]);
const diffArr = (x, y) => {
  const cx = {}, cy = {};
  x.forEach(v => cx[v] = (cx[v] || 0) + 1);
  y.forEach(v => cy[v] = (cy[v] || 0) + 1);
  const only = (a, b) => Object.keys(a).filter(k => (a[k] || 0) > (b[k] || 0));
  return { onlyA: only(cx, cy), onlyB: only(cy, cx) };
};

const problems = [];
const notes = [];
function check(cond, msg) { if (!cond) problems.push(msg); }

const ra = loadReport(A), rb = loadReport(B);
const nameA = A.split('/').pop(), nameB = B.split('/').pop();

// ── метаданные ──
['id', 'code', 'title', 'tag', 'tagLabel', 'date', 'pilot', 'author'].forEach(k => {
  check((ra[k] ?? null) === (rb[k] ?? null),
    `META ${k}: ${nameA}=${JSON.stringify(ra[k])}  ≠  ${nameB}=${JSON.stringify(rb[k])}`);
});

// ── язык ──
check(ra.lang && rb.lang, `LANG: у обоих файлов должно быть поле lang (сейчас ${JSON.stringify(ra.lang)} / ${JSON.stringify(rb.lang)})`);
check(ra.lang !== rb.lang, `LANG: языки должны различаться, а оба = ${JSON.stringify(ra.lang)}`);
['ru', 'en'].includes(ra.lang) || problems.push(`LANG: ${nameA} имеет нестандартный lang=${JSON.stringify(ra.lang)}`);
['ru', 'en'].includes(rb.lang) || problems.push(`LANG: ${nameB} имеет нестандартный lang=${JSON.stringify(rb.lang)}`);

// ── вкладки: количество и id по порядку ──
const idsA = (ra.tabs || []).map(t => t.id), idsB = (rb.tabs || []).map(t => t.id);
check(idsA.length === idsB.length, `TABS: разное число вкладок — ${idsA.length} vs ${idsB.length}`);
check(eqArr(idsA, idsB), `TABS: id вкладок или их порядок не совпадают:\n    ${nameA}: [${idsA}]\n    ${nameB}: [${idsB}]`);

// ── по-вкладочный разбор ──
let totA = 0, totB = 0;
const common = idsA.filter(id => idsB.includes(id));
common.forEach(id => {
  const ta = analyzeTab(ra.tabs.find(t => t.id === id).html);
  const tb = analyzeTab(rb.tabs.find(t => t.id === id).html);
  totA += ta.imgs.length; totB += tb.imgs.length;

  // баланс div внутри каждого языка
  check(ta.divBalance === 0, `DIV [${id}] ${nameA}: дисбаланс <div> = ${ta.divBalance} (${ta.divOpen} откр / ${ta.divClose} закр)`);
  check(tb.divBalance === 0, `DIV [${id}] ${nameB}: дисбаланс <div> = ${tb.divBalance} (${tb.divOpen} откр / ${tb.divClose} закр)`);

  // картинки — пути языконезависимы, должны совпадать множеством
  if (!eqArr(ta.imgs, tb.imgs)) {
    const d = diffArr(ta.imgs, tb.imgs);
    problems.push(`IMG [${id}]: наборы путей различаются` +
      (d.onlyA.length ? `\n    только в ${nameA}: ${d.onlyA.join(', ')}` : '') +
      (d.onlyB.length ? `\n    только в ${nameB}: ${d.onlyB.join(', ')}` : ''));
  }
  // DAY-штампы
  if (!eqArr(ta.days, tb.days)) {
    const d = diffArr(ta.days, tb.days);
    problems.push(`DAY [${id}]: штампы различаются` +
      (d.onlyA.length ? `\n    только в ${nameA}: ${d.onlyA.join(', ')}` : '') +
      (d.onlyB.length ? `\n    только в ${nameB}: ${d.onlyB.join(', ')}` : ''));
  }
  // коды A-XX
  if (!eqArr(ta.codes, tb.codes)) {
    const d = diffArr(ta.codes, tb.codes);
    problems.push(`CODE [${id}]: коды различаются` +
      (d.onlyA.length ? `\n    только в ${nameA}: ${d.onlyA.join(', ')}` : '') +
      (d.onlyB.length ? `\n    только в ${nameB}: ${d.onlyB.join(', ')}` : ''));
  }
  // число секций (r-heading) — параллельность оглавления
  check(ta.headings === tb.headings, `SECTIONS [${id}]: разное число заголовков r-heading — ${ta.headings} vs ${tb.headings}`);
});

check(totA === totB, `PHOTOS: разное общее число фото — ${nameA}=${totA}, ${nameB}=${totB}`);
notes.push(`вкладок: ${idsA.length} · фото: ${totA} · язык: ${ra.lang} / ${rb.lang}`);

// ── кросс-ссылки: битые ссылки и параллельность refMap ──
function numberedSections(html) {                 // множество РЕАЛЬНЫХ номеров секций
  const nums = new Set(); let m;
  const rx1 = />(\d{1,3})<\/div>\s*<div class="r-sep"/g;
  while ((m = rx1.exec(html))) nums.add(parseInt(m[1], 10));
  const rx2 = /class="r-heading"[^>]*>\s*(\d{1,3})[.)\s]/g;
  while ((m = rx2.exec(html))) nums.add(parseInt(m[1], 10));
  return nums;
}
function numericRefs(html) {                        // «раздел N» / «section N» в тексте
  const o = []; let m; const rx = /(?:раздел[а-яё]*|section)\s+(\d{1,2})/gi;
  while ((m = rx.exec(html))) o.push(parseInt(m[1], 10));
  return o;
}
[[ra, nameA], [rb, nameB]].forEach(([rep, nm]) => {
  const obsTab = rep.tabs.find(t => t.id === 'observations');
  const obsNums = obsTab ? numberedSections(obsTab.html) : new Set();
  rep.tabs.forEach(t => numericRefs(t.html).forEach(n => {
    if (!obsNums.has(n)) problems.push(`DEADLINK ${nm} [${t.id}]: «раздел/section ${n}» — секции с номером ${n} нет в observations`);
  }));
  if (rep.refMap) {
    const tabIds = rep.tabs.map(t => t.id);
    for (const p in rep.refMap) {
      const [tab, num] = rep.refMap[p];
      if (!tabIds.includes(tab)) { problems.push(`DEADLINK ${nm}: refMap «${p}» → вкладки "${tab}" нет`); continue; }
      if (num) {
        const tnums = numberedSections(rep.tabs.find(t => t.id === tab).html);
        if (!tnums.has(num)) problems.push(`DEADLINK ${nm}: refMap «${p}» → секции ${num} нет во вкладке "${tab}"`);
      }
      if (!rep.tabs.some(t => t.html.includes(p))) problems.push(`DEADLINK ${nm}: refMap-фраза «${p}» не встречается в тексте (мёртвая)`);
    }
  }
});
const targetsOf = (rep) => rep.refMap ? [...new Set(Object.values(rep.refMap).map(t => t[0] + '#' + (t[1] || 0)))].sort() : [];
if (!eqArr(targetsOf(ra), targetsOf(rb)))
  problems.push(`REFMAP: множества целей refMap различаются между языками:\n    ${nameA}: [${targetsOf(ra)}]\n    ${nameB}: [${targetsOf(rb)}]`);
// число реальных ссылок в тексте (числовые + вхождения именных фраз) должно совпадать —
// ловит отсылку, потерянную/добавленную при переводе
function linkCount(rep) {
  let c = 0;
  rep.tabs.forEach(t => { c += numericRefs(t.html).length; });
  if (rep.refMap) for (const p in rep.refMap) rep.tabs.forEach(t => { c += t.html.split(p).length - 1; });
  return c;
}
check(linkCount(ra) === linkCount(rb), `REFLINKS: разное число ссылок в тексте — ${nameA}=${linkCount(ra)}, ${nameB}=${linkCount(rb)}`);

// ── отчёт ──
const line = '─'.repeat(58);
console.log(line);
console.log(`СВЕРКА:  ${nameA}  ⇄  ${nameB}`);
console.log(line);
console.log(`  ${notes[0]}`);
console.log(line);
if (!problems.length) {
  console.log('  ✓ РАСХОЖДЕНИЙ НЕ НАЙДЕНО — пара совместима.');
  console.log(line);
  process.exit(0);
} else {
  console.log(`  ✗ НАЙДЕНО РАСХОЖДЕНИЙ: ${problems.length}\n`);
  problems.forEach((p, i) => console.log(`  ${i + 1}. ${p}`));
  console.log(line);
  process.exit(1);
}
