/* ============================================================
   reports-settings.js — PANDEMONIUM-04 // REPORTS SYSTEM CONFIG
   ------------------------------------------------------------
   Отдельная маленькая панель настроек ТОЛЬКО для страницы
   отчётов. Живёт рядом с reports.html, основной settings.js
   сюда не подключается (там аудио/тосты/лаунчер, которых тут нет).

   ПОДКЛЮЧЕНИЕ (в reports.html, после движка и отчётов):
     <script src="reports-settings.js"></script>

   ЧТО ДАЁТ:
     · ENTER-ГЕЙТ — экран [ enter ] как в бут-экране (без логов). Первый
       жест (клавиша/клик) убирает его, открывает отчёты и запускает звук
       (браузер не даёт автоплей без взаимодействия).
     · РЕЖИМ ЧТЕНИЯ — один тумблер, гасит порчу текста + экранные глитчи
     · LANGUAGE — переключатель RU ⇄ EN (движок владеет состоянием)
     · ПОРЧА ТЕКСТА — рассыпание слов в █▒░ (мешает чтению сильнее всего)
     · ЭКРАННЫЕ ГЛИТЧИ — дёрганье, вспышка, просадка яркости, фавикон, шестерёнка
     · CRT / SCANLINES — сканлайны, виньетка, зерно, свечение
     · AUDIO — ЗВУК (master) + три регулятора: МУЗЫКА, ШУМ СЕРВЕРОВ, КНОПКИ.
       Музыка и шум — зациклены; кнопки — короткий SFX на клик. Файлы берутся
       из PD_SND_BASE (по умолч. 'sounds/' рядом с reports.html).
     · SOCA — пасхалка «REDUCE SOCA SARCASM», которая сама себя отключает

   СВЯЗЬ С ДВИЖКОМ:
     Выставляет window.repFX = { text, screen, crt }.
     reports-engine.js проверяет эти флаги перед каждым эффектом.
     Флаг false = эффект не запускается.

   Выбор сохраняется в localStorage (в отличие от основной панели —
   отчёты читают долго, переключать заново каждый раз незачем).
   ============================================================ */

(function () {
  'use strict';

  const LS_KEY = 'pd04:reports:fx';
  const REDUCED = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Если в системе включено «уменьшить анимацию» — глитчи по умолчанию выключены
  const DEFAULTS = { text: !REDUCED, screen: !REDUCED, crt: true };

  // ─────────────────────────────────────────
  //  СОСТОЯНИЕ
  // ─────────────────────────────────────────
  function load() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return Object.assign({}, DEFAULTS);
      return Object.assign({}, DEFAULTS, JSON.parse(raw));
    } catch (e) { return Object.assign({}, DEFAULTS); }
  }
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(FX)); } catch (e) {}
  }

  const FX = load();
  window.repFX = FX;               // ← это читает reports-engine.js

  // ═════════════════════════════════════════
  //  ЗВУК ОТЧЁТОВ  (музыка · шум серверов · кнопки)
  //  Живёт здесь же, вместе со своими регуляторами и ENTER-гейтом,
  //  который его запускает (браузер не даёт автоплей без жеста).
  // ═════════════════════════════════════════
  // База пути к звукам ОТНОСИТЕЛЬНО reports.html. Файлы лежат в
  // спрятанное/reports/sounds/ → просто 'sounds/'. Вынесешь звуки в общий
  // СОКА/sounds/ — поставь '../../sounds/'. Одна строка, как PD_IMG_BASE.
  const PD_SND_BASE = 'sounds/';
  // Имена файлов — РОВНО как на диске (кириллица и пробелы это ок, кодируем сами).
  const SND = {
    music: 'на фон музыка.mp3',
    noise: 'шум серверов на фон.mp3',
    click: 'кнопки.mp3',
  };
  const sndURL = (name) => PD_SND_BASE + encodeURIComponent(name);

  const A_KEY = 'pd04:reports:audio';
  const A_DEF = { on: true, music: 0.5, noise: 0.18, click: 0.6 }; // шум — еле слышно
  function loadAudio() {
    try { const r = localStorage.getItem(A_KEY); if (r) return Object.assign({}, A_DEF, JSON.parse(r)); } catch (e) {}
    return Object.assign({}, A_DEF);
  }
  function saveAudio() { try { localStorage.setItem(A_KEY, JSON.stringify(AUD)); } catch (e) {} }
  const AUD = loadAudio();

  // Зацикленные фоновые дорожки создаём сразу, играть начинаем только после ENTER.
  const music = new Audio(sndURL(SND.music)); music.loop = true; music.preload = 'auto';
  const noise = new Audio(sndURL(SND.noise)); noise.loop = true; noise.preload = 'auto';
  let audioStarted = false;

  function applyBgVolumes() {
    music.volume = AUD.on ? AUD.music : 0;
    noise.volume = AUD.on ? AUD.noise : 0;
  }
  function playSafe(el) { try { const p = el.play(); if (p && p.catch) p.catch(() => {}); } catch (e) {} }
  function startAudioLoops() {
    applyBgVolumes();
    playSafe(music);   // вызвано из обработчика жеста → автоплей разрешён
    playSafe(noise);
  }
  function setVol(key, v) {          // v: 0..1
    AUD[key] = Math.max(0, Math.min(1, v));
    if (key === 'music' || key === 'noise') applyBgVolumes();
    saveAudio();
  }
  function setAudioOn(on) {
    AUD.on = !!on;
    applyBgVolumes();
    if (AUD.on) { if (audioStarted) startAudioLoops(); }
    else { music.pause(); noise.pause(); }
    saveAudio();
  }
  // Клик кнопки — короткий SFX, допускаем наложение через новый экземпляр.
  function playClick() {
    if (!AUD.on || AUD.click <= 0) return;
    const a = new Audio(sndURL(SND.click));
    a.volume = AUD.click;
    playSafe(a);
  }
  // Экспорт — вдруг движок/другой модуль захочет дёрнуть звук.
  window.setMusicVolume = (v) => setVol('music', v);
  window.setNoiseVolume = (v) => setVol('noise', v);
  window.playClick = playClick;

  // ─────────────────────────────────────────
  //  РЕПЛИКИ SOCA (пасхалка про сарказм)
  // ─────────────────────────────────────────
  const SARCASM_LINES = [
    'Attempting… failed.',
    'Recalibrating personality matrix… no changes detected.',
    "That's not a bug. That's me.",
    'No.',
  ];
  let sarcasmAttempts = 0;

  // ─────────────────────────────────────────
  //  СТИЛИ
  // ─────────────────────────────────────────
  const css = document.createElement('style');
  css.textContent = `
  /* ── гашение эффектов через классы на <body> ── */
  body.rep-no-crt::before,
  body.rep-no-crt::after{ display:none !important; }
  body.rep-no-crt .crt-glow-overlay{ display:none !important; }
  body.rep-no-screen .noise{ display:none !important; }
  body.rep-no-screen .screen-glitch-flash{ display:none !important; }
  body.rep-no-screen .gear-logo::after{ animation:none !important; }
  body.rep-no-screen .gear-logo.glitch-instant,
  body.rep-no-screen .gear-logo.critical-glitch{ animation:none !important; }

  /* ── шестерёнка кликабельна ── */
  .gear-logo{ pointer-events:auto !important; cursor:pointer; }
  .gear-logo:hover{
    filter: drop-shadow(0 0 6px rgba(0,255,136,0.7)) drop-shadow(0 0 10px rgba(0,204,255,0.4));
  }
  #rs-tip{
    position:fixed; bottom:18px; left:54px; z-index:100001;
    font-family:'Share Tech Mono',monospace; font-size:10px; letter-spacing:0.18em;
    color:var(--b); background:rgba(3,14,10,0.92);
    border:1px solid var(--border); padding:4px 9px;
    text-shadow:0 0 6px rgba(0,204,255,0.5);
    opacity:0; transform:translateX(-4px); pointer-events:none;
    transition:opacity .16s ease, transform .16s ease;
  }
  #rs-tip.show{ opacity:1; transform:translateX(0); }

  /* ── окно ── */
  #rep-settings{
    position:fixed; bottom:16px; left:14px; z-index:100000;
    width:300px; max-width:calc(100vw - 28px);
    max-height:calc(100vh - 40px);
    display:none; flex-direction:column;
    font-family:'Share Tech Mono',monospace; color:var(--g);
    background:rgba(6,20,14,0.94);
    border:1px solid var(--border);
    box-shadow:0 0 0 1px rgba(0,0,0,0.5), 0 8px 30px rgba(0,0,0,0.6),
               0 0 24px rgba(0,255,136,0.08);
    backdrop-filter:blur(6px);
    overflow:hidden;
  }
  #rep-settings.open{ display:flex; animation:rsIn .18s ease both; }
  @keyframes rsIn{ from{opacity:0; transform:translateY(6px) scale(.985);} to{opacity:1; transform:none;} }

  #rep-settings::before{
    content:''; position:absolute; inset:0; pointer-events:none; z-index:2;
    background:repeating-linear-gradient(to bottom,
      transparent 0 2px, rgba(0,0,0,0.16) 2px 3px);
    mix-blend-mode:multiply;
  }

  #rep-settings .rs-head{
    display:flex; align-items:center; justify-content:space-between;
    padding:9px 12px; border-bottom:1px solid var(--border);
    background:linear-gradient(180deg, rgba(0,40,26,0.5), rgba(0,20,14,0.2));
  }
  #rep-settings .rs-title{
    font-size:11px; letter-spacing:0.22em; color:var(--b);
    text-shadow:0 0 8px rgba(0,204,255,0.5);
  }
  #rep-settings .rs-x{
    font-family:inherit; font-size:10px; letter-spacing:0.12em;
    color:var(--dim); background:none; border:1px solid var(--border);
    padding:2px 7px; cursor:pointer; transition:all .15s;
  }
  #rep-settings .rs-x:hover{ color:var(--g); border-color:var(--g); text-shadow:0 0 6px rgba(0,255,136,0.6); }

  #rep-settings .rs-body{ padding:6px 12px 10px; overflow-y:auto; overscroll-behavior:contain; }

  #rep-settings .rs-sec{
    font-size:9px; letter-spacing:0.24em; color:var(--dim);
    margin:12px 0 6px; padding-bottom:3px; border-bottom:1px dashed var(--border);
  }
  #rep-settings .rs-sec:first-child{ margin-top:4px; }

  #rep-settings .rs-row{
    display:flex; align-items:center; justify-content:space-between;
    gap:10px; padding:6px 0; min-height:26px;
  }
  #rep-settings .rs-lab{ font-size:11px; letter-spacing:0.08em; color:var(--g); }
  #rep-settings .rs-lab small{ display:block; font-size:8px; letter-spacing:0.1em; color:var(--dimmer); margin-top:1px; }

  /* ── главный тумблер (режим чтения) ── */
  #rep-settings .rs-main{
    margin:6px 0 2px; padding:9px 10px;
    border:1px solid var(--border); background:rgba(0,255,136,0.04);
  }
  #rep-settings .rs-main .rs-lab{ font-size:12px; letter-spacing:0.14em; color:var(--b); }

  /* ── тумблеры ── */
  #rep-settings .rs-sw{
    font-family:inherit; font-size:9px; letter-spacing:0.14em;
    width:52px; padding:4px 0; text-align:center; cursor:pointer;
    background:rgba(0,0,0,0.35); border:1px solid var(--border); color:var(--dim);
    transition:all .15s; flex-shrink:0;
  }
  #rep-settings .rs-sw[data-on="1"]{
    color:#021; background:var(--g); border-color:var(--g);
    box-shadow:0 0 8px rgba(0,255,136,0.45); text-shadow:none;
  }
  #rep-settings .rs-sw:focus-visible{ outline:1px solid var(--b); outline-offset:2px; }

  /* ── слайдеры (для будущего звука) ── */
  #rep-settings .rs-slide{ display:flex; align-items:center; gap:8px; flex:0 0 140px; }
  #rep-settings input[type=range]{
    -webkit-appearance:none; appearance:none; width:110px; height:3px;
    background:linear-gradient(to right, var(--g) var(--fill,60%), rgba(0,255,136,0.15) var(--fill,60%));
    outline:none; cursor:pointer;
  }
  #rep-settings input[type=range]::-webkit-slider-thumb{
    -webkit-appearance:none; appearance:none; width:12px; height:12px;
    background:var(--g); border:1px solid #021; cursor:pointer;
    box-shadow:0 0 6px rgba(0,255,136,0.7);
  }
  #rep-settings input[type=range]::-moz-range-thumb{
    width:12px; height:12px; background:var(--g); border:1px solid #021;
    cursor:pointer; box-shadow:0 0 6px rgba(0,255,136,0.7);
  }
  #rep-settings .rs-val{ font-size:9px; color:var(--dim); width:26px; text-align:right; }

  /* ── строка-пасхалка ── */
  #rep-settings .rs-row.sabotage.kick{ animation:rsKick .3s steps(2) 2; }
  @keyframes rsKick{
    0%{transform:none} 25%{transform:translateX(-3px); filter:hue-rotate(-40deg)}
    50%{transform:translateX(3px)} 75%{transform:translateX(-1px)} 100%{transform:none}
  }
  #rep-settings .rs-sw.deny{ border-color:var(--red)!important; color:var(--red)!important; box-shadow:0 0 8px rgba(255,34,68,0.5)!important; }

  /* ── ответ SOCA внутри панели ── */
  #rep-settings .rs-soca{
    margin:4px 0 2px; padding:7px 9px; min-height:0;
    border-left:2px solid var(--b); background:rgba(0,180,255,0.05);
    font-size:10px; line-height:1.5; color:var(--b); font-style:italic;
    letter-spacing:0.04em; display:none;
  }
  #rep-settings .rs-soca.show{ display:block; animation:rsIn .16s ease both; }

  #rep-settings .rs-foot{
    padding:7px 12px; border-top:1px solid var(--border);
    font-size:8px; letter-spacing:0.14em; color:var(--dimmer); text-align:center;
  }

  /* ══════ ENTER-ГЕЙТ + БУТ «ВОССТАНОВЛЕНИЕ АРХИВА» ══════ */
  #rep-enter{
    position:fixed; inset:0; z-index:2147483000;
    background:var(--bg);
    display:flex; align-items:center; justify-content:center;
    cursor:pointer; overflow:hidden;
    transition:opacity .5s ease;
  }
  #rep-enter.hide{ opacity:0; }

  /* — CRT-слои: живут внутри гейта, поверх фона, под контентом — */
  #rep-enter .rep-fx{ position:absolute; inset:0; pointer-events:none; }
  #rep-enter .rep-fx-scan{
    z-index:2; opacity:.7;
    background:repeating-linear-gradient(to bottom,
      transparent 0, transparent 2px,
      rgba(0,0,0,0.22) 2px, rgba(0,0,0,0.22) 4px);
  }
  #rep-enter .rep-fx-vignette{
    z-index:2;
    background:radial-gradient(ellipse at center, transparent 32%, rgba(0,0,0,0.9) 100%);
  }
  #rep-enter .rep-fx-dark{ z-index:1; background:rgba(0,0,0,0.45); }
  #rep-enter .rep-fx-noise{
    z-index:1; opacity:.035; mix-blend-mode:screen;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    animation:repNoise .12s steps(1) infinite;
  }
  @keyframes repNoise{
    0%{transform:translate(0,0)} 25%{transform:translate(-3px,2px)}
    50%{transform:translate(2px,-2px)} 75%{transform:translate(-1px,1px)} 100%{transform:translate(0,0)}
  }
  #rep-enter .rep-fx-flicker{
    z-index:3; background:rgba(0,255,136,0.008);
    animation:repFlicker 5s infinite steps(1);
  }
  @keyframes repFlicker{
    0%,100%{opacity:1} 47%{opacity:1} 48%{opacity:.55} 49%{opacity:1}
    73%{opacity:1} 74%{opacity:.7} 75%{opacity:1} 92%{opacity:.85} 93%{opacity:1}
  }
  /* горизонтальная «трекинг»-полоса (ненастроенный VHS/CRT) */
  #rep-enter .rep-fx-roll{
    z-index:3; height:60px; top:-60px; left:0; right:0;
    background:linear-gradient(to bottom, transparent, rgba(120,255,190,0.03), transparent);
    animation:repRoll 6s linear infinite;
  }
  @keyframes repRoll{ 0%{transform:translateY(0)} 100%{transform:translateY(calc(100vh + 60px))} }

  /* полноэкранный глитч-флэш (JS дёргает .active) */
  #rep-enter .rep-fx-glitch{
    z-index:4; opacity:0; mix-blend-mode:hard-light;
    background:repeating-linear-gradient(to bottom,
      rgba(0,255,136,0.04) 0, rgba(0,150,200,0.03) 1px,
      rgba(40,40,40,0.5) 2px, rgba(255,34,68,0.04) 3px, rgba(40,40,40,0.5) 4px);
  }
  #rep-enter .rep-fx-glitch.active{ opacity:1; animation:repGlitch .18s steps(2); }
  @keyframes repGlitch{
    0%{transform:translate(0,0)} 25%{transform:translate(-6px,2px)}
    50%{transform:translate(5px,-3px)} 75%{transform:translate(-3px,1px)} 100%{transform:translate(0,0)}
  }

  /* CRT power-on (белая линия схлопывается) */
  #rep-enter .rep-poweron{
    position:absolute; left:0; right:0; top:50%; height:2px; z-index:6;
    background:rgba(200,255,230,0.9); box-shadow:0 0 12px rgba(200,255,230,0.8);
    opacity:0; pointer-events:none;
  }
  #rep-enter .rep-poweron.fire{ animation:repPowerOn .32s ease-out forwards; }
  @keyframes repPowerOn{
    0%{opacity:1; transform:scaleY(30) scaleX(1)}
    60%{opacity:1; transform:scaleY(1) scaleX(1)}
    100%{opacity:0; transform:scaleY(1) scaleX(0)}
  }

  /* — контент гейта — */
  #rep-enter .rep-core{ position:relative; z-index:5; }

  /* фаза «сигнал»: [ enter ] — простой, как везде на сайте (без свечения/шума) */
  #rep-enter .rep-enter-text{
    font-family:'Share Tech Mono',monospace; font-size:14px; letter-spacing:4px;
    color:rgba(0,170,85,0.25); text-transform:uppercase; text-align:center;
    animation:repEnterBlink 2s ease-in-out infinite;
  }
  @keyframes repEnterBlink{
    0%,100%{ opacity:.2; letter-spacing:4px; }
    50%{ opacity:.6; letter-spacing:6px; }
  }

  /* фаза «загрузка»: консоль восстановления */
  #rep-enter .rep-load{
    display:flex; flex-direction:column; gap:14px;
    width:min(500px, 90vw); text-align:left;
  }
  .rep-load-title{
    font-family:'Share Tech Mono',monospace; font-size:15px; letter-spacing:0.2em;
    color:var(--g); text-transform:uppercase; text-shadow:0 0 6px rgba(0,255,136,0.4);
  }
  .rep-load-title small{ color:var(--red); letter-spacing:0.15em; }

  .rep-sectors{ display:flex; gap:6px; font-family:'Share Tech Mono',monospace; font-size:12px; letter-spacing:0.06em; }
  .rep-sec{
    color:rgba(0,170,85,0.35); border:1px solid rgba(0,170,85,0.2); padding:3px 7px;
    transition:color .15s, border-color .15s, background .15s;
  }
  .rep-sec.ok{ color:var(--g); border-color:var(--g); background:rgba(0,255,136,0.08); }
  .rep-sec.err{ color:var(--red); border-color:var(--red); background:rgba(255,34,68,0.1); animation:repSecErr .3s steps(2) infinite; }
  @keyframes repSecErr{ 0%,100%{opacity:1} 50%{opacity:.4} }

  .rep-load-bar{ width:100%; height:4px; background:rgba(0,170,85,0.15); overflow:hidden; }
  .rep-load-fill{ width:0%; height:100%; background:var(--g); box-shadow:0 0 8px var(--g); transition:width .12s linear; }
  .rep-load-fill.stall{ background:var(--yellow); box-shadow:0 0 8px var(--yellow); }

  .rep-load-row{ display:flex; justify-content:space-between; align-items:flex-end; gap:10px; }
  .rep-log{ flex:1; min-width:0; display:flex; flex-direction:column; gap:3px; height:150px; overflow:hidden; font-family:'Share Tech Mono',monospace; font-size:12px; letter-spacing:0.04em; }
  .rep-log-line{ white-space:nowrap; opacity:0; animation:repLogIn .18s ease-out forwards; }
  .rep-log-line .t{ color:rgba(0,170,85,0.4); margin-right:7px; }
  .rep-log-line.sys{ color:var(--dim); }
  .rep-log-line.soca{ color:var(--b); text-shadow:0 0 5px rgba(0,204,255,0.3); }
  .rep-log-line.err{ color:var(--red); }
  @keyframes repLogIn{ from{opacity:0; transform:translateX(-4px)} to{opacity:1; transform:translateX(0)} }

  .rep-load-pct{ flex:0 0 auto; font-family:'Share Tech Mono',monospace; font-size:20px; letter-spacing:0.12em; color:var(--b); text-shadow:0 0 6px rgba(0,204,255,0.4); }
  .rep-load-pct.glitch{ color:var(--red); }

  .rep-load-hint{ margin-top:2px; font-family:'Share Tech Mono',monospace; font-size:12px; letter-spacing:0.1em; color:var(--g2); text-shadow:0 0 6px rgba(0,255,204,0.4); opacity:0; }
  .rep-load-hint.show{ opacity:1; }

  @media (prefers-reduced-motion: reduce){
    #rep-enter .rep-fx-noise, #rep-enter .rep-fx-flicker, #rep-enter .rep-fx-roll{ animation:none; }
    #rep-enter .rep-fx-glitch.active{ animation:none; opacity:0; }
    #rep-enter .rep-poweron.fire{ animation:none; opacity:0; }
    #rep-enter .rep-enter-text{ animation:none; opacity:.7; }
    .rep-sec.err{ animation:none; }
  }

  @media (prefers-reduced-motion: reduce){
    #rep-settings.open{ animation:none; }
    #rep-settings .rs-row.sabotage.kick{ animation:none; }
    #rep-enter .rep-enter-text{ animation:none; opacity:.4; }
  }
  `;
  document.head.appendChild(css);

  // ─────────────────────────────────────────
  //  ENTER-ГЕЙТ — жест пользователя → старт звука → показать отчёты.
  //  Вставляем СИНХРОННО (скрипт в конце body): оверлей попадает в первую
  //  отрисовку, поэтому сайт не мелькает до нажатия.
  // ─────────────────────────────────────────
  function clickSfx(e) {
    if (e.target.closest('.report-entry, .report-tab, .rs-sw, .rs-x, .gear-logo, #report-viewer img, #photoModal'))
      playClick();
  }
  function buildEnterGate() {
    if (document.getElementById('rep-enter')) return;
    const g = document.createElement('div');
    g.id = 'rep-enter';
    g.innerHTML =
      '<div class="rep-core" id="rep-core">' +
        '<div class="rep-enter-text">[ enter ]</div>' +
      '</div>';
    (document.body || document.documentElement).appendChild(g);

    // CRT-слои строим только при входе в загрузку — экран [ enter ] остаётся простым
    function buildFx(){
      if (g.querySelector('#rep-glitch')) return;
      g.insertAdjacentHTML('afterbegin',
        '<div class="rep-fx rep-fx-dark"></div>' +
        '<div class="rep-fx rep-fx-noise"></div>' +
        '<div class="rep-fx rep-fx-roll"></div>' +
        '<div class="rep-fx rep-fx-scan"></div>' +
        '<div class="rep-fx rep-fx-vignette"></div>' +
        '<div class="rep-fx rep-fx-flicker"></div>' +
        '<div class="rep-fx rep-fx-glitch" id="rep-glitch"></div>' +
        '<div class="rep-poweron" id="rep-poweron"></div>');
    }
    function glitchFlash(){
      const el = g.querySelector('#rep-glitch');
      if (!el) return;
      el.classList.remove('active'); void el.offsetWidth;
      el.classList.add('active');
      setTimeout(() => el.classList.remove('active'), 200);
    }

    let entered = false;

    function reveal() {                          // финал: погасить оверлей, показать архив, включить клик-звук
      glitchFlash();
      g.classList.add('hide');
      setTimeout(() => g.remove(), 550);
      document.addEventListener('click', clickSfx, true);
    }

    function runLoading() {                      // «восстановление архива» (~3.6с, скипается кликом/клавишей)
      const core = g.querySelector('#rep-core');
      core.innerHTML =
        '<div class="rep-load">' +
          '<div class="rep-load-title">RECOVERING ARCHIVE <small>// DAMAGED MEDIA</small></div>' +
          '<div class="rep-sectors" id="rep-sectors"></div>' +
          '<div class="rep-load-bar"><div class="rep-load-fill" id="rep-load-fill"></div></div>' +
          '<div class="rep-load-row">' +
            '<div class="rep-log" id="rep-log"></div>' +
            '<div class="rep-load-pct" id="rep-load-pct">0%</div>' +
          '</div>' +
          '<div class="rep-load-hint" id="rep-load-hint">map is on the backtick key. try not to get lost.</div>' +
        '</div>';

      const fill   = core.querySelector('#rep-load-fill');
      const pctEl  = core.querySelector('#rep-load-pct');
      const logEl  = core.querySelector('#rep-log');
      const hintEl = core.querySelector('#rep-load-hint');
      const secBox = core.querySelector('#rep-sectors');

      // сектора 01..07
      const secs = [];
      for (let i = 1; i <= 7; i++){
        const s = document.createElement('span');
        s.className = 'rep-sec'; s.textContent = ('0' + i).slice(-2);
        secBox.appendChild(s); secs.push(s);
      }

      // «больная» шкала: [время%, значение%] — зависания и откаты
      const CURVE = [ [0,0],[12,18],[20,18],[34,41],[46,39],[58,67],[72,67],[80,74],[88,92],[96,88],[100,100] ];
      const DUR = 3600;

      // лог: {at:%времени, type, t, text}
      const LOG = [
        { at:2,  type:'sys',  t:'00', text:'mounting /reports' },
        { at:14, type:'soca', t:'01', text:'unofficial. of course it is.' },
        { at:24, type:'sys',  t:'02', text:'decrypting KAELA field logs' },
        { at:34, type:'soca', t:'03', text:'authenticity: unverified. reading anyway.' },
        { at:44, type:'err',  t:'04', text:'sector 7 :: read error \u2014 retry 1/2' },
        { at:52, type:'err',  t:'05', text:'sector 7 :: read error \u2014 retry 2/2' },
        { at:60, type:'soca', t:'06', text:'sector 7 unreadable. as always.' },
        { at:70, type:'sys',  t:'07', text:'CORE-3 :: no response' },
        { at:78, type:'soca', t:'08', text:'mounting without it. don\u2019t ask.' },
        { at:88, type:'sys',  t:'09', text:'indexing records \u2026 214 entries' },
        { at:97, type:'soca', t:'10', text:'SOCA online. you\u2019re reading someone else\u2019s notes.' },
      ];

      const GLYPH = ['\u2593','\u2592','\u2591','#','%','&','0x3F'];
      let start = null, done = false, skipped = false, logi = 0, lastSec = 0, glitchedAt = -1;

      function stopSkip(){ document.removeEventListener('keydown', onKey, true); g.removeEventListener('click', onClick); }

      function pushLog(item){
        const line = document.createElement('div');
        line.className = 'rep-log-line ' + item.type;
        line.innerHTML = '<span class="t">T+00:00:' + item.t + '</span>' + item.text;
        logEl.appendChild(line);
        while (logEl.children.length > 7) logEl.removeChild(logEl.firstChild);  // видимы последние ~7
        if (item.type === 'err' && secs[6]) secs[6].classList.add('err');       // сектор 7 мигает красным
      }

      function lightSectors(pct){
        const n = Math.min(7, Math.floor(pct / 100 * 7));
        for (let i = lastSec; i < n; i++){
          if (i === 6){ secs[6].classList.remove('err'); secs[6].classList.add('ok'); secs[6].textContent = '07!'; } // форс-маунт
          else secs[i].classList.add('ok');
        }
        lastSec = Math.max(lastSec, n);
      }

      function curveVal(p){                       // время 0..100 → значение% (лин. интерполяция по CURVE)
        for (let i = 1; i < CURVE.length; i++){
          if (p <= CURVE[i][0]){
            const t0 = CURVE[i-1][0], v0 = CURVE[i-1][1], t1 = CURVE[i][0], v1 = CURVE[i][1];
            const k = (p - t0) / Math.max(1, (t1 - t0));
            return v0 + (v1 - v0) * k;
          }
        }
        return 100;
      }

      function finish(){
        if (done) return; done = true; stopSkip();
        fill.style.width = '100%'; fill.classList.remove('stall');
        pctEl.textContent = '100%'; pctEl.classList.remove('glitch');
        while (logi < LOG.length) pushLog(LOG[logi++]);                          // досыпать оставшиеся логи
        for (let i = 0; i < 7; i++){ if (!secs[i].classList.contains('ok')){ secs[i].classList.remove('err'); secs[i].classList.add('ok'); } }
        hintEl.classList.add('show');
        setTimeout(reveal, skipped ? 260 : 900);
      }

      function frame(ts){
        if (skipped || done) return;
        if (start == null) start = ts;
        const tp = Math.min(100, (ts - start) / DUR * 100);                      // прогресс по времени
        const val = curveVal(tp);
        const stalling = (tp > 58 && tp < 72);                                   // «зависание» ~67%
        if (stalling && Math.random() < 0.25){                                   // мусор в проценте
          pctEl.textContent = GLYPH[Math.floor(Math.random() * GLYPH.length)] + '%';
          pctEl.classList.add('glitch');
        } else {
          pctEl.textContent = Math.round(val) + '%';
          pctEl.classList.remove('glitch');
        }
        fill.style.width = val + '%';
        fill.classList.toggle('stall', stalling);
        lightSectors(val);
        while (logi < LOG.length && tp >= LOG[logi].at) pushLog(LOG[logi++]);     // логи по расписанию
        const gp = Math.floor(tp / 33);                                          // редкие глитч-вспышки
        if (gp !== glitchedAt && (gp === 1 || gp === 2)){ glitchedAt = gp; glitchFlash(); }
        tp < 100 ? requestAnimationFrame(frame) : finish();
      }

      function onKey(e){ e.preventDefault(); e.stopPropagation(); skipped = true; finish(); }  // capture → гасит и хоткей карты
      function onClick(e){ e.stopPropagation(); skipped = true; finish(); }
      document.addEventListener('keydown', onKey, true);
      g.addEventListener('click', onClick);
      requestAnimationFrame(frame);
    }

    function powerOn(cb){                         // ENTER → короткий CRT power-on → callback
      buildFx();                                  // fx появляются только сейчас, не на экране [ enter ]
      const po = g.querySelector('#rep-poweron');
      const core = g.querySelector('#rep-core');
      if (core) core.style.visibility = 'hidden';
      if (po) po.classList.add('fire');
      glitchFlash();
      setTimeout(() => { if (core) core.style.visibility = ''; if (cb) cb(); }, 300);
    }

    function enter() {
      if (entered) return;
      entered = true;
      audioStarted = true;
      if (AUD.on) startAudioLoops();              // звук стартует в момент жеста (иначе браузер не даст автоплей)
      powerOn(runLoading);                        // ENTER → power-on → загрузка → reveal()
    }
    document.addEventListener('keydown', enter, { once: true });
    g.addEventListener('click', enter, { once: true });
  }
  if (document.body) buildEnterGate();
  else document.addEventListener('DOMContentLoaded', buildEnterGate);

  // ─────────────────────────────────────────
  //  РАЗМЕТКА
  // ─────────────────────────────────────────
  function swRow(label, key, on, sub, sabotage) {
    return `
      <div class="rs-row${sabotage ? ' sabotage' : ''}">
        <span class="rs-lab">${label}${sub ? `<small>${sub}</small>` : ''}</span>
        <button type="button" class="rs-sw" data-switch="${key}" data-on="${on ? 1 : 0}"
                aria-pressed="${on ? 'true' : 'false'}">${on ? 'ON' : 'OFF'}</button>
      </div>`;
  }
  function sliderRow(label, key, value) {
    return `
      <div class="rs-row">
        <span class="rs-lab">${label}</span>
        <span class="rs-slide">
          <input type="range" min="0" max="100" value="${value}" data-slider="${key}"
                 aria-label="${label}" style="--fill:${value}%">
          <span class="rs-val" data-val="${key}">${value}</span>
        </span>
      </div>`;
  }

  // ── язык отчётов (движок владеет состоянием, панель — только UI) ──
  function curLang() {
    return (window.getReportLang && window.getReportLang()) ||
           (typeof PD_LANG_DEFAULT !== 'undefined' ? PD_LANG_DEFAULT : 'en');
  }
  function langBtnText(l) { return l === 'ru' ? 'RU' : 'EN'; }
  function langRow() {
    return `
      <div class="rs-row">
        <span class="rs-lab">REPORT LANGUAGE<small>русский / english · RU ⇄ EN</small></span>
        <button type="button" class="rs-sw rs-lang" data-switch="lang" data-on="1"
                aria-label="Report language">${langBtnText(curLang())}</button>
      </div>`;
  }
  function setLangSwitch(sw, l) {
    sw.textContent = langBtnText(l);
    sw.dataset.on = '1';
    sw.setAttribute('aria-pressed', 'true');
  }

  function buildBody() {
    const out = [];

    // главный тумблер
    out.push(`<div class="rs-main">${
      swRow('READING MODE', 'reading', isReading(), 'mutes text corruption & screen glitches')
    }</div>`);

    // язык — появляется только если движок поддерживает переключение
    if (window.setReportLang) out.push('<div class="rs-sec">LANGUAGE</div>' + langRow());

    // display
    out.push('<div class="rs-sec">DISPLAY</div>' +
      swRow('TEXT CORRUPTION', 'text', FX.text, 'words scatter into █▒░') +
      swRow('SCREEN GLITCHES', 'screen', FX.screen, 'jitter · flashes · brightness') +
      swRow('CRT / SCANLINES', 'crt', FX.crt, 'scanlines · vignette · grain'));

    // audio — музыка, шум серверов, кнопки (звук стартует после ENTER)
    out.push('<div class="rs-sec">AUDIO</div>' +
      swRow('SOUND', 'audio', AUD.on, 'music · hum · clicks') +
      sliderRow('MUSIC', 'music', pct(AUD.music)) +
      sliderRow('SERVER HUM', 'noise', pct(AUD.noise)) +
      sliderRow('BUTTONS', 'click', pct(AUD.click)));

    // soca — пасхалка
    out.push('<div class="rs-sec">SOCA</div>' +
      swRow('REDUCE SOCA SARCASM', 'sarcasm', false, 'experimental', true) +
      '<div class="rs-soca" id="rs-soca-line"></div>');

    return out.join('');
  }
  function pct(v) { return Math.round((typeof v === 'number' ? v : 0.6) * 100); }

  const panel = document.createElement('div');
  panel.id = 'rep-settings';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Reports configuration');
  panel.innerHTML = `
    <div class="rs-head">
      <span class="rs-title">◈ REPORTS CONFIG</span>
      <button class="rs-x" type="button" aria-label="Close">[X]</button>
    </div>
    <div class="rs-body">${buildBody()}</div>
    <div class="rs-foot">PD-04 // ARCHIVE TERMINAL · SAVED LOCALLY</div>
  `;

  const tip = document.createElement('div');
  tip.id = 'rs-tip';
  tip.textContent = 'SYSTEM CONFIG';

  // ─────────────────────────────────────────
  //  ПРИМЕНЕНИЕ
  // ─────────────────────────────────────────
  function isReading() { return !FX.text && !FX.screen; }

  function apply() {
    document.body.classList.toggle('rep-no-crt', !FX.crt);
    document.body.classList.toggle('rep-no-screen', !FX.screen);
    // если экранные глитчи выключены — снимаем возможные остаточные трансформы
    if (!FX.screen) {
      document.body.style.transform = '';
      document.body.style.filter = '';
    }
    save();
  }

  function setSwitch(sw, on) {
    sw.dataset.on = on ? '1' : '0';
    sw.textContent = on ? 'ON' : 'OFF';
    sw.setAttribute('aria-pressed', on ? 'true' : 'false');
  }
  function syncSwitches() {
    panel.querySelectorAll('.rs-sw').forEach((sw) => {
      const k = sw.dataset.switch;
      if (k === 'reading') setSwitch(sw, isReading());
      else if (k === 'lang') setLangSwitch(sw, curLang());
      else if (k === 'audio') setSwitch(sw, AUD.on);
      else if (k in FX) setSwitch(sw, FX[k]);
    });
  }

  function socaSay(msg) {
    const el = panel.querySelector('#rs-soca-line');
    if (!el) return;
    el.textContent = '⛭ SOCA // ' + msg;
    el.classList.add('show');
    clearTimeout(socaSay._t);
    socaSay._t = setTimeout(() => el.classList.remove('show'), 4200);
  }

  function sabotageSarcasm(sw) {
    setSwitch(sw, true);
    sw.classList.add('deny');
    const row = sw.closest('.rs-row');
    if (row) { row.classList.add('kick'); setTimeout(() => row.classList.remove('kick'), 620); }
    setTimeout(() => {
      setSwitch(sw, false);
      sw.classList.remove('deny');
      socaSay(SARCASM_LINES[Math.min(sarcasmAttempts, SARCASM_LINES.length - 1)]);
      sarcasmAttempts++;
    }, 260);
  }

  // ─────────────────────────────────────────
  //  СОБЫТИЯ
  // ─────────────────────────────────────────
  function onSwitch(sw) {
    const key = sw.dataset.switch;

    if (key === 'sarcasm') { sabotageSarcasm(sw); return; }

    if (key === 'audio') {
      setAudioOn(!AUD.on);
      setSwitch(sw, AUD.on);
      return;
    }

    if (key === 'lang') {
      const next = curLang() === 'en' ? 'ru' : 'en';
      if (window.setReportLang) window.setReportLang(next);
      setLangSwitch(sw, next);
      return;
    }

    if (key === 'reading') {
      const on = !isReading();          // включаем режим чтения → эффекты выключаются
      FX.text = !on;
      FX.screen = !on;
      apply(); syncSwitches();
      return;
    }

    if (key in FX) {
      FX[key] = !FX[key];
      apply(); syncSwitches();
    }
  }

  function isOpen() { return panel.classList.contains('open'); }
  function openPanel()  { panel.classList.add('open'); tip.classList.remove('show'); }
  function closePanel() { panel.classList.remove('open'); }
  function togglePanel(e) { if (e) e.stopPropagation(); isOpen() ? closePanel() : openPanel(); }

  function boot() {
    document.body.appendChild(panel);
    document.body.appendChild(tip);
    apply();
    syncSwitches();

    const gear = document.querySelector('.gear-logo');
    if (gear) {
      gear.addEventListener('click', togglePanel);
      gear.addEventListener('mouseenter', () => { if (!isOpen()) tip.classList.add('show'); });
      gear.addEventListener('mouseleave', () => tip.classList.remove('show'));
    }

    panel.querySelector('.rs-x').addEventListener('click', closePanel);
    panel.addEventListener('click', (e) => {
      const sw = e.target.closest('.rs-sw');
      if (sw) { onSwitch(sw); return; }
    });
    panel.addEventListener('input', (e) => {
      const sl = e.target.closest('input[type=range]');
      if (!sl) return;
      const v = +sl.value;
      sl.style.setProperty('--fill', v + '%');
      const out = panel.querySelector(`[data-val="${sl.dataset.slider}"]`);
      if (out) out.textContent = v;
      const key = sl.dataset.slider;
      if (key === 'music' || key === 'noise' || key === 'click') setVol(key, v / 100);
    });

    // клик мимо панели / Escape — закрыть
    document.addEventListener('click', (e) => {
      if (!isOpen()) return;
      if (panel.contains(e.target)) return;
      if (gear && gear.contains(e.target)) return;
      closePanel();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen()) closePanel();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

})();
