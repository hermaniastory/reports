/* ============================================================
   reports-engine.js  —  PANDEMONIUM-04 // FIELD REPORTS ENGINE
   ------------------------------------------------------------
   The only shared logic. NEVER needs editing when you add a
   report. Each report lives in its own report-*.js file and
   registers itself:
 
     registerReport({
       id:'...', code:'...', title:'...',
       tag:'...', tagLabel:'...', date:'...',
       pilot:'...',            // optional — for search/grouping
       author:true,            // optional — OOC / red author-glow
       styles:`...css...`,     // optional — per-report scoped CSS
       tabs:[ { id:'...', label:'...', html:`...` }, ... ]
     });
 
   LOAD ORDER (in reports.html, bottom of <body>):
     <script src="reports-engine.js"></script>   ← first
     <script src="report-kaela.js"></script>
     <script src="report-slime.js"></script>
     ...                                          ← reports after
 
   PER-REPORT STYLES (isolation):
   Whatever you put in `styles` is auto-scoped to that report only.
   Write plain selectors — the engine wraps them in
   [data-report="<id>"]{ ... } using CSS nesting, so they can never
   leak into another pilot's report. Use `&{...}` to style the
   viewer container itself. (Needs a modern browser — nesting is
   supported everywhere current; if absent, the report just falls
   back to the shared base styles.)
 
   Helpers exposed globally for report files / inline handlers:
     registerReport, ph, filterReports, openPhotoModal, closePhotoModal
   ============================================================ */
 
(function () {
  'use strict';
 
  // Флаги эффектов из reports-settings.js (если файла нет — всё включено)
  const fxOn = (key) => {
    const fx = window.repFX;
    return !fx || fx[key] !== false;
  };
 
  // ─────────────────────────────────────────
  //  REGISTRY
  // ─────────────────────────────────────────
  const REPORTS = [];
  const injectedStyles = new Set();
  let inited = false;
 
  // ── LANGUAGE ──────────────────────────────
  // Оба языковых файла отчёта регистрируются с ОДИНАКОВЫМ id и разным lang.
  // Индекс показывает только отчёты текущего языка; отчёты без поля lang
  // (пока не переведённые — напр. slime/author) видны всегда.
  // Выбор языка хранится в localStorage, дефолт — из PD_LANG_DEFAULT (оболочка).
  const LANG_KEY = 'pd04:reports:lang';
  function loadLang() {
    try { const v = localStorage.getItem(LANG_KEY); if (v === 'ru' || v === 'en') return v; } catch (e) {}
    return (typeof PD_LANG_DEFAULT !== 'undefined' ? PD_LANG_DEFAULT : 'en');
  }
  let currentLang = loadLang();
  let currentReport = null, currentTabId = null;
  const visibleReports = () => REPORTS.filter(r => !r.lang || r.lang === currentLang);
 
  function registerReport(report) {
    if (!report || !report.id) return;
    REPORTS.push(report);
    if (report.styles) injectReportStyles(report);
    if (inited) renderIndex(visibleReports()); // supports late / dynamic registration
  }
 
  // Per-report CSS, isolated under [data-report="<id>"] via CSS nesting.
  function injectReportStyles(report) {
    if (injectedStyles.has(report.id)) return;
    injectedStyles.add(report.id);
    const st = document.createElement('style');
    st.id = 'report-styles-' + report.id;
    st.textContent = '[data-report="' + cssEsc(report.id) + '"]{\n' + report.styles + '\n}';
    (document.head || document.documentElement).appendChild(st);
  }
  function cssEsc(s) { return String(s).replace(/["\\]/g, '\\$&'); }
 
  // Shared photo-embed helper used inside report html template strings.
  function ph(path, cap, size, pos, tilt) {
    size = size || ''; pos = pos || 'center'; tilt = tilt || '';
    // src is resolved against the site-root base (PD_IMG_BASE); the visible
    // path label stays clean (site-root-relative), so captions don't show ../../
    const full = (typeof PD_IMG_BASE !== 'undefined' ? PD_IMG_BASE : '') + path;
    return `<div class="ph-wrap ${pos} ${tilt}">
    <div class="ph-box ${size}">
      <img src="${full}" onload="this.style.display='block';this.parentElement.querySelector('.ph-icon').style.display='none';this.parentElement.querySelector('.ph-path').style.display='none';" onerror=""/>
      <div class="ph-icon">📷</div>
      <div class="ph-path">${path}</div>
    </div>
    ${cap ? `<div class="ph-cap">${cap}</div>` : ''}
  </div>`;
  }
 
  // ─────────────────────────────────────────
  //  INDEX / OPEN / TABS / SEARCH
  // ─────────────────────────────────────────
  function renderIndex(reports) {
    const list = document.getElementById('index-list');
    if (!list) return;
    list.innerHTML = '';
    reports.forEach(r => {
      const el = document.createElement('div');
      el.className = 'report-entry' + (r.author ? ' author' : '');
      el.id = 'entry-' + r.id;
      el.innerHTML = `<div class="entry-code">${r.code}</div><div class="entry-title">${r.title}</div><div class="entry-meta"><span class="entry-tag ${r.tag}">${r.tagLabel}</span><span class="entry-date">${r.date}</span></div>`;
      el.onclick = () => openReport(r);
      list.appendChild(el);
    });
    const cnt = document.getElementById('entry-count');
    if (cnt) cnt.textContent = reports.length;
    renderTree();               // вернуть дерево под активный отчёт, если он ещё в списке
  }
 
  function openReport(r) {
    currentReport = r; currentTabId = r.tabs[0] ? r.tabs[0].id : null;
    document.querySelectorAll('.report-entry').forEach(e => e.classList.remove('active'));
    const ee = document.getElementById('entry-' + r.id); if (ee) ee.classList.add('active');
    const ve = document.getElementById('viewer-empty'); if (ve) ve.style.display = 'none';
    const vc = document.getElementById('viewer-content'); if (vc) vc.style.display = 'flex';
    const tb = document.getElementById('report-tabs'), rv = document.getElementById('report-viewer');
    tb.innerHTML = ''; rv.innerHTML = '';
    tb.classList.toggle('author', !!r.author);
    rv.classList.toggle('author', !!r.author);
    document.body.classList.toggle('author-glow', !!r.author);
    rv.setAttribute('data-report', r.id); // scope hook for per-report styles
    r.tabs.forEach((t, i) => {
      const tab = document.createElement('div');
      tab.className = 'report-tab' + (i === 0 ? ' active' : '');
      tab.textContent = t.label; tab.onclick = () => switchTab(r, t.id);
      tb.appendChild(tab);
      const c = document.createElement('div');
      c.className = 'tab-content' + (i === 0 ? ' active' : '');
      c.id = 'tab-' + r.id + '-' + t.id;
      // Наполняем только активную вкладку. Остальные — при первом открытии
      // (см. switchTab). Иначе в DOM разом влетают все вкладки отчёта.
      if (i === 0) { c.innerHTML = autoLinkRefs(t.html, r); c.dataset.filled = '1'; }
      rv.appendChild(c);
    });
    invalidateGlitchCache();
    rv.scrollTop = 0;
    updateBreadcrumb();
    renderTree();
  }
 
  function switchTab(r, tabId) {
    currentTabId = tabId;
    // Ленивое наполнение: html вкладки вставляется при первом её открытии
    const target = document.getElementById('tab-' + r.id + '-' + tabId);
    if (target && !target.dataset.filled) {
      const t = r.tabs.find(x => x.id === tabId);
      if (t) { target.innerHTML = autoLinkRefs(t.html, r); target.dataset.filled = '1'; }
    }
    document.querySelectorAll('.report-tab').forEach((t, i) => { t.classList.toggle('active', r.tabs[i]?.id === tabId); });
    document.querySelectorAll('.tab-content').forEach(c => { c.classList.toggle('active', c.id === 'tab-' + r.id + '-' + tabId); });
    const rv = document.getElementById('report-viewer'); if (rv) rv.scrollTop = 0;
    invalidateGlitchCache();
    updateBreadcrumb();
    renderTree();
  }
 
  function filterReports(q) {
    const l = (q || '').toLowerCase();
    renderIndex(visibleReports().filter(r =>
      r.title.toLowerCase().includes(l) ||
      r.code.toLowerCase().includes(l) ||
      r.tagLabel.toLowerCase().includes(l) ||
      (r.pilot ? r.pilot.toLowerCase().includes(l) : false)
    ));
  }
 
  // ─────────────────────────────────────────
  //  SECTION PARSER + NAVIGATION  (фазы 1+2)
  //  Секции достаются из html-СТРОК вкладок (через <template>, поэтому
  //  работает и для закрытых, лениво не наполненных вкладок).
  //  id секции ЯЗЫК-НЕЗАВИСИМ: явный data-sec → иначе день (d0021) → иначе
  //  порядковый (s04). Так ссылки/переходы валидны в обоих языках.
  //  Заголовок — язык-зависимый, только для отображения.
  //  Общий механизм jumpTo() — единый вход для дерева, карты и ссылок Коко.
  // ─────────────────────────────────────────
  const SEC_ANCHOR = '.r-heading, .r-sep';
  const secCache = {};
 
  function sectionNum(markerEl) {
    const prev = markerEl.previousElementSibling;                 // в наблюдениях номер лежит в соседнем div ("01")
    if (prev && /^\d{1,3}$/.test(prev.textContent.trim())) return prev.textContent.trim();
    const m = /^\s*(\d{1,3})[.)\s]/.exec(markerEl.textContent);   // либо число в начале заголовка
    return m ? m[1] : null;                                       // подсекции (без номера) → null
  }
  // Префикс для отображения: день → номер → «·» (подсекция)
  function secPrefix(s) { return s.day ? ('DAY ' + s.day) : (s.num ? s.num : '·'); }
 
  function getSections(report, tabId) {
    const tab = report && report.tabs.find(t => t.id === tabId);
    if (!tab) return [];
    const tpl = document.createElement('template');
    tpl.innerHTML = tab.html;
    const isMarker = el => el.classList && (el.classList.contains('r-heading') || el.classList.contains('r-sep'));
    const out = [];
    const walker = document.createTreeWalker(tpl.content, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let cur = null, node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === 1 && isMarker(node)) {
        cur = {
          title: node.textContent.trim().replace(/\s+/g, ' '),
          num: sectionNum(node),                                 // реальный номер секции или null (подсекция)
          day: null,
          explicit: node.getAttribute('data-sec') || null,
          id: null,
        };
        out.push(cur);
      } else if (node.nodeType === 3 && cur && cur.day == null) {
        const m = /DAY\s*(\d{3,4})/.exec(node.textContent);       // день привязываем к секции по ближайшему DAY-штампу
        if (m) cur.day = m[1];
      }
    }
    const used = {};
    out.forEach((s, i) => {
      let base = s.explicit || (s.day ? 'd' + s.day : 's' + String(i + 1).padStart(2, '0'));
      let id = base, k = 2;
      while (used[id]) id = base + '-' + (k++);                   // на случай коллизий
      used[id] = 1; s.id = id; delete s.explicit;
    });
    return out;
  }
  function getSectionsCached(report, tabId) {
    const key = report.id + '|' + (report.lang || '') + '|' + tabId; // html вкладок статичен → кэш без инвалидации
    return secCache[key] || (secCache[key] = getSections(report, tabId));
  }
 
  // Текущая секция по прокрутке = последний якорь на/выше верха вьюера.
  function currentSectionIndex() {
    const rv = document.getElementById('report-viewer');
    const active = rv && rv.querySelector('.tab-content.active');
    if (!rv || !active) return -1;
    const anchors = active.querySelectorAll(SEC_ANCHOR);
    const y = rv.scrollTop; let index = -1;
    for (let i = 0; i < anchors.length; i++) { if (headTopIn(rv, anchors[i]) <= y + 12) index = i; else break; }
    return index;
  }
 
  // ── хлебные крошки (живой статус-бар: ОТЧЁТ / ВКЛАДКА / СЕКЦИЯ) ──
  function tabLabelClean(label) { return (label || '').replace(/^\/\/\s*/, '').trim(); }
  function shortTitle(t) { return t.length > 34 ? t.slice(0, 32) + '…' : t; }
  function updateBreadcrumb() {
    const bb = document.getElementById('bb-active');
    if (!bb) return;
    if (!currentReport) { bb.textContent = '—'; return; }
    const parts = [currentReport.title];
    const tab = currentReport.tabs.find(t => t.id === currentTabId);
    if (tab) parts.push(tabLabelClean(tab.label));
    const secs = getSectionsCached(currentReport, currentTabId);
    const idx = currentSectionIndex();
    if (idx >= 0 && secs[idx]) parts.push(secPrefix(secs[idx]) + (secs[idx].title ? ' · ' + shortTitle(secs[idx].title) : ''));
    bb.textContent = parts.join('  /  ');
  }
 
  // ── общий механизм перехода: отчёт → вкладка → секция ──
  function scrollToSection(report, tabId, sectionId) {
    const secs = getSectionsCached(report, tabId);
    const idx = secs.findIndex(s => s.id === sectionId);
    const rv = document.getElementById('report-viewer');
    const active = rv && rv.querySelector('.tab-content.active');
    if (!rv || !active) return;
    const anchors = active.querySelectorAll(SEC_ANCHOR);          // idx из getSections совпадает с порядком якорей в DOM
    if (idx >= 0 && anchors[idx]) rv.scrollTop = Math.max(0, headTopIn(rv, anchors[idx]) - 8);
  }
  function jumpTo(reportId, tabId, sectionId) {
    const r = reportId ? REPORTS.find(x => x.id === reportId && (x.lang === currentLang || !x.lang)) : currentReport;
    if (!r) return false;
    const tab = tabId || currentTabId || (r.tabs[0] && r.tabs[0].id);
    if (r !== currentReport) openReport(r);
    if (tab && tab !== currentTabId) switchTab(r, tab);
    if (sectionId) scrollToSection(r, tab, sectionId);
    updateBreadcrumb();
    maybeSocaRemark();
    return true;
  }
 
  // ── ФАЗА 6: редкая реплика СОКИ при прыжке ──
  // Только на осознанных переходах (jumpTo из ссылки/дерева/карты), не на скролле
  // и не при смене языка. Редко + кулдаун. Гасится тем же тумблером экранных эффектов.
  const SOCA_REMARKS = {
    en: [
      'Jumping again. Focus is a skill, Pilot.',
      'You have read that section before. It has not improved.',
      'Navigation logged. I will pretend it was purposeful.',
      'Fourth section in a minute. Impressive, in a way.',
      'The link worked. Try to contain your surprise.',
      'Wandering the archive. At least you are consistent.',
      'I moved you. You are welcome.',
    ],
    ru: [
      'Снова прыгаешь. Концентрация — это навык, пилот.',
      'Ты уже читал этот раздел. Лучше он не стал.',
      'Переход зафиксирован. Сделаю вид, что он был осмысленным.',
      'Четвёртый раздел за минуту. По-своему впечатляет.',
      'Ссылка сработала. Постарайся сдержать удивление.',
      'Блуждаешь по архиву. Хотя бы стабильно.',
      'Я тебя перенесла. Не благодари.',
    ],
  };
  let lastRemark = 0;
  function maybeSocaRemark() {
    if (!fxOn('screen')) return;                       // выключено вместе с экранными эффектами
    const now = Date.now();
    if (now - lastRemark < 14000) return;              // не чаще раза в 14 с
    if (Math.random() > 0.30) return;                  // чуть чаще
    lastRemark = now;
    const pool = SOCA_REMARKS[currentLang] || SOCA_REMARKS.en;
    showSocaToast(pool[Math.floor(Math.random() * pool.length)]);
  }
  function showSocaToast(text) {
    let t = document.getElementById('soca-jump');
    if (!t) { t = document.createElement('div'); t.id = 'soca-jump'; document.body.appendChild(t); }
    t.innerHTML = '';
    const tag = document.createElement('span'); tag.className = 'sj-tag'; tag.textContent = '⛭ SOCA //';
    t.appendChild(tag); t.appendChild(document.createTextNode(' ' + text));
    t.classList.remove('show'); void t.offsetWidth; t.classList.add('show');
    clearTimeout(t._to); t._to = setTimeout(() => t.classList.remove('show'), 3800);
  }
 
  // ── КРОСС-ССЫЛКИ КОКО (фаза 5) ────────────
  // Ссылки в тексте → клик прыгает в нужную секцию. Два источника:
  //  1) числовые «раздел N» / «section N» — распознаются автоматически,
  //     ведут в секцию N вкладки observations (правки текста не нужны);
  //  2) именные фразы — из report.refMap (в самом файле отчёта, свой на язык):
  //     { 'раздел про почву': ['observations', 5], 'разделе про Саноэр': ['moons', 0] }
  //     число 0/отсутствует = прыжок к верху вкладки.
  // Цель адресуется по НОМЕРУ секции (для observations) или по вкладке —
  // язык-независимо. Ручной хелпер ref() тоже доступен в шаблонах отчётов.
  const escapeRx = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  function wrapRef(text, tab, num) {
    return `<span class="r-ref" data-rt="${tab}"${num ? ` data-rn="${num}"` : ''} tabindex="0" role="link">${text}</span>`;
  }
  function ref(tab, sec, text) {                 // явный хелпер для шаблонов: ref('observations','soil','...')
    return `<span class="r-ref" data-rt="${tab}" data-rs="${sec}" tabindex="0" role="link">${text}</span>`;
  }
  function autoLinkRefs(html, report) {
    html = html.replace(/(раздел[а-яё]*|section)\s+(\d{1,2})/gi, (m, w, n) => wrapRef(m, 'observations', n));
    if (report && report.refMap) {
      for (const phrase in report.refMap) {
        const t = report.refMap[phrase];
        html = html.replace(new RegExp(escapeRx(phrase), 'g'), (m) => wrapRef(m, t[0], t[1] || ''));
      }
    }
    return html;
  }
  function sectionByNumber(tabId, n) {
    if (!currentReport) return '';
    const target = String(parseInt(n, 10));
    const s = getSectionsCached(currentReport, tabId).find(x => x.num && String(parseInt(x.num, 10)) === target);
    return s ? s.id : '';
  }
  function followRef(el) {
    const tab = el.dataset.rt;
    const sec = el.dataset.rs || (el.dataset.rn ? sectionByNumber(tab, el.dataset.rn) : '');
    jumpTo(currentReport ? currentReport.id : null, tab, sec);
  }
 
  // ── дерево в левой панели: активный отчёт разворачивается в вкладки → секции ──
  // Активная вкладка развёрнута, остальные свёрнуты. Клик по секции = jumpTo.
  // Для наблюдений в строке секции показываем DAY → список сам собой таймлайн.
  function renderTree() {
    document.querySelectorAll('.report-tree').forEach(t => t.remove());
    if (!currentReport) return;
    const entry = document.getElementById('entry-' + currentReport.id);
    if (!entry) return;                                    // активный отчёт вне текущего фильтра/языка
    const tree = document.createElement('div');
    tree.className = 'report-tree';
    currentReport.tabs.forEach(tab => {
      const isActive = tab.id === currentTabId;
      const th = document.createElement('div');
      th.className = 'tree-tab' + (isActive ? ' active' : '');
      th.textContent = tabLabelClean(tab.label);
      th.onclick = () => switchTab(currentReport, tab.id);
      tree.appendChild(th);
      if (isActive) {
        const wrap = document.createElement('div');
        wrap.className = 'tree-secs';
        getSectionsCached(currentReport, tab.id).forEach(s => {
          const prefix = secPrefix(s);
          const sr = document.createElement('div');
          sr.className = 'tree-sec';
          sr.dataset.sec = s.id;
          sr.textContent = s.title ? (prefix + ' · ' + s.title) : prefix;
          sr.title = s.title || prefix;                    // полный текст в тултипе, CSS клипует
          sr.onclick = (e) => { e.stopPropagation(); jumpTo(currentReport.id, tab.id, s.id); };
          wrap.appendChild(sr);
        });
        tree.appendChild(wrap);
      }
    });
    entry.after(tree);
    highlightTreeSection();
  }
  function highlightTreeSection() {
    const secs = currentReport ? getSectionsCached(currentReport, currentTabId) : [];
    const idx = currentSectionIndex();
    const curId = (idx >= 0 && secs[idx]) ? secs[idx].id : null;
    document.querySelectorAll('.tree-sec').forEach(el => el.classList.toggle('here', el.dataset.sec === curId));
  }
 
  function injectNavCSS() {
    if (document.getElementById('nav-tree-css')) return;
    const st = document.createElement('style');
    st.id = 'nav-tree-css';
    st.textContent = `
      .report-tree{ margin:-2px 0 8px; border-left:1px solid var(--border); }
      .tree-tab{ padding:4px 10px; font-size:9px; letter-spacing:0.08em; color:var(--dim);
                 cursor:pointer; text-transform:uppercase; transition:color .12s, background .12s; }
      .tree-tab:hover{ color:var(--g); background:rgba(0,255,136,0.05); }
      .tree-tab.active{ color:var(--b); }
      .tree-sec{ padding:3px 10px 3px 22px; font-size:9px; color:var(--dimmer); cursor:pointer;
                 white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
                 border-left:2px solid transparent; transition:color .12s, background .12s; }
      .tree-sec:hover{ color:var(--g); background:rgba(0,255,136,0.05); }
      .tree-sec.here{ color:var(--b); border-left-color:var(--b); background:rgba(0,180,255,0.05); }
 
      /* ── overlay archive map (фаза 4) ── */
      #archive-map{ position:fixed; inset:0; z-index:2147482000; display:flex;
        background:rgba(2,10,7,0.96); opacity:0; transition:opacity .2s ease; }
      #archive-map.show{ opacity:1; }
      /* ── CRT-оформление карты: шум / скан-линии / ТВ-виньетка / глитч (как на сайте) ── */
      #archive-map .amap-fx{ position:absolute; inset:0; pointer-events:none; }
      #archive-map .amap-fx-noise{ z-index:60; opacity:0.03; mix-blend-mode:screen;
        background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        animation:amapNoise .15s steps(1) infinite; }
      @keyframes amapNoise{ 0%{transform:translate(0,0)} 20%{transform:translate(-2px,1px)} 40%{transform:translate(1px,-1px)} 60%{transform:translate(-1px,2px)} 80%{transform:translate(2px,-2px)} 100%{transform:translate(0,0)} }
      #archive-map .amap-fx-scan{ z-index:61; background:repeating-linear-gradient(to bottom, transparent 0, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px); }
      #archive-map .amap-fx-flicker{ z-index:61; background:rgba(0,255,136,0.01); animation:amapFlicker 5s infinite steps(1); }
      @keyframes amapFlicker{ 0%,100%{opacity:1} 48%{opacity:1} 49%{opacity:.6} 50%{opacity:1} 74%{opacity:1} 75%{opacity:.78} 76%{opacity:1} }
      #archive-map .amap-fx-vignette{ z-index:62; background:radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.7) 100%); }
      #archive-map .amap-fx-glitch{ z-index:63; opacity:0; mix-blend-mode:hard-light;
        background:repeating-linear-gradient(to bottom, rgba(0,255,136,0.025) 0px, rgba(0,150,200,0.02) 1px, rgba(40,40,40,0.5) 2px, rgba(255,34,68,0.025) 3px, rgba(40,40,40,0.5) 4px);
        animation:amapGlitch 6s infinite steps(1); }
      @keyframes amapGlitch{
        0%,7%,100%{opacity:0; transform:translate(0,0)}
        8%{opacity:1; transform:translate(-5px,2px)} 9%{opacity:0; transform:translate(5px,-2px)}
        41%{opacity:0} 42%{opacity:1; transform:translate(4px,1px)} 43%{opacity:0}
        74%{opacity:0} 75%{opacity:1; transform:translate(-3px,-1px)} 76%{opacity:0} }
      /* тонкие зелёные ползунки карты вместо серых дефолтных (Firefox + webkit) */
      .amap-timeline, .amap-grid, .amap-col{ scrollbar-width:thin; scrollbar-color:var(--dimmer) var(--bg); }
      .amap-timeline::-webkit-scrollbar, .amap-grid::-webkit-scrollbar, .amap-col::-webkit-scrollbar{ width:3px; height:3px; }
      .amap-timeline::-webkit-scrollbar-thumb, .amap-grid::-webkit-scrollbar-thumb, .amap-col::-webkit-scrollbar-thumb{ background:var(--dimmer); }
      .amap-timeline::-webkit-scrollbar-track, .amap-grid::-webkit-scrollbar-track, .amap-col::-webkit-scrollbar-track{ background:var(--bg2); }
      @media (prefers-reduced-motion: reduce){
        #archive-map .amap-fx-noise, #archive-map .amap-fx-glitch, #archive-map .amap-fx-flicker{ animation:none; }
        #archive-map .amap-fx-glitch{ opacity:0; }
      }
      .amap-wrap{ margin:auto; width:min(1100px,94vw); height:min(88vh,860px);
        display:flex; flex-direction:column; border:1px solid var(--border);
        background:var(--bg2); box-shadow:0 0 44px rgba(0,180,255,0.10); }
      .amap-head{ display:flex; justify-content:space-between; align-items:center;
        padding:10px 14px; border-bottom:1px solid var(--border); }
      .amap-title{ color:var(--b); font-size:12px; letter-spacing:0.14em; }
      .amap-esc{ color:var(--dim); font-size:9px; cursor:pointer; letter-spacing:0.1em; }
      .amap-esc:hover{ color:var(--g); }
      .amap-reps{ display:flex; gap:2px; padding:6px 14px; border-bottom:1px solid var(--border); flex-wrap:wrap; }
      .amap-rep{ padding:3px 10px; font-size:9px; color:var(--dim); cursor:pointer; border:1px solid transparent; }
      .amap-rep:hover{ color:var(--g); }
      .amap-rep.active{ color:var(--b); border-color:var(--border); }
      .amap-body{ flex:1; display:flex; min-height:0; }
      .amap-col-h{ position:sticky; top:0; background:var(--bg2); padding:7px 12px;
        font-size:9px; letter-spacing:0.12em; color:var(--dimmer); border-bottom:1px solid var(--border); }
      .amap-timeline{ width:230px; flex-shrink:0; border-right:1px solid var(--border);
        overflow-y:auto; padding-bottom:18px; }
      .amap-day{ padding:5px 12px; font-size:9px; color:var(--dim); cursor:pointer;
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
      .amap-day:hover{ color:var(--g); background:rgba(0,255,136,0.05); }
      .amap-daynum{ color:var(--b); }
      .amap-grid{ flex:1; display:flex; overflow-x:auto; overflow-y:hidden; }
      .amap-col{ min-width:210px; max-width:270px; flex:1 0 auto; border-right:1px solid var(--border); overflow-y:auto; }
      .amap-tab{ color:var(--b); cursor:pointer; text-transform:uppercase; }
      .amap-tab:hover{ color:var(--g); }
      .amap-sec{ padding:5px 12px; font-size:9px; color:var(--dimmer); cursor:pointer;
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis; border-left:2px solid transparent; }
      .amap-sec:hover{ color:var(--g); background:rgba(0,255,136,0.05); border-left-color:var(--g); }
      /* угловая кнопка вызова карты (для мыши; клавиша \` — для клавиатуры) */
      #map-fab{ position:fixed; right:12px; bottom:34px; z-index:9000; font-size:9px;
        letter-spacing:0.1em; color:var(--dim); border:1px solid var(--border);
        background:var(--bg2); padding:5px 9px; cursor:pointer; user-select:none; transition:color .12s,border-color .12s; }
      #map-fab:hover{ color:var(--b); border-color:var(--b); }
      /* кросс-ссылки Коко в тексте */
      .r-ref{ color:var(--b); cursor:pointer; border-bottom:1px dotted var(--b); transition:color .12s, background .12s, border-color .12s; }
      .r-ref:hover{ color:var(--g); border-bottom-color:var(--g); background:rgba(0,180,255,0.10); }
      .r-ref:focus{ outline:1px solid var(--b); outline-offset:2px; }
      /* фаза 6: реплика СОКИ при прыжке */
      #soca-jump{ position:fixed; left:50%; bottom:52px; transform:translateX(-50%) translateY(8px);
        z-index:9500; max-width:min(520px,86vw); padding:7px 14px; font-size:10px; letter-spacing:0.03em;
        color:var(--g); background:rgba(4,16,11,0.94); border:1px solid var(--border); border-left:2px solid var(--g);
        opacity:0; pointer-events:none; transition:opacity .3s ease, transform .3s ease; }
      #soca-jump.show{ opacity:1; transform:translateX(-50%) translateY(0); }
      #soca-jump .sj-tag{ color:var(--b); }
    `;
    document.head.appendChild(st);
  }
 
  // ── OVERLAY ARCHIVE MAP (фаза 4) ──────────
  // Полноэкранная сетка отчёт → вкладки(колонки) → секции + DAY-таймлайн слева.
  // Любой клик = jumpTo + закрытие. Открытие по клавише ` или угловой кнопке.
  let mapEl = null;
  function reportForMap() { return currentReport || visibleReports()[0] || null; }
 
  function buildMapContent(r) {
    const wrap = document.createElement('div'); wrap.className = 'amap-wrap';
 
    const head = document.createElement('div'); head.className = 'amap-head';
    const title = document.createElement('span'); title.className = 'amap-title'; title.textContent = '◈ ARCHIVE MAP';
    const esc = document.createElement('span'); esc.className = 'amap-esc'; esc.textContent = '[ esc ]';
    esc.onclick = closeMap;
    head.appendChild(title); head.appendChild(esc); wrap.appendChild(head);
 
    const reps = visibleReports();
    if (reps.length > 1) {
      const sel = document.createElement('div'); sel.className = 'amap-reps';
      reps.forEach(rep => {
        const b = document.createElement('div');
        b.className = 'amap-rep' + (rep.id === r.id ? ' active' : '');
        b.textContent = rep.title;
        b.onclick = () => refocusMap(rep);
        sel.appendChild(b);
      });
      wrap.appendChild(sel);
    }
 
    const body = document.createElement('div'); body.className = 'amap-body';
 
    // таймлайн: все секции с DAY, по всем вкладкам, хронологически
    const days = [];
    r.tabs.forEach(tab => getSectionsCached(r, tab.id).forEach(s => { if (s.day) days.push({ tabId: tab.id, s }); }));
    days.sort((a, b) => a.s.day.localeCompare(b.s.day));
    if (days.length) {
      const rail = document.createElement('div'); rail.className = 'amap-timeline';
      const rh = document.createElement('div'); rh.className = 'amap-col-h'; rh.textContent = 'TIMELINE'; rail.appendChild(rh);
      days.forEach(({ tabId, s }) => {
        const d = document.createElement('div'); d.className = 'amap-day'; d.title = s.title || '';
        const dn = document.createElement('span'); dn.className = 'amap-daynum'; dn.textContent = 'DAY ' + s.day;
        d.appendChild(dn); d.appendChild(document.createTextNode(' ' + (s.title || '')));
        d.onclick = () => { jumpTo(r.id, tabId, s.id); closeMap(); };
        rail.appendChild(d);
      });
      body.appendChild(rail);
    }
 
    // сетка: вкладки-колонки, в каждой — её секции
    const grid = document.createElement('div'); grid.className = 'amap-grid';
    r.tabs.forEach(tab => {
      const col = document.createElement('div'); col.className = 'amap-col';
      const h = document.createElement('div'); h.className = 'amap-col-h amap-tab';
      h.textContent = tabLabelClean(tab.label);
      h.onclick = () => { jumpTo(r.id, tab.id); closeMap(); };
      col.appendChild(h);
      getSectionsCached(r, tab.id).forEach(s => {
        const prefix = secPrefix(s);
        const chip = document.createElement('div'); chip.className = 'amap-sec';
        chip.textContent = s.title ? (prefix + ' · ' + s.title) : prefix;
        chip.title = s.title || prefix;
        chip.onclick = () => { jumpTo(r.id, tab.id, s.id); closeMap(); };
        col.appendChild(chip);
      });
      grid.appendChild(col);
    });
    body.appendChild(grid);
 
    wrap.appendChild(body);
    return wrap;
  }
 
  function openMap(focus) {
    if (mapEl) return;
    const r = focus || reportForMap();
    if (!r) return;
    mapEl = document.createElement('div');
    mapEl.id = 'archive-map';
    mapEl.appendChild(buildMapContent(r));
    mapEl.insertAdjacentHTML('beforeend',                    // CRT-слои карты (pointer-events:none)
      '<div class="amap-fx amap-fx-noise"></div>' +
      '<div class="amap-fx amap-fx-scan"></div>' +
      '<div class="amap-fx amap-fx-flicker"></div>' +
      '<div class="amap-fx amap-fx-vignette"></div>' +
      '<div class="amap-fx amap-fx-glitch"></div>');
    mapEl.addEventListener('click', (e) => { if (e.target === mapEl) closeMap(); }); // клик по фону
    document.body.appendChild(mapEl);
    requestAnimationFrame(() => mapEl && mapEl.classList.add('show'));
  }
  function refocusMap(rep) {
    if (mapEl && mapEl.firstChild) mapEl.firstChild.replaceWith(buildMapContent(rep));
  }
  function closeMap() {
    if (!mapEl) return;
    const el = mapEl; mapEl = null;
    el.classList.remove('show');
    setTimeout(() => el.remove(), 220);
  }
 
  // ─────────────────────────────────────────
  //  CLOCK (topbar)
  // ─────────────────────────────────────────
  function pad(n) { return String(n).padStart(2, '0'); }
  function updateClock() {
    const n = new Date(), M = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const s = new Date(n); s.setFullYear(n.getFullYear() - 52);
    const el = document.getElementById('clock');
    if (el) el.textContent = `PD-04 // ${pad(s.getDate())} ${M[s.getMonth()]} ${s.getFullYear()} // ${pad(n.getHours())}:${pad(n.getMinutes())}:${pad(n.getSeconds())}`;
  }
 
  // ─────────────────────────────────────────
  //  PHOTO MODAL
  // ─────────────────────────────────────────
  function openPhotoModal(src, title) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalPhotoImg');
    const modalTitle = document.getElementById('modal-title');
    const modalRecord = document.getElementById('modal-recordid');
    if (!modal || !modalImg) return;
    modalImg.src = src;
    if (modalTitle) modalTitle.textContent = '// ' + (title || 'PHOTO');
    if (modalRecord) modalRecord.textContent = '// FILE: ' + src;
    modal.style.display = 'flex';
    const modalContent = document.querySelector('.photo-modal-content');
    if (modalContent) {
      modalContent.style.animation = 'modalGlitch 0.3s';
      setTimeout(() => { modalContent.style.animation = ''; }, 300);
    }
  }
  function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    if (!modal) return;
    modal.style.display = 'none';
  }
 
  // ─────────────────────────────────────────
  //  GLITCHING FAVICON (gear, transparent bg) — exact copy from main site
  // ─────────────────────────────────────────
  const faviconCache = new Map();   // toDataURL() дорогой — держим готовые варианты
  function setFavicon(symbol, rotate = 0) {
    const key = symbol + '|' + Math.round(rotate * 2) / 2;
    const cached = faviconCache.get(key);
    if (cached) { applyFavicon(cached); return; }
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, 64, 64);
    const centerX = 32, centerY = 32;
    ctx.save();
    if (rotate !== 0) {
      ctx.translate(centerX, centerY);
      ctx.rotate(rotate * Math.PI / 180);
      ctx.translate(-centerX, -centerY);
    }
    ctx.font = '48px "VT323", "Share Tech Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const gradient = ctx.createLinearGradient(16, 16, 48, 48);
    gradient.addColorStop(0, '#00ff88');
    gradient.addColorStop(0.6, '#00ffcc');
    gradient.addColorStop(1, '#0088ff');
    ctx.fillStyle = gradient;
    ctx.fillText(symbol, centerX, centerY);
    ctx.restore();
    const url = canvas.toDataURL('image/png');
    if (faviconCache.size < 40) faviconCache.set(key, url);
    applyFavicon(url);
  }
  function applyFavicon(url) {
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'shortcut icon';
      document.head.appendChild(link);
    }
    link.href = url;
  }

  //  SCAN SWEEP FAVICON — вращающийся радар (в стиле reports)
  //  Кадры кэшируются по углу: после первого оборота toDataURL больше не зовётся.
  function drawScanSweep(ctx, angleDeg) {
    ctx.clearRect(0, 0, 64, 64);
    const cx = 32, cy = 32, R = 26;
    ctx.strokeStyle = 'rgba(0,255,136,0.5)';  ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = 'rgba(0,255,136,0.28)'; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(cx, cy, R * 0.55, 0, Math.PI * 2); ctx.stroke();
    const a = angleDeg * Math.PI / 180, spread = 0.7;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
    g.addColorStop(0, 'rgba(0,255,136,0.55)'); g.addColorStop(1, 'rgba(0,255,136,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, R, a - spread, a); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#00ffcc'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R); ctx.stroke();
    ctx.fillStyle = '#00ff88';
    ctx.beginPath(); ctx.arc(cx, cy, 3.2, 0, Math.PI * 2); ctx.fill();
  }
  function setScanFavicon(angleDeg) {
    const key = 'scan|' + Math.round(angleDeg);
    const cached = faviconCache.get(key);
    if (cached) { applyFavicon(cached); return; }
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    drawScanSweep(ctx, angleDeg);
    const url = canvas.toDataURL('image/png');
    if (faviconCache.size < 60) faviconCache.set(key, url);
    applyFavicon(url);
  }
  function startScanSweep() {
    let ang = 0;
    const STEP = 45;                    // 12 кадров на оборот
    setInterval(() => {
      if (document.hidden || !fxOn('screen')) return;   // пауза во вкладке/при выкл. эффектах
      ang = (ang + STEP) % 360;
      setScanFavicon(ang);
    }, 250);                            // ~7 кадров/сек — «сканирующий» темп
    setScanFavicon(0);                  // первый кадр сразу
  }

  function glitchFavicon() {
    const effect = Math.random();
    if (effect < 0.7) { setFavicon('⛭'); }
    else if (effect < 0.85) { setFavicon('⚙'); }
    else if (effect < 0.95) {
      const glitchSymbols = ['⛭', '⚙', '⛭', '⛭'];
      const randomSymbol = glitchSymbols[Math.floor(Math.random() * glitchSymbols.length)];
      setFavicon(randomSymbol, Math.random() * 10 - 5);
    } else {
      setFavicon('█');
      setTimeout(() => setFavicon('⛭'), 80);
      setTimeout(() => setFavicon('⚙'), 160);
      setTimeout(() => setFavicon('⛭'), 240);
      return;
    }
  }
 
  // ─────────────────────────────────────────
  //  GEAR-LOGO GLITCHES (exact copy from main site)
  // ─────────────────────────────────────────
  function glitchGear(gearLogo) {
    if (!gearLogo) return;
    if (Math.random() < 0.2) {
      gearLogo.classList.add('glitch-instant');
      setTimeout(() => { gearLogo.classList.remove('glitch-instant'); }, 200);
    }
    if (Math.random() < 0.05) {
      gearLogo.classList.add('critical-glitch');
      setTimeout(() => { gearLogo.classList.remove('critical-glitch'); }, 400);
    }
  }
 
  // ─────────────────────────────────────────
  //  WORD-LEVEL CORRUPTION in the open report
  // ─────────────────────────────────────────
  const corruptCharsRep = '█░▒▓■□▪▫';
  function corruptTextRep(str, intensity = 0.35) {
    return str.split('').map(c => (c !== ' ' && Math.random() < intensity) ? corruptCharsRep[Math.floor(Math.random() * corruptCharsRep.length)] : c).join('');
  }
  // Список «листьев» пересобирается только при смене вкладки/отчёта,
  // а не каждые 1.6 с. Раньше обход шёл по всем вкладкам сразу, включая скрытые.
  let glitchLeafs = null;
  function invalidateGlitchCache() { glitchLeafs = null; }
 
  function collectGlitchLeafs() {
    const active = document.querySelector('#report-viewer .tab-content.active');
    if (!active) return [];
    const out = [];
    active.querySelectorAll('.r-text, .r-soca, .sticky').forEach(block => {
      block.querySelectorAll('*').forEach(n => {
        if (n.children.length === 0 && n.textContent.trim().split(/\s+/).length >= 3) out.push(n);
      });
      if (block.children.length === 0 && block.textContent.trim().split(/\s+/).length >= 3) out.push(block);
    });
    return out;
  }
 
  function glitchRandomWords() {
    if (document.hidden) return;
    if (!fxOn('text')) return;
    if (!glitchLeafs) glitchLeafs = collectGlitchLeafs();
    if (!glitchLeafs.length) return;
    // выбираем узел, который сейчас не занят анимацией и всё ещё в документе
    let el = null;
    for (let tries = 0; tries < 6; tries++) {
      const cand = glitchLeafs[Math.floor(Math.random() * glitchLeafs.length)];
      if (cand && cand.isConnected && !cand.dataset.glitching) { el = cand; break; }
    }
    if (!el) return;
    const words = el.textContent.split(/(\s+)/);
    const wordIdxs = words.map((w, i) => i).filter(i => words[i].trim().length > 2);
    if (!wordIdxs.length) return;
    const pickCount = Math.random() < 0.5 ? 1 : 2;
    const picked = new Set();
    for (let k = 0; k < pickCount; k++) picked.add(wordIdxs[Math.floor(Math.random() * wordIdxs.length)]);
    el.dataset.glitching = '1';
    const original = el.textContent;
    const styles = ['c1', 'c2', 'c3', 'heavy-corrupt'];
    const html = words.map((w, i) => {
      if (picked.has(i)) {
        const cls = styles[Math.floor(Math.random() * styles.length)] + ' word-flash';
        return `<span class="${cls}">${corruptTextRep(w, 0.4)}</span>`;
      }
      return w;
    }).join('');
    el.innerHTML = html;
    setTimeout(() => { el.textContent = original; delete el.dataset.glitching; }, 420);
  }
 
  // ─────────────────────────────────────────
  //  INIT — everything that touches the DOM
  // ─────────────────────────────────────────
  function init() {
    inited = true;
 
    injectNavCSS();
 
    // clock
    updateClock(); setInterval(updateClock, 1000);
 
    // index (only current-language reports)
    renderIndex(visibleReports());
 
    // photo modal — Escape / backdrop / delegated photo clicks
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        const modal = document.getElementById('photoModal');
        if (modal && modal.style.display === 'flex') closePhotoModal();
      }
    });
    document.getElementById('photoModal')?.addEventListener('click', function (e) {
      if (e.target === this) closePhotoModal();
    });
    document.getElementById('report-viewer')?.addEventListener('click', function (e) {
      const refEl = e.target.closest('.r-ref');
      if (refEl) { e.stopPropagation(); followRef(refEl); return; }
      const img = e.target.closest('img');
      if (!img) return;
      if (img.style.display !== 'block') return; // photo not loaded yet — placeholder shown, no click
      e.stopPropagation();
      const wrap = img.closest('div[style*="border:1px solid var(--border)"]');
      const caption = wrap?.nextElementSibling?.textContent?.trim();
      openPhotoModal(img.getAttribute('src'), caption || 'PHOTO');
    });
 
    // живые хлебные крошки: обновляем текущую секцию при прокрутке чтения (rAF-троттлинг)
    const rvScroll = document.getElementById('report-viewer');
    if (rvScroll) {
      let raf = 0;
      rvScroll.addEventListener('scroll', () => {
        if (raf) return;
        raf = requestAnimationFrame(() => { raf = 0; updateBreadcrumb(); highlightTreeSection(); });
      }, { passive: true });
    }
 
    // archive map: клавиша ` открывает/закрывает, Esc закрывает; + угловая кнопка для мыши
    document.addEventListener('keydown', (e) => {
      const t = e.target;
      const typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
      if (!typing && (e.key === '`' || e.key === '~')) { e.preventDefault(); mapEl ? closeMap() : openMap(); return; }
      if (e.key === 'Escape' && mapEl) { e.stopPropagation(); closeMap(); }
    });
    const fab = document.createElement('div');
    fab.id = 'map-fab'; fab.textContent = '◈ MAP `';
    fab.title = 'Archive map (клавиша  ` )';
    fab.onclick = () => (mapEl ? closeMap() : openMap());
    document.body.appendChild(fab);
 
    // клавиатурный доступ к кросс-ссылкам (Enter/Space на сфокусированной ссылке)
    document.addEventListener('keydown', (e) => {
      const el = e.target;
      if ((e.key === 'Enter' || e.key === ' ') && el && el.classList && el.classList.contains('r-ref')) {
        e.preventDefault(); followRef(el);
      }
    });
 
    // favicon - вращающийся скан-луч
    startScanSweep();
 
    // gear-logo glitch
    const gearLogo = document.querySelector('.gear-logo');
    setInterval(() => { if (fxOn('screen')) glitchGear(gearLogo); }, 7000);
 
    // full-screen jolt / flash
    const screenFlashEl = document.getElementById('screenGlitchFlash');
    setInterval(() => {
      if (document.hidden || !fxOn('screen')) return;
      if (Math.random() < 0.18) {
        document.body.style.transform = `translateX(${(Math.random() - 0.5) * 5}px) skewX(${(Math.random() - 0.5) * 0.6}deg)`;
        if (screenFlashEl) {
          screenFlashEl.classList.remove('active');
          void screenFlashEl.offsetWidth;
          screenFlashEl.classList.add('active');
        }
        setTimeout(() => { document.body.style.transform = ''; }, 90);
      }
    }, 2600);
 
    // word corruption
    setInterval(glitchRandomWords, 1600);
    setInterval(() => { if (Math.random() < 0.3) glitchRandomWords(); }, 2900);
 
    // occasional signal drop (whole page dims briefly)
    setInterval(() => {
      if (document.hidden || !fxOn('screen')) return;
      if (Math.random() < 0.06) {
        document.body.style.filter = 'brightness(0.4) contrast(1.3)';
        setTimeout(() => { document.body.style.filter = ''; }, 60);
      }
    }, 6000);
  }
 
  // ─────────────────────────────────────────
  //  LANGUAGE SWITCH (called from reports-settings.js)
  // ─────────────────────────────────────────
  function getReportLang() { return currentLang; }
 
  // Запоминаем, на какой СЕКЦИИ (заголовке .r-heading) сейчас читатель, чтобы
  // после смены языка вернуть его туда же, а не в начало вкладки. Секции в ru/en
  // параллельны (это гарантирует verify-reports), поэтому маппим по индексу.
  function headTopIn(rv, el) {
    return el.getBoundingClientRect().top - rv.getBoundingClientRect().top + rv.scrollTop;
  }
  function captureScrollSection() {
    const rv = document.getElementById('report-viewer');
    const active = rv && rv.querySelector('.tab-content.active');
    if (!rv || !active) return null;
    const heads = active.querySelectorAll('.r-heading, .r-sep');
    const y = rv.scrollTop;
    let index = -1;
    for (let i = 0; i < heads.length; i++) {
      if (headTopIn(rv, heads[i]) <= y + 12) index = i; else break;
    }
    return { index, ratio: rv.scrollHeight > 0 ? y / rv.scrollHeight : 0 };
  }
  function restoreScrollSection(sec) {
    if (!sec) return;
    const rv = document.getElementById('report-viewer');
    const active = rv && rv.querySelector('.tab-content.active');
    if (!rv || !active) return;
    const heads = active.querySelectorAll('.r-heading, .r-sep');
    if (sec.index >= 0 && heads[sec.index]) {
      rv.scrollTop = Math.max(0, headTopIn(rv, heads[sec.index]) - 8);
    } else {
      rv.scrollTop = (sec.ratio || 0) * rv.scrollHeight;   // до первого заголовка — по доле прокрутки
    }
  }
 
  function setReportLang(lang) {
    if (lang !== 'ru' && lang !== 'en') return;
    if (lang === currentLang) return;
 
    const openId = currentReport ? currentReport.id : null;
    const openTab = currentTabId;
    const sec = captureScrollSection();       // позиция ДО переключения
 
    currentLang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
 
    renderIndex(visibleReports());
 
    // Если отчёт был открыт — открываем его пару на новом языке, на той же вкладке,
    // и возвращаем читателя на ту же секцию.
    if (openId) {
      const paired = REPORTS.find(x => x.id === openId && (x.lang === currentLang || !x.lang));
      if (paired) {
        openReport(paired);
        if (openTab && paired.tabs.some(t => t.id === openTab)) switchTab(paired, openTab);
        restoreScrollSection(sec);
      }
      // paired не найден = перевод не загружен/не существует. Крючок для будущей
      // ленивой подгрузки: здесь можно догрузить файл и повторить. Пока — оставляем
      // текущий вид, чтобы ничего не мигало.
    }
  }
 
  // ─────────────────────────────────────────
  //  EXPOSE globals used by report files + inline handlers
  // ─────────────────────────────────────────
  window.registerReport = registerReport;
  window.ph = ph;
  window.filterReports = filterReports;
  window.openPhotoModal = openPhotoModal;
  window.closePhotoModal = closePhotoModal;
  window.getReportLang = getReportLang;
  window.setReportLang = setReportLang;
  window.getSections = getSections;        // фаза 3/4: дерево и карта
  window.jumpToSection = jumpTo;           // общий вход перехода (дерево/карта/ссылки Коко)
  window.openArchiveMap = openMap;
  window.ref = ref;                        // фаза 5: ручной хелпер кросс-ссылок в шаблонах отчётов
 
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
 
})();
