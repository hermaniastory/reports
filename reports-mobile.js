/* ============================================================
   reports-mobile.js — PANDEMONIUM-04 // FIELD REPORTS
   Мобильная адаптация страницы отчётов. Отдельный модуль:
   движок, оболочку и отчёты не трогает.

   ПОДКЛЮЧЕНИЕ (в reports.html / index.html) — в <head>, сразу
   после <meta name="viewport">, чтобы масштаб выставился ДО
   первой отрисовки:
     <script src="reports-mobile.js"></script>

   ЧТО ДЕЛАЕТ:
     · Телефон в landscape — страница рисуется в виртуальной ширине
       DESIGN_WIDTH и ужимается браузером целиком (как на основном
       сайте). Зум щипком разрешён.
     · Высота макета по 100dvh — нижняя панель не уезжает под
       адресную строку мобильного браузера.
     · Крупнее зоны нажатия (вкладки, дерево секций, карта) и без
       «оттягивания» страницы при прокрутке списков.
     · Телефон/планшет вертикально — заглушка ROTATE DEVICE
       (один в один как в mobile-adapt.js основного сайта).
       На десктопе с узким окном заглушка НЕ появляется.
   ============================================================ */
(function () {
  'use strict';

  const DESIGN_WIDTH = 1150;   // как на основном сайте

  // ══════════════════════════════════════════════════════
  // VIEWPORT: масштабирование целиком вместо перестройки
  // ══════════════════════════════════════════════════════
  let meta = document.querySelector('meta[name="viewport"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'viewport';
    document.head.appendChild(meta);
  }

  function applyViewport() {
    // Большая сторона экрана = ширина устройства в landscape.
    const landscapeWidth = Math.max(screen.width, screen.height);
    if (landscapeWidth < DESIGN_WIDTH) {
      meta.setAttribute('content',
        'width=' + DESIGN_WIDTH +
        ', user-scalable=yes, minimum-scale=0.25, maximum-scale=5');
    } else {
      meta.setAttribute('content',
        'width=device-width, initial-scale=1.0, user-scalable=yes, maximum-scale=5');
    }
  }

  applyViewport();
  window.addEventListener('orientationchange', applyViewport);
  if (screen.orientation && screen.orientation.addEventListener)
    screen.orientation.addEventListener('change', applyViewport);

  // ══════════════════════════════════════════════════════
  // CSS: высота макета + тач-правки + заглушка поворота
  // ══════════════════════════════════════════════════════
  const style = document.createElement('style');
  style.textContent = `

  /* Высота макета по видимой области (dvh), а не 100vh:
     на телефоне 100vh включает зону под адресной строкой,
     и нижняя панель прячется. Без поддержки dvh остаётся 100vh. */
  @supports (height: 100dvh){
    .wrapper{ height: calc(100dvh - 36px - 28px); }
    body{ min-height: 100dvh; }
  }

  /* Тач-устройства: крупнее зоны нажатия, без «оттягивания» */
  @media (pointer:coarse){
    .index-list, .report-viewer, .report-tabs,
    .amap-timeline, .amap-grid, .amap-col{
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;
    }
    .report-tab{ height: 38px; padding: 0 16px; }
    .report-entry{ padding: 11px 12px; }
    .tree-tab{ padding: 7px 10px; }
    .tree-sec{ padding: 6px 10px 6px 22px; }
    .amap-day, .amap-sec{ padding: 8px 12px; }
    .amap-rep{ padding: 6px 12px; }
    #map-fab{ padding: 8px 12px; }
    .photo-modal-close{ padding: 6px 12px; }
    /* курсор-прицел на тач-экране не нужен */
    body{ cursor: auto; }
  }

  /*ЗАГЛУШКА "ПОВЕРНИТЕ УСТРОЙСТВО" */
  #rotate-overlay{
    display:none;
    position:fixed;
    inset:0;
    z-index:2147483647;
    background:#000;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:18px;
    font-family:'Share Tech Mono',monospace;
    color:#00ff88;
    text-align:center;
    padding:20px;
  }
  #rotate-overlay .rotate-icon{
    width:46px;height:46px;
    border:2px solid #00ff88;border-radius:4px;
    position:relative;
    animation:rotateHint 2.2s ease-in-out infinite;
  }
  #rotate-overlay .rotate-icon::after{
    content:'';position:absolute;top:-7px;right:-2px;
    width:0;height:0;
    border-left:5px solid transparent;border-right:5px solid transparent;
    border-bottom:7px solid #00ff88;
  }
  @keyframes rotateHint{
    0%,15%   { transform:rotate(0deg); }
    45%,60%  { transform:rotate(-90deg); }
    90%,100% { transform:rotate(-90deg); }
  }
  #rotate-overlay .rotate-text{ font-size:13px;letter-spacing:0.08em;opacity:0.85; }
  #rotate-overlay .rotate-sub{ font-size:9px;letter-spacing:0.06em;color:#005533; }

  /* Только тач-устройства: на десктопе узкое окно не блокируется */
  @media (orientation:portrait) and (pointer:coarse){
    #rotate-overlay{ display:flex; }
    body > *:not(#rotate-overlay){ visibility:hidden; }
    body::before, body::after{ display:none; }
  }

  `;

  // Стили и заглушка вешаются ПОСЛЕ разбора страницы: так они встают
  // в конец <head> — после <style> из reports.html — и перекрывают его
  // правила той же специфичности (.wrapper, .report-tab и т.п.)
  function mountOverlay() {
    if (document.getElementById('rotate-overlay')) return;
    document.head.appendChild(style);
    const overlay = document.createElement('div');
    overlay.id = 'rotate-overlay';
    overlay.innerHTML = `
      <div class="rotate-icon"></div>
      <div class="rotate-text">ROTATE DEVICE</div>
      <div class="rotate-sub">// landscape mode required</div>
    `;
    document.body.appendChild(overlay);
  }
  // Скрипт стоит в <head> — ждём конца разбора страницы
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountOverlay);
  else mountOverlay();
})();
