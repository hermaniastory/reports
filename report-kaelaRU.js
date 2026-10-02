/* ============================================================
   report-kaela.js - PANDEMONIUM-04 // FIELD REPORT
   Pilot 01 (Koko) // planet GXN-44-Kaela // KAELA
   ============================================================ */
registerReport({
  id:'GXN-44-Kaela',code:'GXN-44-Kaela',title:'KAELA',
  tag:'planet',tagLabel:'PLANET',date:'14 OCT 1973',
  pilot:'Koko',
  lang:'ru',
  refMap:{
    'раздел про почву':['observations',5],
    'раздела про почву':['observations',5],
    'разделе про воздух':['observations',2],
    'разделе про грибы':['observations',8],
    'раздел про геологию':['observations',16],
    'разделе про Саноэр':['moons',0],
  },
  styles:`
    /* Каэла-специфичные раскладочные правки (авто-скоуп: [data-report="GXN-44-Kaela"]) */
    .crash-photo{align-self:stretch;}
    .crash-photo .ph-wrap{width:100%;height:100%;display:flex;flex-direction:column;}
    .crash-photo .ph-box{width:100%;flex:1;height:auto;min-height:210px;}
    .crash-photo .ph-cap{max-width:100%;margin-top:5px;flex-shrink:0;}
    .surface-photo .ph-wrap{width:100%;display:block;}
    .surface-photo .ph-box{width:100%;height:260px;}
    .surface-photo .ph-cap{max-width:100%;margin-top:5px;}
    .row-photo{display:flex;justify-content:center;}
    .row-photo .ph-wrap{width:100%;max-width:300px;display:block;}
    .row-photo .ph-box{width:100%;aspect-ratio:1;height:auto;}
    .row-photo .ph-cap{max-width:100%;margin-top:5px;}
    .flora-photo{display:flex;justify-content:center;}
    .flora-photo .ph-wrap{width:100%;max-width:300px;display:block;}
    .flora-photo .ph-box{width:100%;aspect-ratio:1;height:auto;}
    .flora-photo .ph-cap{max-width:100%;margin-top:5px;}
    .flora-sketch svg{width:100%;height:auto;display:block;}
    .final-photo .ph-wrap{width:100%;max-width:420px;display:block;margin:0 auto;}
    .final-photo .ph-box{width:100%;aspect-ratio:1;height:auto;}
    .final-photo .ph-cap{max-width:100%;margin-top:6px;}
  `,
  tabs:[
  {id:'passport',label:'// ПАСПОРТ',html:`
<div style="font-family:'VT323',monospace;font-size:64px;color:var(--g);text-shadow:0 0 30px rgba(0,255,136,0.4);letter-spacing:0.1em;margin:8px 0 4px;animation:glitch1 8s infinite">КАЭЛА</div>
<div style="font-size:9px;color:var(--dimmer);letter-spacing:0.2em;margin-bottom:4px;">GXN-44-Kaela // АСТРО-ПАСПОРТ // составил Коко, Пилот 01 // <span style="color:var(--red)">НЕОФИЦИАЛЬНО</span></div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.15em;margin-bottom:14px;">PD-04 // DAY 0021 // 14 OCT 1973</div>

<!-- ВСТУПЛЕНИЕ + ФОТО ОРБИТЫ -->
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:16px;">
  <div style="flex:1;min-width:0;">
    <p class="r-text">
      Имя не моё — официально эта штука зовётся <span class="hib">GXN-44-Kaela</span>, и мне это название даже нравится, звучит серьёзнее, чем я сам мог бы придумать. Когда мы входили в систему,
      <span class="hi">бортовой комп Пандемониума звякнул совпадением с архивным кодом</span> из каталога NGC-1300.
      Три объекта с похожим индексом - а живой, <span class="rainbow">геосапиентный</span>, только один. Угадайте, под каким мы висим?<br/><br/>
      Статус в карточке: <span class="blink" style="color:var(--red);font-family:'VT323',monospace;font-size:18px;">ЗАПРЕЩЕНА ДЛЯ КОЛОНИЗАЦИИ</span>.
      Особая пометка - контакт с разумной формой. <span class="corrupt">Кто-то уже топтался здесь до меня... Или очень старался.</span>
      Я не выдумываю: запись лежала в системе ещё до того, как я хоть что-то увидел своими глазами, и одно с другим сходится.
      <span class="mark">Так что нет, я не сочиняю. Мне, честно, даже лень сочинять, так что используем то, что имеем. </span>
    </p>
    <div class="r-soca" style="margin-top:10px;">Архивная запись - примерно за 40 лет до текущей миссии. Источник не указан, а файл повреждён. Вывод простой: ты здесь не первый. Успокаивать не буду, делай что хочешь.</div>
    <div style="display:flex;gap:10px;margin-top:14px;align-items:flex-start;">
      <div class="sticky green t2" style="flex:1;font-size:12px;">p-тип орбиты. Каэла крутится вокруг ОБЕИХ звёзд одновременно. а сами звёзды стоят как приклеенные, вообще не двигаются (по-крайней мере, так кажется), со стороны Крестной теплее: ~+22°C. со стороны Садовой: ~+16°C. разницу где-то в ~4–6°. Саноэре - пологий, еле выглядывает из-за горизонта. Ноэлль - близкая к планете и довольно быстрая, ее на небе можно увидеть почти всегда.</div>
      <div class="sticky yellow t4" style="flex:1;font-size:12px;">угловой диаметр Крестной с поверхности - раза в 3–4 больше привычной мне Мини-Новы, какой я помню её с Астралиса. Я то привык, что такая громадина тусклая и полудохлая, а эта - тёплая и живая.. непривычно?</div>
      <div class="sticky blue t5" style="flex:1;font-size:12px;">расстояние до Крестной прикинул по параллаксу и яркости, вышло где-то ~0.3 а.е. Погрешность, конечно, чудовищная, но порядок верный.</div>
    </div>
  </div>
  <div style="flex-shrink:0;flex-basis:320px;transform:rotate(-1.8deg);margin-top:6px;">
    <div style="width:320px;height:320px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
      <img src="${PD_IMG_BASE}картинк/kaela/orbit_diagram.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
      <div style="font-size:28px;opacity:0.25;">📷</div>
      <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/orbit_diagram.png</div>
    </div>
    <div style="font-size:9px;color:var(--dimmer);margin-top:4px;text-align:center;letter-spacing:0.08em;max-width:320px;">схема орбиты // от руки // масштаб примерный // я старался</div>

  </div>
</div>

<div class="r-sep">ОТКУДА НАЗВАНИЯ?</div>
<div style="display:flex;gap:18px;align-items:flex-start;">
  <p class="r-text" style="flex:1;">
    Мы уже выяснили, что придуманы они были еще до меня. Как только мы вошли в систему, <span class="hi">СОКА уже вытащила архивные данные</span>.
    Там лежали коды: NGC-1300-Beta-Crux, KRX-Crux, TQN-Erden, GXN-44-Kaela.
    Беру как есть, пару штук укоротил под себя - <span class="hib">Крестная, Садовая, Каэла</span>, потому что выговаривать полное каждый раз я явно не осилю.
    Спутники - Саноэр и Ноэлль, тоже нашлись в базе.
    <span class="corrupt">Кто дал им имена - без понятия.</span> Может, первооткрыватели, может, автоматика штамповала подряд.
    Но имена были до меня. Так что спасибо, пользуюсь готовым.
  </p>
  <div class="sticky yellow t2" style="flex-shrink:0;width:220px;font-size:13px;">NGC-1300-Beta-Crux - думаю, "Крестная" прилепили потому, что одна звезда визуально смахивает на крест, я же зову всю систему просто Crux System. Лень - двигатель номенклатуры!</div>
</div>

<div class="r-sep">РАСПОЛОЖЕНИЕ</div>
<div style="display:flex;gap:16px;align-items:flex-start;">
  <div style="flex:2;display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;">
    <div>
      <div class="r-heading">ГАЛАКТИКА</div>
    <p class="r-text"><span class="hi">NGC 1300</span> - спиральная, с перемычкой, ~65 млн световых лет отсюда, в созвездии Эридан, вроде бы?<br/><br/>
      <span class="ghost">перевёл разок в километры, вышло число из 21 цифры. Мда, куда нас только занесло конечно...</span><br/><br/>
      <span class="strike">Как нас вообще сюда занесло - до сих пор не понятно. Зная мои путешествия, разумно предположить, что я даже не следил за полетом.</span></p>
    </div>
    <div>
      <div class="r-heading">ЗВЁЗДНАЯ СИСТЕМА</div>
    <p class="r-text"><span class="hib spread">NGC-1300-Beta-Crux</span><br/>неофициально: <span class="hi">Крестная Система</span><br/><br/>
      Двойная система, где две звезды. Каэла ходит вокруг обеих сразу - один большой круг на двоих.<br/>
      <span class="skew" style="font-size:12px;">это как жить сразу под двумя светилами, которую легко узнать даже по ощущениям - одно ощутимо теплое, как будто от огня, второе просто светит - и довольно тускло.</span></p>
    </div>
    <div>
      <div class="r-heading">ТИП ОРБИТЫ</div>
      Циркумбинарная, <span class="mark">P-тип</span> - стабильная.<br/><br/>
      Период обращения - примерно <span class="hi">286 дней</span> ±2–3 дня.<br/>
      <span class="corrupt">считал на протяжелии нескольких месяцев по изменению положения звёзд, погрешность есть, да.</span>
      <div class="sticky green t2" style="width:100%;font-size:12px;margin-top:8px;">и как итог - климат до неприличия стабильный. Сезоны почти не чувствуются и никаких резких выбросов.. Зато хотя бы безопасно.</div>
    </div>
  </div>
  <div style="flex:1;display:flex;align-items:center;justify-content:center;align-self:stretch;">
    <div class="sticky yellow t3" style="width:220px;font-size:14px;padding:18px 20px;">СОКА произносит "геосапиентная" так, будто это обычное слово. Это НЕ обычное слово! Во всём архиве известно 3 случая, и КАЭЛА один из них, ТРИ!!!</div>
  </div>
</div>

<div class="r-sep">PHYSICAL PARAMETERS // мои измерения и догадки</div>
<div class="r-note" style="font-size:12px;transform:rotate(-0.4deg);margin-bottom:12px;">всё, что ниже - мерил сам, руками. СОКА потом придиралась и уточняла, где не сошлись - оставил оба числа, так хотя бы честнее (и ей назло)</div>

<div style="display:flex;gap:16px;align-items:flex-start;">
  <div style="flex:1;">
    <div class="r-stats">
      <div class="r-stat"><div class="r-stat-lbl">РАДИУС</div><div class="r-stat-val">5 800<span class="r-stat-unit">км</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">МАССА</div><div class="r-stat-val">0.81<span class="r-stat-unit">M⊕</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">ГРАВИТАЦИЯ</div><div class="r-stat-val">0.91<span class="r-stat-unit">g</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">ТЕМПЕРАТУРА</div><div class="r-stat-val">+16–22<span class="r-stat-unit">°C</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">НАКЛОН ОСИ</div><div class="r-stat-val">11.7<span class="r-stat-unit">°</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">СУТКИ</div><div class="r-stat-val">~59<span class="r-stat-unit">земных ч</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">ГОД</div><div class="r-stat-val">~286<span class="r-stat-unit">земных сут</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">СПУТНИКИ</div><div class="r-stat-val">2</div></div>
    </div>
  </div>
  <div style="flex:1.2;display:flex;flex-direction:column;gap:8px;">
    <table style="border-collapse:collapse;font-size:12px;width:100%;">
      <tr style="background:rgba(0,255,136,0.04)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);white-space:nowrap;">РАДИУС</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">по транзиту перед звездой, погрешность ~5–7%. <span style="color:var(--g)">~5800 км</span> - чуть меньше Земли.</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);">МАССА</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">по гравитационному влиянию на спутники. ±10%. <span style="color:var(--g)">0.81 M⊕</span>.</td></tr>
      <tr style="background:rgba(0,255,136,0.04)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);">ГРАВИТАЦИЯ</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">мерил время падения предмета с 1 м. <span style="color:var(--yellow)">повторные пробы всегда показывали одно и то же.</span> <span style="color:var(--g)">0.91g</span>.</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);">ТЕМПЕРАТУРА</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">датчики с корабля, погрешность ±1–2°C. <span style="color:var(--g)">+16–22°C</span> Климат поразительно ровный.</td></tr>
      <tr style="background:rgba(0,255,136,0.04)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);">НАКЛОН ОСИ</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">по движению звёзд на небе. <span style="color:var(--g)">11.7°</span> - почти как Марс, но СОКА говорит 11.4°... Мы не договорились.</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);">СУТКИ</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">засёк между двумя восходами Крестной. <span style="color:var(--g)">~59 ч</span> ±10 минут.</td></tr>
      <tr style="background:rgba(0,255,136,0.04)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);">ГОД</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">по углу звёзд, <span style="color:var(--g)">~286 дней</span> ±2–3 дня. <span class="corrupt">возможно ошибся.</span></td></tr>
    </table>
  </div>
</div>

<div class="r-sep">АТМОСФЕРА</div>
<div style="display:flex;gap:20px;align-items:stretch;margin:10px 0;">
  <div style="flex:1;display:flex;align-items:center;justify-content:center;">
    <table style="border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--dimmer);">N₂</td><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);font-family:'VT323',monospace;font-size:24px;color:var(--g);text-shadow:0 0 8px rgba(0,255,136,0.4);">78%</td></tr>
      <tr style="background:rgba(0,255,136,0.03)"><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--dimmer);">O₂</td><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);font-family:'VT323',monospace;font-size:24px;color:var(--g);text-shadow:0 0 8px rgba(0,255,136,0.4);">18%</td></tr>
      <tr><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--dimmer);">органические пары</td><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--yellow);">присутствуют</td></tr>
      <tr style="background:rgba(0,255,136,0.03)"><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--dimmer);">флуор. соединения</td><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--yellow);">присутствуют</td></tr>
      <tr><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--dimmer);">давление</td><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--g);">~0.94 атм <span style="color:var(--dimmer);font-size:11px;">// датчик: 0.96</span></td></tr>
      <tr style="background:rgba(0,255,136,0.03)"><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--dimmer);">пригоден для дыхания</td><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--g);">ДА — <span style="color:var(--yellow)">нужен фильтр</span></td></tr>
    </table>
  </div>
  <div style="flex:1.4;display:flex;flex-direction:column;gap:10px;justify-content:center;">
    <p class="r-text">
      Состав снял пробами воздуха через фильтр Пандемониума. Дышать можно - <span class="mark">только с фильтром</span>.
      Без него через пару часов накатывает головокружение.<br/>
      <span class="mark-y">Проверено на личном опыте! Выходил на 23 минуты ради интереса, и закружилось на 18-й минуте.</span> Повторять не советую.<br/><br/>
      Флуоресцентные частицы видно даже без приборов, если поймать нужный угол света - <span class="hi">как пыль в луче, только пылинки светятся сами</span>. Давление снимал и на ощупь, и по датчику. Датчик сказал 0.96 атм, у меня вышло 0.94. Разница крошечная. В целом, результатом доволен.
    </p>
    <div class="r-note" style="transform:rotate(0.8deg);font-size:12px;">
      воздух здесь ощущается как ледяная вода - каждый вдох тяжёлый, будто хлебнул чего-то очень холодного и всё равно продолжаешь дышать, точнее описать не могу. на Астралисе я к холоду привык, но там он сухой и мёртвый, а этот какой-то мокрый.
    </div>
    <div class="r-soca">Фильтр рассчитан на 8 часов. Первый выход: он пробыл снаружи 11. Второй выход: 23 минуты вообще без фильтра, "чтобы понять", и сказал мне расслабиться.</div>
  </div>
</div>

<div style="font-size:8px;color:var(--dimmer);letter-spacing:0.12em;margin:18px 0 -8px;text-align:right;">// PD-04 DAY 0040 // 02 NOV 1973 // дописываю спустя три недели</div>

<div class="r-sep">PSIONIC FIELD // главное, что я пытаюсь понять</div>
<p class="r-text">
  И вот тууут начинается самое интересное!! Планета создаёт поле! Как оно работает - не знаю, чем его мерить - тоже не знаю, что с этим делать - тоже не знаю. Но ннаблюдать и строить теории довольно интересно.
  И то оно <span class="HUGE">есть</span> - знаю точно. Потому что:
</p>

<div style="display:flex;gap:16px;align-items:flex-start;margin-top:12px;">
  <div style="flex:1;display:flex;flex-direction:column;gap:10px;">

    <div class="hbox y">
      <div style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">01 // ВРЕМЯ ТЕЧЁТ ИНАЧЕ</div>
      Сел посмотреть на горизонт, по ощущениям - минут 20. По факту - <span style="color:var(--yellow);font-family:'VT323',monospace;font-size:14px;">4 ЧАСА</span>.
      Я не спятил!! Просто в какой-то момент время перестало ощущаться вообще.
      <span class="corrupt">СОКА зафиксировала 3ч 47мин бездействия, показатели в норме, пульс - самый низкий за всё время наблюдений (как будто за этим надо было наблюдать, мда).</span>
    </div>

    <div class="hbox">
      <div style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">02 // СТРАХ И АГРЕССИЯ ПРОПАДАЮТ</div>
      Уронил инструмент за борт прямо перед посадкой, и даже не выругался!
      Только потом дошло, что это <span class="mark-r">ненормально</span>.
      Я себя знаю: обычно я бы устроил концерт всему на корабле. А тут - взял да пошел дальше. Либо воздух так влияет,
      либо это поле. Таким спокойным я бываю редко!!
      <span class="ghost">хотя честно - это ощущение, а не доказательство. Так что пока доказывать мне нечего.. Но это пока что!</span>
    </div>

    <div class="hbox b">
      <div style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">03 // ЭМПАТИЯ УСИЛИВАЕТСЯ</div>
      Планета ощущается живой. Живности тут нет вообще, ноль - но всё равно чувствуешь,
      что что-то здесь <span class="rainbow">точно живое</span>. И это явно не "природа" (хотя оно может и тоже), а что-то по ощущениям другое.
      <span class="corrupt">интересно: если у этого есть настроение - я бы почувствовал, когда оно не в духе?</span>
    </div>

    <div class="hbox r">
      <div style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">04 // КАЭЛА РАССМАТРИВАЕТ</div>
      Корабль завис в облаках на 4 минуты, и именно не сломался - просто <span class="blink">замер</span>.
      Посадка вышла так себе, но поломка была ещё до орбиты, насколько я вообще помню?
      А по итогу корабль будто <span class="mark">сам себя аккуратно посадил</span>.
      <span class="corrupt">это ведь странно? скажите, же что это странно!</span>
    </div>

  </div>

  <div style="flex-shrink:0;display:flex;flex-direction:column;gap:12px;width:240px;">
    <div style="display:flex;align-items:center;justify-content:center;align-self:stretch;">
      <div class="sticky blue t5" style="width:220px;font-size:14px;padding:18px 20px;">Видимо, у планеты есть свои интересы, с кем установить связь. SOCA не может объяснить механизм этого выбора, и это её явно раздражает (а вот нечего из себя такую умную делать). Моя теория: возможно, у планеты свои взгляды, кто вообще может на нее приземлиться. Очень "научно", да-да...</div>
    </div>
    <div class="r-soca">В имеющихся у меня записях схема отбора объектов не обнаруживает никакой корреляции с видом, возрастом или психологическим профилем. Я просто фиксирую этот факт - и ничего более, Коко.</div>
    <div class="sticky red t3" style="width:220px;font-size:12px;">
      <span style="text-decoration:line-through;opacity:0.5;">знает ли она, что я здесь?</span><br/>
      <span style="color:var(--dimmer);font-size:10px;">- любой ответ мне не кажется веселым.</span>
    </div>
  </div>
</div>

<div class="r-sep">ВОПРОСЫ БЕЗ ОТВЕТОВ</div>
<div style="display:flex;gap:16px;align-items:flex-start;">
  <div style="flex:1;">
    <ul class="r-list" style="gap:8px;">
      <li><span class="hi">Почему планета живая?</span> И что именно делает её живой?</li>
      <li><span class="corrupt">Кто топтался тут до меня - и куда делся?</span></li>
      <li>Смогу ли я вообще отсюда <span class="blink" style="color:var(--red)">улететь?</span></li>
    </ul>
  </div>
  <div style="flex:1;">
    <div class="r-note" style="transform:rotate(-0.8deg);">
      Сколько я здесь застряну - без понятия. Но пока застрял - записываю всё, что вижу, даже ерунду.
      Потому что если однажды выберусь, эти каракули могут оказаться даже интереснее, чем кажется сейчас. А если не выберусь.. Ну, пусть хоть кто-то прочитает и узнает, что тут было интересно. Если, конечно, найдут эти записи.<br/><br/>
      <span style="color:var(--dimmer);font-size:11px;">— Коко, Пилот 01</span>
    </div>
    <div class="r-soca">Запись сохранена. Получатель не указан.</div>
  </div>
</div>
  `},
  
  /* ============================================================
    ЗВЕЗДЫ - КРЕСТНАЯ И САДОВАЯ
   ============================================================ */

  {id:'stars',label:'// ЗВЁЗДЫ',html:`
<div style="font-family:'VT323',monospace;font-size:36px;color:var(--b);letter-spacing:0.15em;margin-bottom:4px;animation:glitch1 10s infinite">КРЕСТНАЯ & САДОВАЯ // ВСЁ, ЧТО Я ПОНЯЛ</div>
<div style="font-size:9px;color:var(--dimmer);letter-spacing:0.2em;margin-bottom:4px;">ВКЛАДКА ЗВЁЗДЫ // ЧАСТЬ 1 // составил Коко, Пилот 01</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.15em;margin-bottom:14px;">PD-04 // DAY 0046 // 08 NOV 1973</div>

<!-- ВВЕДЕНИЕ -->
<div style="display:flex;gap:18px;align-items:flex-start;margin-bottom:16px;">
  <p class="r-text" style="flex:1;">
    Времени я тут провёл много. <span class="corrupt">Сколько - не спрашивайте</span>, я сбился: дни на Каэле длиннющие, а мои часы приказали долго жить ещё при посадке. Но надеюсь, что СОКА любезно ведет счет дней...
    Зато я пялился на звёзды так долго, что начал ловить их движение даже без приборов.<br/><br/>
    Сначала просто смотрел, потом стал записывать все что ловил. А уже потом сверять с бортовым журналом и тем, что скажет СОКА.<br/><br/>
    В такой дотошной астрономии я, честно, не гений. Но когда <span class="mark-r">застреваешь в системе с двумя солнцами</span> - времени подумать над своими астрономическими талантами хоть отбавляй.
  </p>
  <div style="flex-shrink:0;display:flex;flex-direction:column;gap:10px;width:200px;">
    <div class="sticky yellow t2" style="font-size:13px;"><span style="text-decoration:line-through;opacity:0.5;">Клавдия, как же тебя тут не хватает!!!</div>
    <div class="sticky blue t5" style="font-size:12px;">в бортовом журнале откопал старые таблицы спектральных классов, без них я бы в звёздах не разобрался вообще. СОКА сказала, что таблицы устарели лет на 30, судя по-всему, я сказал "лучше, чем ничего". она, что редкость, согласилась!</div>
  </div>
</div>

<div class="r-sep">ЗВЕЗДА 1 - KRX-Crux // <span style="color:#ff6644;letter-spacing:0.2em">"КРЕСТНАЯ"</span></div>

<div style="display:flex;gap:20px;align-items:flex-start;margin:14px 0;">
  <!-- СЛЕВА: фото + зарисовка -->
  <div style="flex-shrink:0;flex-basis:220px;display:flex;flex-direction:column;gap:10px;">
    <div style="transform:rotate(-1.5deg);">
      <div style="width:220px;height:220px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/star_krx.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:28px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/star_krx.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">Крестная на закате. <span style="color:var(--yellow)">Мой любимый снимок!!</span></div>
    </div>
    <div style="transform:rotate(2deg);">
      <svg width="220" height="220" viewBox="0 0 120 120" style="opacity:0.75;display:block;">
        <circle cx="60" cy="60" r="28" fill="rgba(255,80,20,0.12)" stroke="#ff5522" stroke-width="1.4"/>
        <circle cx="60" cy="60" r="18" fill="rgba(255,100,40,0.18)" stroke="#ff4400" stroke-width="1"/>
        <circle cx="60" cy="60" r="9" fill="rgba(255,130,60,0.3)"/>
        <line x1="60" y1="14" x2="60" y2="4" stroke="#ff5500" stroke-width="1" opacity="0.5"/>
        <line x1="98" y1="27" x2="106" y2="19" stroke="#ff5500" stroke-width="1" opacity="0.5"/>
        <line x1="106" y1="60" x2="116" y2="60" stroke="#ff5500" stroke-width="1" opacity="0.5"/>
        <line x1="98" y1="93" x2="106" y2="101" stroke="#ff5500" stroke-width="1" opacity="0.5"/>
        <line x1="22" y1="27" x2="14" y2="19" stroke="#ff5500" stroke-width="1" opacity="0.5"/>
        <line x1="14" y1="60" x2="4" y2="60" stroke="#ff5500" stroke-width="1" opacity="0.5"/>
      </svg>
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:2px;letter-spacing:0.08em;">KRX-Crux // M5V // зарисовка</div>
    </div>
  </div>

  <!-- СПРАВА: данные + текст -->
  <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
    <p class="r-text">
      Крестная - <span class="hi">красный карлик</span>, спектральный класс <span class="mark">M5V</span>.
      Цвет: <span style="color:#ff6644;">глубокий красный с оранжевым отливом</span>. <span class="hi">Она не слепит</span> - вот что удивляет!
      Температура: ~<span class="HUGE" style="font-size:30px;">2800–3200 K</span>. СОКА говорит - для M5V норма. По меркам "нормальной" звезды это едва тёплая печка.
    </p>

    <table style="border-collapse:collapse;font-size:12px;width:100%;">
      <tr style="background:rgba(255,80,20,0.05)"><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);white-space:nowrap;">СПЕКТРАЛЬНЫЙ КЛАСС</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:#ff8844;">M5V</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);">ТЕМПЕРАТУРА</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dim);">~2800–3200 K // почти вдвое холоднее Солнца</td></tr>
      <tr style="background:rgba(255,80,20,0.05)"><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);">УГЛОВОЙ ДИАМЕТР</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dim);">~3.2–3.5° <span style="color:var(--dimmer)">(Солнце с Земли: 0.5° - Крестная в 6–7 раз больше)</span></td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);">РАССТОЯНИЕ ДО КАЭЛЫ</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dim);">~0.75–0.85 а.е. // моя оценка ±10%</td></tr>
      <tr style="background:rgba(255,80,20,0.05)"><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);">СВЕТИМОСТЬ</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dim);">~30–40% от земного Солнца // но тепло накапливается</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);">ВСПЫШЕЧНАЯ АКТИВНОСТЬ</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--g2);">НЕ ЗАМЕЧЕНО // ни одной вспышки за всё время</td></tr>
      <tr style="background:rgba(255,80,20,0.05)"><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);">ДЛИТЕЛЬНОСТЬ ЗАКАТА</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--yellow);">3 ч 14 мин // засекал несколько раз</td></tr>
    </table>

    <div class="r-note" style="transform:rotate(-0.8deg);font-size:12px;">
      Закат проходит где-то 3 часа. Я, честно, не поверил, решил уже идти прямыми путями и в следующий раз засёк время - 3 часа 16 минут. Вот это да.
    </div>
    <div class="r-soca">Продолжительность заката по бортовому хронометру: 3ч 14мин ±4 мин. Пилот мерил вручную, секундомером. Небольшое расхождение с моими данными, жаловаться не буду.</div>
    <div class="sticky yellow t1" style="max-width:100%;font-size:13px;margin-top:4px;">сидел с перекусом и смотрел, как она садится. А вот СОКА любезно мне напомнила, что фильтру осталось еще 2 часа. Вот умеет же она портить моменты!</div>
    <div class="r-smaily">Три часа заката плюс перекус - это, между прочим, образцовый вечер, как нужно отдыхать!! Пока СОКА портит моменты я скажу, что кушай себе спокойно на здоровье дальше и смотри свой закат, разрешаю!</div>
  </div>
</div>

<div class="r-sep">ЗВЕЗДА 2 - TQN-Erden // <span style="color:#cc8833;letter-spacing:0.2em">"САДОВАЯ"</span></div>

<div style="display:flex;gap:20px;align-items:flex-start;margin:14px 0;">
  <!-- СЛЕВА: текст + данные + заметка -->
  <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
    <p class="r-text">
      Садовая - <span class="hi">оранжевый карлик</span>, спектральный класс <span class="mark-y">K4V</span>.
      Физически она <span class="hi">крупнее</span> Крестной, но висит дальше - поэтому на небе кажется меньше.<br/><br/>
      Цвет: <span style="color:#cc8833;">тёплый оранжево-жёлтый</span>.
      Она даёт второй слой освещения, без неё небо было бы совсем уж красным.<br/><br/>
      Заметил: когда Садовая садится, облака отдают в медь, а тени уходят в оранжевый.
      Крестная даёт зеленоватые тени - и вместе они рисуют <span class="rainbow">двойные тени</span>.
      Угол между ними померил - гуляет от <span class="hi">15 до 45 градусов</span>, смотря где сейчас Каэла.
    </p>

    <table style="border-collapse:collapse;font-size:12px;width:100%;">
      <tr style="background:rgba(200,130,50,0.05)"><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);white-space:nowrap;">СПЕКТРАЛЬНЫЙ КЛАСС</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:#cc8833;">K4V</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);">ТЕМПЕРАТУРА</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dim);">~4500–4800 K // теплее Крестной, но дальше</td></tr>
      <tr style="background:rgba(200,130,50,0.05)"><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);">УГЛОВОЙ ДИАМЕТР</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dim);">~2.1–2.3° // меньше Крестной на небе, но ярче</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);">РАССТОЯНИЕ ДО КАЭЛЫ</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dim);">~1.0–1.1 а.е. // дальше Крестной. как второй фонарь в конце улицы.</td></tr>
      <tr style="background:rgba(200,130,50,0.05)"><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);">СВЕТИМОСТЬ</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dim);">~50–60% доп. освещения // ярче Крестной в 2 раза</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);">АКТИВНОСТЬ</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--yellow);">колебания яркости ~2–3% // возможно звёздная активность</td></tr>
      <tr style="background:rgba(200,130,50,0.05)"><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);">ДЛИТЕЛЬНОСТЬ ЗАКАТА</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dim);">~1.5–2 ч // быстрее Крестной, но Крестная ещё висит</td></tr>
    </table>

    <div class="r-note" style="transform:rotate(1deg);font-size:12px;">
      Довольно интересно наблюдать за двумя солнцами. Честно, такого я не видел и, сказать честно, такой тип системы я вообще почти не слышал.
    </div>
    <div class="r-soca">Колебания яркости Садовой в пределах 2–3% зафиксированы. Вероятная причина - звёздные пятна и слабая конвекция, для K4V норма, опасности нет. Почему за этим вообще слежу только я, пилот???</div>
  </div>

  <!-- СПРАВА: зарисовка + фото -->
  <div style="flex-shrink:0;flex-basis:220px;display:flex;flex-direction:column;gap:10px;">
    <div style="transform:rotate(-1.5deg);">
      <svg width="220" height="220" viewBox="0 0 120 120" style="opacity:0.75;display:block;">
        <circle cx="60" cy="60" r="38" fill="rgba(180,100,20,0.1)" stroke="#cc7733" stroke-width="1.4"/>
        <circle cx="60" cy="60" r="26" fill="rgba(200,120,40,0.16)" stroke="#bb6600" stroke-width="1"/>
        <circle cx="60" cy="60" r="14" fill="rgba(220,140,50,0.25)"/>
        <line x1="60" y1="20" x2="60" y2="10" stroke="#cc7700" stroke-width="1" opacity="0.45"/>
        <line x1="92" y1="32" x2="100" y2="24" stroke="#cc7700" stroke-width="1" opacity="0.45"/>
        <line x1="100" y1="60" x2="110" y2="60" stroke="#cc7700" stroke-width="1" opacity="0.45"/>
        <line x1="92" y1="88" x2="100" y2="96" stroke="#cc7700" stroke-width="1" opacity="0.45"/>
        <line x1="28" y1="32" x2="20" y2="24" stroke="#cc7700" stroke-width="1" opacity="0.45"/>
        <line x1="20" y1="60" x2="10" y2="60" stroke="#cc7700" stroke-width="1" opacity="0.45"/>
      </svg>
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:2px;letter-spacing:0.08em;">TQN-Erden // K4V // зарисовка</div>
    </div>
    <div style="transform:rotate(3deg);">
      <div style="width:220px;height:220px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/double_shadow.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:22px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 4px;">картинк/kaela/double_shadow.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">мои тени - зелёная от Крестной, медная от Садовой, лучшее доказательство!!</div>
    </div>
  </div>
</div>

<div class="r-sep">ОРБИТА ЗВЁЗД // ТО, ЧТО Я ВСКОРЕ ВЫЧИСЛИЛ</div>

<div style="display:flex;gap:20px;align-items:flex-start;margin:14px 0;">
  <div style="flex:1;">
    <p class="r-text">
      Звёзды <span class="hi">не стоят на месте</span>. Они кружат вокруг общего центра масс.
      Эта точка лежит между ними, но <span class="mark-y">ближе к Крестной</span> - она тяжелее, вот и перетягивает.<br/><br/>
      Расстояние между звёздами: ~<span class="hi">0.2–0.25 а.е.</span> - примерно как от Астралиса до Марса, то есть по-соседски близко.<br/>
      Период обращения: по формуле Кеплера (нашёл в корабельной памяти) и по видимым смещениям - примерно <span class="hi">6–8 лет</span>.<br/>
      Значит, за один год Каэлы (286 дней) звёзды проходят всего <span class="mark">1/8 своего оборота</span>, оттого они мне и казались как вкопанными в первые дни на планете.<br/><br/>
      Скорость: если полный круг за 7 лет - около <span class="hib">0.5–1 км/с</span>.
      <span class="corrupt">Медленно до неприличия, будто просто висят.</span>
    </p>
    <div class="r-data" style="margin-top:8px;">
      <div class="r-row"><span class="r-key">ДИСТАНЦИЯ МЕЖДУ ЗВЁЗДАМИ</span><span class="r-val y">~0.2–0.25 а.е. // ±15%</span></div>
      <div class="r-row"><span class="r-key">ПЕРИОД ОБРАЩЕНИЯ</span><span class="r-val">~6–8 земных лет // формула Кеплера</span></div>
      <div class="r-row"><span class="r-key">СКОРОСТЬ ЗВЁЗД</span><span class="r-val b">~0.5–1 км/с // очень медленно</span></div>
      <div class="r-row"><span class="r-key">ЦЕНТР МАСС</span><span class="r-val">смещён к Крестной // она тяжелее</span></div>
    </div>
    <div class="r-soca" style="margin-top:10px;">Расчёт периода по 3-му закону Кеплера с известными данными даёт ~6.4 года. Пилот получил 6–8 - диапазон накрывает истинное значение. Погрешность есть, но жаловаться мне видимо снова не на что.</div>
  </div>

  <!-- Схема орбиты звёзд -->
  <div style="flex-shrink:0;transform:rotate(-1deg);">
    <div style="width:260px;height:260px;border:1px solid rgba(0,255,136,0.15);background:rgba(0,0,0,0.4);padding:10px;position:relative;">
      <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">// ОРБИТА ЗВЁЗД // грубая зарисовка</div>
      <svg width="240" height="220" viewBox="0 0 240 220">
        <!-- Окружность орбиты -->
        <ellipse cx="120" cy="115" rx="85" ry="80" fill="none" stroke="rgba(0,255,136,0.15)" stroke-width="1" stroke-dasharray="5,4"/>
        <!-- Центр масс -->
        <circle cx="120" cy="115" r="4" fill="rgba(0,255,136,0.4)" stroke="var(--g)" stroke-width="1"/>
        <text x="128" y="111" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.5)">центр масс</text>
        <!-- Крестная - smaller star but more massive, closer to center of mass -->
        <circle cx="60" cy="115" r="14" fill="rgba(255,80,20,0.15)" stroke="#ff5522" stroke-width="1.5"/>
        <circle cx="60" cy="115" r="7" fill="rgba(255,100,40,0.25)"/>
        <text x="60" y="139" text-anchor="middle" font-family="monospace" font-size="8" fill="#ff6644">Крестная</text>
        <text x="60" y="149" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(255,80,20,0.4)">тяжелее</text>
        <!-- Садовая - physically bigger star, farther from center of mass -->
        <circle cx="188" cy="115" r="17" fill="rgba(180,100,20,0.12)" stroke="#cc7733" stroke-width="1.5"/>
        <circle cx="188" cy="115" r="9" fill="rgba(200,120,40,0.2)"/>
        <text x="188" y="142" text-anchor="middle" font-family="monospace" font-size="8" fill="#cc8833">Садовая</text>
        <text x="188" y="152" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(180,100,20,0.4)">дальше</text>
        <!-- Стрелка расстояния -->
        <line x1="78" y1="105" x2="175" y2="105" stroke="rgba(0,255,136,0.2)" stroke-width="0.8" marker-end="url(#arr)"/>
        <text x="128" y="100" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.35)">~0.2–0.25 а.е.</text>
        <!-- Стрелки вращения -->
        <path d="M 38 95 Q 20 70 60 58" fill="none" stroke="rgba(255,80,20,0.3)" stroke-width="1" stroke-dasharray="3,2"/>
        <path d="M 202 95 Q 220 70 188 58" fill="none" stroke="rgba(180,100,20,0.3)" stroke-width="1" stroke-dasharray="3,2"/>
      </svg>
      <div style="font-size:8px;color:var(--dimmer);text-align:center;margin-top:4px;letter-spacing:0.08em;">период ~6–8 лет // стрелки = направление вращения</div>
    </div>
  </div>
</div>

<div class="r-sep">ОРБИТА КАЭЛЫ // МОИ ВЫЧИСЛЕНИЯ</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:12px 0;">
  <div style="flex:1;">
    <p class="r-text">
      Орбита Каэлы - <span class="mark-r">не круг.</span>
      Когда Каэла ближе к Крестной, её диск раздувается почти до <span class="hi">3.5°</span>.
      Когда дальше - сжимается до <span class="hi">2.8–2.9°</span>. Разницу видно даже без приборов, если знаешь, куда глядеть.
    </p>
    <div class="r-stats" style="margin-top:10px;">
      <div class="r-stat"><div class="r-stat-lbl">ЭКСЦЕНТРИСИТЕТ</div><div class="r-stat-val">~0.08</div></div>
      <div class="r-stat"><div class="r-stat-lbl">ПЕРИЦЕНТР</div><div class="r-stat-val">~0.85<span class="r-stat-unit">а.е.</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">АПОЦЕНТР</div><div class="r-stat-val">~0.95<span class="r-stat-unit">а.е.</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">ПЕРИОД</div><div class="r-stat-val">~286<span class="r-stat-unit">дней</span></div></div>
    </div>
    <div class="r-note" style="transform:rotate(-0.6deg);font-size:12px;margin-top:10px;">
      в перицентре Каэла ближе к Крестной → теплее (~+22°C).<br/>
      в апоцентре дальше от Крестной, чуть ближе к Садовой → прохладнее (~+16°C).<br/>
      разница ~4–6 градусов, и всё равно климат стабильный, орбита почти круглая - 0.08 это мелочь.
    </div>
  </div>
  <div style="flex-shrink:0;display:flex;flex-direction:column;gap:10px;width:200px;">
    <div class="sticky green t3" style="font-size:12px;">эксцентриситет 0.08 - считай, круг, для сравнения: у Марса 0.093, у идеального круга 0, Каэла где-то между. Хорошая, спокойная орбита.</div>
    <div class="sticky purple t5" style="font-size:12px;">СОКА обозвала мой способ измерять эксцентриситет "нестандартным, но логичным". Вот это похвала, ну спасибо.</div>
  </div>
</div>

<div style="font-size:8px;color:var(--dimmer);letter-spacing:0.12em;margin:18px 0 -8px;text-align:right;">// PD-04 DAY 0063 // 25 NOV 1973 // этот раздел дописывал отдельно, после нескольких недель наблюдений</div>

<div class="r-sep">ПОЧЕМУ НЕТ НОЧИ // МОЁ ОБЪЯСНЕНИЕ И ЦИФРЫ</div>

<p class="r-text" style="margin-bottom:14px;">
  Думал тут явно долго. Несколько дней я просто пялился в небо и записывал, когда какая звезда садится и восходит. Вот к чему пришёл:
</p>

<div style="display:flex;gap:18px;align-items:flex-start;">
  <div style="flex:1;display:flex;flex-direction:column;gap:10px;">

    <!-- Схема-таблица закатов -->
    <div style="border:1px solid rgba(0,255,136,0.18);background:rgba(0,0,0,0.3);padding:14px 16px;">
      <div style="font-size:9px;color:var(--dimmer);letter-spacing:0.18em;margin-bottom:10px;">// СХЕМА СМЕНЫ ОСВЕЩЕНИЯ // один условный день Каэлы</div>
      <div style="position:relative;height:60px;margin-bottom:8px;">
        <!-- Шкала времени -->
        <div style="position:absolute;top:28px;left:0;right:0;height:2px;background:rgba(0,255,136,0.1);"></div>
        <!-- Крестная block -->
        <div style="position:absolute;top:8px;left:0;width:62%;height:18px;background:rgba(255,80,20,0.2);border:1px solid rgba(255,80,20,0.4);display:flex;align-items:center;justify-content:center;">
          <span style="font-size:9px;color:#ff8844;letter-spacing:0.1em;">Крестная над горизонтом</span>
        </div>
        <!-- Садовая block -->
        <div style="position:absolute;top:34px;left:18%;width:65%;height:18px;background:rgba(180,100,20,0.2);border:1px solid rgba(180,100,20,0.4);display:flex;align-items:center;justify-content:center;">
          <span style="font-size:9px;color:#cc8833;letter-spacing:0.1em;">Садовая над горизонтом</span>
        </div>
        <!-- Индикатор перекрытия -->
        <div style="position:absolute;top:18px;left:18%;width:44%;height:14px;background:rgba(255,200,50,0.08);border-top:1px dashed rgba(255,200,50,0.3);border-bottom:1px dashed rgba(255,200,50,0.3);">
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:8px;color:var(--dimmer);letter-spacing:0.08em;margin-bottom:8px;">
        <span>00:00</span><span>~15:00</span><span>~30:00</span><span>~45:00</span><span>59:00</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;font-size:10px;">
        <div style="border:1px solid rgba(255,80,20,0.2);padding:5px 7px;color:var(--dim);">Крестная заходит первой<br/><span style="color:#ff8844;">~3.5 ч закат</span></div>
        <div style="border:1px solid rgba(255,200,50,0.2);padding:5px 7px;color:var(--dim);">разрыв между закатами<br/><span style="color:var(--yellow);">~2–3 часа</span></div>
        <div style="border:1px solid rgba(180,100,20,0.2);padding:5px 7px;color:var(--dim);">Садовая заходит второй<br/><span style="color:#cc8833;">~1.5–2 ч закат</span></div>
      </div>
    </div>

    <div class="hbox" style="font-size:13px;">
      <strong style="color:var(--g);">01.</strong> Крестная и Садовая не садятся разом. Разрыв - <span class="hi">~2–3 часа</span>. Крестная ушла - Садовая ещё висит. Садовая ушла - Крестная уже лезет обратно.
    </div>
    <div class="hbox b" style="font-size:13px;">
      <strong style="color:var(--b);">02.</strong> Атмосфера <span class="hib">светится сама</span>. Флуоресцентные частицы переизлучают накопленный свет. Даже когда обе звезды за горизонтом, освещённость проседает всего на 30–40%.
    </div>
    <div class="hbox y" style="font-size:13px;">
      <strong style="color:var(--yellow);">03.</strong> Облака работают как <span class="hiy">огромный экран</span>. Подсвечивают поверхность снизу даже без прямого света звёзд. Ну короче - бесплатный ночник размером с планету.
    </div>
    <div class="r-soca">Подтверждаю: минимальная освещённость поверхности без обеих звёзд - 62% от дневной нормы. Причина - флуоресцентное переизлучение атмосферы и облачное рассеивание, то есть ночи в привычном смысле здесь нет. Но спать это тебе всё равно не мешает, конечно.</div>
  </div>

  <div style="flex-shrink:0;display:flex;flex-direction:column;gap:10px;width:210px;">
    <div class="sticky red t2" style="font-size:12px;">проверил лично: стоял снаружи, когда обе звезды сели. не темно, вообще ни капли. В целом, не жалуюсь, в темноте мало что увидишь, а тут везде светло. Хорошо же?</div>
    <div class="sticky yellow t4" style="font-size:12px;">Помню, по-началу, глядя на небо, говорил себе - ну вот сейчас стемнеет! И не темнело, а потом бросил ждать. Просто живу теперь в этих вечных сумерках.</div>
    <div class="r-note" style="transform:rotate(1.2deg);font-size:11px;">итог: Крестная греет, Садовая светит, атмосфера переизлучает сама, облака добавляют сверху, результат - ночи на Каэле нет.</div>
  </div>
</div>

<div class="r-sep">ИТОГ // ЧАСТЬ 1</div>

<div style="display:flex;gap:16px;align-items:flex-start;">
  <ul class="r-list" style="flex:1;gap:8px;">
    <li><span class="hi">Крестная</span> - ближе, но холоднее, отвечает за тепло. Закат 3ч 14мин.</li>
    <li><span style="color:#cc8833;">Садовая</span> - дальше, но ярче, отвечает за свет. Закат 1.5–2ч.</li>
    <li>Звёзды кружат вокруг центра масс - их год <span class="hi">~6–8 лет</span>.</li>
    <li>Орбита Каэлы чуть вытянута - эксцентриситет <span class="hi">~0.08</span>, почти круг.</li>
    <li>Ночи нет - звёзды садятся не разом, атмосфера <span class="rainbow">светится сама</span>.</li>
  </ul>
  <div style="flex:1;">
    <div class="r-note" style="transform:rotate(-0.5deg);font-size:12px;">
      записал, чтобы не забыть. Потому что когда вернусь домой <span class="corrupt">(если вернусь)</span> - придётся кому-то всё это объяснять, и я хочу, чтобы объяснения были верными, а не "на глазок"!!<br/><br/>
      <span style="color:var(--dimmer);font-size:10px;">- Коко, Пилот 01 // ЧАСТЬ 1 ЗАКОНЧЕНА</span>
    </div>
    <div class="r-soca">Запись верифицирована. Погрешности в расчётах пилота - в допустимых пределах, в целом выводы корректны. Для того, кто "не гений в астрономии", вполне достаточно.</div>
  </div>
</div>

<div class="r-sep">ЧАСТЬ 2 // <span style="color:var(--b)">ПОЧЕМУ КАЭЛА НЕ УМЕРЛА</span></div>
<div style="font-size:9px;color:var(--dimmer);letter-spacing:0.18em;margin-bottom:4px;">STARS TAB // PART 2 (ПОСЛЕДНЯЯ) // filed by Koko, Pilot 01 // Запись №2</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.15em;margin-bottom:14px;">PD-04 // DAY 0136 // 06 FEB 1974</div>

<div class="r-sep">ПРЕЦЕССИЯ // ПОЧЕМУ ОРБИТА НЕ ОСТАЁТСЯ НА МЕСТЕ</div>

<div style="display:flex;gap:20px;align-items:flex-start;margin:14px 0;">
  <div style="flex:1;">
    <p class="r-text">
      Я уже говорил: звёзды медленно кружат вокруг центра масс, период - <span class="hi">6–8 лет</span>. А Каэла делает полный оборот за 286 дней.<br/><br/>
      Но если звёзды ползут медленно, а Каэла носится вокруг них быстро - <span class="mark">почему её орбита не остаётся на месте</span>, когда звёзды смещаются?<br/><br/>
      Ответ: орбита Каэлы <span class="rainbow">тоже поворачивается</span>. Называется <span class="hib">прецессия орбиты</span> - медленный разворот самой орбиты в пространстве.
    </p>
    <div class="r-note" style="transform:rotate(-0.7deg);font-size:12px;margin-top:10px;">
      заметил, что перицентр каждый месяц уползает на небольшой угол. сначала решил, что напортачил в расчётах, через три месяца перепроверил - смещение то же самое. Тогда уже попросил СОКУ глянуть, она сказала: прецессия, и что она синхронизирована с движением звёзд.
    </div>
  </div>

  <!-- Схема прецессии -->
  <div style="flex-shrink:0;transform:rotate(1deg);">
    <div style="width:260px;border:1px solid rgba(0,255,136,0.15);background:rgba(0,0,0,0.4);padding:10px;">
      <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">// PRECESSION // орбита поворачивается со временем</div>
      <svg width="240" height="200" viewBox="0 0 240 200">
        <circle cx="120" cy="100" r="3" fill="rgba(0,255,136,0.4)" stroke="var(--g)" stroke-width="1"/>
        <!-- Положение орбиты 1 (сейчас) -->
        <ellipse cx="120" cy="100" rx="95" ry="50" fill="none" stroke="rgba(255,80,20,0.3)" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="218" y="98" font-family="monospace" font-size="7" fill="rgba(255,100,40,0.5)">сейчас</text>
        <!-- Положение орбиты 2 (повёрнутая, позже) -->
        <ellipse cx="120" cy="100" rx="95" ry="50" fill="none" stroke="rgba(0,200,255,0.25)" stroke-width="1.2" stroke-dasharray="4,3" transform="rotate(35 120 100)"/>
        <text x="175" y="40" font-family="monospace" font-size="7" fill="rgba(0,200,255,0.45)">через 6–8 лет</text>
        <!-- Стрелка вращения -->
        <path d="M 215 80 A 95 50 0 0 1 195 35" fill="none" stroke="rgba(0,255,136,0.3)" stroke-width="1" marker-end="url(#arr2)"/>
        <text x="150" y="20" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.4)">~5–8°/год</text>
      </svg>
      <div style="font-size:8px;color:var(--dimmer);text-align:center;margin-top:4px;letter-spacing:0.08em;">перицентр всегда у Крестной, апоцентр - у Садовой</div>
    </div>
  </div>
</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:14px 0;">
  <div style="flex:1;">
    <div class="r-heading">ЦИФРЫ И СКОРОСТИ (мои прикидки)</div>
    <div class="r-data">
      <div class="r-row"><span class="r-key">ПРЕЦЕССИЯ ОРБИТЫ</span><span class="r-val y">~5–8° в год</span></div>
      <div class="r-row"><span class="r-key">ЗА ЦИКЛ ЗВЁЗД (6–8 лет)</span><span class="r-val">~30–50° поворота</span></div>
      <div class="r-row"><span class="r-key">ДОСТАТОЧНО ЧТОБЫ</span><span class="r-val b">компенсировать движение звёзд</span></div>
    </div>
    <div class="r-soca" style="margin-top:10px;">Расчётная скорость прецессии для системы с таким соотношением масс и периодом - 6.2°/год. Пилот дал диапазон 5–8°, точное значение в него попадает.</div>
  </div>
  <div style="flex-shrink:0;width:200px;">
    <div class="sticky blue t4" style="font-size:12px;">СОКА сказала, что прецессия "синхронизирована с движением звёзд", а я спросил - это случайность? И она отвечает: "вероятность случайного совпадения крайне мала". В общем, запишу это как "нет, не случайность", это явно проще.</div>
  </div>
</div>

<div class="hbox r" style="font-size:13px;margin:14px 0;">
  <strong style="color:var(--red);">ПОЧЕМУ ЭТО ВАЖНО:</strong> если бы орбита не поворачивалась - через 3–4 года Каэлу утянуло бы ближе к Садовой и дальше от Крестной.
  Садовой ярче и горячее - она бы <span class="blink" style="color:var(--red)">прожарила планету до неприемлемых температур</span>, атмосфера могла бы посыпаться.
  Но этого не случается - орбита поворачивается вместе со звёздами. Планета, считай, сама себя спасает, молодец какая.
</div>

<div style="font-size:8px;color:var(--dimmer);letter-spacing:0.12em;margin:18px 0 -8px;text-align:right;">// PD-04 DAY 0158 // 28 FEB 1974 // эта часть писалась дольше всего, пришлось пересчитывать несколько раз</div>

<div class="r-sep">ПОЧЕМУ СИСТЕМА СТАБИЛЬНА МИЛЛИАРДЫ ЛЕТ</div>

<p class="r-text" style="margin-bottom:12px;">Как настолько сложная система умудряется существовать так долго - и не развалиться к чертям?</p>

<div style="display:flex;flex-direction:column;gap:10px;">
  <div class="hbox" style="font-size:13px;">
    <strong style="color:var(--g);">01. НИЗКАЯ АКТИВНОСТЬ ЗВЁЗД.</strong> Крестная и Садовая - старые, спокойные звёзды. Крестная: ни одной вспышки за всё время наблюдений. Садовая: редкие колебания яркости (2–3%), но это не страшно. Радиация и потоки частиц атмосферу не рвут.
  </div>
  <div class="hbox b" style="font-size:13px;">
    <strong style="color:var(--b);">02. ОРБИТАЛЬНЫЙ РЕЗОНАНС.</strong> Не уверен на сто процентов, но похоже, что период обращения звёзд и прецессия орбиты Каэлы <span class="hib">синхронизированы</span>. Когда один процесс подстраивается под другой - система становится устойчивой.
  </div>
  <div class="hbox y" style="font-size:13px;">
    <strong style="color:var(--yellow);">03. ДВЕ ЗВЕЗДЫ = ДВОЙНОЙ БУФЕР.</strong> Если одна звезда чуть притухла - вторая добирает недостающий свет. Климат держится ровно, даже когда одна из звёзд играет яркостью.
  </div>
  <div class="hbox" style="font-size:13px;border-left-color:var(--g2);background:rgba(0,255,200,0.04);">
    <strong style="color:var(--g2);">04. АТМОСФЕРА - ИДЕАЛЬНЫЙ ТЕРМОСТАТ.</strong> Плотные облака гонят часть тепла обратно в космос, флуоресцентные частицы рассеивают свет и смягчают его, климат держится в диапазоне <span class="hi">+16…+22°C</span> даже когда расстояние до звёзд гуляет.
  </div>
</div>

<div class="r-sep">НОВАЯ ФОТОГРАФИЯ</div>
<div style="display:flex;gap:20px;align-items:flex-start;margin:14px 0;">
  <div style="flex-shrink:0;transform:rotate(-2.2deg);">
    <div style="width:260px;height:260px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
      <img src="${PD_IMG_BASE}картинк/kaela/kaela_sky_dual.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
      <div style="font-size:28px;opacity:0.25;">📷</div>
      <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/kaela_sky_dual.png</div>
    </div>
    <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;max-width:260px;">небо с обеими звёздами видимыми сразу</div>
  </div>
  <p class="r-text" style="flex:1;">
    Сфотографировал небо, когда обе звезды висели одновременно. Это не редкость - их почти всегда видно сразу.
    Но иногда угол между ними становится большим, и тогда небо выглядит <span class="hi">особенно красиво</span>.
    Снимок сделал, чтобы показать, как две звезды подсвечивают планету с разных сторон. И потому что красиво, ладно.
  </p>
</div>

<div class="r-sep">ИТОГОВЫЙ ВЫВОД</div>

<div style="display:flex;gap:18px;align-items:flex-start;">
  <div style="flex:1;">
    <p class="r-text" style="margin-bottom:10px;">
      <span style="text-decoration:line-through;opacity:0.4;">Я провёл здесь намного больше 40 часов.</span>
      <span style="color:var(--dimmer);font-size:10px;">[правка, FEB 1974: сейчас смешно это перечитывать, прошло уже почти 5 месяцев]</span>
      Дни я не считал - они длинные, и я сбился. Но я смотрел, записывал, вычислял, перепроверял. И вот что понял:
    </p>
    <ul class="r-list" style="gap:8px;">
      <li><span style="color:#ff6644;">Крестная</span> и <span style="color:#cc8833;">Садовая</span> - две звезды, работающие в паре: Крестная даёт тепло, Садовая даёт свет. В общем друг друга дополняют.</li>
      <li>Орбита у них медленная - <span class="hi">6–8 лет</span>. Каэла успевает намотать вокруг них несколько кругов за это время.</li>
      <li>Орбита Каэлы <span class="rainbow">поворачивается вместе со звёздами</span>, потому она всегда получает тепло от Крестной и свет от Садовой.</li>
      <li>Ночи нет: звёзды садятся вразнобой, атмосфера светится сама, облака возвращают свет.</li>
    </ul>
  </div>
  <div style="flex:1;">
    <div class="r-note" style="transform:rotate(0.6deg);font-size:12px;">
      ПОСЛЕДНИЕ МЫСЛИ: сколько ещё тут проторчу - не знаю, а может, вообще не вернусь. Но я хочу, чтобы кто-нибудь понял, как эта система устроена.<br/><br/>
      записал всё, что сумел, хотя у меня уже есть понимание, что всё не так идеально - есть погрешности, есть вещи, которых я до конца не понимаю. Но хотя бы все не так уж и плохо, на том спасибо!<br/><br/>
      <span style="color:var(--dimmer);font-size:10px;">- Коко, Пилот 01 // Запись №2</span>
    </div>
    <div class="r-soca" style="margin-top:10px;">Данные пилота приняты к архивации. Получатель не указан. Конец записи.</div>
  </div>
</div>
  `},

  /* ============================================================
    СПУТНИКИ - САНОЭР И НОЭЛЛЬ
   ============================================================ */

  {id:'moons',label:'// СПУТНИКИ',html:`
<div style="font-family:'VT323',monospace;font-size:36px;color:var(--b);letter-spacing:0.15em;margin-bottom:4px;animation:glitch1 10s infinite">САНОЭР И НОЭЛЛЬ</div>
<div style="font-size:9px;color:var(--dimmer);letter-spacing:0.2em;margin-bottom:4px;">ДВА СПУТНИКА, ДВЕ ОРБИТЫ // filed by Koko, Pilot 01</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.15em;margin-bottom:14px;">PD-04 // DAY 0070 // 02 DEC 1973</div>

<!-- ВВЕДЕНИЕ -->
<div style="display:flex;gap:18px;align-items:flex-start;margin-bottom:16px;">
  <p class="r-text" style="flex:1;">
    У Каэлы два спутника. Два совершенно разных, что случайно оказались вокруг одной планеты
    и как-то научились <span class="hi">уживаться</span>.<br/><br/>
    Я тут уже несколько месяцев. Наблюдал за ними каждый день: замерял движение, свет, влияние на поверхность, и в целом их поведение.
    И мне есть что про них рассказать!<br/><br/>
    <span class="corrupt">Если честно - у меня есть любимчик!! Не скажу како- Ладно, скажу позже, я сдаюсь.</span>
    Действуют они тоже по по-разному: один <span class="mark">выглядит спокойно, почти умиротворенно,</span>, другой <span class="mark-y">притягивает взгляд так, что не оторваться (буквально или метафорически?)</span>.
  </p>
  <div class="sticky purple t3" style="flex-shrink:0;width:210px;font-size:12px;">спойлер: любимчик - Саноэр, он тихий и в глаза не лезет, а Ноэлль - это как сосед, который таращится в окно ровно когда ты выходишь из дома, это жутко.</div>
</div>

<table style="border-collapse:collapse;font-size:11px;width:100%;margin-bottom:18px;">
  <tr><th style="padding:6px 10px;border:1px solid rgba(0,255,136,0.18);color:var(--dimmer);background:rgba(0,255,136,0.04);font-size:9px;">ПАРАМЕТР</th><th style="padding:6px 10px;border:1px solid rgba(100,180,255,0.18);color:#7ab8ff;background:rgba(100,180,255,0.04);font-size:9px;">САНОЭР</th><th style="padding:6px 10px;border:1px solid rgba(200,200,200,0.18);color:#ccc;background:rgba(200,200,200,0.04);font-size:9px;">НОЭЛЛЬ</th></tr>
  <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Диаметр</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dim);">~400 км</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--dim);">~700 км</td></tr>
  <tr style="background:rgba(0,255,136,0.02)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Поверхность</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dim);">Лёд, кристаллы</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--dim);">Камень, кратеры</td></tr>
  <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Цвет</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:#7ab8ff;">голубовато-серебристый</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:#ccc;">белый, серый</td></tr>
  <tr style="background:rgba(0,255,136,0.02)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Орбита</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dim);">эллиптическая, медленная</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--dim);">почти круговая, быстрая</td></tr>
  <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Расстояние</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dim);">80–200 тыс. км</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--dim);">30–40 тыс. км</td></tr>
  <tr style="background:rgba(0,255,136,0.02)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Период</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--yellow);">~18–20 дней</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--red);">~3–4 дня</td></tr>
  <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Наклон</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dim);">заметный к экватору</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--dim);">почти совпадает</td></tr>
  <tr style="background:rgba(0,255,136,0.02)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Грав. влияние</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dimmer);">почти нет</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--g);">есть (0.3 см прилив)</td></tr>
  <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Эмоц. влияние</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:#7ab8ff;">успокаивает</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:#ccc;">притягивает внимание</td></tr>
  <tr style="background:rgba(0,255,136,0.02)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Особенность</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dim);">идеальные трещины во льду</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--dim);">кратеры в форме лица</td></tr>
</table>

<div class="r-sep">САНОЭР // <span style="color:var(--b);letter-spacing:0.3em">ХОЛОДНЫЙ МРАМОР</span></div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:14px 0;">
  <div style="flex:1;">
    <p class="r-text">
      В навигационном файле он значился как <span class="hib">Саноэр</span>. Кто его так назвал - опять-таки, я не знаю. Но я зову его так, и мне кажется, оно <span class="hi">ему подходит</span>.<br/><br/>
      Диаметр: <span class="mark">~400 км</span> - прикинул по угловому размеру и расстоянию до Каэлы.
      Поверхность - кристаллический лёд: твёрдый, прозрачный, с <span class="hi">идеально прямыми трещинами</span>.
      В телескоп блестит тускло, как матовое стекло. Альбедо высокое - виден даже в сумерках.<br/><br/>
      Цвет: голубовато-серебристый, иногда с фиолетовым отливом, в свете Крестная - розовато-серый, в свете Садовая - медно-голубой.
    </p>
    <div class="r-note" style="transform:rotate(-1deg);font-size:12px;margin-top:10px;">
      первый раз увидел эти трещины в телескоп - попытался зарисовать, и не смог объяснить геометрию: они идут почти параллельно, будто по линейке. На естественные разломы это не тянет... сидел над рисунком, так ничего и не понял.
    </div>
    <div class="r-soca">Параллельные трещины с такой регулярностью статистически маловероятны для естественного тектонического процесса на теле такого размера. Альтернативного объяснения у меня нет.</div>
  </div>

  <div style="flex-shrink:0;display:flex;flex-direction:column;gap:10px;width:220px;">
    <div style="transform:rotate(-1.5deg);">
      <svg width="220" height="220" viewBox="0 0 200 200" style="opacity:0.7;display:block;">
        <circle cx="100" cy="100" r="80" fill="rgba(100,180,255,0.06)" stroke="rgba(120,180,255,0.28)" stroke-width="1.5"/>
        <line x1="42" y1="38" x2="162" y2="165" stroke="rgba(150,210,255,0.18)" stroke-width="1.2"/>
        <line x1="28" y1="112" x2="174" y2="84" stroke="rgba(150,210,255,0.12)" stroke-width="0.9"/>
        <line x1="68" y1="16" x2="124" y2="184" stroke="rgba(150,210,255,0.1)" stroke-width="0.8"/>
        <circle cx="68" cy="68" r="16" fill="rgba(180,220,255,0.08)" stroke="rgba(180,220,255,0.28)" stroke-width="1"/>
        <circle cx="132" cy="118" r="12" fill="rgba(180,220,255,0.07)" stroke="rgba(180,220,255,0.22)" stroke-width="0.9"/>
        <circle cx="78" cy="148" r="9" fill="rgba(180,220,255,0.06)" stroke="rgba(180,220,255,0.18)" stroke-width="0.8"/>
      </svg>
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:4px;letter-spacing:0.1em">Саноэр // трещины во льду // прибл.</div>
    </div>
    <div style="transform:rotate(3deg);">
      <div style="width:220px;height:220px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/sanoer_horizon.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:28px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/sanoer_horizon.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">Саноэр на горизонте // Туманник</div>
    </div>
  </div>
</div>

<div style="display:flex;gap:16px;align-items:flex-start;margin:10px 0;">
  <div style="flex:1;">
    <div class="r-data">
      <div class="r-row"><span class="r-key">ОРБИТА</span><span class="r-val">эллиптическая // медленная</span></div>
      <div class="r-row"><span class="r-key">ПЕРИОД</span><span class="r-val y">~18–20 земных дней // приблизительно</span></div>
      <div class="r-row"><span class="r-key">МИН. РАССТОЯНИЕ</span><span class="r-val">~80 000 км</span></div>
      <div class="r-row"><span class="r-key">МАКС. РАССТОЯНИЕ</span><span class="r-val">~200 000 км</span></div>
      <div class="r-row"><span class="r-key">ГРАВ. ВЛИЯНИЕ</span><span class="r-val" style="color:var(--dimmer)">почти никакое</span></div>
    </div>
  </div>
  <div style="flex:1;">
    <div class="hbox b" style="font-size:12px;">
      <strong style="color:var(--b)">ФАЗОВЁСТ.</strong> В моменты максимального сближения он становится ярче, свет отдаёт розовым. Тени на поверхности - почти розовые, держится где-то часа 3–4.
    </div>
    <div class="sticky blue t3" style="width:100%;font-size:12px;margin-top:10px;">наблюдал его неделями - почти не сдвигается, сначала это напрягало, потом дошло, что это и есть его особое поведение. Видимо, ему просто некуда спешить. Довольно забавное определение для... спутника.</div>
  </div>
</div>

<hr class="r-div"/>
<div class="r-sep">НОЭЛЛЬ // <span style="color:var(--yellow);animation:blink 2s infinite;letter-spacing:0.25em">ГЛАЗ</span></div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:14px 0;">
  <div style="flex-shrink:0;display:flex;flex-direction:column;gap:10px;width:220px;">
    <div style="transform:rotate(-3.5deg);">
      <div style="width:220px;height:220px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/noelle_overhead.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:28px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/noelle_overhead.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">Ноэлль в зените // 03:00 по местному</div>
    </div>
    <div style="transform:rotate(2deg);">
      <svg width="220" height="220" viewBox="0 0 220 220" style="opacity:0.7;display:block;">
        <circle cx="110" cy="110" r="90" fill="rgba(200,200,200,0.05)" stroke="rgba(200,200,200,0.22)" stroke-width="1.5"/>
        <circle cx="76" cy="76" r="20" fill="none" stroke="rgba(200,200,200,0.2)" stroke-width="1.2"/>
        <circle cx="140" cy="86" r="14" fill="none" stroke="rgba(200,200,200,0.18)" stroke-width="1"/>
        <circle cx="92" cy="150" r="24" fill="none" stroke="rgba(200,200,200,0.2)" stroke-width="1.2"/>
        <circle cx="152" cy="142" r="11" fill="none" stroke="rgba(200,200,200,0.15)" stroke-width="0.9"/>
        <circle cx="60" cy="134" r="15" fill="none" stroke="rgba(200,200,200,0.15)" stroke-width="0.9"/>
        <circle cx="110" cy="108" r="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="0.6"/>
      </svg>
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:4px;letter-spacing:0.1em">Ноэлль // кратеры // похоже на лицо</div>
    </div>
  </div>

  <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
    <p class="r-text">
      Он тоже нашёлся в навигационном файле - <span class="hi">Ноэлль</span>. Имя зацепило сразу - звучит почти уже более по-человечески. Я бы так свою собаку назвал.. если бы была.
      И оно ему идёт, потому что он реально <span class="mark-r">смотрит на тебя</span>, как бы жутко это ни звучало.<br/><br/>
      Диаметр: <span class="HUGE" style="font-size:26px">~700 км</span> - почти вдвое крупнее Саноэра.
      Поверхность каменистая, вся в кратерах. <span class="rainbow">Кратеры складываются в подобие лица</span>:
      два больших как глаза, один как рот, трещины - как черты лица.<br/><br/>
      Цвет: бледно-белый, сероватый, с тёмными пятнами. Иногда светло-золотистый, когда светит Садовая.
      <span class="ghost">альбедо среднее - свет отражает, но не так ярко, как Саноэр.</span>
    </p>
    <div class="r-note" style="transform:rotate(1.3deg);font-size:12px;">
      первый раз, когда понял, что это лицо - даже удивился, потом долго стоял и высматривал это. Я даже ради шутки показал это СОКЕ, а она мне выдает "распознавание лиц в случайных паттернах - известный когнитивный эффект". Мдааа СОКА, чувства юмора у тебя хоть отнимай.
    </div>
    <div class="hbox" style="font-size:12px;">
      Огромный белый диск, занимает почти треть неба. Кратеры видно без всякого телескопа.
      <span class="hi">Движется быстро</span> - если смотреть минут пять, реально замечаешь, как он сдвинулся.
    </div>
    <div class="r-soca">Приливный подъём грунта подтверждён трижды независимыми измерениями: 0.3 см ± 0.05 при прохождении Ноэлль в зените, Эффект слабый, но статистически устойчивый.</div>
  </div>
</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:10px 0;">
  <div style="flex-shrink:0;width:220px;">
    <div class="sticky red t2" style="width:100%;font-size:12px;">это явно не должно было быть лицом, но вот так вот вышло. Два кратера - глаза, один - рот. Можно смотреть с разных углов: форму все равно не теряет. что бы это ни было - либо сделано так специально (ага, кем??), либо я потихоньку схожу с ума.</div>
  </div>
  <div style="flex:1;">
    <div class="r-data" style="display:grid;grid-template-columns:1fr 1fr;gap:4px 20px;">
      <div class="r-row"><span class="r-key">ОРБИТА</span><span class="r-val r">почти круговая // быстрая</span></div>
      <div class="r-row"><span class="r-key">ПЕРИОД</span><span class="r-val r">~3–4 земных дня</span></div>
      <div class="r-row"><span class="r-key">МИН. РАССТОЯНИЕ</span><span class="r-val">~30 000 км</span></div>
      <div class="r-row"><span class="r-key">МАКС. РАССТОЯНИЕ</span><span class="r-val">~40 000 км</span></div>
      <div class="r-row"><span class="r-key">ГРАВ. ВЛИЯНИЕ</span><span class="r-val y">есть // приливный подъём 0.3 см</span></div>
    </div>
    <div class="r-soca" style="margin-top:10px;">Феномен парейдолии, оно же распознавание лиц в случайном рельефе - при наблюдении кратерных поверхностей встречается часто. Но симметрия этого образования превышает типичный случайный показатель на 40%. Это не доказательство замысла, а всего лишь статистическая аномалия.</div>
  </div>
</div>

<hr class="r-div"/>
<div style="font-size:8px;color:var(--dimmer);letter-spacing:0.12em;margin:18px 0 -8px;text-align:right;">// PD-04 DAY 0088 // 20 DEC 1973 // вернулся к этой вкладке после замеров орбит</div>

<div class="r-sep">ПОЧЕМУ ОНИ НИКОГДА НЕ СТАЛКИВАЮТСЯ</div>

<p class="r-text" style="margin-bottom:14px;">
  Мне казалось, они должны где-то пересекаться. Но потом я замерил их орбиты - и понял, почему этого не случается.
</p>

<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
    <div class="hbox b" style="font-size:12px;">
      <strong style="color:var(--b)">01. РАЗНЫЕ ПЛОСКОСТИ.</strong> Ноэлль идёт почти в плоскости экватора. Саноэр - под заметным углом к ней.
      Как два кольца на пальце: одно ровно, другое наискось. <span class="mark">Пересечься они не могут в принципе</span>.
    </div>
    <div class="hbox" style="font-size:12px;">
      <strong style="color:var(--g)">02. РАЗНЫЕ РАДИУСЫ.</strong> Ноэлль близко (30–40 тыс. км). Саноэр далеко (80–200 тыс. км).
      Между ними зазор в <span class="hi">~40 000 км</span> - как два кольцевых коридора станции: один по внутреннему кругу, другой по внешнему.
    </div>
    <div class="hbox y" style="font-size:12px;">
      <strong style="color:var(--yellow)">03. НЕ ПЕРЕСЕКАЮТСЯ ДАЖЕ В ПРОЕКЦИИ.</strong> Ближняя точка Саноэра (80 тыс. км) всё равно дальше дальней точки Ноэлля (40 тыс. км), и расстояние есть всегда.
    </div>
  </div>

  <!-- Схема двух колец -->
  <div style="flex-shrink:0;transform:rotate(-1deg);">
    <div style="width:260px;border:1px solid rgba(0,255,136,0.15);background:rgba(0,0,0,0.4);padding:10px;">
      <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">// TWO RINGS // разные плоскости, разные радиусы</div>
      <svg width="240" height="200" viewBox="0 0 240 200">
        <circle cx="120" cy="100" r="3" fill="rgba(0,255,136,0.4)" stroke="var(--g)" stroke-width="1"/>
        <text x="128" y="96" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.5)">Каэла</text>
        <!-- Ноэлль orbit - flat ellipse close -->
        <ellipse cx="120" cy="100" rx="55" ry="14" fill="none" stroke="rgba(200,200,200,0.4)" stroke-width="1.3"/>
        <circle cx="175" cy="100" r="5" fill="rgba(200,200,200,0.3)" stroke="#ccc" stroke-width="1"/>
        <text x="180" y="92" font-family="monospace" font-size="7" fill="rgba(200,200,200,0.55)">Ноэлль</text>
        <!-- Саноэр orbit - tilted larger ellipse -->
        <ellipse cx="120" cy="100" rx="100" ry="55" fill="none" stroke="rgba(100,180,255,0.35)" stroke-width="1.3" transform="rotate(-20 120 100)"/>
        <circle cx="30" cy="65" r="6" fill="rgba(120,180,255,0.25)" stroke="#7ab8ff" stroke-width="1"/>
        <text x="10" y="55" font-family="monospace" font-size="7" fill="rgba(120,180,255,0.5)">Саноэр</text>
        <text x="60" y="180" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.3)">зазор всегда ~40 000 км</text>
      </svg>
    </div>
  </div>
</div>

<div class="r-note" style="transform:rotate(-0.5deg);font-size:12px;">
  почему так вышло? скорее всего - итог долгой гравитационной эволюции, когда-то у спутников могли быть другие орбиты,
  но под влиянием Каэлы, друг друга и двойной звезды они устаканились в стабильные конфигурации.
  Ноэлль захватило близко и быстро - он слишком тяжёлый, чтобы его вышвырнуло. Саноэр остался далеко и медленно - он слишком мелкий, чтобы подобраться ближе.
</div>

<hr class="r-div"/>
<div class="r-sep">ДЕНЬ ДВУХ ГЛАЗ</div>

<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div class="sticky yellow t2" style="flex-shrink:0;width:200px;font-size:12px;">видел один раз, когда оба висели сразу. Саноэр на горизонте, Ноэлль в зените. Интересная картина вышла, на самом деле.</div>
  <div style="flex-shrink:0;transform:rotate(2deg);">
    <div style="width:260px;height:200px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
      <img src="${PD_IMG_BASE}картинк/kaela/two_moons_day.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
      <div style="font-size:26px;opacity:0.25;">📷</div>
      <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/two_moons_day.png</div>
    </div>
    <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">оба спутника видны одновременно</div>
  </div>
  <p class="r-text" style="flex:1;">
    Оба спутника видно сразу - Саноэр на горизонте, Ноэлль в зените. Небо становится <span class="hi">особенно глубоким</span>, а тени - двойными и разноцветными.
  </p>
</div>

<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <p class="r-text" style="flex:1;">
    Если честно - рядом друг с другом они смотрятся нелепо. Ноэлль почти вдвое больше Саноэра,
    и когда оба висят на небе разом - это как положить рядом прожектор и сигнальную лампочку от него.
    <span class="hi">Один явно главный, второй просто рад, что его взяли с собой.</span><br/><br/>
    Саноэр я не виню. Он маленький, далёкий и тихий. Но видеть их вместе - каждый раз забавно.
    <span class="ghost">и я каждый раз даже посмеяться хочется, когда вижу эту разницу.</span>
  </p>
  <div style="flex-shrink:0;width:340px;border:1px solid rgba(0,255,136,0.15);background:rgba(0,0,0,0.4);padding:12px;transform:rotate(-1deg);">
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:8px;text-align:center;">День Двух Глаз // примерный вид неба // относительные размеры</div>
    <svg width="316" height="170" viewBox="0 0 280 150">
      <circle cx="65" cy="75" r="32" fill="rgba(100,160,255,0.08)" stroke="rgba(140,190,255,0.28)" stroke-width="1.2"/>
      <line x1="42" y1="52" x2="88" y2="98" stroke="rgba(150,200,255,0.15)" stroke-width="1"/>
      <line x1="36" y1="80" x2="94" y2="64" stroke="rgba(150,200,255,0.1)" stroke-width="0.8"/>
      <circle cx="195" cy="75" r="58" fill="rgba(200,200,200,0.05)" stroke="rgba(200,200,200,0.2)" stroke-width="1.2"/>
      <circle cx="174" cy="58" r="13" fill="none" stroke="rgba(200,200,200,0.18)" stroke-width="0.9"/>
      <circle cx="212" cy="82" r="17" fill="none" stroke="rgba(200,200,200,0.18)" stroke-width="0.9"/>
      <circle cx="180" cy="92" r="9" fill="none" stroke="rgba(200,200,200,0.12)" stroke-width="0.7"/>
      <text x="65" y="118" text-anchor="middle" font-family="monospace" font-size="9" fill="rgba(140,190,255,0.5)">Саноэр</text>
      <text x="195" y="142" text-anchor="middle" font-family="monospace" font-size="9" fill="rgba(200,200,200,0.4)">Ноэлль</text>
    </svg>
  </div>
</div>

<hr class="r-div"/>
<div class="r-sep">ЧТО Я ХОЧУ ПОНЯТЬ</div>

<div style="display:flex;gap:18px;align-items:flex-start;">
  <ul class="r-list" style="flex:1;gap:8px;">
    <li>Почему кратеры Ноэлль складываются в лицо? <span class="ghost">Случайность? Или геология?</span></li>
    <li>Почему у Саноэра такие идеально прямые трещины? <span class="ghost">Тектоника? Или что-то ещё?</span></li>
    <li>Как спутники влияют на псионическое поле Каэлы?</li>
    <li>Почему орбиты именно такие? <span class="hi">Эволюция или вмешательство?</span></li>
  </ul>
  <div style="flex:1;">
    <div class="r-note" style="transform:rotate(0.7deg);font-size:11px;">
      Если копнуть глубже и включить эдакого астрономического профессионала - ответы вроде бы напрашиваются сами.
      <span style="text-decoration:line-through;opacity:0.4;">а может, это вообще не случайность, и кто-то сделал это лицо специально</span><br/>
      <span style="color:var(--dimmer);font-size:9px;">- Ага, знать бы кто тут вообще был до меня.</span>
    </div>
    <div class="r-soca" style="margin-top:10px;">Гипотеза о намеренном происхождении кратерного рельефа Ноэлль имеющимися данными не подтверждена и не опровергнута. Архивировано как открытый вопрос.</div>
  </div>
</div>
  `},

  /* ============================================================
   КАЛЕНДАРЬ
   ============================================================ */

  {id:'calendar',label:'// КАЛЕНДАРЬ',html:`
<div style="font-family:'VT323',monospace;font-size:36px;color:var(--b);letter-spacing:0.15em;margin-bottom:4px;animation:glitch1 10s infinite">КАК Я НАУЧИЛСЯ СЧИТАТЬ ВРЕМЯ</div>
<div style="font-size:9px;color:var(--dimmer);letter-spacing:0.2em;margin-bottom:4px;">CALENDAR TAB // filed by Koko, Pilot 01 // 9 месяцев на Каэле</div>
<div style="font-size:9px;letter-spacing:0.15em;margin-bottom:14px;">
  <span style="color:var(--b)">PD-04 // DAY 0114 // 15 JAN 1974</span>
  <span style="color:var(--dimmer);margin-left:10px;">// дополнено: <span style="text-decoration:line-through;opacity:0.4;">не помню точную дату</span> <span style="color:var(--g2)">DAY 0192 // 03 APR 1974</span></span>
</div>

<!-- ВВЕДЕНИЕ -->
<div style="display:flex;gap:18px;align-items:flex-start;margin-bottom:16px;">
  <p class="r-text" style="flex:1;">
    Когда я тут оказался, нормальных часов у меня не было. Точнее были, но считали они стандартное время,
    а Каэла живёт иначе. Дни здесь тянутся почти <span class="hi">59 часов</span>, а год - <span class="hi">286 стандартных суток</span>.
    Я быстро понял: не придумаю свою систему - просто потеряю счёт.<br/><br/>
    Я здесь уже <span class="mark">9 месяцев по стандартному счёту</span>. Этого хватило, чтобы наблюдать, мерить и записывать.
    Всё, что видел - движение звёзд, восходы и закаты, положение спутников, углы между светилами.
    Данные я собирал месяцами и на их основе собрал календарь Каэлы.<br/><br/>
    <span class="corrupt">Календарь неофициальный.</span> Я не сидел и не выдумывал его "потому что захотелось".
    Где данных хватало - брал их напрямую, где не хватало - достраивал теоретически,
    а потом <span class="hi">проверял, сходится или нет</span>. Это мой личный инструмент, пока что он меня не подвел.
  </p>
  <div class="sticky blue t3" style="flex-shrink:0;width:210px;font-size:12px;">СОКА пару раз правила мои черновые расчёты, где-то соглашалась сразу, где-то роняла "проверь ещё раз". И иногда права была она, а иногда и я.</div>
</div>

<div class="r-sep">КАК Я ЕГО СОСТАВЛЯЛ</div>

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">
  <div class="hbox" style="font-size:12px;"><strong style="color:var(--g)">ШАГ 1.</strong> Замерил длину дня, засёк время между двумя восходами Крестной. Вышло <span class="hi">~59 стандартных часов</span>, то есть один день Каэлы.</div>
  <div class="hbox b" style="font-size:12px;"><strong style="color:var(--b)">ШАГ 2.</strong> Замерил длину года. Отследил, когда Каэла возвращается в ту же точку орбиты относительно звёзд. Вышло <span class="hi">~286 стандартных дней</span>.</div>
  <div class="hbox y" style="font-size:12px;"><strong style="color:var(--yellow)">ШАГ 3.</strong> Перевёл в местные единицы: 1 день = 59 часов, 1 неделя = 5 дней (фазы спутников повторяются примерно каждые 5 дней), 1 месяц = 3 недели = 15 дней, 1 год = 8 месяцев = 120 дней.</div>
  <div class="hbox" style="font-size:12px;border-left-color:var(--g2);background:rgba(0,255,200,0.04);"><strong style="color:var(--g2)">ШАГ 4.</strong> Проверил глазами. Сверил расчёты с реальным движением звёзд и спутников - всё вроде как сошлось. Погрешность не больше <span class="hi">1–2%</span>.</div>
  <div class="hbox r" style="font-size:12px;"><strong style="color:var(--red)">ШАГ 5.</strong> Раздал названия. Всему, что видел - чтобы легче ориентироваться. Названия пришли сами собой, от того, что я видел и чувствовал в эти дни.</div>
</div>

<div class="r-sep">СТРУКТУРА КАЛЕНДАРЯ</div>

<table class="r-table" style="width:100%;margin-bottom:16px;">
  <tr><th>ЕДИНИЦА</th><th>ПРОДОЛЖИТЕЛЬНОСТЬ</th><th>В СТАНДАРТНЫХ ДНЯХ</th></tr>
  <tr><td class="hi">1 день</td><td>59 часов</td><td>~2.5 дня</td></tr>
  <tr><td class="hi">1 неделя</td><td>5 дней</td><td>~12.5 дней</td></tr>
  <tr><td class="hi">1 месяц</td><td>3 недели (15 дней)</td><td>~37.5 дней</td></tr>
  <tr><td class="hi">1 год</td><td>8 месяцев (120 дней)</td><td>~300 дней</td></tr>
</table>

<div class="r-note" style="transform:rotate(-0.5deg);font-size:12px;margin-bottom:16px;">
  реальный год Каэлы - ~286 стандартных дней, но я округлил до 300 для удобства. Разница в 14 дней - это погрешность моих измерений, но для моих целей она не важна.
</div>

<div class="r-sep">НЕДЕЛИ КАЭЛЫ (5 ДНЕЙ)</div>

<div class="cal-grid">
  <div class="cal-day"><div class="cal-day-name">ДЕНЬ 1</div><div class="cal-day-kaela" style="color:var(--dimmer)">Блуждень</div><div class="cal-day-desc">Облака более густые, свет рассеянный. Ощущается как типичный понедельник.</div></div>
  <div class="cal-day"><div class="cal-day-name">ДЕНЬ 2</div><div class="cal-day-kaela" style="color:var(--b)">Туманник</div><div class="cal-day-desc">Влажный день, роса на мхе, облака низко, Саноэр выглядит тусклым.</div></div>
  <div class="cal-day"><div class="cal-day-name">ДЕНЬ 3</div><div class="cal-day-kaela" style="color:var(--g2)">Мшевник</div><div class="cal-day-desc">Мох активнее всего... И все. Не особо ощутимый день. </div></div>
  <div class="cal-day"><div class="cal-day-name">ДЕНЬ 4</div><div class="cal-day-kaela" style="color:var(--yellow)">Лисовник</div><div class="cal-day-desc">День движения. Ноэлля ярче и быстрее, ветер сильнее обычного.</div></div>
  <div class="cal-day" style="border-color:rgba(0,204,255,0.3)"><div class="cal-day-name">ДЕНЬ 5</div><div class="cal-day-kaela" style="color:var(--b)">Фазень</div><div class="cal-day-desc">Хорошо видна фаза Саноэр, тени становятся розовыми.</div></div>
</div>

<div class="r-sep">МЕСЯЦЫ КАЭЛЫ (8 МЕСЯЦЕВ)</div>

<div class="month-grid">
  <div class="month-box"><div class="month-num">01</div><div class="month-name">Тумарь</div><div class="month-desc">Начало года. Крестная и Садовая под максимальным углом, облака плотные.</div></div>
  <div class="month-box"><div class="month-num">02</div><div class="month-name">Зеферь</div><div class="month-desc">Ветер стихает, небо чище, звёзды начинают сближаться.</div></div>
  <div class="month-box" style="border-color:rgba(255,80,40,0.2)"><div class="month-num" style="color:#ff7744">03</div><div class="month-name" style="color:#ff7744">Скваль</div><div class="month-desc">Перепады температуры, облака сгущаются, Садовая заметно ярче.</div></div>
  <div class="month-box" style="border-color:rgba(0,255,136,0.2)"><div class="month-num" style="color:var(--g)">04</div><div class="month-name" style="color:var(--g)">Мхиль</div><div class="month-desc">Расцвет мха, светится ярче всего в году, пик биолюминесценции.</div></div>
  <div class="month-box"><div class="month-num">05</div><div class="month-name">Ливерь</div><div class="month-desc">Дождливый месяц. Влага, тепло, но пасмурно, звёзды почти не видны.</div></div>
  <div class="month-box" style="border-color:rgba(0,180,255,0.25)"><div class="month-num" style="color:var(--b)">06</div><div class="month-name" style="color:var(--b)">Астраль</div><div class="month-desc">Самый ясный месяц, Крестная и Садовая почти на одной линии.</div></div>
  <div class="month-box"><div class="month-num">07</div><div class="month-name">Флорень</div><div class="month-desc">Цветение. Растения становятся более яркими и заметно цветут.</div></div>
  <div class="month-box" style="border-color:rgba(100,100,100,0.15)"><div class="month-num" style="color:var(--dimmer)">08</div><div class="month-name" style="color:var(--dimmer)">Мракель</div><div class="month-desc">Конец года, звёзды расходятся, температура падает на 1–2°.</div></div>
</div>

<hr class="r-div"/>
<div style="font-size:8px;color:var(--dimmer);letter-spacing:0.12em;margin:18px 0 -8px;text-align:right;">// PD-04 DAY 0140 // 10 FEB 1974 // особые дни добавил позже - сначала не замечал закономерности</div>

<div class="r-sep">ОСОБЫЕ ДНИ В КАЛЕНДАРЕ</div>

<p class="r-text" style="margin-bottom:16px;">
  Я заметил: в течение года попадаются дни, когда положение звёзд или спутников складывается в <span class="rainbow">уникальные конфигурации</span>, я же их записал и дал названия.
</p>

<!-- CARD GRID - особые дни -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:14px;">

  <!-- Фазовест -->
  <div style="border:1px solid rgba(255,200,0,0.25);background:rgba(30,22,0,0.35);padding:14px 16px;position:relative;">
    <svg width="50" height="50" viewBox="0 0 50 50" style="position:absolute;top:10px;right:10px;opacity:0.5;">
      <circle cx="25" cy="25" r="18" fill="none" stroke="rgba(255,200,0,0.3)" stroke-width="1"/>
      <circle cx="25" cy="25" r="6" fill="rgba(255,200,0,0.4)"/>
      <circle cx="40" cy="25" r="3" fill="rgba(255,200,0,0.6)"/>
    </svg>
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;">КАЖДУЮ НЕДЕЛЮ</div>
    <div style="font-family:'VT323',monospace;font-size:24px;color:var(--yellow);margin:4px 0 8px;">ФАЗОВЕСТ</div>
    <div style="font-size:11px;color:var(--dim);line-height:1.6;">Саноэр на максимальной яркости, тени розовеют на 3–4 часа. Подходит на минимальное расстояние.</div>
  </div>

  <!-- День Двух Глаз -->
  <div style="border:1px solid rgba(0,255,200,0.25);background:rgba(0,30,25,0.35);padding:14px 16px;position:relative;">
    <svg width="50" height="50" viewBox="0 0 50 50" style="position:absolute;top:10px;right:10px;opacity:0.5;">
      <circle cx="15" cy="35" r="5" fill="rgba(140,190,255,0.4)" stroke="rgba(140,190,255,0.5)" stroke-width="0.8"/>
      <circle cx="36" cy="15" r="11" fill="none" stroke="rgba(200,200,200,0.4)" stroke-width="1"/>
      <circle cx="32" cy="11" r="2.5" fill="none" stroke="rgba(200,200,200,0.3)" stroke-width="0.6"/>
    </svg>
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;">РАЗ В ~5 НЕДЕЛЬ</div>
    <div style="font-family:'VT323',monospace;font-size:24px;color:var(--g2);margin:4px 0 8px;">ДЕНЬ ДВУХ ГЛАЗ</div>
    <div style="font-size:11px;color:var(--dim);line-height:1.6;">Саноэр и Ноэлль видны одновременно, псионическое поле ощущается отчётливее.</div>
  </div>

  <!-- День Максимального угла -->
  <div style="border:1px solid rgba(255,34,68,0.25);background:rgba(30,5,8,0.35);padding:14px 16px;position:relative;">
    <svg width="50" height="50" viewBox="0 0 50 50" style="position:absolute;top:10px;right:10px;opacity:0.5;">
      <circle cx="6" cy="25" r="5" fill="rgba(255,80,20,0.4)"/>
      <circle cx="44" cy="25" r="4" fill="rgba(180,100,20,0.35)"/>
      <line x1="6" y1="25" x2="44" y2="25" stroke="rgba(255,34,68,0.2)" stroke-width="0.8" stroke-dasharray="2,2"/>
    </svg>
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;">РАЗ В ГОД // ТУМАРЬ</div>
    <div style="font-family:'VT323',monospace;font-size:20px;color:var(--red);margin:4px 0 8px;">МАКС. УГОЛ</div>
    <div style="font-size:11px;color:var(--dim);line-height:1.6;">Крестная и Садовая по разные стороны неба, тени особенно длинные, расходятся в стороны.</div>
  </div>

  <!-- День Минимального угла -->
  <div style="border:1px solid rgba(150,150,150,0.2);background:rgba(15,15,15,0.35);padding:14px 16px;position:relative;">
    <svg width="50" height="50" viewBox="0 0 50 50" style="position:absolute;top:10px;right:10px;opacity:0.5;">
      <circle cx="25" cy="25" r="5" fill="rgba(255,80,20,0.35)"/>
      <circle cx="27" cy="25" r="3" fill="rgba(180,100,20,0.3)"/>
    </svg>
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;">РАЗ В ГОД // МРАКЕЛЬ</div>
    <div style="font-family:'VT323',monospace;font-size:20px;color:var(--dimmer);margin:4px 0 8px;">МИН. УГОЛ</div>
    <div style="font-size:11px;color:var(--dim);line-height:1.6;">Крестная и Садовая почти в одной точке неба, тени почти сливаются в одну.</div>
  </div>

  <!-- День Крестной -->
  <div style="border:1px solid rgba(255,120,68,0.25);background:rgba(30,15,5,0.35);padding:14px 16px;position:relative;">
    <svg width="50" height="50" viewBox="0 0 50 50" style="position:absolute;top:10px;right:10px;opacity:0.6;">
      <circle cx="25" cy="25" r="10" fill="rgba(255,80,20,0.4)" stroke="#ff5522" stroke-width="1"/>
    </svg>
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;">РАЗ В ГОД // СКВАЛЬ</div>
    <div style="font-family:'VT323',monospace;font-size:20px;color:#ff7744;margin:4px 0 8px;">ДЕНЬ КРЕСТНОЙ</div>
    <div style="font-size:11px;color:var(--dim);line-height:1.6;">Садовая скрыта за Крестной, видна только одна звезда, длится 3–4 дня.</div>
  </div>

  <!-- День Садовой -->
  <div style="border:1px solid rgba(0,180,255,0.25);background:rgba(0,15,30,0.35);padding:14px 16px;position:relative;">
    <svg width="50" height="50" viewBox="0 0 50 50" style="position:absolute;top:10px;right:10px;opacity:0.6;">
      <circle cx="25" cy="25" r="10" fill="rgba(200,120,40,0.4)" stroke="#cc7733" stroke-width="1"/>
    </svg>
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;">РАЗ В ГОД // АСТРАЛЬ</div>
    <div style="font-family:'VT323',monospace;font-size:20px;color:var(--b);margin:4px 0 8px;">ДЕНЬ САДОВОЙ</div>
    <div style="font-size:11px;color:var(--dim);line-height:1.6;">Крестная скрыта за Садовой, небо более светлое. Ровно через полгода после Дня Крестная.</div>
  </div>

</div>

<div style="display:flex;gap:14px;align-items:flex-start;">
  <div class="sticky yellow t2" style="flex:1;font-size:12px;">Фазовест - мой любимый день недели, без вариантов. Розовые тени каждый раз выглядят очень красиво.</div>
  <div class="sticky green t4" style="flex:1;font-size:12px;">в День Двух Глаз псионическое поле особенно заметно, чувствую её отчётливее.</div>
</div>

<hr class="r-div"/>
<div class="r-sep">РИСУНОК // 8 ПОЗИЦИЙ КАЭЛЫ НА ОРБИТЕ</div>

<div style="margin:16px 0;">
  <div style="width:100%;aspect-ratio:1000/220;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px;cursor:pointer;">
    <img src="${PD_IMG_BASE}картинк/kaela/calendar_sketch.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
    <div style="font-size:30px;opacity:0.25;">📷</div>
    <div style="font-size:9px;color:var(--dimmer);text-align:center;padding:0 8px;">картинк/kaela/calendar_sketch.png</div>
  </div>
  <div style="font-size:9px;color:var(--dimmer);margin-top:5px;text-align:center;letter-spacing:0.08em;">
    8 положений Каэлы на орбите, по одному на каждый месяц. Видны: позиция 1 (Тумарь) - максимальный угол, позиция 3 (Скваль) - Крестная закрывает Садовая, позиция 6 (Астраль) - Садовая закрывает Крестная, позиция 8 (Мракель) - минимальный угол.
  </div>
</div>

<hr class="r-div"/>
<div class="r-sep">МОИ ЗАМЕТКИ</div>

<div style="display:flex;flex-direction:column;gap:10px;">
  <div class="r-note" style="transform:rotate(-0.6deg);font-size:12px;">
    <strong style="color:var(--dimmer);font-size:10px;">О КАЛЕНДАРЕ:</strong><br/>
    «Дни совпадают с движением звёзд, месяцы - с положением спутников. Значит, календарь и правда работает так, как мне было нужно. По-моему, это целое открытие - я изобрёл время!!! <span style="text-decoration:line-through;opacity:0.4;">осталось только придумать часы</span>»
  </div>
  <div class="r-note" style="transform:rotate(0.5deg);font-size:12px;border-left-color:#ff7744;">
    <strong style="color:#ff7744;font-size:10px;">О ДНЕ КРЕСТНОЙ:</strong><br/>
    «Сегодня видел только Крестная, Садовая пропала. Я знал, что так будет, но когда увидел своими глазами - даже удивился. Странно это - видеть одну звезду вместо двух, небо казалось каким-то пустым и непривычным.»
  </div>
  <div class="r-note" style="transform:rotate(-0.3deg);font-size:12px;border-left-color:var(--b);">
    <strong style="color:var(--b);font-size:10px;">О ДНЕ САДОВОЙ:</strong><br/>
    «Сегодня только Садовая, Крестная не видать, небо стало светлее обычного. Садовая ярче Крестной - вот день и вышел особенно ярким.»
  </div>
</div>

<hr class="r-div"/>
<div class="r-sep">ЧТО Я ХОЧУ ПОНЯТЬ</div>

<div style="display:flex;gap:18px;align-items:flex-start;">
  <ul class="r-list" style="flex:1;gap:8px;">
    <li>Будет ли этот календарь работать через годы, когда звёзды сдвинутся? <span class="ghost">(знаю, что орбита прецессирует, но пока изменений не вижу)</span></li>
    <li>Есть ли другие особые дни, которые я проглядел?</li>
    <li>Могут ли День Крестной или День Садовой совпасть с Днём Двух Глаз? <span class="hi">проверю это позже</span></li>
  </ul>
  <div style="flex:1;">
    <div class="r-soca">Прецессия орбиты на масштабе наблюдений пилота (9 месяцев) даёт сдвиг менее 1°. Изменения в календарной структуре станут заметны не ранее чем через 3–4 года. Точность текущий календарь сохранит. Пересчитывать будешь ты, напомню.</div>
  </div>
</div>
  `},

  /* ============================================================
   НАБЛЮДЕНИЯ
   ============================================================ */

  {id:'observations',label:'// НАБЛЮДЕНИЯ',html:`
<div style="font-family:'VT323',monospace;font-size:42px;color:var(--g);text-shadow:0 0 25px rgba(0,255,136,0.4);letter-spacing:0.1em;margin-bottom:2px;animation:glitch1 9s infinite">ПОЛЕВЫЕ ЗАМЕТКИ</div>
<div style="font-size:9px;color:var(--dimmer);letter-spacing:0.2em;margin-bottom:4px;">OBSERVATIONS TAB // полное наблюдение за всем что есть на Каэле // filed by Koko, Pilot 01</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.15em;margin-bottom:16px;">PD-04 // DAY 0001 // 24 SEP 1973 - продолжается до сих пор</div>

<div class="r-note" style="font-size:13px;line-height:2;transform:rotate(-0.4deg);margin-bottom:18px;">
  Ну, начнем с того что тут уже я писал полностью свободно, без всякого шаблона. СОКА просила "организовать по категориям" - а оно мне надо? Нет конечно. Тут всё в том порядке, в каком я это вспоминаю и записываю. Что-то писал прямо в день, когда увидел, что-то додумывал позже - дату стараюсь отмечать всегда. - Koko
</div>

<!-- ------------------------------------------- -->
<!-- 1. ОБЩЕЕ ОЩУЩЕНИЕ ПЛАНЕТЫ // ПЕРВЫЙ ДЕНЬ -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:10px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">01</div>
  <div class="r-sep" style="flex:1;margin:0;">ОБЩЕЕ ОЩУЩЕНИЕ ПЛАНЕТЫ // ПЕРВЫЙ ДЕНЬ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0001 // 24 SEP 1973</div>

<p class="r-text">
  ладно, начну с самого начала, иначе потом забуду детали.<br/><br/>
  посадка вышла паршивой, честно - "посадкой" в нормальном смысле это назвать сложно. <span class="mark-r">ПАНДЕМОНИУМ был неисправен ещё до входа в атмосферу Каэлы</span> - это не её вина, отдельно фиксирую.
  где-то на подлёте отказала часть стабилизаторов, и я уже думал, что мы просто размажемся.
  Я где-то упоминал, что приземлились мы спокойно, но это не отменяет того факта, что приземление на поверхность было крепким - по ощущениям в момент касания было что-то около <span class="hi">4–5g</span>, может больше: точных данных с акселерометра нет, приборы на время вырубились.
</p>

<div class="g2" style="margin:14px 0;">
  <div class="r-data">
    <div class="r-row"><span class="r-key">УДАР ПРИ ПОСАДКЕ</span><span class="r-val r">~4–5g // оценочно</span></div>
    <div class="r-row"><span class="r-key">СОСТОЯНИЕ КОКО</span><span class="r-val">цел // без перелома и сотрясения</span></div>
    <div class="r-row"><span class="r-key">ТРАВМЫ</span><span class="r-val y">синяк на плече // рассечение брови</span></div>
    <div class="r-row"><span class="r-key">СОСТОЯНИЕ КОРАБЛЯ</span><span class="r-val r">пострадал сильнее меня</span></div>
  </div>
  <div class="r-soca">Пилот показывал признаки лёгкого посттравматического возбуждения, обычного при аварийной посадке: учащённое дыхание, расширенные зрачки. Координация и зрачковая реакция - в норме, сотрясение исключено. Он, разумеется, заявил, что "в порядке", раньше, чем была закончена проверка.</div>
</div>

<div style="display:flex;gap:22px;margin:14px 0;">
  <div style="flex:1;min-width:0;">
    <div class="r-smaily" style="margin:0 0 14px;">ЖИВ! Официально подтверждаю: бровь заживёт, плечо перестанет ныть в скором времени, а вот та царапина на обшивке - это уже не по моей части :). Держался ты молодцом - для того, кто только что упал с неба.</div>
    <p class="r-text" style="margin:0;">
      по себе: цел. Ни сотрясения, ни переломов, синяк на плече от ремня, рассечение на левой брови - ерунда.
      голова звенела первые пару часов, но это нормальная реакция на удар, не сотрясение.
      в общем, повезло, а вот кораблю досталось сильнее, чем мне.<br/><br/>
      а потом я вышел наружу.
    </p>
  </div>
  <div class="crash-photo" style="flex:1;min-width:0;">${ph("картинк/kaela/crash_landing.png","ПАНДЕМОНИУМ после посадки // и флаг Астралиса!!","","center","tilt2")}</div>
</div>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// ПЕРВЫЕ ОЩУЩЕНИЯ // по порядку, как они приходили</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;gap:10px;align-items:baseline;">
      <span style="font-family:'VT323',monospace;font-size:20px;color:var(--b);width:24px;">1</span>
      <span class="r-text" style="font-size:12px;"><span class="hib">гравитация</span> - 0.91g. Цифру знал, но одно дело знать, другое - почувствовать, как тело вдруг стало чуть легче. Шагнул и качнулся вперёд: мозг-то рассчитывал на привычный вес.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:baseline;">
      <span style="font-family:'VT323',monospace;font-size:20px;color:var(--g2);width:24px;">2</span>
      <span class="r-text" style="font-size:12px;"><span class="hi">воздух</span> - через фильтр не такой плотный, как привычный, но и не разреженный, дышится нормально. Странное чувство - будто воздух чуть более "пустой", хотя по составу, казалось, там всё что нужно.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:baseline;">
      <span style="font-family:'VT323',monospace;font-size:20px;color:var(--yellow);width:24px;">3</span>
      <span class="r-text" style="font-size:12px;"><span class="mark-y">тишина</span> - вот это было по-настоящему странно. Ждал хоть какого-то звука - почти ничего, не абсолютная тишина, а какая-то <em>плотная</em> тишина. Лично я привык, что на фоне всегда что-то шумит или гудит.</span>
    </div>
  </div>
</div>

<div class="r-soca">Микрофоны фиксируют ту же картину, что описывает пилот: уровень фонового шума на 60–70% ниже типичного для открытой местности с растительностью такой плотности.</div>

<p class="r-text" style="margin-top:12px;">
  а потом я её увидел.<br/><br/>
  ладно, я знаю, как это прозвучит. Но первое слово, что всплыло у меня в голове, когда я оглянулся вокруг, - было <span class="HUGE" style="font-size:25px;">"живая"</span>.
  Не в смысле "тут есть растения, значит планета живая" - это банальщина, любая планета с биосферой технически "живая".
  Я про другое. Было чувство, что <span class="ul">сама почва</span> под ногами - не просто грунт для жизни, а что-то цельное, единое, и оно нас <span class="rainbow">заметило</span>.<br/><br/>
Записал я это сразу, в первые двадцать минут после выхода, пока ощущение было свежим - знал, что если потяну, рациональная часть мозга это объяснение перепишет и затрёт,
  <span class="corrupt">а я не хочу, чтобы оно стёрлось.</span>
</p>

<div style="display:flex;gap:22px;align-items:center;margin:14px 0;">
  <div class="surface-photo" style="flex:0 0 30%;min-width:0;">${ph("картинк/kaela/koko_surface.png","я на поверхности, общий план // первое фото здесь, ещё в шоковом состоянии, если честно","","center","tilt1")}</div>
  <div class="r-soca" style="flex:1;margin:0;">Пилот показывал признаки лёгкого посттравматического возбуждения, обычного при аварийной посадке, это могло влиять на восприятие первых минут на поверхности. Отмечаю не чтобы обесценить наблюдение, а для полноты картины.</div>
</div>

<div style="display:flex;gap:16px;align-items:flex-start;margin:14px 0;">
  <div class="sticky purple t3" style="max-width:200px;flex-shrink:0;">первая ночь (точнее - первый цикл темноты, которой тут толком и нет) прошла без сна. Я просто сидел у обломков и смотрел... И думал, само собой.</div>
  <div class="r-smaily" style="flex:1;margin:0;">Не спал всю ночь - зато разглядывал новую планету заметно дольше, чем другую любую планету до этого!! Считаю это удачным местом для дальнейших расследований!!</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 2. АТМОСФЕРА И ВОЗДУХ -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">02</div>
  <div class="r-sep" style="flex:1;margin:0;">АТМОСФЕРА И ВОЗДУХ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0008 // 01 OCT 1973</div>

<p class="r-text">
  Вернулся к этой теме через неделю, когда уже пришёл в себя и смог делать нормальные замеры, а не просто описывать ощущения.<br/><br/>
  Состав воздуха: <span class="hib">78% N₂, 18% O₂</span>, остальное - органические пары и флуоресцентные соединения.
  Но здесь хочу расписать подробнее, потому что по одним цифрам не понять, каково это на самом деле.
</p>

<div class="g3" style="margin:14px 0;">
  <div class="hbox" style="font-size:12px;">
    <strong style="color:var(--g)">ЗАЧЕМ ФИЛЬТР</strong><br/>
    без него дышать можно (проверял - 23 минуты, см. паспорт), но частицы при долгой экспозиции вызывают головокружение, сетка отсекает всё крупнее ~2 микрон.
  </div>
  <div class="hbox b" style="font-size:12px;">
    <strong style="color:var(--b)">ЗАПАХ</strong><br/>
    "ледяная вода" - это не запах холода, а ощущение <em>плотности</em> воздуха на вдохе, будто втягиваешь что-то более вязкое, с лёгким металлическим привкусом.
  </div>
  <div class="hbox y" style="font-size:12px;">
    <strong style="color:var(--yellow)">ОРГАНИКА</strong><br/>
    концентрация органических паров ~3–4% от объёма атмосферы. Грубая оценка по спектрометру, погрешность ±1%.
  </div>
</div>

<div class="r-sep" style="margin-top:20px;">ФЛУОРЕСЦЕНЦИЯ // ГЛАВНОЕ, ПРО ЧТО Я ХОЧУ НАПИСАТЬ ТУТ</div>

<div style="display:flex;gap:22px;margin:14px 0;">
  <div class="crash-photo" style="flex:0 0 24%;min-width:0;">${ph("картинк/kaela/air_glow.png","ночной воздух с флуоресцентными частицами - снято с длинной выдержкой, иначе глазом почти не видно","","center","tilt3")}</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0 0 12px;">
      частицы в воздухе светятся. Не всё время - в основном свечение видно в темноте (точнее, в той тусклой полу-тьме, которая тут максимум) или при определённом угле света от Крестной/Садовой.
      впервые заметил это на третий день: стоял снаружи в сумерках и увидел, что воздух перед лицом будто слегка мерцает - мелкие точки, голубовато-фиолетовые, плывут очень медленно, как пыль в луче, только сами дают свет, а не отражают его.<br/><br/>
      сфотографировать сразу не вышло - частицы слишком тусклые для обычной съёмки. Снимок слева сделан с выдержкой около <span class="hi" style="font-family:'VT323',monospace;font-size:18px;">8 секунд</span> (настройки камеры Пандемониума, точно регулировать я не мог), и даже так свечение на фото едва уловимо - глазом в темноте оно заметнее.
    </p>
    <div class="r-soca" style="margin:0;">Спектральный анализ флуоресцентных частиц даёт пик излучения в диапазоне 480–520 нм (голубовато-зелёный). Происхождение частиц не установлено: возможно биологическое (споры, пыльца микроорганизмов), возможно минеральное (мелкодисперсная пыль с кристаллическими включениями). Для точного ответа нужен лабораторный анализ, недоступный на борту.</div>
  </div>
</div>

<div class="r-note" style="transform:rotate(-0.7deg);font-size:12px;margin-top:10px;">
  честно - не уверен, биологическое это или минеральное. Иногда смотрю на это свечение и думаю: а вдруг это и есть Каэла, в самом буквальном смысле - просто разлита в воздухе мельчайшими частицами. Знаю, звучит как бред уставшего человека в два часа ночи (по местному счёту - свой, но время в любом случае позднее). но мысль все равно интересно записать.
</div>

<div class="clearfix"></div>

<div class="hbox r" style="margin:14px 0;font-size:13px;">
  заметил ещё одну деталь, которую раньше не отмечал: концентрация флуоресцентных частиц <span class="mark-r">выше</span> у скоплений мха и биолюминесцентных растений, чем на открытых каменистых участках.
  Разница, по прикидкам, раза в <span class="hi">2–3</span> (не точный замер, на глаз по плотности свечения). Возможно, источник частиц - сами растения, что-то вроде пыльцы или спор.
  <span class="hi">Надо проверить ближе к разделу про грибы и растения.</span>
</div>

<div style="display:flex;gap:20px;align-items:flex-start;margin-top:14px;">
  <div style="flex:1;min-width:0;">
    <table class="r-table" style="width:100%;margin:0;">
      <tr><th>ПАРАМЕТР</th><th>ЗНАЧЕНИЕ</th><th>КОММЕНТАРИЙ</th></tr>
      <tr><td class="hi">N₂</td><td>78%</td><td style="color:var(--dimmer)">стандартно для дышащей атмосферы</td></tr>
      <tr><td class="hi">O₂</td><td>18%</td><td style="color:var(--dimmer)">чуть ниже земной нормы (21%)</td></tr>
      <tr><td class="y">органические пары</td><td>~3–4%</td><td style="color:var(--dimmer)">источник неустановлен</td></tr>
      <tr><td class="b">флуор. частицы</td><td>переменная</td><td style="color:var(--dimmer)">пик 480–520 нм, выше у растительности</td></tr>
      <tr><td>давление</td><td>~0.94 атм</td><td style="color:var(--dimmer)">см. паспорт</td></tr>
    </table>
  </div>
  <div class="sticky green t2" style="max-width:200px;flex-shrink:0;">воздух тут будто живой в прямом смысле - не просто среда для дыхания, а что-то, что само по себе действует: копит, светится, реагирует. Ни об одной другой планете я такого не слышал даже в теории.. Ну, либо я просто плохо осведомлен.</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 3. КЛИМАТ И ПОГОДА -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">03</div>
  <div class="r-sep" style="flex:1;margin:0;">КЛИМАТ И ПОГОДА</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0025 // 19 OCT 1973</div>

<p class="r-text">
  Три недели здесь, и я наконец могу сказать про погоду что-то осмысленное, а не просто "тут тепло и хорошо".<br/><br/>
  <strong style="color:var(--g)">Почему нет резких смен сезонов.</strong> наклон оси Каэлы я уже мерил - <span class="hi">11.7°</span> (паспорт, день 21).
  для сравнения: у Марса наклон ~<span class="hib">25°</span> - то есть Каэла наклонена примерно вдвое слабее.
  Это и есть прямая причина, почему сезоны тут такие мягкие: угол падения света от Крестной и Садовая за год почти не меняется.
</p>

<div class="g3" style="margin:14px 0;">
  <div class="r-stat" style="text-align:center;"><div class="r-stat-lbl">НАКЛОН KAELA</div><div class="r-stat-val">11.7<span class="r-stat-unit">°</span></div></div>
  <div class="r-stat" style="text-align:center;"><div class="r-stat-lbl">НАКЛОН ЗЕМЛИ</div><div class="r-stat-val" style="color:var(--dimmer)">23.5<span class="r-stat-unit">°</span></div></div>
  <div class="r-stat" style="text-align:center;"><div class="r-stat-lbl">НАКЛОН МАРСА</div><div class="r-stat-val" style="color:var(--dimmer)">25<span class="r-stat-unit">°</span></div></div>
</div>

<p class="r-text">
  попробовал прикинуть разницу инсоляции (сколько света получает поверхность) между "летней" и "зимней" точкой условного года Каэлы.
  По моим расчётам (грубым - я не астрофизик, считал простой тригонометрией) разница всего <span class="mark-y">~6–8%</span>.
  У планеты с заметным наклоном оси между сезонными крайностями было бы под <span class="hi">30%</span>. Вот и весь секрет стабильной температуры.
</p>

<div class="hbox b" style="margin:14px 0;font-size:13px;">
  <strong style="color:var(--b)">ТЕМПЕРАТУРА.</strong> +16…+22°C круглый год - фиксировал ежедневно 21 день, замеры утром/днём/вечером (условно - настоящих утра и вечера тут нет, ориентируюсь по углу звёзд).
  зафиксированный минимум - <span class="hi" style="font-family:'VT323',monospace;font-size:18px;">+14.2°C</span> (один раз, в апоцентре орбиты), максимум - <span class="hi" style="font-family:'VT323',monospace;font-size:18px;">+23.8°C</span> (в перицентре).
  разброс - всего <span class="rainbow">9.6 градуса</span> за весь период наблюдений. На нормальной планете с сезонами в одной точке за год легко набегает 40–50 градусов.
</div>
<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// МОИ ЗАМЕРЫ ТЕМПЕРАТУРЫ // 21 ДЕНЬ НАБЛЮДЕНИЙ</div>
  <svg width="100%" height="100" viewBox="0 0 480 100" style="display:block;">
    <line x1="20" y1="20" x2="20" y2="80" stroke="rgba(0,255,136,0.2)" stroke-width="1"/>
    <line x1="20" y1="80" x2="460" y2="80" stroke="rgba(0,255,136,0.2)" stroke-width="1"/>
    <text x="8" y="24" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.4)">24°</text>
    <text x="8" y="52" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.4)">19°</text>
    <text x="8" y="80" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.4)">14°</text>
    <polyline points="30,52 60,48 90,55 120,50 150,46 180,53 210,49 240,58 270,51 300,44 330,56 360,50 390,47 420,52 450,49" fill="none" stroke="var(--g)" stroke-width="1.5" opacity="0.7"/>
    <line x1="30" y1="64" x2="450" y2="64" stroke="rgba(255,200,0,0.15)" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="455" y="67" font-family="monospace" font-size="6" fill="rgba(255,200,0,0.4)">ø ~18.5°</text>
  </svg>
  <div style="font-size:8px;color:var(--dimmer);text-align:center;margin-top:4px;">21 точка данных // линия почти плоская - это и есть главное наблюдение</div>
</div>

<p class="r-text">
  <strong style="color:var(--g2)">почему нет снега, ураганов и засух.</strong> снег - очевидно: температура ни разу не падала даже близко к нулю.
  Ураганы - для них нужны резкие перепады давления между зонами, а тут давление ровное (~<span class="hi">0.94 атм</span>) и температура почти не гуляет в пространстве:
  за эти недели я пешком обошёл радиус примерно <span class="hi">40 км</span> от места посадки - разброс температур между точками не больше <span class="hi">1–2 градусов</span>.
  Засухи - вода циркулирует без остановки (раздел 4), долгих сухих периодов нет.
</p>

<div class="r-sep" style="margin-top:18px;">ОСАДКИ // ДВА ДОЖДЯ КОТОРЫЕ Я ЗАСТАЛ</div>

<div class="g2" style="margin:12px 0;">
  <div class="r-data">
    <div class="r-row"><span class="r-key">ДОЖДЬ 1</span><span class="r-val">морось // ~40 минут</span></div>
    <div class="r-row"><span class="r-key">КАПЛИ</span><span class="r-val">мелкие, тёплые</span></div>
    <div class="r-row"><span class="r-key">ТЕМП. ВОДЫ</span><span class="r-val y">≈ температуре воздуха, −2..3°C</span></div>
  </div>
  <div class="r-data">
    <div class="r-row"><span class="r-key">ДОЖДЬ 2</span><span class="r-val r">сильнее // 1ч 12мин</span></div>
    <div class="r-row"><span class="r-key">ИНТЕНСИВНОСТЬ</span><span class="r-val">сравнима с лёгким земным дождём</span></div>
    <div class="r-row"><span class="r-key">ВПИТЫВАНИЕ ЛУЖИ</span><span class="r-val hi">⌀50см за 8–10 минут</span></div>
  </div>
</div>

<div style="display:flex;gap:22px;margin:14px 0;">
  <div style="flex:1;min-width:0;">
    <div class="r-soca" style="margin:0 0 12px;">Низкая вариативность температуры и давления исключает формирование конвективных ячеек, достаточно мощных для штормовых систем. Облачный покров скорее равномерно насыщается влагой и сбрасывает её малыми порциями, чем копит энергию для крупных осадков.</div>
    <div class="r-note" style="transform:rotate(-0.6deg);margin:0;">
      честно, я готовился к тому, что планета с двумя солнцами окажется экстремальной - жара, бури, что-нибудь драматичное. А вышло наоборот: самая мягкая погода, что я видел за все свои путешествия.
    </div>
  </div>
  <div class="crash-photo" style="flex:0 0 22%;min-width:0;">${ph("картинк/kaela/gentle_rain.png","тёплый мелкий дождь на Каэле - снято во время второго дождя, 1ч12мин","","center","tilt2")}</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 4. ВОДА (ОКЕАНЫ, ОЗЁРА, РЕКИ) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">04</div>
  <div class="r-sep" style="flex:1;margin:0;">ВОДА // ОКЕАНЫ, ОЗЁРА, РЕКИ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0034 // 28 OCT 1973</div>

<p class="r-text">
  нашёл крупный водоём примерно в <span class="hi">12 км</span> от места посадки, дошёл за день пешком (с остановками - при такой гравитации можно идти долго и почти не уставать, довольно знакомое ощущение).<br/><br/>
  <strong style="color:var(--b)">есть ли большие океаны?</strong> Да, но не гигантские. Точные размеры всей водной системы я назвать не могу - Каэла большая, всю её за миссию мне физически не обойти.
  Но тот океан, что я нашёл, по прикидкам (смотрел с возвышенности, плюс прикинул по скорости ходьбы вдоль берега) - береговая линия видимой части тянется минимум на <span class="mark">15–20 км</span> в одну сторону, дальше продолжение прячет горизонт.
  На "огромный океан" по планетарным меркам не тянет, но и озерцом это точно не назвать.
</p>

<div class="r-sep" style="margin-top:16px;">АНАЛИЗ ВОДЫ // ПРОБА СОКИ</div>

<div style="display:flex;gap:22px;align-items:flex-start;margin:12px 0;">
  <div style="flex:0 0 30%;min-width:0;">
    <div class="r-data">
      <div class="r-row"><span class="r-key">PH</span><span class="r-val">~7.4 // слабощелочная</span></div>
      <div class="r-row"><span class="r-key">МИНЕРАЛИЗАЦИЯ</span><span class="r-val">низкая // как родниковая на Земле</span></div>
      <div class="r-row"><span class="r-key">ПРОЗРАЧНОСТЬ</span><span class="r-val hi">видимость ~5–6 метров</span></div>
      <div class="r-row"><span class="r-key">ТЕМП. ВОДЫ</span><span class="r-val y">+18°C // близко к воздуху</span></div>
    </div>
  </div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--yellow)">горячие источники.</strong> Их тут хватает - за вылазки нашёл уже <span class="HUGE" style="font-size:29px;">3</span> штуки, все в радиусе 20 км от посадки.
      Вода в них тёплая, местами почти горячая (один прикинул градусов под <span class="hi">38–40°C</span> - точно не мерил),
      слегка минерализованная - на вкус чуть солоноватая, с лёгким металлическим послевкусием.
    </p>
  </div>
</div>

<div style="display:flex;gap:16px;align-items:flex-start;margin:14px 0;">
  <div class="row-photo" style="flex:1;min-width:0;">${ph("картинк/kaela/koko_ocean.png","я по пояс в воде","","center","tilt5")}</div>
  <div class="sticky blue t4" style="flex:1;min-width:0;max-width:none;box-sizing:border-box;font-size:12px;">зашёл в воду по пояс, сфотографировался для масштаба (и потому что захотелось). Вода тёплая даже на глубине - а это странно: обычно у дна холоднее, чем у поверхности. Тут наоборот, ровно.</div>
  <div class="row-photo" style="flex:1;min-width:0;">${ph("картинк/kaela/hot_spring.png","горячий источник среди мхов и камней - один из трёх найденных","","center","tilt2")}</div>
  <div class="sticky purple t5" style="flex:1;min-width:0;max-width:none;box-sizing:border-box;font-size:12px;">Решил даже посидеть в одном источнике, и прошло, возможно, минут 40? Честно, это было даже хорошо. Записываю не как наблюдение, а просто потому что хвастаюсь.</div>
</div>

<div class="hbox" style="margin:14px 0;font-size:13px;">
  <strong style="color:var(--g)">ПОЧЕМУ ВОДА НЕ ЗАСТАИВАЕТСЯ.</strong> Думаю, дело в хорошей циркуляции - реки, что я видел (нашёл <span class="hi">2</span>, обе впадают в океан), текут постоянно и не пересыхают.
  Дожди регулярно пополняют систему, испарение и осадки держат какое-то равновесие, горячие источники намекают на геотермальную активность под корой (раздел про геологию), а это тоже гоняет воду по системе.
</div>

<table class="r-table" style="width:100%;margin-top:14px;">
  <tr><th>ОБЪЕКТ</th><th>НАЙДЕНО</th><th>ХАРАКТЕРИСТИКА</th></tr>
  <tr><td class="hi">океан</td><td>1</td><td style="color:var(--dimmer)">береговая линия ≥15–20 км видимой части</td></tr>
  <tr><td class="hi">реки</td><td>2</td><td style="color:var(--dimmer)">обе впадают в океан, уровень стабилен ±3см / 6 дней</td></tr>
  <tr><td class="y">горячие источники</td><td>3</td><td style="color:var(--dimmer)">+38–40°C, минерализованные</td></tr>
</table>

<div class="r-soca" style="margin-top:10px;">Циркуляция воды подтверждается стабильным уровнем рек за 6 дней наблюдения - колебание не более 3 см. Это указывает на сбалансированную гидрологическую систему без признаков сезонного паводка или пересыхания.</div>

<div class="r-note" style="transform:rotate(0.8deg);margin-top:10px;">
  Вопрос, на который у меня пока нет ответа: откуда вообще столько воды на планете с такой стабильной атмосферой и без единого видимого ледника? Пока подумаю об этом позже. Записал, чтобы не забыть (забуду все равно)
</div>

<hr class="r-div"/>

<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div class="sticky red t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">СОКА свела повреждения в список. Четырнадцать пунктов, два из них критические.</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g)">про корабль, коротко.</strong> ПАНДЕМОНИУМ ремонтопригоден - это выяснилось на второй неделе, и это лучшая новость за всё время. Запчастей нет, но есть корпусный металл, инструменты, я и мои любимые помощники ♥ ♥ ♥.<br/><br/>
      Начал, как обычно, <span class="mark-y">не с самого важного, а с самого интересного</span>: сначала перебрал сенсорный узел, потому что хотел точнее мерить атмосферу. Критические пункты пока просто числятся в списке.
    </p>
  </div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 5. ПОЧВА И ЛАНДШАФТ -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">05</div>
  <div class="r-sep" style="flex:1;margin:0;">ПОЧВА И ЛАНДШАФТ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0048 // 11 NOV 1973</div>

<div style="display:flex;gap:22px;align-items:flex-start;margin:12px 0;">
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g)">Почва.</strong> Мягкая и одновременно твёрдая - звучит как бред, но на ощупь именно так.
      Не проваливается под ногой, как песок, и не пружинит, как мох, но и не каменная, я бы назвал её "податливой" - чуть подаётся, а потом держит вес.
      Замерил глубину следа от ботинка в нескольких местах: в среднем <span class="hi">3–5 мм</span> вдавливания, и форму почва восстанавливает примерно за <span class="hi">10–15 минут</span> после того, как я ухожу - даже проверял, возвращался к одному и тому же следу несколько раз.<br/><br/>
      Вот это последнее меня по-настоящему выбило из колеи. Нормальная почва так себя не ведёт: примял - и она примятой останется, пока кто-нибудь снова её не взрыхлит.
      <span class="mark">а эта будто сама забывает, что на неё наступали.</span>
    </p>
  </div>
  <div style="flex:0 0 20%;min-width:0;text-align:center;">
    <svg width="120" height="100" viewBox="0 0 120 100" style="opacity:0.8;">
      <rect x="40" y="55" width="40" height="35" fill="rgba(255,150,50,0.12)" stroke="rgba(255,150,50,0.35)" stroke-width="1"/>
      <rect x="40" y="40" width="40" height="15" fill="rgba(255,180,80,0.1)" stroke="rgba(255,180,80,0.3)" stroke-width="1"/>
      <path d="M45,40 Q50,25 55,40" fill="none" stroke="rgba(255,200,100,0.3)" stroke-width="1"/>
      <path d="M55,40 Q60,22 65,40" fill="none" stroke="rgba(255,200,100,0.3)" stroke-width="1"/>
      <path d="M65,40 Q70,25 75,40" fill="none" stroke="rgba(255,200,100,0.3)" stroke-width="1"/>
      <circle cx="50" cy="28" r="2" fill="rgba(255,220,120,0.5)"/>
      <circle cx="60" cy="25" r="2" fill="rgba(255,220,120,0.6)"/>
      <circle cx="70" cy="28" r="2" fill="rgba(255,220,120,0.5)"/>
      <text x="60" y="75" text-anchor="middle" font-family="'VT323',monospace" font-size="20" fill="rgba(255,200,100,0.6)">16</text>
    </svg>
    <div class="sticky yellow t2" style="display:block;max-width:none;box-sizing:border-box;font-size:12px;margin-top:10px;text-align:left;">маленькое отступление: <span style="font-family:'VT323',monospace;font-size:16px;color:var(--yellow);">5 НОЯБРЯ мне исполнилось 16!!!</span> СОКА выдала: «поздравляю с прожитым годом; статистически это не повод для торжества, но я рада за тебя». лучшее поздравление в моей жизни, если честно.. (отмечать свой др на неизвестной планете это явно... интересный опыт?)</div>
  </div>
</div>

<div class="r-soca">Восстановление формы почвы за фиксированное время может объясняться высоким содержанием упругих органических волокон в верхнем слое субстрата - по принципу упругих волокнистых мхов, тоже частично восстанавливающих форму после нагрузки. Полное объяснение требует анализа состава, недоступного на текущем оборудовании.</div>

<p class="r-text" style="margin-top:12px;">
  <strong style="color:var(--b)">Камни с идеально прямыми трещинами.</strong> Про это я уже писал в разделе про Саноэр (там такие же трещины) - а тут, прямо на поверхности Каэлы, нахожу то же самое.
  Трещины в некоторых камнях идут параллельно с точностью, от которой глазу как-то не по себе. Замерил угол между соседними трещинами на одном образце -
  отклонение всего <span class="hi">2–3 градуса</span> на протяжении почти 30 см камня. Для сравнения, у обычных тектонических трещин (сверялся со справочником в памяти ПАНДЕМОНИУМА) разброс углов <span class="hib">15–20 градусов</span> и больше.
</p>

<p class="r-text">
  <strong style="color:var(--g2)">Почему нет грязи, болот и пустынь.</strong> Грязь - почва быстро отводит воду (раздел 4), застаиваться нечему.
  Болота - по той же причине, стоячая вода надолго не задерживается. Пустыни - климат слишком ровный по влажности, резких засушливых зон нет
  (обошёл уже приличный радиус и нигде не встретил ничего похожего на сухой песчаный участок - кроме маленького пляжа у моря, но это отдельная история, расскажу позже).
</p>

<div style="display:flex;gap:18px;align-items:flex-start;justify-content:space-between;margin:14px 0;">
  <div class="sticky yellow t3" style="flex:0 0 10%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">прошёлся по одному месту несколько раз подряд, специально - проверить, останется ли тропа. Через час вернулся: почти ничего не видно. Либо это очень упругая почва, либо она и правда что-то делает сама.</div>
  <div style="flex:0 0 35%;min-width:0;display:flex;flex-direction:column;gap:12px;">
    <div class="r-stat" style="text-align:center;"><div class="r-stat-lbl">ВДАВЛИВАНИЕ СЛЕДА</div><div class="r-stat-val">3-5<span class="r-stat-unit">мм</span></div></div>
    <div class="r-stat" style="text-align:center;"><div class="r-stat-lbl">ВОССТАНОВЛЕНИЕ</div><div class="r-stat-val">10-15<span class="r-stat-unit">мин</span></div></div>
    <div class="r-stat" style="text-align:center;"><div class="r-stat-lbl">УГОЛ ТРЕЩИН</div><div class="r-stat-val">±2-3<span class="r-stat-unit">°</span></div></div>
  </div>
  <div class="crash-photo" style="flex:0 0 32%;min-width:0;">${ph("картинк/kaela/crystal_rocks.png","камни с вкраплениями кристаллов — параллельные трещины видны прямо на поверхности","","center","tilt2")}</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 6. КРИСТАЛЛЫ И МИНЕРАЛЫ -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">06</div>
  <div class="r-sep" style="flex:1;margin:0;">КРИСТАЛЛЫ И МИНЕРАЛЫ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0052 // 15 NOV 1973</div>

<p class="r-text">
  За последние недели набрал уже <span class="HUGE" style="font-size:30px;">7</span> разных образцов кристаллов и решил разложить их по полочкам, пока не забыл, где какой подобрал.<br/><br/>
  Где-то я уже отмечал: кристаллы отражают свет как-то неправильно - сначала держат его секунду, а потом отпускают. Теперь данных побольше, так что опишу точнее.
</p>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// МОИ ОБРАЗЦЫ // зарисовки и время удержания света</div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">
    <div style="text-align:center;">
      <svg width="60" height="60" viewBox="0 0 60 60" style="opacity:0.7;"><polygon points="30,8 42,25 36,52 24,52 18,25" fill="rgba(0,220,150,0.1)" stroke="rgba(0,220,150,0.35)" stroke-width="1"/></svg>
      <div style="font-size:7px;color:var(--dimmer);">#1 // 0.4-0.6с</div>
    </div>
    <div style="text-align:center;">
      <svg width="60" height="60" viewBox="0 0 60 60" style="opacity:0.7;"><polygon points="30,10 48,30 30,50 12,30" fill="rgba(0,200,255,0.1)" stroke="rgba(0,200,255,0.3)" stroke-width="1"/></svg>
      <div style="font-size:7px;color:var(--dimmer);">#2 // 0.5с</div>
    </div>
    <div style="text-align:center;border:1px solid rgba(255,200,0,0.3);border-radius:2px;padding:2px;">
      <svg width="56" height="56" viewBox="0 0 60 60" style="opacity:0.85;"><polygon points="30,6 40,22 50,30 40,38 30,54 20,38 10,30 20,22" fill="rgba(255,220,100,0.15)" stroke="rgba(255,220,100,0.5)" stroke-width="1.2"/><circle cx="30" cy="30" r="3" fill="rgba(255,255,200,0.5)"/></svg>
      <div style="font-size:7px;color:var(--yellow);">#3 // 1.2с + ???</div>
    </div>
    <div style="text-align:center;">
      <svg width="60" height="60" viewBox="0 0 60 60" style="opacity:0.7;"><circle cx="30" cy="30" r="20" fill="rgba(180,100,220,0.08)" stroke="rgba(180,100,220,0.3)" stroke-width="1"/></svg>
      <div style="font-size:7px;color:var(--dimmer);">#4 // 0.3с</div>
    </div>
  </div>
</div>

<p class="r-text">
  образец #1 - призматический, прозрачный с лёгким зелёным отливом, свет держит примерно <span class="hi">0.4–0.6 секунды</span>
  (засекал на глаз секундомером - не точная наука, но при повторах воспроизводится).<br/><br/>
  образец #3 - тот самый, про который я уже писал (геометрия) - самый странный из всех. Мало того, что держит свет дольше прочих
  (около <span class="hi" style="font-family:'VT323',monospace;font-size:18px;">1.2 секунды</span> - вдвое больше среднего), так я иногда, очень редко, ловил, как он вспыхивает <span class="blink" style="color:var(--yellow)">сам</span>, без внешнего источника, на долю секунды.
  Поймал это <span class="mark-y">несколько раз за две недели</span> наблюдений. Стандартной флуоресценцией СОКА это объяснить не смогла - для неё нужно накопление энергии от внешнего света,
  а тут вспышка случалась даже когда образец несколько часов лежал в темноте контейнера.
</p>

<p class="r-text" style="margin-top:10px;">этот образец я не классифицирую. Честно - понятия не имею, что это.</p>

<div style="display:flex;gap:22px;align-items:flex-start;margin:12px 0;">
  <div class="crash-photo" style="flex:0 0 24%;min-width:0;">${ph("картинк/kaela/surface_rocks.png","камни и кристаллы поверхности","","center","tilt1")}</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0 0 12px;">
      <strong style="color:var(--g2)">Возможная связь со свечением мха и атмосферы.</strong> Пока только догадка, но логичная: если эти кристаллы умеют держать свет дольше обычного материала,
      а в воздухе плавают флуоресцентные частицы, которые тоже копят и переизлучают свет (раздел 2) - может, это один и тот же механизм, просто в разных состояниях вещества.
      Твёрдом (кристаллы), газообразном (частицы в воздухе) и, возможно, биологическом (светящийся мох, до которого я ещё доберусь).
    </p>
    <div class="r-soca" style="margin:0 0 12px;">Образец #3 демонстрирует спонтанную люминесценцию без очевидного источника возбуждения. Зафиксировано три случая за 14 дней хранения. Возможные объяснения: остаточная энергия от длительного накопления (маловероятно при такой продолжительности темновой фазы) либо неизвестный механизм генерации света. Рекомендую продолжить наблюдение. И не держать его у изголовья койки, а то мало ли.</div>
    <div class="sticky purple t5" style="display:block;max-width:none;box-sizing:border-box;font-size:12px;">образец #3 теперь стоит у меня в каюте на полке. Вечерами иногда пялюсь на него и жду - вдруг сейчас мигнёт. Вживую момент так и не поймал, только потом замечал, что там явно что-то поменялось.</div>
  </div>
</div>

<div class="r-data" style="margin:32px 0 10px;">
  <div class="r-row"><span class="r-key">ОБРАЗЦОВ СОБРАНО</span><span class="r-val hi">7</span></div>
  <div class="r-row"><span class="r-key">СРЕДНЕЕ ВРЕМЯ УДЕРЖАНИЯ СВЕТА</span><span class="r-val">0.4–0.6 сек</span></div>
  <div class="r-row"><span class="r-key">МАКСИМУМ (ОБРАЗЕЦ #3)</span><span class="r-val y">1.2 сек + спонтанные вспышки</span></div>
  <div class="r-row"><span class="r-key">СЛУЧАЕВ САМОСВЕЧЕНИЯ</span><span class="r-val r">3 за 14 дней наблюдения</span></div>
</div>

<div class="hbox b" style="margin:14px 0;font-size:13px;">
  Если так - то вся планета работает как один большой механизм: копит свет и медленно отдаёт обратно. Если подтвердится, это будет по-настоящему безумно.
  <span class="corrupt">Я пока не уверен, но мысль мне нравится до неприличия.</span>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 7. РАСТЕНИЯ (ФЛОРА) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">07</div>
  <div class="r-sep" style="flex:1;margin:0;">РАСТЕНИЯ (ФЛОРА)</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0061 // 24 NOV 1973</div>

<p class="r-text">
  Это, наверное, самый большой раздел из всех, что я пока написал, и, подозреваю, он будет только пухнуть - растений тут невероятно много, и они настолько разные, что я даже не уверен, правильно ли вообще называю их "растениями" в привычном смысле слова.<br/><br/>
  Общее наблюдение, прежде чем лезть в конкретные виды: тут нет чёткой границы между "мхом", "лишайником" и "деревом" в том виде, в каком я привык это понимать. Растительность здесь скорее спектр форм, плавно перетекающих одна в другую.
  За два месяца я насчитал уже больше <span class="hi">15 визуально различимых типов</span> - и продолжаю находить новые. Для порядка использую упрощённую систему по высоте и структуре:
  почвопокровные (до 10 см), кустарниковые (10 см - 1 м), древовидные (выше 1 м). Настоящей ботанической таксономией это не назвать, я не специалист, но хоть какая-то система нужна, чтобы не путаться в записях.
</p>

<div class="hbox b" style="margin:14px 0;font-size:13px;">
  Важная деталь, которую раньше не упоминал: тут и правда есть <strong style="color:var(--b)">леса</strong>. Целые участки плотной растительности, деревья стоят достаточно тесно, чтобы кроны соприкасались.
  Прошёл через один такой массив шириной примерно <span class="hi">4 километра</span>, и почти на всём протяжении под ногами была сплошная растительность - по-настоящему пустых, голых участков на Каэле я видел на удивление мало.
  Самая большая открытая площадь, что зафиксировал - около <span class="hi">200×150 метров</span> каменистой проплешины, да и там по краям торчали отдельные кусты "стеклянного плюща".
</div>

<div class="r-sep" style="margin-top:18px;">ДЕРЕВЬЯ // НЕОЖИДАННОЕ СХОДСТВО</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:12px 0;">
  <div style="flex:1.3;">
    <p class="r-text">
      И вот тут самое неожиданное наблюдение за весь период: некоторые деревья выглядят почти как земные тропические. По структуре - точь-в-точь то, что я видел на учебных голограммах земных тропических лесов в архиве ПАНДЕМОНИУМА:
      широкие листовые пластины, многоярусная крона, у некоторых экземпляров - воздушные корни. Я даже специально сложил силуэт одного дерева рядом с архивным изображением баньяна - сходство по форме кроны и характеру ветвления
      оказалось выше, чем я ждал от планеты с совершенно другой звёздной системой. Это, конечно, конвергенция формы, а не родство: внутри (когда взял образцы) - никакой земной целлюлозы,
      скорее та же гелеобразная масса, что я описывал у других видов, просто в более плотной внешней оболочке.<br/><br/>
      Высоту таких деревьев замерил у нескольких - от <span class="hi">4 до примерно 9 метров</span>, самое высокое было ближе к <span class="hi">11 метрам</span> (оценка по тени и углу света от звезды - не точный замер, но методика рабочая: знаю угол, считаю высоту простой тригонометрией, плюс-минус метр).
    </p>
  </div>
  <div style="flex-shrink:0;width:220px;">
    <div style="transform:rotate(-1.5deg);">
      <svg width="220" height="240" viewBox="0 0 200 220" style="opacity:0.75;display:block;">
        <line x1="100" y1="200" x2="100" y2="100" stroke="rgba(0,180,80,0.4)" stroke-width="6"/>
        <line x1="100" y1="100" x2="60" y2="60" stroke="rgba(0,180,80,0.35)" stroke-width="3"/>
        <line x1="100" y1="100" x2="140" y2="65" stroke="rgba(0,180,80,0.35)" stroke-width="3"/>
        <line x1="100" y1="130" x2="50" y2="110" stroke="rgba(0,170,80,0.3)" stroke-width="2.5"/>
        <line x1="100" y1="130" x2="150" y2="115" stroke="rgba(0,170,80,0.3)" stroke-width="2.5"/>
        <ellipse cx="55" cy="55" rx="28" ry="16" fill="rgba(0,200,90,0.12)" stroke="rgba(0,200,90,0.3)" stroke-width="1"/>
        <ellipse cx="145" cy="58" rx="28" ry="16" fill="rgba(0,200,90,0.12)" stroke="rgba(0,200,90,0.3)" stroke-width="1"/>
        <ellipse cx="100" cy="40" rx="36" ry="20" fill="rgba(0,210,100,0.14)" stroke="rgba(0,210,100,0.32)" stroke-width="1"/>
        <ellipse cx="45" cy="105" rx="22" ry="12" fill="rgba(0,190,85,0.1)" stroke="rgba(0,190,85,0.25)" stroke-width="0.8"/>
        <ellipse cx="155" cy="110" rx="22" ry="12" fill="rgba(0,190,85,0.1)" stroke="rgba(0,190,85,0.25)" stroke-width="0.8"/>
        <line x1="95" y1="190" x2="70" y2="205" stroke="rgba(0,160,70,0.25)" stroke-width="1.5"/>
        <line x1="105" y1="190" x2="130" y2="205" stroke="rgba(0,160,70,0.25)" stroke-width="1.5"/>
        <text x="100" y="215" text-anchor="middle" font-family="monospace" font-size="8" fill="rgba(0,180,80,0.4)">воздушные корни // est.</text>
      </svg>
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:3px;letter-spacing:0.08em;">"тропическое" дерево // силуэт, зарисовка с натуры</div>
    </div>
  </div>
</div>

<p class="r-text" style="margin-top:10px;">
  Биолюминесценция почти у всех видов - голубовато-зелёное свечение я уже описывал в разделе про воздух и отдельно про мох. Бывает и пурпурное, реже, в основном у более крупных кустарниковых форм.
  Яркость по видам оценивал субъективно по шкале от 1 до 5 (1 - еле уловимо, 5 - достаточно, чтобы читать), и большинство попадает в диапазон 2–3.
  "колокольный мох" (опишу ниже) - единственный найденный вид, которому я поставил 5.
</p>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// ШКАЛА ЯРКОСТИ СВЕЧЕНИЯ // субъективная оценка по видам</div>
  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:120px;font-size:10px;color:var(--dim);">костяное дерево</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);position:relative;"><div style="width:5%;height:100%;background:rgba(150,150,150,0.4);"></div></div><span style="font-size:9px;color:var(--dimmer);">0/5</span></div>
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:120px;font-size:10px;color:var(--dim);">стеклянный плющ</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);position:relative;"><div style="width:40%;height:100%;background:rgba(0,220,200,0.4);"></div></div><span style="font-size:9px;color:var(--dimmer);">2/5</span></div>
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:120px;font-size:10px;color:var(--dim);">тропический вид</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);position:relative;"><div style="width:60%;height:100%;background:rgba(0,220,150,0.4);"></div></div><span style="font-size:9px;color:var(--dimmer);">3/5</span></div>
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:120px;font-size:10px;color:var(--yellow);">колокольный мох</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);position:relative;"><div style="width:100%;height:100%;background:rgba(200,80,255,0.5);"></div></div><span style="font-size:9px;color:var(--yellow);">5/5</span></div>
  </div>
</div>

<div class="r-sep" style="margin-top:20px;">КОНКРЕТНЫЕ ВИДЫ // ЧТО Я НАШЁЛ И ИЗМЕРИЛ</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:14px 0;">
  <div class="flora-sketch" style="flex:0 0 20%;min-width:0;">
    <div style="transform:rotate(2deg);">
      <svg width="220" height="180" viewBox="0 0 200 160" style="opacity:0.75;display:block;">
        <line x1="40" y1="150" x2="160" y2="20" stroke="rgba(0,220,200,0.25)" stroke-width="1.2"/>
        <line x1="60" y1="140" x2="170" y2="50" stroke="rgba(0,220,200,0.2)" stroke-width="1"/>
        <line x1="30" y1="110" x2="140" y2="10" stroke="rgba(0,220,200,0.18)" stroke-width="0.8"/>
        <circle cx="100" cy="80" r="2" fill="rgba(150,255,230,0.4)"/>
        <circle cx="130" cy="50" r="2" fill="rgba(150,255,230,0.35)"/>
        <circle cx="70" cy="105" r="2" fill="rgba(150,255,230,0.3)"/>
      </svg>
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:2px;">стеклянный плющ // побеги с прожилками</div>
    </div>
  </div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g2)">Стеклянный плющ.</strong> почвопокровный, стелется по камням, тонкие полупрозрачные побеги толщиной <span class="hi">2–4 мм</span> (мерил штангенциркулем из аптечки), цвет - бледно-зелёный с лёгкой голубизной.
      Внутри видны тонкие светящиеся прожилки. Срезал один побег на анализ - внутри гелеобразная масса без чёткой клеточной организации, насколько видно в моё переносное увеличительное стекло
      (10-кратное, не микроскоп, так что детали клеток могли и ускользнуть). На срезе масса слабо засветилась сама секунд на <span class="hi">10</span>, потом погасла -
      СОКА думает, это была реакция повреждённой ткани на контакт с воздухом, что-то вроде окислительного стресс-ответа, хотя точный механизм неизвестен.
    </p>
  </div>
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/glass_ivy.png","стеклянный плющ - крупный план побегов на камне","","center","tilt2")}</div>
</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:14px 0;">
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/bell_moss.png","колокольный мох - группа из примерно 30 экземпляров","","center","tilt4")}</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g2)" style="color:#cc66ff">Колокольный мох.</strong> Кустарниковая форма, растёт пучками, высота побега <span class="hi">5–8 см</span>, на конце - раскрытая штука вроде колокольчика диаметром 1–2 см,
      светится пурпурным ярче всех найденных видов. Интересная деталь: колокольчики синхронно чуть покачиваются даже без ветра.
      Цикл покачивания - примерно раз в <span class="hi">12–15 секунд</span> по секундомеру, и соседняя группа (наблюдал популяцию штук в 30) качалась практически синфазно,
      с минимальным разбросом по времени между соседями. Объяснения этой синхронности я не нашёл - на случайный шум не тянет, слишком стабильный период.
    </p>
  </div>
  <div class="flora-sketch" style="flex:0 0 20%;min-width:0;">
    <div style="transform:rotate(-2deg);">
      <svg width="220" height="180" viewBox="0 0 200 160" style="opacity:0.75;display:block;">
        <line x1="60" y1="155" x2="55" y2="100" stroke="rgba(200,80,255,0.3)" stroke-width="2"/>
        <line x1="100" y1="155" x2="98" y2="85" stroke="rgba(200,80,255,0.35)" stroke-width="2"/>
        <line x1="140" y1="155" x2="145" y2="105" stroke="rgba(200,80,255,0.3)" stroke-width="2"/>
        <path d="M40,100 Q55,80 70,100 Q55,115 40,100" fill="rgba(200,80,255,0.18)" stroke="rgba(200,100,255,0.4)" stroke-width="1"/>
        <path d="M83,85 Q98,62 113,85 Q98,103 83,85" fill="rgba(200,80,255,0.2)" stroke="rgba(200,100,255,0.45)" stroke-width="1"/>
        <path d="M128,105 Q145,85 162,105 Q145,120 128,105" fill="rgba(200,80,255,0.18)" stroke="rgba(200,100,255,0.4)" stroke-width="1"/>
      </svg>
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:2px;">колокольный мох // покачивающиеся колокольчики</div>
    </div>
  </div>
</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:14px 0;">
  <div class="flora-sketch" style="flex:0 0 20%;min-width:0;">
    <div style="transform:rotate(1.5deg);">
      <svg width="220" height="220" viewBox="0 0 200 200" style="opacity:0.7;display:block;">
        <rect x="92" y="60" width="16" height="130" fill="rgba(180,180,180,0.12)" stroke="rgba(180,180,180,0.3)" stroke-width="1"/>
        <line x1="92" y1="80" x2="92" y2="180" stroke="rgba(150,150,150,0.2)" stroke-width="0.6"/>
        <line x1="98" y1="70" x2="98" y2="185" stroke="rgba(150,150,150,0.15)" stroke-width="0.5"/>
        <line x1="105" y1="75" x2="105" y2="178" stroke="rgba(150,150,150,0.2)" stroke-width="0.6"/>
        <line x1="92" y1="60" x2="60" y2="40" stroke="rgba(180,180,180,0.25)" stroke-width="2"/>
        <line x1="108" y1="60" x2="140" y2="42" stroke="rgba(180,180,180,0.25)" stroke-width="2"/>
        <line x1="100" y1="60" x2="100" y2="35" stroke="rgba(180,180,180,0.25)" stroke-width="2"/>
        <text x="100" y="195" text-anchor="middle" font-family="monospace" font-size="8" fill="rgba(150,150,150,0.4)">параллельные трещины коры // est.</text>
      </svg>
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:2px;">костяное дерево // структура коры</div>
    </div>
  </div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:#ccc">Костяное дерево.</strong> Древовидная форма, одно из крупнейших найденных растений: высота <span class="hi">2–2.5 метра</span>, ствол у основания около <span class="hi">15 см</span> в диаметре,
      на ощупь твёрдый, почти каменный - отсюда и название. Цвет серовато-белый, биолюминесценции почти нет - один из немногих таких видов. Кора - в мелких, почти параллельных трещинах,
      как те, что я описывал в разделах про почву и кристаллы (отклонение угла на этом образце около <span class="hi">4–5 градусов</span> - чуть больше, чем у минералов, но всё равно заметно ниже, чем у обычной древесной коры).
      Нашёл <span class="hi">три</span> таких дерева в радиусе примерно километра от привычного маршрута - может, растут медленно и редко, может, просто их тут меньше.
    </p>
  </div>
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/bone_tree.png","костяное дерево - общий вид, одно из трёх найденных","","center","tilt3")}</div>
</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:14px 0;">
  <div class="hbox r" style="flex:0 0 25%;min-width:0;margin:0;font-size:12px;">
    <strong style="color:var(--red)">ВАЖНАЯ ПРАВКА:</strong> раньше я думал, что розово-фуксиевая жидкость характерна для одного конкретного вида растений. Это не так - приглядевшись,
    вижу, что она встречается у <span class="mark-r">многих, но не у всех</span> растений, независимо от их вида и формы: нашёл её и у почвопокровных, и у древовидных.
    У костяного дерева, например, её нет вообще, а у тропического вида - есть, но немного. Полноценный раздел про эту жидкость напишу отдельно, она того заслуживает.
  </div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g)">Тропический вид (пока без названия).</strong> Древовидная форма, та самая, что описал выше - широкая листовая пластина, многоярусная крона. Листья крупные, до <span class="hi">25–30 см</span> в длину,
      ярко-зелёные с лёгким голубоватым жилкованием, умеренная биолюминесценция (ставлю 3 по своей шкале). взял лист на анализ - толщина около <span class="hi">2 мм</span>,
      на просвет - сетчатая структура жилок, по рисунку до странного похожая на широколиственные виды из архива, и это удивило меня больше всего: эволюционная-то история тут совершенно независимая.
    </p>
  </div>
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/tropical_leaf.png","лист тропического вида - на просвет видна сетчатая структура жилок","","center","tilt1")}</div>
</div>

<hr class="r-div"/>
<div class="r-sep">ДВИЖЕНИЕ РАСТЕНИЙ // КОНТРОЛИРУЕМЫЙ ЭКСПЕРИМЕНТ</div>

<p class="r-text">
  Теперь про движение растений - это, по-моему, самое интересное наблюдение во всём разделе, и я хочу описать его максимально точно, с конкретной методикой, а не просто "оно двигалось".<br/><br/>
  Провёл небольшой контролируемый эксперимент. Подошёл к кусту колокольного мха, встал на фиксированном расстоянии (около <span class="hi">40 см</span>,
  и торчал неподвижно <span class="hi">20 минут</span>, фиксируя положение одного выбранного колокольчика каждые 2 минуты - на глаз, относительно воображаемой оси на камень позади растения.
</p>

<table class="r-table" style="width:100%;margin:14px 0;">
  <tr><th>ВРЕМЯ</th><th>УГОЛ ОТКЛОНЕНИЯ</th><th>ПРИМЕЧАНИЕ</th></tr>
  <tr><td>0 мин</td><td class="hi">0°</td><td style="color:var(--dimmer)">исходное положение</td></tr>
  <tr><td>8 мин</td><td class="y">5–8°</td><td style="color:var(--dimmer)">первое заметное отклонение</td></tr>
  <tr><td>14 мин</td><td class="y">~20°</td><td style="color:var(--dimmer)">продолжает разворот</td></tr>
  <tr><td>18 мин</td><td class="r">30–35°</td><td style="color:var(--dimmer)">последний замер до отхода</td></tr>
  <tr style="background:rgba(0,200,255,0.04)"><td>+25 мин после отхода</td><td class="b">~12–15°</td><td style="color:var(--dimmer)">возврат начался, не завершён</td></tr>
</table>

<p class="r-text">
  Важная методическая деталь: специально встал так, чтобы не загораживать растению ни одну из звёзд - исключить простой фототропизм (рост к свету) как объяснение.
  Движение шло именно в мою сторону, а не к источнику света. Это ключевой момент всего наблюдения!!!
</p>

<div class="r-soca">Направленное движение без видимого фотостимула при текущих данных стандартного объяснения в известной ботанике не имеет. Зафиксированная скорость отклика (порядка 1.5–2° в минуту на старте) выше типичных тигмонастических реакций: Mimosa pudica, например, реагирует быстрее, но на прямой контакт, а не на приближение без касания. Возможные объяснения: реакция на тепловое излучение тела, на изменение концентрации CO2 от дыхания, либо тот же механизм, что лежит в основе общего псионического поля планеты. Я перечислила варианты по убыванию комфорта.</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin-top:10px;">
  <div class="sticky green t4" style="flex:0 0 15%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">15+ видов за 2 месяца. Леса, деревья, будто сошедшие с архивных тропиков, растения, которые тянутся тебе навстречу. Я думал, найду тут странный мох да пару кустов, а нашёл полноценную, живую, активно реагирующую экосистему.</div>
  <div class="r-note" style="flex:1;min-width:0;transform:rotate(-0.6deg);margin:26px 0 0;">
    лично я склоняюсь ко второму варианту (тому последнему, который выдала СОКА), но это уже не наука, а моё личное ощущение - и я хочу это в записи явно разграничить!!
  </div>
</div>

<hr class="r-div"/>


<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div class="r-note" style="flex:1;min-width:0;transform:rotate(0.5deg);margin:0;">
    По плану сегодня был день ремонта: третий пункт списка, проводка в носовом узле. Вместо этого - пятнадцать видов растений, четыре страницы заметок и одна ветка, которая ко мне повернулась.<br/><br/>
    <span class="corrupt">Проводка подождёт.</span> Она ждёт с октября и, судя по всему, не возражает.
  </div>
  <div class="sticky yellow t5" style="flex:0 0 20%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">СОКА спросила, планирую ли я вообще чинить корабль, конечно!! Но вот на следующий вопрос "когда?" я уже не ответил.</div>
</div>

<!-- ------------------------------------------- -->
<!-- 8. ГРИБЫ -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">08</div>
  <div class="r-sep" style="flex:1;margin:0;">ГРИБЫ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0067 // 30 NOV 1973</div>

<p class="r-text">
  Если растений тут пятнадцать с лишним видов, то грибов я пока нашёл меньше - <span class="hi">восемь различимых форм</span>, но они добирают размером и странностью.
  Учитывая полное отсутствие животных (будет отдельный раздел), у меня есть гипотеза, зафиксирую сразу: вся "вторая ветвь" сложной жизни на Каэле - та, что обычно достаётся животным,
  здесь ушла в грибы. Не доказано, это моё предположение, но визуально напрашивается: грибы тут разнообразнее и активнее, чем я вообще где-либо видел, даже в банальных учебных материалах!!
</p>

<div style="display:flex;gap:18px;align-items:flex-start;margin:16px 0;">
  <div style="flex:1;padding-top:26px;">
    <p class="r-text">
      <strong style="color:var(--g)">Размер.</strong> Это первое, что бьёт по глазам. Самый крупный найденный экземпляр - шляпка диаметром примерно <span class="HUGE" style="font-size:29px;">1.4 метра</span>,
      и это я мерил пока только рулеткой из аптечки, а ножка у основания сантиметров 35 толщиной. Для сравнения лазил в архив: самые крупные известные грибы (вроде гигантских дождевиков, само собой сравниваю с земными) полметра в диаметре превышают редко.
      Этот был ростом почти с меня - сфотографировался рядом для масштаба.
    </p>
  </div>
  <div style="flex-shrink:0;width:260px;">
    <div style="transform:rotate(-2deg);">
      <div style="width:260px;height:260px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/koko_giant_fungus.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:28px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/koko_giant_fungus.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">я рядом с самым крупным экземпляром // для масштаба</div>
    </div>
  </div>
</div>

<p class="r-text">
  <strong style="color:var(--b)">Свечение.</strong> Светятся почти все найденные виды, причём в среднем ярче растений. Использую ту же шкалу 1–5, что и для флоры:
  большинство грибов в диапазоне <span class="hi">3–4</span>, два вида я оценил на максимум <span class="hi">5</span>. Цвет свечения разный: у крупных шляпочных чаще голубовато-зелёный,
  у мелких трубчатых встречал и <span class="mark-y">оранжевый</span> - единственный не зелёно-пурпурный оттенок свечения, что я вообще нашёл на планете.
</p>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// СВЕЧЕНИЕ ГРИБОВ ПО ВИДАМ // та же шкала 1–5</div>
  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:140px;font-size:10px;color:var(--dim);">гигантская шляпка</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);"><div style="width:80%;height:100%;background:rgba(0,220,200,0.45);"></div></div><span style="font-size:9px;color:var(--dimmer);">4/5</span></div>
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:140px;font-size:10px;color:var(--dim);">спиральный гриб</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);"><div style="width:100%;height:100%;background:rgba(0,255,200,0.5);"></div></div><span style="font-size:9px;color:var(--dimmer);">5/5</span></div>
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:140px;font-size:10px;color:#ffaa44;">мелкие трубчатые (оранж.)</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);"><div style="width:100%;height:100%;background:rgba(255,150,50,0.5);"></div></div><span style="font-size:9px;color:#ffaa44;">5/5</span></div>
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:140px;font-size:10px;color:var(--dim);">симметричная группа</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);"><div style="width:60%;height:100%;background:rgba(0,200,180,0.4);"></div></div><span style="font-size:9px;color:var(--dimmer);">3/5</span></div>
  </div>
</div>

<div class="r-sep" style="margin-top:18px;">СТРАННАЯ ГЕОМЕТРИЯ</div>

<div style="display:flex;gap:20px;align-items:flex-start;margin:16px 0;">
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/symmetric_fungi_group.png","симметричная группа из пяти шляпок — расстояния почти идентичны","","center","tilt1")}</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      Вот меня удивляет - некоторые виды растут не просто вверх или вбок, а в формах, которые выглядят почти геометрически правильными.
      Нашёл один экземпляр, что рос спиралью: ножка изгибалась дугой, делая почти полный оборот на высоте около <span class="hi">60 см</span>, прежде чем раскрыть шляпку.
      Угол закручивания прикинул на глаз - что-то близкое к логарифмической спирали, как у раковины наутилуса, но это не точный замер, просто замеченное сходство.<br/><br/>
      Другой экземпляр рос группой из <span class="hi">пяти</span> отдельных шляпок, расставленных идеально симметрично вокруг общего центра - расстояние между соседними отличалось не больше чем на <span class="hi">2–3 см</span>
      при общем диаметре группы около <span class="hi">70 см</span>. Случайный рост такой регулярности обычно не даёт.
    </p>
  </div>
  <div class="flora-sketch" style="flex:0 0 18%;min-width:0;">
    <div style="transform:rotate(2.5deg);">
      <svg width="220" height="220" viewBox="0 0 200 200" style="opacity:0.75;display:block;">
        <path d="M100,175 L95.9,171.8 L92,168.5 L88.3,165.2 L84.8,162 L81.6,158.8 L78.7,155.5 L76.2,152.2 L74.1,149 L72.4,145.8 L71.1,142.5 L70.3,139.2 L69.9,136 L69.9,132.8 L70.3,129.5 L71.2,126.2 L72.4,123 L74,119.8 L75.9,116.5 L78.1,113.2 L80.6,110 L83.2,106.8 L86,103.5 L89,100.2 L92,97 L95,93.8 L98,90.5 L101,87.2 L103.8,84 L106.5,80.8 L109.1,77.5 L111.4,74.2 L113.5,71 L115.4,67.8 L116.9,64.5 L118.2,61.2 L119.2,58 L119.8,54.8 L120.2,51.5 L120.2,48.2 L120,45" fill="none" stroke="rgba(0,220,180,0.45)" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="124" cy="40" rx="24" ry="15" fill="rgba(0,230,190,0.15)" stroke="rgba(0,230,190,0.4)" stroke-width="1.2"/>
        <circle cx="100" cy="175" r="2.5" fill="rgba(0,220,180,0.5)"/>
        <text x="100" y="195" text-anchor="middle" font-family="monospace" font-size="8" fill="rgba(0,220,180,0.4)">спиральный рост // ~270°, поднимаясь</text>
      </svg>
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:2px;">спиральный гриб // зарисовка с натуры</div>
    </div>
  </div>
</div>

<hr class="r-div"/>
<div class="r-sep">СКОРОСТЬ РОСТА // ЗАМЕР ЗА ОДИН ПОЛНЫЙ ДЕНЬ КАЭЛЫ</div>

<p class="r-text">
  Это я решил проверить экспериментально: один маленький гриб, что заметил вечером (по местному времени), к следующему утру заметно подрос.
  Воткнул рядом палку с зарубками, примитивную линейку - и мерил высоту того же экземпляра в течение одного полного дня Каэлы (<span class="hi">59 часов</span>).
</p>

<table class="r-table" style="width:100%;margin:14px 0;">
  <tr><th>ВРЕМЯ</th><th>ВЫСОТА</th><th>ПРИМЕЧАНИЕ</th></tr>
  <tr><td>0 ч</td><td class="hi">~4 см</td><td style="color:var(--dimmer)">начало замера</td></tr>
  <tr><td>20 ч</td><td class="y">~9 см</td><td style="color:var(--dimmer)">активный рост</td></tr>
  <tr><td>40 ч</td><td class="y">~14 см</td><td style="color:var(--dimmer)">рост продолжается</td></tr>
  <tr style="background:rgba(0,200,255,0.04)"><td>59 ч (конец цикла)</td><td class="b" style="font-family:'VT323',monospace;font-size:16px;">~17 см</td><td style="color:var(--dimmer)">рост остановился, шляпка раскрылась</td></tr>
</table>

<div class="hbox b" style="margin:14px 0;font-size:13px;">
  Это даёт скорость роста порядка <span class="hi">0.3–0.35 см в час</span> на активной фазе - даже самые шустрые из известных грибов (вроде некоторых навозников) такую скорость превышают редко,
  хотя сравнение так себе: я не миколог и точных рекордов на память не знаю.
</div>

<div class="r-soca">Такая скорость роста требует очень высокой метаболической активности и постоянного доступа к воде и питанию - что согласуется с общей картиной планеты, где вода циркулирует непрерывно, а почва, судя по всему, богата органикой.</div>

<p class="r-text" style="margin-top:12px;">
  Взял образец ткани одного гриба на анализ, а внутри - пористо, влажно, с кучей мелких полостей, чем-то напоминает губку.
  Срез бледный, желтовато-белый, без свечения внутри (свет идёт только с поверхности шляпки).
</p>

<div style="display:flex;gap:18px;align-items:flex-start;margin-top:10px;">
  <div class="r-note" style="flex:1;min-width:0;transform:rotate(-0.5deg);margin:0;">
    Моя личная мысль, подтвердить не могу: если грибы и правда заменяют тут животных в экологическом смысле - может, именно их огромная биомасса и быстрый метаболизм крутят ту самую циркуляцию вещества, из-за которой почва такая "живая" (вспоминаю раздел 5, где она восстанавливает форму после следов). Пока это просто соединение точек у меня в голове, ничего не доказано!
  </div>
  <div class="sticky purple t2" style="flex:0 0 20%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">8 видов грибов, и я уверен, что найду ещё. Один размером с меня, другой растёт спиралью, ни один по логике не должен расти так быстро, а все равно растёт.</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 9. НЕОБЫЧНАЯ ЖИДКОСТЬ (РОЗОВАЯ СМОЛА) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">09</div>
  <div class="r-sep" style="flex:1;margin:0;">НЕОБЫЧНАЯ ЖИДКОСТЬ // РОЗОВАЯ СМОЛА</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0073 // 06 DEC 1973</div>

<p class="r-text">
  Ещё когда писал про растения, обещал отдельный раздел про эту жидкость - вот и он!<br/><br/>
  Как уже отметил в поправке к разделу 7: жидкость не привязана к одному виду. Нашёл её у <span class="hi">6 из 15+</span> найденных видов растений, независимо от формы и размера -
  и у почвопокровных, и у кустарниковых, и у древовидных. У тропического вида есть, у костяного дерева - нет вообще. Закономерности, по которой именно эти растения её содержат, я пока не вижу.
</p>

<div style="display:flex;gap:18px;align-items:flex-start;margin:16px 0;">
  <div style="flex:1;min-width:0;align-self:center;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g)">Внешний вид.</strong> Снаружи растения с этой жидкостью ничем не выделяются - обычный зелёный, та же текстура, то же свечение, если оно у вида есть.
      Но повреди стебель, ветку или лист - и почти сразу начинает сочиться вязкая жидкость ярко-<span class="mark-r">розово-фуксиевого</span> цвета.
      Контраст резкий и в первый раз здорово ошарашивает - я тогда случайно задел куст рукой, и на секунду был уверен, что это кровь, пока не сообразил, что цвет совсем не тот.
    </p>
  </div>
  <div style="flex-shrink:0;width:270px;">
    <div style="transform:rotate(2.5deg);">
      <div style="width:270px;height:270px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/fuchsia_resin.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:28px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/fuchsia_resin.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">зелёное растение, из которого сочится розовая жидкость</div>
    </div>
  </div>
</div>

<p class="r-text">
  <strong style="color:var(--b)">Консистенция.</strong> Вязкая, как смола - быстро не течёт, скорее медленно сползает и довольно шустро застывает на воздухе.
  засёк время застывания у одного образца: поверхностная плёнка начала схватываться примерно через <span class="hi">3–4 минуты</span>,
  полное затвердевание (насколько успел проследить) заняло около <span class="hi">25–30 минут</span>, после чего застывшая капля стала полупрозрачной, чуть темнее, чем в жидком виде.<br/><br/>
  Взял образец на анализ - собрал примерно <span class="hi">5 мл</span> в маленький контейнер.
</p>

<div class="r-soca">Базовый анализ жидкости даёт высокую вязкость (сопоставимую с растительными смолами), pH около 5.8 (слабокислая среда) и органические соединения неустановленной структуры. Цветовой пигмент стабилен на воздухе - окисления, типичного для многих смол, не зафиксировано.</div>

<div class="r-sep" style="margin-top:18px;">ЧТО ЭТО МОЖЕТ БЫТЬ // ТРИ РАБОЧИЕ ГИПОТЕЗЫ</div>

<div class="g3" style="margin:14px 0;">
  <div class="hbox" style="font-size:12px;">
    <strong style="color:var(--g)">01. ЗАЩИТА</strong><br/>
    Закрыть рану, отпугнуть тех, кто грызёт ткань. Но травоядных на Каэле нет (раздел 11) - возможно, наследие более раннего этапа эволюции, либо защита от микроорганизмов.
  </div>
  <div class="hbox b" style="font-size:12px;">
    <strong style="color:var(--b)">02. ПИТАНИЕ / ТРАНСПОРТ</strong><br/>
    Аналог флоэмного сока - переносит питательные вещества. Яркий цвет тогда просто побочка состава, а не намеренный сигнал.
  </div>
  <div class="hbox y" style="font-size:12px;">
    <strong style="color:var(--yellow)">03. ПСИОНИЧЕСКОЕ ПОЛЕ</strong><br/>
    <span class="corrupt">Это уже спекуляция.</span> цвет настолько яркий и неестественный, что выглядит почти как намеренный сигнал, а не случайный продукт метаболизма.
  </div>
</div>

<div class="r-note" style="transform:rotate(-0.6deg);margin-top:10px;">
  Если честно, мне кажется, что зелёное снаружи и ярко-розовое внутри - это слишком интересно, чтобы быть просто случайностью эволюции. Но я помню, что природа вообще любит яркие цвета без всякой "цели" в том смысле, как я себе её представляю, так что поспешных выводов не делаю.
</div>

<div class="r-sep" style="margin-top:18px;">ВОПРОС: ВЛИЯЕТ ЛИ ЖИДКОСТЬ НА ЦВЕТ САМОГО РАСТЕНИЯ?</div>

<p class="r-text">
  раз уж задался вопросом - специально проверил. Ответ, похоже, нет: по крайней мере не напрямую и не визуально.<br/><br/>
  Растения с фуксиевой жидкостью внутри снаружи выглядят точно так же, как без неё - тот же спектр зелёного, та же насыщенность, ни розового, ни фиолетового оттенка
  наружу через кожицу стебля или листа не просачивается, даже у тонких полупрозрачных видов вроде стеклянного плюща. Даже смотрел несколько экземпляров на просвет
  (как и жилкование тропического листа) - жидкость внутри видна тёмными прожилками или пятнами, но цвет сквозь ткань идёт слабо, скорее как отголоски, чем как настоящий розовый.<br/><br/>
  Честно, меня это слегка удивило - ждал, что такой яркий пигмент будет хоть чуть-чуть просвечивать. Возможно, внешняя оболочка несёт собственный зелёный пигмент,
  который полностью прячет то, что под ним, как непрозрачный слой.
</p>

<div class="hbox r" style="margin:14px 0;font-size:13px;">
  Единственное исключение, что нашёл - в местах старого механического повреждения (заживший порез, место обломанной ветки) иногда виден едва заметный розоватый ободок по краю заживающей ткани,
  видимо, остатки жидкости, что выступила и частично впиталась обратно при заживлении. Но это не окраска самого растения, а просто след от старой раны.
</div>

<div class="r-soca">Отсутствие видимого проникновения пигмента через внешние ткани при значительной концентрации внутри указывает на эффективный барьерный механизм - вероятно, специализированный слой клеток, аналогичный эпидермису растений, препятствующий миграции пигментированных соединений к поверхности.</div>

<div class="r-note" style="transform:rotate(0.7deg);margin-top:10px;">
  Вывод: зелёный снаружи - это отдельная, независимая система окраски, никак не связанная с тем, что внутри. Растение будто нарочно прячет эту яркость, пока его не повредишь.
</div>

<hr class="r-div"/>

<p class="r-text">
  попробовал жидкость на вкус - одну крохотную каплю (с булавочную головку, не больше), после того как СОКА подтвердила, что базовый анализ явных токсинов в таком объёме не показал (как будто меня это волновало).
  Вкус слегка горьковатый, с лёгким металлическим послевкусием, отдалённо - что-то между смолой хвойного дерева и недозрелой ягодой.
  Никаких побочек за следующие сутки наблюдения за собой не заметил.
</p>

<div class="hbox r" style="margin:14px 0;font-size:13px;">
  <strong style="color:var(--red);">Хотя стоит уточнить:</strong> пробовал только микроскопическую дозу и только после консультации с СОКОЙ по базовому анализу. Это не значит, что жидкость безопасна в больших количествах - специально я этого не проверял и не планирую, уж извините, оно мне пока что не надо.
</div>

<p class="r-text">
  Собрал три образца от разных видов, цвет у всех визуально одинаковый (яркий фуксиевый), но точный химический состав каждого не сверял - возможно, это не одна и та же жидкость у разных видов, а просто похожая по цвету. Вопрос на будущее.
</p>

<div style="display:flex;gap:18px;align-items:flex-start;margin:12px 0;">
  <div class="r-data" style="flex:1;min-width:0;margin:0;">
    <div class="r-row"><span class="r-key">ВИДОВ С ЖИДКОСТЬЮ</span><span class="r-val hi">6 из 15+ найденных</span></div>
    <div class="r-row"><span class="r-key">PH ЖИДКОСТИ</span><span class="r-val">~5.8 // слабокислая</span></div>
    <div class="r-row"><span class="r-key">ВРЕМЯ НАЧАЛА ЗАСТЫВАНИЯ</span><span class="r-val">3–4 минуты</span></div>
    <div class="r-row"><span class="r-key">ПОЛНОЕ ЗАТВЕРДЕВАНИЕ</span><span class="r-val">~25–30 минут</span></div>
    <div class="r-row"><span class="r-key">ОБРАЗЦОВ СОБРАНО</span><span class="r-val y">3 разных вида</span></div>
  </div>
  <div class="sticky purple t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">застывшие капли теперь тоже находятся где-то в корабле, рядом с кристаллом #3. Коллекция выходит странная - светящийся камень и замёрзшая розовая капля, идеально!!</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 10. ПЛОДЫ И ЕДА -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">10</div>
  <div class="r-sep" style="flex:1;margin:0;">ПЛОДЫ И ЕДА</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0079 // 12 DEC 1973</div>

<div style="font-family:'VT323',monospace;font-size:30px;color:var(--red);text-shadow:0 0 18px rgba(255,34,68,0.4);letter-spacing:0.08em;margin-bottom:10px;">этот раздел не менее интересный.</div>

<p class="r-text">
  Представьте что я мог вот прямо сейчас взять и умереть, когда его писал? Ну, не буквально конечно (я надеюсь), но риск был вполне возможный! <br/><br/>
  <strong style="color:var(--g)">есть ли съедобные растения?</strong> Да. но я узнал это задом наперёд - сначала съел, потом узнал что съедобно.<br/><br/>
  Нашёл небольшое дерево (не из тех видов что уже описывал - отдельный, ещё не классифицированный вид, высотой примерно 1.8 метра, с округлыми листьями, без выраженного свечения)
  с гроздьями плодов, висящими низко, в пределах досягаемости. Плоды круглые, диаметром примерно <span class="hi">6–7 см</span>, кожица гладкая, тёмно-фиолетового цвета с лёгким металлическим блеском.
</p>

<div class="hbox r" style="margin:14px 0;font-size:14px;">
  В свое оправдание скажу, что я был голодный (мы с СОКОЙ только-только разобрались с очередной поломкой системы фильтрации, я не ел нормально часов десять!!!!) и любопытный - это, если вы уже заметили, мой главный мотив почти во всех ситуациях на этой планете.
  Сорвал один плод и съел, <span class="blink" style="color:var(--red);font-family:'VT323',monospace;font-size:18px;">не проверив, ядовит ли он.</span>
</div>

<div class="r-soca">Это было предпринято без предварительной консультации и без анализа состава плода, risk assessment отсутствовал. Я фиксирую это не для критики постфактум, а для протокола: в будущем подобные пробы должны сопровождаться хотя бы базовым спектральным анализом перед употреблением... Что Коко, уже предвкушаю, тупо проигнорирует.</div>

<p class="r-text" style="margin-top:10px;">
  СОКА уже прямым текстом мне говорит что я "идиот" сразу после того как я доел. Я ответил что-то вроде "ну, уже поздно" - это, наверное, не лучший аргумент, когда ешь какую-то херню, но было уже действительно поздно.
</p>

<div style="display:flex;gap:18px;align-items:flex-start;margin:16px 0;">
  <div style="flex-shrink:0;width:270px;">
    <div style="transform:rotate(2deg);">
      <div style="width:270px;height:270px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/strange_fruit.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:28px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/strange_fruit.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">плод, который я съел - тёмно-фиолетовый, металлический блеск</div>
    </div>
  </div>
  <div style="flex:1;min-width:0;align-self:center;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g2)">Вкус.</strong> сладкий, с лёгкой терпкостью, сравнил бы с чем-то средним между грушей и дыней - мякоть сочная, чуть зернистая текстура (похоже на текстуру груши),
      косточек или семян внутри не нашёл, хотя не разрезал плод полностью, просто откусывал.
    </p>
  </div>
</div>

<p class="r-text">
  Следующие несколько часов мои няньки внимательно следили за моим состоянием - пульс, температура, есть ли тошнота, головокружение, любые необычные ощущения, СМАЙЛИ вёл непрерывный мониторинг.
</p>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// МОНИТОРИНГ СОСТОЯНИЯ // первые 6 часов после употребления</div>
  <div style="position:relative;height:50px;margin:10px 0 4px;">
    <div style="position:absolute;top:24px;left:0;right:0;height:2px;background:rgba(0,255,136,0.12);"></div>
    <div style="position:absolute;top:18px;left:2%;width:10px;height:14px;background:rgba(255,34,68,0.35);border:1px solid rgba(255,34,68,0.5);"></div>
    <div style="position:absolute;top:18px;left:16%;width:10px;height:14px;background:rgba(0,255,136,0.25);border:1px solid rgba(0,255,136,0.4);"></div>
    <div style="position:absolute;top:18px;left:33%;width:10px;height:14px;background:rgba(255,200,0,0.3);border:1px solid rgba(255,200,0,0.45);"></div>
    <div style="position:absolute;top:18px;left:66%;width:10px;height:14px;background:rgba(0,255,136,0.25);border:1px solid rgba(0,255,136,0.4);"></div>
    <div style="position:absolute;top:18px;left:99%;width:10px;height:14px;background:rgba(0,180,255,0.25);border:1px solid rgba(0,180,255,0.4);"></div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;font-size:9px;">
    <div style="color:var(--red);text-align:center;">0ч<br/><span style="color:var(--dimmer);font-size:8px;">съел плод</span></div>
    <div style="color:var(--g);text-align:center;">1ч<br/><span style="color:var(--dimmer);font-size:8px;">пульс в норме</span></div>
    <div style="color:var(--yellow);text-align:center;">2ч<br/><span style="color:var(--dimmer);font-size:8px;">лёгкая сонливость*</span></div>
    <div style="color:var(--g);text-align:center;">4ч<br/><span style="color:var(--dimmer);font-size:8px;">полностью норма</span></div>
    <div style="color:var(--b);text-align:center;">6ч<br/><span style="color:var(--dimmer);font-size:8px;">мониторинг снят</span></div>
  </div>
  <div style="font-size:8px;color:var(--dimmer);margin-top:6px;">*возможно просто усталость от недосыпа, не точно связано с плодом</div>
</div>

<div class="r-smaily">Пока ты жевал грушедыню не спросив разрешения ни у кого, я уже был готов искать все возможные противоядия от четырёх классов вероятных токсинов, и сюрприз - оно тебе не понадобилось!! Ты цел, плод, судя по всему, очень вкусный, но в следующий раз спрашивай ДО, а не после, дай мне побыть героем заранее, а не постфактум!</div>

<p class="r-text">
  Через час после еды пульс был в норме, через два часа почувствовал лёгкую сонливость, но это с такой же вероятностью могло быть просто усталостью -
  не спал нормально предыдущие сутки из-за поломки фильтрации. К четырём часам - полностью нормальное состояние, никаких симптомов.
  СМАЙЛИ прекратил усиленный мониторинг через шесть часов, когда стало понятно что острой реакции не будет.
</p>

<div class="hbox" style="margin:14px 0;font-size:14px;">
  <span class="HUGE" style="font-size:22px;">Коко не умер, значит, можно есть!</span> - звучит как шутка, но по факту именно так я и определил безопасность этого конкретного плода для себя лично.
  Это была банальная проверка на собственном опыте, и я явно счастливчик - есть масса токсинов которые действуют не сразу,
  а через дни или недели, и шестичасовой мониторинг их бы не поймал... Ну, если вдруг мои отчеты резко оборвутся - вы знаете причину.
</div>

<div class="hbox r" style="margin:14px 0;font-size:13px;">
  <strong style="color:var(--red);">Для записи, себе на будущее:</strong> это не повод повторять такое с каждым новым плодом, Кокоро!!!!! в этот раз обошлось,
  а потом??? Надо выработать нормальную методику проверки, а не полагаться на удачу, а то от голода совсем с ума уже сходишь!
</div>

<p class="r-text">
  С тех пор я ел этот же плод ещё несколько раз (тот же вид дерева, нашёл поблизости ещё два таких) - реакция всегда одинаковая, никаких проблем.
  Фактически он стал частью моего рациона, разбавляет стандартный корабельный паёк.<br/><br/>
  Ещё нашёл, но пока не пробовал, минимум два других вида плодов - один маленький, ярко-жёлтый, растёт гроздьями на кустарниковой форме, чем-то похожей на колокольный мох,
  но без свечения; второй - крупный, продолговатый, на одном из деревьев вроде тропического вида. Эти буду проверять куда осторожнее: минимальная проба и долгое наблюдение,
  раз уж мне один раз уже повезло... Ну либо снова съем не подумав, кто знает??
</p>

<div style="display:flex;gap:24px;align-items:center;justify-content:center;margin:12px 0;">
  <div class="sticky yellow t2" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">если честно, это было даже хорошо. Первая нормальная еда не из пайка за много недель - и вкусная, хоть и... сладкая. Иногда любопытство того точно стоит, я не жалею!</div>
  <div class="r-data" style="flex:0 1 55%;min-width:0;margin:0;">
    <div class="r-row"><span class="r-key">СЪЕДЕННЫЙ ПЛОД</span><span class="r-val hi">диаметр 6–7 см, фиолетовый</span></div>
    <div class="r-row"><span class="r-key">ВКУС</span><span class="r-val">сладкий, терпкий // груша + дыня</span></div>
    <div class="r-row"><span class="r-key">МОНИТОРИНГ</span><span class="r-val y">6 часов, без негативной реакции</span></div>
    <div class="r-row"><span class="r-key">ПОВТОРНЫХ ПРОБ</span><span class="r-val">несколько раз, без проблем</span></div>
    <div class="r-row"><span class="r-key">ДРУГИХ ВИДОВ ПЛОДОВ НАЙДЕНО</span><span class="r-val r">2, ещё не проверены</span></div>
  </div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 11. ОТСУТСТВИЕ ЖИВОТНЫХ (НО НЕ ЖИЗНИ) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">11</div>
  <div class="r-sep" style="flex:1;margin:0;">ОТСУТСТВИЕ ЖИВОТНЫХ // НО НЕ ЖИЗНИ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0086 // 19 DEC 1973</div>

<p class="r-text">
  Почти три месяца я хожу по этой планете и до сих пор не встретил <span class="HUGE" style="font-size:30px;">ни одного</span> животного.
  Ни птицы, ни насекомого, ничего похожего на млекопитающее, рептилию или рыбу - вообще ничего, что я мог бы уверенно назвать животным в привычном смысле.
  Это не значит, что их нет совсем - Каэла большая, всю её мне не обойти, за целую планету ручаться не могу. Но на территории, что успел исследовать
  (накопленный радиус разведки - что-то около <span class="hi">60–70 км</span> во все стороны от посадки, не сплошным кругом, а скорее рваной паутиной маршрутов) - ничего.
</p>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// ПОДСЧЁТ // ПОСЛЕДНИЙ МЕСЯЦ ЦЕЛЕНАПРАВЛЕННЫХ НАБЛЮДЕНИЙ</div>
  <div class="g3">
    <div style="text-align:center;border:1px solid rgba(255,34,68,0.2);padding:10px;">
      <div style="font-family:'VT323',monospace;font-size:34px;color:var(--red);">0</div>
      <div style="font-size:9px;color:var(--dimmer);">подтверждённых контактов с животной жизнью</div>
    </div>
    <div style="text-align:center;border:1px solid rgba(255,34,68,0.2);padding:10px;">
      <div style="font-family:'VT323',monospace;font-size:34px;color:var(--red);">0</div>
      <div style="font-size:9px;color:var(--dimmer);">звуков указывающих на животных</div>
    </div>
    <div style="text-align:center;border:1px solid rgba(255,34,68,0.2);padding:10px;">
      <div style="font-family:'VT323',monospace;font-size:34px;color:var(--red);">0</div>
      <div style="font-size:9px;color:var(--dimmer);">следов, помёта, скелетных остатков</div>
    </div>
  </div>
</div>

<p class="r-text">
  <strong style="color:var(--g)">Почему эволюция пошла иначе?</strong> Точного ответа у меня нет, только догадки, и часть я уже трогал в разделе про грибы.
  Рабочая гипотеза: вся та биологическая ниша, которую обычно занимают животные - подвижные организмы, что кормятся другими организмами или их частями - здесь либо вообще не возникла,
  либо её вытеснило что-то другое, скорее всего грибы, которые я уже описывал как невероятно активные, быстрорастущие и разнообразные.<br/><br/>
  Прикинул логически: если "лишняя" энергия экосистемы Каэлы не уходит на подвижных хищников и травоядных, она может перенаправляться в рост самих растений и грибов -
  что, возможно, и объясняет, почему грибы тут прут с такой скоростью (раздел 8, гриб вырос на <span class="hi">17 см за один цикл</span>) и почему растительность такая плотная и активная.
</p>

<div class="r-soca">Отсутствие подвижной фауны при наличии сложной и метаболически активной флоры и микофлоры действительно может указывать на альтернативное распределение энергии в трофической цепи. Но для подтверждения гипотезы нужен полноценный экологический анализ, недоступный с текущим оборудованием. Фиксирую как правдоподобную, но не доказанную модель.</div>

<div class="r-note" style="transform:rotate(0.6deg);margin-top:10px;">
  "вся энергия ушла в растения и грибы" - как формулировка звучит красиво, но подчеркну: это пока моя личная интерпретация данных, а не подтверждённый факт.
  Может, причина, почему на Каэле не появились животные, совсем другая - может, что-то в самой химии планеты, может, псионическое поле как-то влияет на формирование нервной системы
  (это уже совсем спекуляция, записываю просто чтобы не потерять идею), может, что-то из истории планеты, о которой я вообще ничего не знаю.
</div>

<hr class="r-div"/>
<div class="r-sep">НО ЕСТЬ ЛИ БАКТЕРИИ И МИКРООРГАНИЗМЫ?</div>

<p class="r-text">
  да, точно есть - это могу утверждать увереннее, чем рассуждения про крупных животных. Взяли несколько проб - с камней, из почвы, из воды одного источника -
  и базовый анализ показал явную микроскопическую активность.
</p>

<table class="r-table" style="width:100%;margin:14px 0;">
  <tr><th>ПРОБА</th><th>АКТИВНОСТЬ</th><th>ПРИМЕЧАНИЕ</th></tr>
  <tr><td class="hi">почва</td><td class="r">высокая</td><td style="color:var(--dimmer)">метаболические маркеры повышены</td></tr>
  <tr><td class="hi">вода источника</td><td class="y">умеренная</td><td style="color:var(--dimmer)">термофильные формы</td></tr>
  <tr><td class="hi">поверхность камней</td><td style="color:var(--dimmer)">низкая</td><td style="color:var(--dimmer)">присутствует, но слабо</td></tr>
  <tr style="background:rgba(255,34,68,0.04)"><td colspan="2" class="r">классификация</td><td style="color:var(--red)">невозможна с текущим оборудованием</td></tr>
</table>

<p class="r-text">
  Точную классификацию найденных микроорганизмов СОКА дать не может - оборудование ПАНДЕМОНИУМА не рассчитано на полноценный микробиологический анализ,
  есть только базовые сенсоры, которые фиксируют сам факт активности (метаболические маркеры, изменение состава пробы со временем), но не дают детальной картины.
  Я знаю, что они есть, но толком не знаю, что именно.<br/><br/>
  Это, кстати, отчасти объясняет находку из раздела про почву - то, что почва восстанавливается после следов, может быть связано не только со структурой самой почвы,
  но и с активностью микроорганизмов в ней, которые быстро перерабатывают и восстанавливают верхний слой. <span class="ghost">это просто соединение фактов, не доказанная причинно-следственная связь, но логически выглядит правдоподобно.</span>
</p>

<div class="r-note" style="transform:rotate(-0.5deg);margin-top:14px;">
  странное чувство - стоять на планете, полной жизни, слышать (точнее, не слышать, да) вокруг кипящую активность роста и метаболизма,
  и при этом не встретить ни одного существа, которое посмотрело бы на тебя в ответ. Только растения, что иногда поворачиваются ко мне, но это не то же самое, что взгляд!
</div>

<div style="display:flex;gap:18px;align-items:center;margin:14px 0;">
  <div class="hbox y" style="flex:1;min-width:0;margin:0;font-size:14px;">
    Если задуматься: <span class="mark-y">я тут единственное животное</span>. В самом буквальном эволюционном смысле слова. Вся Каэла, насколько успел разобраться - это я и всё остальное, что не я.
  </div>
  <div class="sticky purple t4" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">Это наблюдение прямо тянет за собой следующий раздел - если животных нет, а что-то определённо двигается, реагирует и, возможно, даже выбирает, вопрос о природе этого что-то становится только острее.</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 12. ФЕНОМЕН КАЭЛЫ: ПРИРОДА ИЛИ РАЗУМ? -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">12</div>
  <div class="r-sep" style="flex:1;margin:0;">ФЕНОМЕН КАЭЛЫ // ПРИРОДА ИЛИ РАЗУМ?</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0095 // 28 DEC 1973 // СЛУЧАИ С DAY 0034 ПО 0089, СОБИРАЛОСЬ ПОСТЕПЕННО, ПИШУ СРАЗУ ВСЁ</div>

<div style="display:flex;gap:18px;align-items:center;margin:12px 0;">
  <div class="sticky yellow t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">если СОКА это читает: да, я в курсе, что "анекдот - не статистика". ты мне это уже говорила, хватит душнить!!!</div>
  <div class="r-note" style="flex:1;min-width:0;transform:rotate(-0.9deg);font-size:13px;margin:0;">
    Этот раздел я откладывал дольше всех. не потому что нечего писать - а потому что написать это значит признать вслух то,
    что до сих пор я лишь урывками черкал на полях, боясь звучать <span class="corrupt">ненаучно</span>. Таааак, начнем сначала с фактов,
    <span class="HUGE" style="font-size:22px;">потом</span> - то, что я по этому поводу думаю.
  </div>
</div>

<div style="display:flex;align-items:baseline;gap:10px;margin:20px 0 6px;">
  <span class="skew" style="font-family:'VT323',monospace;font-size:22px;">СЛУЧАЙ 01</span>
  <span style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;">// ВЕТКА // DAY 0034</span>
</div>

<div style="display:flex;gap:20px;align-items:flex-start;">
  <p class="r-text" style="flex:1;">
    Стоял у дерева (вид <span class="hib">Kaela-Arbor-3</span>), фотографировал кору, заметил боковую ветку на уровне груди.
    Поставил камеру на таймлапс, штатив, положение не трогал - <span class="mark">40 минут</span>. Ветер по метеостанции - 0.2 м/с, то есть фактически штиль.<br/><br/>
    Ветка развернулась в мою сторону на <span class="hi">15–20°</span>, мерил транспортиром по стоп-кадрам каждые 5 минут, с первого раза себе не поверил, пересчитал.
  </p>
  <div>
    <div class="r-sketch">
      <svg width="130" height="130" viewBox="0 0 130 130">
        <line x1="20" y1="115" x2="65" y2="60" stroke="rgba(0,255,136,0.35)" stroke-width="3" stroke-linecap="round"/>
        <line x1="65" y1="60" x2="100" y2="30" stroke="rgba(0,255,136,0.15)" stroke-width="2" stroke-dasharray="3,3" stroke-linecap="round"/>
        <line x1="65" y1="60" x2="108" y2="52" stroke="rgba(0,200,255,0.4)" stroke-width="2" stroke-linecap="round"/>
        <path d="M 88 34 A 20 20 0 0 1 100 50" fill="none" stroke="rgba(255,200,0,0.4)" stroke-width="1.2"/>
        <text x="65" y="15" text-anchor="middle" font-family="monospace" font-size="8" fill="rgba(255,200,0,0.5)">~18°</text>
        <circle cx="20" cy="115" r="3" fill="rgba(0,255,136,0.4)"/>
        <text x="65" y="128" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(0,180,60,0.35)">пунктир = было // сплошная = стало</text>
      </svg>
      <div class="r-sketch-cap" style="margin-top:22px;">от руки, по стоп-кадрам // не точный масштаб</div>
    </div>
  </div>
</div>

<div class="r-soca">Ранее зафиксированная скорость тигмонастического отклика на приближение тела - 1.5–2°/мин на начальном этапе. Наблюдаемое движение - около 0.4–0.5°/мин, но пролонгированное, без характерного возвратного колебания, типичного для аналогичных известных реакций.</div>

<div class="clearfix"></div>

<div style="display:flex;align-items:baseline;gap:10px;margin:22px 0 6px;">
  <span class="skew" style="font-family:'VT323',monospace;font-size:22px;">СЛУЧАЙ 02</span>
  <span style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;">// ТРОПИНКА // DAY 0041 → DAY 0050</span>
</div>

<p class="r-text">
  Срезал путь через мох между источниками, тропинки там <span class="mark-r">не было</span>. Три валуна запомнил как ориентиры - ну, на всякий случай, привычка, что уж.
  Прошёл один раз, <span class="ul">один</span>.<br/><br/>
  Вернулся тем же маршрутом через 9 дней, на месте моего пути - примятая полоса шириной ~40 см, повторяющая маршрут <span class="hi">вместе с зигзагом</span>, которым я обошёл лужу.
  Протоптать такое одним проходом физически нельзя, а больше там ходить некому.
</p>

<div style="display:flex;gap:18px;align-items:center;margin:14px 0;">
  <div class="r-data" style="flex:1;min-width:0;margin:0;">
    <div class="r-row"><span class="r-key">ШИРИНА СЛЕДА</span><span class="r-val">~40 см</span></div>
    <div class="r-row"><span class="r-key">КОЛ-ВО ПРОХОДОВ</span><span class="r-val hi">1 (один)</span></div>
    <div class="r-row"><span class="r-key">ПРОШЛО ДНЕЙ</span><span class="r-val y">9</span></div>
    <div class="r-row"><span class="r-key">СОСТОЯНИЕ СЛЕДА</span><span class="r-val r">чётче, чем сразу после</span></div>
  </div>
  <div class="sticky green t1" style="flex:0 0 24%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">Альтернатива, которую я обязан рассмотреть: мох тут аномально быстро восстанавливает форму (см. раздел про почву). Может, это просто "след не успел зарасти". но он стал ЧЁТЧЕ, а это не то же самое, что "не зарос".</div>
  <div style="flex:0 0 24%;min-width:0;">
    <div style="transform:rotate(1.2deg);">
      <div style="width:100%;aspect-ratio:1;border:1px solid var(--border);background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;padding:14px;box-sizing:border-box;">
        <div style="font-size:12px;color:var(--dimmer);text-align:center;line-height:1.6;">тут должна была быть фотка...<br/>Но Коко благополучно её потерял!!</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">тропинка которую я не протаптывал // валуны-ориентиры видны справа</div>
    </div>
  </div>
</div>

<div style="display:flex;align-items:baseline;gap:10px;margin:22px 0 6px;">
  <span class="skew" style="font-family:'VT323',monospace;font-size:22px;">СЛУЧАЙ 03</span>
  <span style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;">// КАМНИ // DAY 0058 → DAY 0064</span>
</div>

<p class="r-text">
  Самое спорное из всего, что тут есть. Краской отметил положение пяти камней (5–12 см) рядом с лагерем - контроль на случай эрозии.
  Участок ровный, проверял нивелиром, тектоника на Каэле минимальна (см. раздел 16). через 6 дней -
</p>

<table class="r-table">
  <tr><th>КАМЕНЬ</th><th>СМЕЩЕНИЕ</th><th>НАПРАВЛЕНИЕ</th></tr>
  <tr><td class="hi">#1</td><td class="r">3.2 см</td><td style="color:var(--dimmer)">ЮВ</td></tr>
  <tr><td class="hi">#2</td><td style="color:var(--dimmer)">0 см</td><td style="color:var(--dimmer)">-</td></tr>
  <tr><td class="hi">#3</td><td class="r">2.1 см</td><td style="color:var(--dimmer)">ЮВ</td></tr>
  <tr><td class="hi">#4</td><td style="color:var(--dimmer)">0 см</td><td style="color:var(--dimmer)">-</td></tr>
  <tr style="background:rgba(255,34,68,0.04)"><td class="hi">#5</td><td class="r">3.8 см</td><td style="color:var(--dimmer)">ЮВ</td></tr>
</table>

<div style="display:flex;gap:18px;align-items:stretch;margin:14px 0;">
  <div class="sticky red t4" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">3 из 5 - не хаотично, все в одну сторону. Будь это случайность или эрозия, разброс направлений был бы больше. Мне пришлось проверить еще несколько раз, прежде чем поверить собственным данным!!!!</div>
  <div class="r-smaily" style="flex:1;min-width:0;align-self:center;margin:0;">пока Коко второй день красит камни из личного набора и ползает вокруг них с нивелиром - считаю своим долгом вставить сюда что-нибудь от себя: пульс в норме, уровень одержимости повышен, но это, кажется, его штатное рабочее состояние!</div>
</div>

<div class="hbox y" style="margin:18px 0;">
  <strong style="color:var(--g)">Вывод, если это можно так назвать.</strong> Я не утверждаю, что Каэла разумна в смысле "у неё есть мозг". Возможно, это распределённая реакция экосистемы на постороннее тело -
  что-то вроде того, как грибница передаёт сигналы между деревьями, только быстрее и заметнее, или вообще что-то, для чего у меня пока нет модели.
</div>

<div class="r-soca">Три задокументированных случая за 79 дней - статистически незначимая выборка. Для выводов нужен контроль переменных на порядок больше. Данные архивируются как основа для будущего систематического наблюдения, а не как подтверждённое явление.</div>

<div class="r-note" style="transform:rotate(0.7deg);margin-top:10px;">
  СОКА не мешайте пожалуйста!!! Хотя она, конечно, права. Я продолжаю фиксировать каждый такой случай - фото, координаты, метки времени, чтобы однажды у нас была выборка, а не байка.
  Но то ощущение из первого дня, что земля подо мной живая и заметила меня - с тех пор так и не ушло, просто перестало быть только ощущением.
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 13. ЭЛЕКТРОМАГНЕТИЗМ И ПРИБОРЫ -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">13</div>
  <div class="r-sep" style="flex:1;margin:0;">ЭЛЕКТРОМАГНЕТИЗМ // ПРИБОРЫ ВЕДУТ СЕБЯ СТРАННО</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0100 // 02 JAN 1974 // ПЕРВОЕ ОБНАРУЖЕНИЕ - DAY 0052, ЗАТЕМ ПОВТОРНЫЕ ЗАХОДЫ</div>

<p class="r-text">
  Начну с сухого - чтобы потом было с чем сравнивать аномалию. Магнитное поле у Каэлы есть, и довольно слабое.
</p>

<div style="display:flex;gap:18px;align-items:center;margin:14px 0;">
  <div class="r-stats" style="flex:1;min-width:0;margin:0;">
    <div class="r-stat"><div class="r-stat-lbl">НАПРЯЖЁННОСТЬ ПОЛЯ</div><div class="r-stat-val">30<span class="r-stat-unit">мкТл</span></div></div>
    <div class="r-stat"><div class="r-stat-lbl">СМЕЩЕНИЕ ПОЛЮСОВ</div><div class="r-stat-val" style="color:var(--b)">7<span class="r-stat-unit">°</span></div></div>
    <div class="r-stat"><div class="r-stat-lbl">ЗОН АНОМАЛИИ НАЙДЕНО</div><div class="r-stat-val" style="color:var(--yellow)">4</div></div>
    <div class="r-stat"><div class="r-stat-lbl">МАКС. ОТКЛОНЕНИЕ КОМПАСА</div><div class="r-stat-val" style="color:var(--red)">40<span class="r-stat-unit">°</span></div></div>
  </div>
  <div class="sticky blue t2" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">для сравнения (по справочнику): у Земли поле 25 мкТл на экваторе, до 65 на полюсах. Каэла - в том же порядке величин, ничего экзотического. ПОКА!!!</div>
</div>

<div style="display:flex;gap:20px;align-items:flex-start;margin-top:14px;">
  <p class="r-text" style="flex:1;">
    Аналоговый компас (запасной, на случай отказа электроники - СОКА настояла) в норме врёт на 1–2°, это погрешность прибора.
    Но есть <span class="hi">4 точки</span> на маршруте (пометил <span class="mark-y">EM-01 - EM-04</span>), где стрелку уводит на 15–40° от расчётного севера.
    Повторяется стабильно при повторных заходах - то есть не сбой, а что-то локальное и постоянное.
  </p>
  <div>
    <div class="r-sketch">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(0,255,136,0.15)" stroke-width="1"/>
        <line x1="60" y1="60" x2="60" y2="18" stroke="rgba(0,255,136,0.15)" stroke-width="1" stroke-dasharray="2,3"/>
        <line x1="60" y1="60" x2="88" y2="30" stroke="rgba(255,34,68,0.5)" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 60 30 A 30 30 0 0 1 82 36" fill="none" stroke="rgba(255,200,0,0.4)" stroke-width="1"/>
        <text x="94" y="24" font-family="monospace" font-size="8" fill="rgba(255,34,68,0.5)">~32°</text>
        <text x="60" y="112" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(0,180,60,0.35)">EM-02 // пунктир = истинный С</text>
      </svg>
      <div class="r-sketch-cap" style="margin-top:26px;">компас в зоне EM-02, зарисовано на месте</div>
    </div>
  </div>
</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin-top:8px;">
  <div style="flex:1;min-width:0;">
    <table class="r-table" style="width:100%;margin:0;">
      <tr><th>ЗОНА</th><th>ОТКЛОНЕНИЕ</th><th>УСИЛЕНИЕ ПОЛЯ</th><th>БИО-АКТИВНОСТЬ (СОКА)</th></tr>
      <tr><td class="hi">EM-01</td><td class="y">15°</td><td style="color:var(--dimmer)">×1.4</td><td class="b">повышена</td></tr>
      <tr><td class="hi">EM-02</td><td class="r">32°</td><td style="color:var(--dimmer)">×2.1</td><td class="b">повышена // ветка отсюда, см. случай 01</td></tr>
      <tr><td class="hi">EM-03</td><td class="y">18°</td><td style="color:var(--dimmer)">×1.6</td><td style="color:var(--dimmer)">фон, без изменений</td></tr>
      <tr style="background:rgba(255,34,68,0.04)"><td class="hi">EM-04</td><td class="r">40°</td><td style="color:var(--dimmer)">×1.9</td><td class="b">повышена</td></tr>
    </table>
    <div class="schema" style="margin:16px 0 0;">
      <div class="schema-title">// СОВПАДЕНИЕ EM-АНОМАЛИИ И "ПСИОНИЧЕСКОГО" ФОНА</div>
      <div class="hbox b" style="margin:0;">
        <span class="HUGE" style="font-size:26px;">3 из 4</span> зон магнитной аномалии совпадают с зонами повышенной биоэлектрической активности. EM-03 - исключение, обычная магнитная аномалия без всего остального,
        не 100%, но и не похоже на случайность на такой маленькой выборке.
      </div>
    </div>
  </div>
  <div class="sticky yellow t5" style="flex:0 0 15%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">день 0052, зона EM-01: ручной сканер выдал искажённые показания состава воздуха на 40 секунд, потом сам восстановился. записываю честно: "само восстановилось и я не знаю почему" — плохая формулировка для инженерного журнала. другой пока нет.</div>
</div>

<div class="r-soca">Локальные магнитные аномалии подтверждены инструментально и статистически значимы. Связь с биоэлектрической активностью экосистемы вероятна, но данных недостаточно, чтобы установить причинно-следственную связь в любом направлении.</div>

<div class="r-note" style="transform:rotate(-0.6deg);margin-top:10px;">
  СОКА снова мешает!!!! И снова она права, но между строк: даже она не говорит "совпадение, и всё", она ЯЯЯВНО имеет в виду "недостаточно данных". а это не то же самое, что "ничего нет", Поняли, поняли, да???<br/><br/>
  Планирую вернуться в EM-02 с более чувствительным оборудованием, как только СОКА закончит калибровку запасного магнитометра. Если выйдет - пойму, реагирует зона на меня конкретно или на любое инородное тело вообще.
</div>

<hr class="r-div"/>


<div class="r-soca">Напоминание, поскольку в журнале это не отражено третью неделю: пункт 6 списка ремонта (герметизация шва грузового отсека) не сдвинулся с DAY 0081, пункт 9 даже не начат. И чему я только удивляюсь?</div>

<div class="r-note" style="transform:rotate(-0.5deg);margin-top:10px;">
  справедливо. вчера собирался заняться швом - по дороге к отсеку заметил, что мох у трапа светится ярче обычного, и следующие четыре часа сидел с ним. Шов на месте, никуда не денется. <span class="ghost">Мох, справедливости ради, тоже.</span>
</div>

<!-- ------------------------------------------- -->
<!-- 14. ЗВУКИ КАЭЛЫ -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">14</div>
  <div class="r-sep" style="flex:1;margin:0;">ЗВУКИ КАЭЛЫ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0104 // 06 JAN 1974 // ЗАПИСИ ЗА DAY 0028–0071 ПРИЛОЖЕНЫ ОТДЕЛЬНО</div>

<p class="r-text">Долго думал, как это вообще писать - тема странная сама по себе. Как описать словами то, чего почти нет? Начну с того, что тут вообще звучит, раз животных нет.</p>

<table class="r-table" style="margin-top:10px;">
  <tr><th>ИСТОЧНИК</th><th>КАК ЗВУЧИТ</th><th>СТАТУС</th></tr>
  <tr><td class="hi">ветер</td><td style="color:var(--dimmer)">тише земного при той же скорости, листва гасит верхние частоты - остаётся низкий гул, скорее чувствуешь грудью</td><td class="b">объяснимо</td></tr>
  <tr><td class="hi">вода</td><td style="color:var(--dimmer)">журчание, плеск - как на Земле, единственный "нормальный" звук тут</td><td style="color:var(--dimmer)">норма</td></tr>
  <tr><td class="hi">скрип</td><td style="color:var(--dimmer)">низкий, растянутый, направление меняется - 4 записи за месяц</td><td class="y">не объяснено</td></tr>
  <tr style="background:rgba(255,34,68,0.04)"><td class="hi">грибы</td><td style="color:var(--dimmer)">редкий сухой щелчок, раз совпал по времени со сменой формы шляпки</td><td class="r">совпадение?</td></tr>
</table>

<div class="sticky yellow t2 sticky-right" style="max-width:190px;position:relative;z-index:5;">скрип записал где-то 4 раза. Не ветер, не механика ПАНДЕМОНИУМА. Рабочая гипотеза - рост кристаллов в породе (раздел 6), микротрещины.</div>

<div class="r-note" style="transform:rotate(-0.7deg);margin-top:14px;">
  А теперь - тишина. Не в смысле "тишина = отсутствие звука", а в том, что тут она не ощущается как отсутствие. Специально пробовал записать на диктофон - вдруг это просто усталость и непривычная обстановка.
  Переслушал, но на записи звучит даже неправильнее, чем в моменте - будто микрофон не умеет соврать себе так, как умею я.
</div>

<div class="g3" style="margin-top:12px;">
  <div class="r-stat"><div class="r-stat-lbl">ФОНОВЫЙ ШУМ vs НОРМА</div><div class="r-stat-val" style="color:var(--red);">−65<span class="r-stat-unit">%</span></div></div>
  <div class="r-stat"><div class="r-stat-lbl">ЗАПИСЕЙ СКРИПА</div><div class="r-stat-val">4</div></div>
  <div class="r-stat"><div class="r-stat-lbl">ИСТОЧНИК СКРИПА</div><div class="r-stat-val" style="color:var(--yellow);font-size:24px;">?</div></div>
</div>

<div class="r-soca">Плотность фонового шума статистически ниже нормы, но в пределах физически объяснимого: высокой влажности воздуха и структуры растительного покрова достаточно для наблюдаемого затухания.</div>

<p class="r-text" style="margin-top:10px;">Разумное объяснение, в которое я вроде как верю. Ради интереса, не для науки: иногда специально молчу подольше и просто вслушиваюсь, не потому что жду что-то услышать. Тишина тут какая-то <span class="corrupt">плотная</span>. лучшего слова пока что не нашёл.</p>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 15. ИНТЕРАКЦИЯ С ПЛАНЕТОЙ (ЛИЧНЫЙ ОПЫТ) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">15</div>
  <div class="r-sep" style="flex:1;margin:0;">ИНТЕРАКЦИЯ С ПЛАНЕТОЙ // ЛИЧНЫЙ ОПЫТ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0109 // 11 JAN 1974 // НАБЛЮДЕНИЯ DAY 0040–0083, САМЫЙ НЕНАУЧНЫЙ РАЗДЕЛ ИЗ ВСЕХ</div>

<p class="r-text">Скажу прямо в начале: точность формулировок дальше не делает содержание менее субъективным. У меня сложилось ощущение, что Каэла выбирает, с кем и как взаимодействовать. Не со мной в каком-то особом смысле - с любым присутствием, что тут оказалось, она реагирует избирательно, а не одинаково.</p>

<div style="display:flex;gap:18px;align-items:center;margin-top:12px;">
  <div class="sticky purple t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">Как я это понял? Да никак, просто чувствовал. Знаю, что с точки зрения методики это худший возможный ответ - записываю его именно потому, что он худший. Не хочу рационализировать задним числом что уж там.</div>
  <div style="flex:1;min-width:0;">
    <div class="hbox r" style="margin:0 0 12px;">
      <strong style="color:var(--red)">места, которые "не пускают".</strong> 6 случаев за 3 месяца - подхожу к обычному на вид участку и разворачиваюсь, не дойдя, без видимой причины, просто "не сюда". один раз дошёл нарочно - ничего физического, но чувство неуместности только усилилось.
    </div>
    <div class="hbox b" style="margin:0;">
      <strong style="color:var(--b)">И наоборот.</strong> Реже, обычно у источников, ощущение обратное - тянет, и тянет конкретно, не "тут красиво", а будто место хочет, чтобы я был именно здесь и именно сейчас.
    </div>
  </div>
</div>

<p class="r-text" style="margin-top:14px;">сопоставил точки с EM-аномалиями (раздел 13) и зонами био-активности по СОКе. Совпадение частичное, не полное - часть "зовущих" мест вообще без отклонений по приборам, часть EM-зон прохожу нейтрально. То есть к тому, что приборы уже умеют мерить, это не сводится.</p>

<div class="r-data" style="margin:10px 0;">
  <div class="r-row"><span class="r-key">"НЕ ПУСКАЮЩИХ" МЕСТ</span><span class="r-val r">6 за 3 месяца</span></div>
  <div class="r-row"><span class="r-key">ЛОЖНЫХ СРАБАТЫВАНИЙ</span><span class="r-val hi">0 (ни разу не "показалось")</span></div>
  <div class="r-row"><span class="r-key">СОВПАДЕНИЕ С EM/BIO-ЗОНАМИ</span><span class="r-val y">частичное, не полное</span></div>
</div>

<div class="r-soca">Альтернативную гипотезу надо рассмотреть наравне: продолжительная изоляция и непривычная среда способствуют формированию ложных паттернов восприятия. При текущем объёме наблюдений это объяснение исключить нельзя.</div>

<div class="r-note" style="transform:rotate(0.5deg);margin-top:10px;">
  Разумно, и я обязан это озвучить наравне с тем, что мне хотелось бы, чтобы это было правдой. Но если это просто мозг ищет закономерности в шуме - он на удивление последователен в своих ложных срабатываниях: 6 раз, и ни разу не "показалось, а там всё нормально".
  Записываю как есть, не как доказанное явление, а как то, что наблюдал в себе достаточно стабильно, чтобы не иметь права это игнорировать.
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 16. ГЕОЛОГИЯ: ЕСТЬ ЛИ ВУЛКАНЫ, ТЕКТОНИКА? -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">16</div>
  <div class="r-sep" style="flex:1;margin:0;">ГЕОЛОГИЯ // ЕСТЬ ЛИ ВУЛКАНЫ, ТЕКТОНИКА?</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0114 // 16 JAN 1974 // ПОЛЕВЫЕ НАБЛЮДЕНИЯ DAY 0060–0081</div>

<div style="display:flex;gap:18px;align-items:flex-start;">
  <p class="r-text" style="flex:1;min-width:0;margin:0;">Коротко: действующих вулканов не видел ни одного - на радиусе разведки 60–70 км ни конусов, ни лавовых полей, ни свежих отложений. Это не значит, что их нет вообще, просто я обошёл ничтожный процент поверхности.<br/><br/>
  Но тектоника где-то там точно есть - просто медленная или глубокая, а может, и то и другое сразу. <strong style="color:var(--g)">Горячие источники</strong> - главный аргумент: вода стабильно тёплая, а тепло откуда-то берётся. По градиенту через состав проб СОКА оценила источник тепла на глубине не больше нескольких км.</p>
  <div class="sticky yellow t2" style="flex:0 0 20%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;align-self:flex-start;">Трещины в камнях (раздел 5) - СОКА говорила, естественный процесс с такой правильностью статистически маловероятен. Теперь думаю: может, это не аномалия отдельно от тектоники, а просто другой ЕЁ тип - медленный, равномерный, без рваных разломов.</div>
</div>

<table class="r-table" style="margin-top:10px;">
  <tr><th>ПОКАЗАТЕЛЬ</th><th>ЗНАЧЕНИЕ</th><th>ПРИМЕЧАНИЕ</th></tr>
  <tr><td class="hi">микротолчков за 3 недели</td><td class="y">2</td><td style="color:var(--dimmer)">акселерометры ПАНДЕМОНИУМА, не сейсмограф</td></tr>
  <tr><td class="hi">магнитуда (оценка СОКи)</td><td style="color:var(--dimmer)">~1.5–2.0</td><td style="color:var(--dimmer)">на Земле такое обычно не замечают</td></tr>
  <tr style="background:rgba(0,255,136,0.03)"><td class="hi">глубина источника тепла</td><td class="b">≤ неск. км</td><td style="color:var(--dimmer)">по температурному градиенту проб</td></tr>
</table>

<div class="hbox" style="margin:14px 0;">
  <strong style="color:var(--g)">Вывод.</strong> Планета тектонически живая, но в очень спокойном, замедленном режиме - ни активных разломов, ни субдукции, ни вулканизма, которые я мог бы наблюдать напрямую. Геологически Каэла ведёт себя примерно как её флора: медленно, целенаправленно, никуда не спеша.
  <div class="r-soca" style="margin:8px 0 0;">"Как будто никуда не торопится" геологическим термином не является.</div>
</div>

<div style="display:flex;align-items:baseline;gap:10px;margin:24px 0 6px;">
  <span class="skew" style="font-family:'VT323',monospace;font-size:18px;">ДОПОЛНЕНИЕ</span>
  <span style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;">// СЛОИ, ВОЗРАСТ, ПЕЩЕРЫ // PD-04 DAY 0121 // 23 JAN 1974</span>
</div>

<p class="r-text">Когда писал первую версию раздела, обошёлся вулканами и сейсмикой - но накопилось ещё, и оставлять это за кадром нечестно. Геология тут оказалась интереснее, чем мне казалось в первый месяц.</p>

<div class="sticky yellow t3 sticky-left" style="max-width:170px;">день 0067: обрыв 40 м, часть берега - вода подмыла склон и обнажила срез почти во всю высоту. Простоял двадцать минут, просто разглядывая, прежде чем вспомнил, что надо фотографировать, а не любоваться, дааа...</div>

<p class="r-text">Насчитал <span class="hi">14</span> отчётливых слоёв, от 20 см до почти 4 м толщиной. Цвет чередуется: тёмно-серый, полоса с лиловым отливом (подозреваю, тот же минерал, что в плодах и песке - визуально похоже, состав не проверял), снова серый, посветлее. В трёх слоях - вкрапления кристаллов того же семейства (раздел 6), но крупнее, по 3–4 см в поперечнике.<br/><br/>
По фотографиям среза (спектрометр не портативный, на месте не проверить) СОКА предположила осадочное происхождение - порода складывалась постепенно, вероятно в воде, слой за слоем, а не разом, как при извержении. Косвенно подтверждает то, что я уже подозревал: на Каэле медленные процессы берут верх над катастрофическими.</p>

<div class="schema" style="margin:16px 0 16px 200px;">
  <div class="schema-title">// ПОПЫТКА ОЦЕНИТЬ ВОЗРАСТ СРЕЗА // ГРУБО, КОСВЕННО</div>
  <div class="g3">
    <div style="text-align:center;padding:8px;">
      <div style="font-family:'VT323',monospace;font-size:26px;color:var(--g);">14</div>
      <div style="font-size:9px;color:var(--dimmer);">слоёв в срезе</div>
    </div>
    <div style="text-align:center;padding:8px;">
      <div style="font-family:'VT323',monospace;font-size:26px;color:var(--b);">~40м</div>
      <div style="font-size:9px;color:var(--dimmer);">общая высота толщи</div>
    </div>
    <div style="text-align:center;padding:8px;">
      <div style="font-family:'VT323',monospace;font-size:20px;color:var(--yellow);">0.3–2 млн лет</div>
      <div style="font-size:9px;color:var(--dimmer);">оценка по земным аналогам*</div>
    </div>
  </div>
</div>

<div class="r-soca">Оценка построена на допущении, что осадконакопление на Каэле идёт со скоростью, сопоставимой с земной. Прямых оснований проверить это допущение нет. По сути это не оценка возраста, а оценка того, "сколько бы это заняло на Земле" - что не одно и то же. И я, надеюсь, пилот это тоже понимает.</div>

<p class="r-text" style="margin-top:10px;">Конечно понимаю!!! и я согласен - записываю честно. Это не возраст планеты, это возраст ОДНОГО обнажения. Сама Каэла, разумеется, старше, возможно, на порядки.</p>

<div style="display:flex;gap:18px;align-items:flex-start;margin-top:14px;">
  <p class="r-text" style="flex:1;">
    <strong style="color:var(--g2)">Пещеры.</strong> Нашёл две, первая - в том же обрыве, вход метр на полтора, вглубь метров на 12, дальше слишком узко без снаряжения.
    Вторая - буквально провалился в неё мхом, нога ушла в скрытую полость. Полость ~3×4 м, потолок в том же светящемся мхе, что снаружи, только тут он ярче - догадка, СОКОЙ не подтверждённая: может, это единственный доступный ему "сигнал" о своей активности в темноте.<br/><br/>
    В обеих температура на 3–4° ниже поверхности и куда стабильнее - логично для подземных полостей.
  </p>
  <div class="sticky red t5" style="flex:0 0 20%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;align-self:flex-start;">В пещере со мхом - наросты на стенах, не кристаллы и не мох, что-то третье: текстура минерала, но на ощупь чуть эластичная. Образец не взял - не понимаю, что это, а рисковать не хочу после истории с плодом (раздел 10, да, помню, что обещал так больше не делать).</div>
</div>
<div class="clearfix"></div>

<div class="r-note" style="transform:rotate(-0.5deg);margin-top:12px;">
  Связь с разделом 12: если почва аномально быстро восстанавливается, камни двигаются, растения тянутся навстречу - а что если сама геология планеты не отдельная система от этой "живой" реакции, а её часть?
  Медленность и стабильность осадочных пород могли бы объяснить, почему тут вообще сложились условия для того, чем бы это ни было, спекуляция. Записываю, чтобы не потерять мысль, а не потому что готов защищать её перед кем-то, кроме себя в 3 часа ночи с кружкой чего-то похожего на кофе.
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 17. ПЕСОК И ПУСТЫНИ (ИХ ПОЧТИ НЕТ) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">17</div>
  <div class="r-sep" style="flex:1;margin:0;">ПЕСОК И ПУСТЫНИ // ИХ ПОЧТИ НЕТ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0126 // 28 JAN 1974 // ПОЛЕВОЙ ВЫХОД DAY 0075</div>

<div style="display:flex;gap:18px;align-items:flex-start;">
  <p class="r-text" style="flex:1;">
    Песок есть, но мало: один по-настоящему песчаный участок за всё время, берег внутреннего моря, ~200–300 м вдоль кромки, максимум метров десять вглубь, дальше сразу мох.
    Цвет серовато-фиолетовый, с теми же мелкими металлическими вкраплениями, что в кожице плодов (раздел 10) и кристаллах (раздел 6) - состав напрямую не проверял, только на глаз.<br/><br/>
    пустынь в привычном понимании - <span class="mark-r">нет вообще</span>. логично: климат стабильный (раздел 3), вода не застаивается (раздел 4), растительность колонизирует даже голый камень.
  </p>
  <div style="flex:0 0 28%;min-width:0;">
    <div style="transform:rotate(-1.4deg);">
      <div style="position:relative;width:100%;aspect-ratio:4/3;border:1px solid var(--border);background:#050806;overflow:hidden;">
        <!-- битые полосы данных -->
        <div style="position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,255,136,0.05) 0px,rgba(0,255,136,0.05) 1px,transparent 1px,transparent 4px);"></div>
        <div style="position:absolute;top:14%;left:-6%;width:112%;height:9%;background:rgba(255,34,68,0.18);transform:skewX(-8deg);"></div>
        <div style="position:absolute;top:31%;left:-4%;width:108%;height:5%;background:rgba(0,200,255,0.16);transform:skewX(5deg);"></div>
        <div style="position:absolute;top:52%;left:-8%;width:116%;height:12%;background:rgba(0,255,136,0.10);transform:skewX(-3deg);"></div>
        <div style="position:absolute;top:71%;left:-3%;width:106%;height:4%;background:rgba(255,200,0,0.20);transform:skewX(9deg);"></div>
        <div style="position:absolute;top:84%;left:-6%;width:112%;height:7%;background:rgba(255,34,68,0.12);transform:skewX(-6deg);"></div>
        <!-- мусорные символы -->
        <div style="position:absolute;inset:0;font-family:'VT323',monospace;font-size:13px;line-height:1.15;color:rgba(0,255,136,0.28);letter-spacing:0.06em;padding:6px;overflow:hidden;word-break:break-all;">
          ▓▒░█▓▒░ ██▒▓░█ ▒░▓█▒▓ ░█▓▒░█ ▓▒░██▓ ▒░█▓▒░ █▓▒░██ ▓▒░█▓▒ ░██▓▒░ █▓▒░█▓ ▒░██▓▒ ░█▓▒░█ ▓▒░██▓ ▒░█▓▒░ █▓▒░██ ▓▒░█▓▒ ░██▓▒░ █▓▒░█▓ ▒░██▓▒ ░█▓▒░█ ▓▒░██▓ ▒░█▓▒░ █▓▒░██ ▓▒░█▓▒ ░██▓▒░ █▓▒░█▓ ▒░██▓▒ ░█▓▒░█ ▓▒░██▓ ▒░█▓▒░
        </div>
        <!-- сообщение об ошибке -->
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center;padding:10px;">
          <div class="blink" style="font-family:'VT323',monospace;font-size:26px;color:var(--red);text-shadow:2px 0 rgba(0,200,255,0.6),-2px 0 rgba(255,34,68,0.6);letter-spacing:0.12em;">ОШИБКА ЧТЕНИЯ</div>
          <div style="font-family:'VT323',monospace;font-size:15px;color:rgba(255,200,0,0.75);">0x3F // ДАННЫЕ ПОВРЕЖДЕНЫ</div>
          <div class="corrupt" style="font-size:9px;color:var(--dimmer);word-break:break-all;">картинк/kaela/sand_beach.jpg</div>
        </div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:4px;text-align:center;letter-spacing:0.08em;">Единственный найденный песчаный участок // берег внутреннего моря <span style="color:var(--red)">// файл не читается</span></div>
    </div>
  </div>
</div>

<div style="display:flex;gap:20px;align-items:center;justify-content:center;margin-top:10px;">
  <div class="r-data" style="flex:0 1 52%;min-width:0;margin:0;">
    <div class="r-row"><span class="r-key">ПЛОЩАДЬ ПЛЯЖА</span><span class="r-val">~200-300 м вдоль берега</span></div>
    <div class="r-row"><span class="r-key">ГЛУБИНА ВГЛУБЬ СУШИ</span><span class="r-val y">≤10 м</span></div>
    <div class="r-row"><span class="r-key">НАЙДЕНО УЧАСТКОВ ЗА 75 ДНЕЙ</span><span class="r-val r">1</span></div>
  </div>
  <div class="sticky green t4" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">Почти-исключение - каменистые поля у трещин (раздел 16), голая порода без почвы. Отметил два таких поля в начале, оба вроде чуть ужались за месяцы - мхи наступают. Надо вернуться с рулеткой, пока это только впечатление.</div>
</div>

<div class="clearfix"></div>
<div class="hbox y" style="margin-top:14px;">Каэла физически не может позволить себе пустыню: слишком стабильный климат, слишком нахальная (в хорошем смысле) экосистема. Даже голый камень тут - не финал, а просто ещё не заросший мхом участок.</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 18. ЦВЕТЫ (ПРИВЫЧНЫЕ НАМ И НЕТ) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">18</div>
  <div class="r-sep" style="flex:1;margin:0;">ЦВЕТЫ // ПРИВЫЧНЫЕ НАМ И НЕТ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0140 // 11 FEB 1974</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin-top:10px;">
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0 0 12px;">этот раздел откладывал дольше всех - не потому что цветов мало, а потому что стоило подумать, что все основные виды я нашёл, как вылезал новый. Начну с того, что удивило сильнее всего в первый месяц: тут есть цветы, которые выглядят <span class="hi">почти как земные</span> из архива. Не идентичные, но узнаваемые.</p>
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g2)">вид 1 - обычный (условно).</strong> Группами на открытых полянах, стебель 15–20 см, пять лепестков, бледно-голубой с белым центром - металлический отблеск на кромке при определённом угле света выдаёт неземное происхождение.
      Запах слабый, что-то среднее между жасмином и мокрым камнем.
    </p>
  </div>
  <div class="sticky red t4" style="flex:0 0 20%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;align-self:center;">Опылителей на планете нет (раздел 11), зачем цветку быть красивым и пахнуть, если оценить некому? Может, опылители микроскопические, может, форма делает что-то ещё - собирает свет, терморегулирует? Не знаю, записываю вопрос, а не ответ.</div>
</div>

<div class="r-soca">Наличие развитых лепестков и ароматических соединений у растения при отсутствии зафиксированных опыляющих организмов статистически нетипично для конвергентной эволюции подобных структур.</div>

<div style="display:flex;align-items:baseline;gap:10px;margin:20px 0 6px;">
  <span class="skew" style="font-family:'VT323',monospace;font-size:20px;">ВИД 2</span>
  <span style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;">// "СТЕКЛЯННАЯ ЛИЛИЯ" // DAY 0119 // у горячих источников</span>
</div>

<div style="display:flex;gap:20px;align-items:flex-start;">
  <div class="flora-sketch" style="flex:0 0 13%;min-width:0;">
      <div class="r-sketch">
        <svg width="150" height="160" viewBox="0 0 150 160">
          <line x1="75" y1="150" x2="75" y2="85" stroke="rgba(0,255,136,0.3)" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M 75 85 C 60 60, 45 50, 40 25 C 55 40, 68 55, 75 85" fill="rgba(0,200,255,0.08)" stroke="rgba(0,200,255,0.3)" stroke-width="1"/>
          <path d="M 75 85 C 90 60, 105 50, 110 25 C 95 40, 82 55, 75 85" fill="rgba(0,200,255,0.08)" stroke="rgba(0,200,255,0.3)" stroke-width="1"/>
          <path d="M 75 85 C 68 55, 62 35, 55 12 C 65 28, 72 55, 75 85" fill="rgba(0,220,255,0.1)" stroke="rgba(0,220,255,0.32)" stroke-width="1"/>
          <path d="M 75 85 C 82 55, 88 35, 95 12 C 85 28, 78 55, 75 85" fill="rgba(0,220,255,0.1)" stroke="rgba(0,220,255,0.32)" stroke-width="1"/>
          <path d="M 75 85 C 70 50, 72 30, 75 8 C 78 30, 80 50, 75 85" fill="rgba(0,255,240,0.12)" stroke="rgba(0,255,240,0.35)" stroke-width="1"/>
          <circle cx="72" cy="78" r="2" fill="rgba(0,255,200,0.5)"/>
          <circle cx="78" cy="80" r="1.5" fill="rgba(0,255,200,0.5)"/>
          <circle cx="75" cy="74" r="1.8" fill="rgba(0,255,200,0.5)"/>
          <circle cx="70" cy="73" r="1.3" fill="rgba(0,255,200,0.4)"/>
          <text x="75" y="145" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(0,180,60,0.35)">рисовал по памяти, лепестки прозрачнее чем тут вышло</text>
        </svg>
        <div class="r-sketch-cap" style="margin-top:22px;">стеклянная лилия // GXN-44-Kaela, зона источников</div>
      </div>
  </div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      Растёт только в зоне тепла и влажности источников (раздел 4). Шесть вытянутых лепестков, симметрично раскрытых наружу - по форме да, похожа на лилию.
      Но <span class="mark">лепестки полупрозрачные</span>, почти матовое стекло - сквозь них видны размытые очертания того, что за цветком. У основания почти бесцветные, к кончикам - бледно-голубые.
      На ощупь не хрупкие - чуть эластичные, прохладные, гладкие.<br/><br/>
      Сердцевина - не тычинки в привычном виде, а скопление крошечных кристаллических структур (как в породе, раздел 6, и в пещере, раздел 16), размером с рисовое зерно, слабо мерцают в тени.
      Цветёт 3–4 дня, потом лепестки мутнеют, белеют и опадают.
    </p>
  </div>
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/glass_lily.jpg","стеклянная лилия, крупный план у источника - фото при плохом свете, пересниму","","center","tilt1")}</div>
</div>

<p class="r-text" style="margin-top:10px;">Спектральный анализ ручным сканером - высокое содержание кремния вместе с органическими волокнами, что-то вроде природного биостекла, если такой термин вообще есть - возможно, я его только что придумал.</p>

<div class="g2" style="margin-top:16px;">
  <div style="flex:1;">
    <p class="r-text" style="margin:0;"><strong style="color:var(--g2)">вид 3 - колокольчики-паразиты.</strong> Обвивают полу-каменные деревья, тёмно-фиолетовые, гроздьями. Паразитируют или просто держатся как за опору - не проверял, не хотел вредить без причины.
    Закрываются днём, раскрываются к закату (раздел 9) - чёткий суточный ритм на планете без выраженной смены дня и ночи.</p>
  </div>
  <div style="flex:1;">
    <p class="r-text" style="margin:0;"><strong style="color:var(--yellow)">вид 4 - жёлтые гроздья на колокольном мхе.</strong> Уже упоминал вскользь (раздел 10). не пробовал - в отличие от плода, тут выводы сделал. Визуально самые "обычные" из всего - почти неотличимы от лютиков из архива, чуть крупнее и насыщеннее цветом.</p>
  </div>
</div>

<table class="r-table" style="margin-top:14px;">
  <tr><th>ВИД</th><th>ГДЕ РАСТЁТ</th><th>ОСОБЕННОСТЬ</th></tr>
  <tr><td class="hi">"обычный"</td><td style="color:var(--dimmer)">открытые поляны</td><td class="b">металлический отблеск на кромке</td></tr>
  <tr style="background:rgba(0,200,255,0.04)"><td class="hi">стеклянная лилия</td><td style="color:var(--dimmer)">у горячих источников</td><td class="y">полупрозрачные лепестки, живёт 3-4 дня</td></tr>
  <tr><td class="hi">колокольчики-паразиты</td><td style="color:var(--dimmer)">на полу-каменных деревьях</td><td class="hi">суточный ритм, закрываются днём</td></tr>
  <tr style="background:rgba(255,200,0,0.03)"><td class="hi">жёлтые гроздья</td><td style="color:var(--dimmer)">"колокольный мох"</td><td style="color:var(--dimmer)">внешне почти земные</td></tr>
</table>

<div style="display:flex;gap:20px;align-items:center;margin-top:12px;">
  <div class="r-note" style="flex:1;min-width:0;margin:0;">Если бы надо было выбрать один цветок с Каэлы и описать словом "красиво", без всяких оговорок и вопросов про эволюцию - я бы выбрал стеклянную лилию. Остальные интересные, странные, достойны изучения. Эта - просто красивая. Иногда этого достаточно, даже в отчёте, который положено держать научным.</div>
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/paint_flowers.jpg","три вида на одном фото, случайно оказались рядом - повезло","","center","tilt3")}</div>
</div>
<div class="clearfix"></div>

<div class="hbox" style="margin-top:14px;">
  <strong style="color:var(--g)">Почему они есть, если опылителей нет</strong> - так и не знаю. СОКА накидала гипотез (терморегуляция, привлечение микроскопических форм жизни, которых мы не нашли, эволюционный «остаток» от более ранних условий планеты) - все правдоподобные, ни одна не подтверждена. Я просто хожу и фотографирую то, что нахожу красивым, а объяснение пусть ищут те, кто прилетит сюда после меня с оборудованием получше моего ручного сканера.
</div>


<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div class="sticky blue t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">ремонт: закрыто 12 пунктов из 14, осталась юстировка стабилизаторов и герметизация шва. Деталь под стабилизаторы выточил вчера, вышла с третьей попытки.</div>
  <div class="r-soca" style="flex:1;min-width:0;margin:0;">Прогресс по ремонту за последний месяц выше, чем за три предыдущих. Отмечаю без комментария о причинах. Причина мне известна: ты понял, что рано или поздно придётся решать, остаёшься ты или нет.</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 19. СОСТОЯНИЕ КОКО (ЛИЧНЫЙ РАЗДЕЛ, НЕ ПРО ПЛАНЕТУ) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">19</div>
  <div class="r-sep" style="flex:1;margin:0;">СОСТОЯНИЕ КОКО // ЛИЧНЫЙ РАЗДЕЛ, НЕ ПРО ПЛАНЕТУ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0151 // 22 FEB 1974</div>

<p class="r-text">СОКА настояла, чтобы я это написал. Дословно: <span class="hi">"у тебя раздел про грибы длиннее, чем про собственное физическое состояние за пять месяцев миссии. Это уже не приоритеты, а уклонение",</span> помягче она не подбирает никогда, я привык.<br/><br/>
Ладно, пишу. Мне 16 (исполнилось в этом месяце, если СОКА верно посчитала календарь - сам я сбился со счёта задолго до дня рождения). Летаю я не первый год, и режим был примерно тот же: работаю, пока не падаю, потом сплю сколько выйдет, потом снова работаю, на Каэле это не изменилось, изменился только фон.</p>

<div style="display:flex;gap:20px;align-items:center;justify-content:center;margin-top:12px;">
  <div class="r-data" style="flex:0 1 52%;min-width:0;margin:0;">
    <div class="r-row"><span class="r-key">СРЕДНИЙ СОН (40 ДНЕЙ)</span><span class="r-val y">4ч 20мин</span></div>
    <div class="r-row"><span class="r-key">МАКС. БЕЗ СНА ПОДРЯД</span><span class="r-val r">61 час</span></div>
    <div class="r-row"><span class="r-key">ПРОПУЩЕННЫХ ПРИЁМОВ ПИЩИ (МЕСЯЦ)</span><span class="r-val r">13</span></div>
    <div class="r-row"><span class="r-key">ИЗМЕНЕНИЕ ВЕСА С ПОСАДКИ</span><span class="r-val y">−3.4 кг</span></div>
  </div>
  <div class="sticky yellow t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">Разброс сна - от полутора часов (после находки светящегося образца, раздел 9, не мог уснуть, пока не пойму, что с ним творится - не понял до сих пор, перестал ждать) до почти 11 часов, когда физически рухнул после 61 часа без сна на картографировании плато.</div>
</div>

<div class="r-soca">Данная модель поведения зафиксирована ещё до посадки на Каэлу, в бортовых логах предыдущих двух миссий пилота. Планета не причина паттерна. Планета - контекст, в котором паттерн продолжает существовать без изменений.</div>

<p class="r-text" style="margin-top:10px;">СОКА права, и возразить мне нечего - кроме того, что это вполне продуктивно: я закончил картографирование плато, классифицировал больше видов грибов, чем планировал, нашёл стеклянную лилию именно потому, что в тот вечер не остановился на "уже поздно, я устал", это не оправдание, просто как я функционирую, записываю честно, вряд ли переделаю.</p>

<!--<div class="r-smaily">окей, обычно в личные разделы я не лезу, но раз тут прямым текстом про меня как медика: 13 пропущенных приёмов пищи за месяц - это не «я так работаю», это «мой пилот забывает, что у него есть тело». нотации читать не буду (СОКА уже прочитала за нас двоих), просто оставлю напоминание на видном месте - потому что забочусь. и потому что сам так решил :)</div> -->

<div style="display:flex;gap:18px;align-items:flex-start;margin-top:14px;">
  <p class="r-text" style="flex:1;min-width:0;margin:0;">
    <strong style="color:var(--g2)">Концентрация и гиперфокус.</strong> Замечаю за собой чаще всего, а описать точно - сложнее всего. Когда что-то захватывает - а на Каэле захватывает почти всё - теряю ощущение времени полностью, не метафорически.
    Однажды просидел над образцом кристалла (раздел 6) семь часов подряд, зарисовывая под разными углами, и вышел из этого только потому, что у СОКи сработал таймер проверки скафандра, а не потому, что почувствовал усталость. В моменте я не устаю, усталость приходит потом, разом, будто копилась всё это время.
  </p>
  <div class="sticky blue t5" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;align-self:center;">Не новый паттерн, знаю его годами, но раньше рядом были другие на борту, кто мог перебить, вытащить, а тут - только СОКА и СМАЙЛИ, и оба делают это по-своему, но это не то же, что живой человек, который хлопнет по плечу и наорет "НУКА БЫСТРО СПАТЬ!!!!"</div>
</div>

<p class="r-text" style="margin-top:10px;">
  <strong style="color:var(--yellow)">Эмоциональный фон.</strong> Не буду делать вид, что это ровная линия. Бывают дни (обычно после крупной находки - колокольчики-паразиты, разбор среза породы), когда энергии столько, что работаю сутками вообще без ощущения нагрузки - субъективно прекрасно, продуктивно, ясно. По прошлым миссиям знаю: за этим идёт откат - день-два, когда всё тяжелее обычного, концентрация рассыпается, злюсь на мелочи (в основном на собственные ошибки в расчётах). Помогает одно - просто пережить это, не форсируя.
  СОКА называет это "циклической моделью продуктивности с предсказуемыми фазами истощения", а у меня проще - "просто как я устроен". Ну, по сути оба правы, просто словарь разный.
</p>

<div class="r-note" style="transform:rotate(-0.6deg);margin-top:12px;">
  Для протокола, раз уж это официальный раздел отчёта, а не дневник: проблемой, которую надо решать, я это не считаю. Я работал так годами до Каэлы и буду так после, если это "после" будет. Планета тут ни при чём - она просто подкинула достаточно интересного, чтобы паттерн развернулся в полную силу!!
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 20. ВРЕМЯ НА КАЭЛЕ: ОЩУЩЕНИЕ -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">20</div>
  <div class="r-sep" style="flex:1;margin:0;">ВРЕМЯ НА КАЭЛЕ // ОЩУЩЕНИЕ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0165 // 08 MAR 1974</div>

<p class="r-text">Не про то, как время устроено формально - это уже в разделе про календарь, с цифрами и 59-часовым циклом. Этот раздел про то, что творится у меня в голове, когда я пытаюсь этим временем пользоваться.<br/><br/>
<strong style="color:var(--g)">Счёт дням я потерял,</strong> и это даже не метафорически. СОКА ведёт день-счётчик, я смотрю на него в отчётах - без неё не назвал бы сейчас номер дня даже с точностью до недели. Первые три-четыре недели держал в голове сам, потом просто перестал - не решение: счётчик в голове выключился, когда я понял, что дни тут не делятся на понятные куски привычным способом.</p>

<div class="g2" style="margin-top:10px;">
  <div class="hbox b" style="margin:0;">
    59 часов - не "день" в том смысле, в каком тело опознаёт день. Слишком длинный отрезок для одного куска, но и не два обычных дня подряд - где-то посередине, для чего у меня, похоже, просто нет внутреннего чувства.
    Ощущаю время как один длинный нерасчленённый поток с отдельными событиями (нашёл лилию, доел плод, СОКА выругалась на расчёт), а не как пронумерованные сутки.
  </div>
  <div class="hbox y" style="margin:0;">
    Ночи как таковой нет (раздел про псевдо-ночь, 62% от дневной нормы). На борте обычно ночь работала как граница между "было" и "будет" - своего рода перезагрузка восприятия. Тут границы физически нет, и мозг, похоже, замену ей сам не изобрёл... Хотяяя, честно, я и на собственном борту особо не разделял дни и ночи. Это космос, не Земля, я буквально всю жизнь так живу!
  </div>
</div>

<div class="r-soca">Циркадные показатели пилота демонстрируют постепенный сдвиг к нерегулярному циклу со средним периодом 31–34 часа между фазами сна. Полной синхронизации с 59-часовым планетарным циклом не зафиксировано.</div>

<div class="g3" style="margin-top:10px;">
  <div class="r-stat"><div class="r-stat-lbl">ЦИКЛ ПЛАНЕТЫ</div><div class="r-stat-val">59<span class="r-stat-unit">ч</span></div></div>
  <div class="r-stat"><div class="r-stat-lbl">СРЕДНИЙ ЦИКЛ СНА</div><div class="r-stat-val" style="color:var(--yellow)">31–34<span class="r-stat-unit">ч</span></div></div>
  <div class="r-stat"><div class="r-stat-lbl">СИНХРОНИЗАЦИЯ</div><div class="r-stat-val" style="color:var(--red);font-size:24px;">не полная</div></div>
</div>

<p class="r-text" style="margin-top:10px;">То есть даже тело не подстроилось под её ритм полностью - нашло что-то своё, среднее. СОКА как обычно умничает и называет это "неполной энтрейнментной адаптацией", а я как обычно могу сказать проще: "мой организм делает что хочет, а я просто живу рядом с этим процессом и записываю результаты".<br/><br/>
Но кое-что заметил точно: тело привыкло к <span class="hi">длине</span> самого цикла, даже не синхронизировавшись по фазе. Первые недели 59 часов ощущались бесконечными - то и дело ловил себя на "это что, всё ещё тот же день?", а сейчас уже нет. Цикл ощущается обычной единицей времени, а не аномалией, которую надо пересчитывать. Далось это не через понимание цифры, а само, через количество прожитых циклов.</p>

<div class="r-note" style="transform:rotate(0.5deg);margin-top:10px;">
  Думал, что либо подстроюсь полностью, либо не подстроюсь вообще. Вышло что-то среднее между двумя, что, в целом, меня вполне устраивает. На сегодня - 165-й день, если верить СОКе. Верю: альтернатива - не верить вообще ничему, а это не вариант, если хочешь продолжать работать.
</div>


<hr class="r-div"/>

<div style="display:flex;gap:20px;align-items:center;margin:16px 0;">
  <div class="hbox y" style="flex:1;min-width:0;margin:0;">
    <strong style="color:var(--yellow)">Про корабль, раз уж считаю время.</strong> Из четырнадцати пунктов в списке СОКи закрыто тринадцать.
    Остался один - юстировка стабилизаторов, та самая штука, из-за которой я сюда и упал. Работы там на пару дней, узлы уже собраны, деталь выточена ещё в феврале.<br/><br/>
    То есть <span class="mark">почти готово</span>. Пишу это и сам смотрю на строчку с подозрением.
  </div>
  <div class="sticky green t4" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">Пару дней работы, я знаю это с конца февраля, и почему-то до сих пор не начал.</div>
</div>


<!-- ------------------------------------------- -->
<!-- ЗАКРЫТИЕ ЖУРНАЛА // DAY 0251 -->
<!-- ------------------------------------------- -->

<div style="position:relative;margin:26px 0 10px;padding:22px 26px;border:1px solid rgba(0,255,136,0.35);background:linear-gradient(180deg,rgba(0,255,136,0.05),rgba(0,0,0,0.35));box-shadow:0 0 26px rgba(0,255,136,0.10) inset;">
  <div style="position:absolute;top:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,var(--g),var(--b),var(--yellow),var(--red),var(--g));opacity:0.7;"></div>
  <div style="position:absolute;top:6px;left:8px;font-family:'VT323',monospace;font-size:12px;color:rgba(0,255,136,0.45);">┌</div>
  <div style="position:absolute;bottom:6px;right:8px;font-family:'VT323',monospace;font-size:12px;color:rgba(0,255,136,0.45);">┘</div>

  <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:6px;">
    <span class="rainbow" style="font-family:'VT323',monospace;font-size:40px;letter-spacing:0.06em;">ЗАКРЫВАЮ ЖУРНАЛ</span>
    <span class="blink" style="font-family:'VT323',monospace;font-size:40px;color:var(--red);">?</span>
  </div>
  <div style="font-size:9px;color:var(--b);letter-spacing:0.14em;margin-bottom:14px;">PD-04 // DAY 0251 // 02 JUN 1974 // ДВИГАТЕЛЬ СОБРАН</div>

  <div style="display:flex;gap:22px;align-items:flex-start;flex-wrap:wrap;">
    <p class="r-text" style="flex:1;min-width:260px;margin:0;">
      Двигатель собран, и вроде как <span class="hi">держится</span>. То есть технически я могу улететь хоть завтра...<br/><br/>
      Технически.<br/><br/>
      Сижу третий день и не могу дописать эту строчку нормально, <span class="corrupt">каждый раз, когда собираюсь, нахожу ещё что-нибудь</span> - вчера новый вид мха, сегодня трещина в породе, которой раньше не было или была, и я её не замечал.<br/><br/>
      <span class="mark">я тут отдохнул.</span> Смешно писать такое в отчёт про аварийную посадку, но это правда. Так что дату отлёта не ставлю, пусть журнал пока просто <span class="ul">не закончится</span>.
    </p>
    <div class="sticky green t2" style="flex:0 0 22%;min-width:170px;max-width:none;box-sizing:border-box;font-size:11px;">Двигатель готов с конца мая, на самом-то деле. СОКА, конечно, знает, она всё знает - но предпочла меня не пинать. Хоть на этом ей спасибо?</div>
  </div>

  <div class="r-soca" style="margin:16px 0 0;">Двигатель функционален с DAY 0243, однако пилот не подавал заявку на старт девять суток, я не спрашиваю почему. Причина очевидна и не требует уточнения.</div>
</div>

<!-- ------------------------------------------- -->
<!-- ПОСЛЕДНЯЯ ЗАПИСЬ // DAY 0270 -->
<!-- ------------------------------------------- -->

<div style="position:relative;margin:26px 0 6px;padding:24px 26px;border:1px solid rgba(255,34,68,0.4);background:linear-gradient(180deg,rgba(255,34,68,0.06),rgba(0,0,0,0.4));">
  <div style="position:absolute;top:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,var(--red),var(--yellow),var(--red));opacity:0.75;"></div>

  <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:6px;">
    <span class="skew" style="font-family:'VT323',monospace;font-size:44px;color:var(--red);text-shadow:0 0 22px rgba(255,34,68,0.45);letter-spacing:0.08em;">УЛЕТАЮ.</span>
  </div>
  <div style="font-size:9px;color:var(--yellow);letter-spacing:0.14em;margin-bottom:16px;">PD-04 // DAY 0270 // 21 JUN 1974 // ПОСЛЕДНЯЯ ЗАПИСЬ С ОРБИТЫ КАЭЛЫ</div>

  <div style="display:flex;gap:24px;align-items:center;flex-wrap:wrap;">
    <div class="final-photo" style="flex:0 0 38%;min-width:240px;">${ph("картинк/kaela/koko_orbit_selfie.png","снято уже с орбиты // Каэла за плечом // держал камеру одной рукой, вторая на поручне","","center","tilt5")}</div>
    <p class="r-text" style="flex:1;min-width:260px;margin:0;">
      Всё. вышел на орбиту сегодня утром по корабельному времени.<br/><br/>
      сделал снимок - <span class="hi">специально с ней в кадре</span>. СОКА сказала, что выходить наружу ради фотографии нерационально. Кто бы её еще послушал конечно, хе-хе.<br/><br/>
      <span class="mark-y">265 дней.</span> я прилетел сюда случайно и почти разбился, а улетаю так, будто уезжаю из места, где жил. Даже грустно немного, пробыл здесь 9 месяцев, и почувствовал себя как дома((<br/><br/>
      <span class="corrupt">вернусь ли - не знаю,</span> и все же это место я запомню, до следующего раза.<br/><br/>
      <span style="color:var(--dimmer);font-size:11px;">- Коко, Пилот 01 // GXN-44-Kaela // КОНЕЦ ОТЧЁТА</span>
    </p>
  </div>

  <div class="r-soca" style="margin:18px 0 0;">Курс проложен. Каэла останется в архиве как GXN-44. Пилот попросил сохранить координаты планеты где-нибудь отдельно.</div>
</div>

<div style="text-align:center;font-family:'VT323',monospace;font-size:15px;color:var(--dimmer);letter-spacing:0.35em;margin:22px 0 6px;">// КОНЕЦ ЖУРНАЛА //</div>

  `}
  ,
  {id:'anomalies',label:'// АНОМАЛИИ',html:`
<div class="r-heading">GXN-44-Kaela // ПРИЛОЖЕНИЕ К ОТЧЁТУ // то, что я не смог никуда положить</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:14px;">PD-04 // DAY 0269 // 20 JUN 1974 // СОБРАНО ЗА ДЕНЬ ДО ОТЛЁТА</div>

<div style="display:flex;gap:20px;align-items:center;margin:12px 0;">
  <p class="r-text" style="flex:1;min-width:0;margin:0;">
    В наблюдениях у меня всё разложено по разделам: почва, вода, флора, грибы. это удобно, пока находки укладываются в разделы.<br/><br/>
    <span class="mark">эти три - не уложились.</span> я таскал их в черновиках почти год, потому что каждый раз, когда пытался вписать их в наблюдения, выходило либо не в тот раздел, либо не в тот тон.
    Собираю в один файл сейчас, за день до старта, по простой причине: если не запишу сегодня - <span class="corrupt">не запишу никогда</span>.
  </p>
  <div class="sticky yellow t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">формулировки тут будут хуже, чем в наблюдениях. я знаю. Но это уже не просто отчет а, скорее, кусочки, которые мне нужно было куда-то впихнуть.</div>
</div>

<div class="r-soca">Файл создан по запросу пилота вне структуры основного отчёта. Три записи. Ни одна не имеет подтверждённого объяснения, но сохраняю их без пометки "гипотеза" - потому что гипотезы у него, очевидно, нет.</div>

<hr class="r-div"/>

<!-- ================= АНОМАЛИЯ 01 ================= -->
<div style="display:flex;align-items:center;gap:10px;margin:20px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">A-01</div>
  <div class="r-sep" style="flex:1;margin:0;">СТАТУЯ В ОЗЕРЕ</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0198 // 10 APR 1974 // ~34 КМ ЮГО-ЗАПАДНЕЕ ПОСАДКИ</div>

<div style="display:flex;gap:22px;align-items:flex-start;margin:12px 0;">
  <div class="crash-photo" style="flex:0 0 30%;min-width:0;">${ph("картинк/kaela/statue_full.png","общий вид // снято с берега, ближе не подойти - глубина","","center","tilt2")}</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0 0 12px;">
      Шёл на юго-запад по новому маршруту, вышел к озеру. Озеро круглое, диаметр примерно <span class="hi">40 метров</span>, и посередине из воды торчит <span class="HUGE" style="font-size:26px;">это</span>.<br/><br/>
      Высота - прикинул по тени и углу звезды - <span class="hi">3.3–3.5 метра</span>. То есть примерно вдвое выше меня, каменное. Силуэт <span class="mark-r">человеческий</span>: торс, плечи, голова, что-то вроде рук.
      Ноги читаются плохо - ниже пояса форма расплывается и уходит в воду бесформенной массой, будто <span class="ul">их просто ещё не доделали</span>.
    </p>
    <div class="sticky green t2" style="display:block;max-width:none;box-sizing:border-box;font-size:12px;">Простоял на берегу долго, прежде чем достал камеру.. Ну а кто не был бы удивлен увидеть ЭТО???</div>
  </div>
</div>

<div class="r-data" style="margin:14px 0;">
  <div class="r-row"><span class="r-key">ВЫСОТА НАД ВОДОЙ</span><span class="r-val hi">~3.3–3.5 м</span></div>
  <div class="r-row"><span class="r-key">ДИАМЕТР ОЗЕРА</span><span class="r-val">~40 м</span></div>
  <div class="r-row"><span class="r-key">ГЛУБИНА У ОСНОВАНИЯ</span><span class="r-val r">&gt;14 м // дна не достал</span></div>
  <div class="r-row"><span class="r-key">МАТЕРИАЛЫ</span><span class="r-val y">камень, мох, кристаллы, металл</span></div>
  <div class="r-row"><span class="r-key">ОТКЛОНЕНИЕ КОМПАСА</span><span class="r-val r">~20° // пометил как EM-05</span></div>
</div>

<div style="display:flex;gap:22px;align-items:center;margin:14px 0;">
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--b)">Голова.</strong> Вот тут начинается странное. Из головы <span class="hib">льётся вода</span> - ярко-голубая, полупрозрачная, светящаяся тем же оттенком, что и всё на этой планете (480–520 нм, раздел 2).
      Падает в озеро сплошным потоком, не иссякает, откуда берётся - не знаю, выше статуи ничего нет.<br/><br/>
      выглядит как <span class="mark">волосы</span>. и, я даже удосужился проверить под разным углом - поток <span class="hi">обходит лицо</span>, не заливает его, а именно огибает.<br/><br/>
      Лицо слеплено плохо, как и ноги: провалы вместо глаз, намёк на рот. Но оно <span class="ul">узнаётся</span> как лицо. Из "волос" торчат растения - насчитал четыре вида, три из них знакомые (раздел 7).
    </p>
  </div>
  <div class="crash-photo" style="flex:0 0 30%;min-width:0;">${ph("картинк/kaela/statue_face.png","голова и водопад // поток огибает лицо, это видно даже на плохом снимке","","center","tilt5")}</div>
</div>

<div style="display:flex;gap:20px;align-items:flex-start;margin:14px 0;">
  <div class="sticky blue t4" style="flex:0 0 20%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">Заходил в воду по грудь, чтобы снять узоры ближе. Дальше не пошёл - дно уходит резко. Вода тёплая, как в источниках.</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g2)">Тело.</strong> покрыто мхом и кристаллами - теми же, что я собирал весь год. Поверх них по камню идут <span class="rainbow">голубые узоры</span>: тонкие линии, светятся сами, складываются в повторяющийся рисунок, который я так и не смог разобрать,<br/><br/>
      и <span class="mark-r">металл</span>. Вкрапления, местами целые пластины, матово-серые, на скол не проверял. Проблема в том, что <span class="hib">металла на Каэле я не находил нигде</span>. Ни в породе, ни в песке, ни в срезе обрыва (раздел 16), ни разу за 265 дней.
    </p>
  </div>
  <div class="crash-photo" style="flex:0 0 26%;min-width:0;">${ph("картинк/kaela/statue_patterns.png","узоры и металлические вкрапления // крупный план, снято по грудь в воде","","center","tilt1")}</div>
</div>

<div class="r-soca">Металл в спектре проб грунта, песка и породы за весь период миссии отсутствует. Присутствие обработанного металла в объекте, сложенном из местных материалов, означает одно из двух: либо источник вне зоны разведки пилота, либо материал получен процессом, который я не могу зафиксировать. Второе я не отбрасываю, оно вполне вероятнее.</div>

<div class="r-smaily" style="margin-top:12px;">Ну то есть, мой пилот три часа простоял по грудь в воде неизвестного водоёма ради фотографий узора?? Ну, в целом, не жалуюсь, вроде как безопасно. Но три часа, Коко, три.</div>

<div style="display:flex;gap:20px;align-items:center;margin:16px 0;">
  <div class="hbox y" style="flex:1;min-width:0;margin:0;">
    <strong style="color:var(--yellow)">кто это сделал?</strong> Сюда никто не прилетал. следов лагеря, инструмента, обработки - ничего. Да и вручную такое не лепят: материалы <span class="hi">выросли</span> на месте, мох и кристаллы не приклеены, они часть камня.<br/><br/>
    Остаётся вариант, который я и записываю: это сделала <span class="mark-r">Каэла</span>. Медленно, очень медленно - так же, как она двигает камни на сантиметры за неделю (раздел 12) и укладывает породу слоями за тысячи лет (раздел 16).
    Статуя выглядит <span class="ul">старой</span>. Если считать по её темпам - она лепила это очень, очень долго.
  </div>
  <div class="sticky purple t5" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">Пропорции неправильные. Плечи слишком узкие, шея слишком длинная, руки такие же длинные, будто лепили по описанию, а не с натуры.</div>
</div>

<div class="r-note" style="transform:rotate(-0.6deg);margin-top:12px;">
  И главный вопрос, который я не дописал в наблюдениях и не допишу здесь: <span class="corrupt">кого она лепила?</span> Потому что человеческий силуэт на планете без животных - это либо совпадение, либо она что-то видела.А я тут <span class="mark-y">единственное животное</span> за всё время наблюдений.<br/><br/>
  <span class="ghost">Статуя старше меня, проверил по мху на плечах - слой толще, чем нарастает за год. Так что нет, это не про меня, успокоил себя за девять минут, ну рекорд.</span>
</div>

<hr class="r-div"/>

<!-- ================= АНОМАЛИЯ 02 ================= -->
<div style="display:flex;align-items:center;gap:10px;margin:20px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">A-02</div>
  <div class="r-sep" style="flex:1;margin:0;">СЛЕПОЕ ПЯТНО</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0157 // 28 FEB 1974 // ~6 КМ СЕВЕРНЕЕ ПОСАДКИ</div>

<div style="display:flex;gap:22px;align-items:center;margin:12px 0;">
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0 0 12px;">
      Участок метров пятнадцать в поперечнике. С виду - обычный: мох, пара кустов, камни. Проблема в том, что <span class="mark-r">я его не помню</span>.<br/><br/>
      Не "плохо помню", а вообще НЕ ПОМНЮ. выхожу за границу - и через несколько минут в голове остаётся ощущение места без единой детали. Например... как имя, которое вертится на языке и не даётся.
      СОКА говорит, я был там <span class="hi">шесть раз</span>, но своими силами я вспоминаю два. Вот везет модулям - увидели, запомнили, и не забудут.
    </p>
    <div class="hbox b" style="margin:0;font-size:13px;">
      важно: <span class="hi">приборы работают</span>. Фотографии выходят нормально, диктофон пишет, координаты записываются. Ломается только то, что у меня в голове, поэтому и записываю тут, а не в наблюдениях - наблюдать-то нечего.
    </div>
  </div>
  <div class="crash-photo" style="flex:0 0 28%;min-width:0;">${ph("картинк/kaela/blind_spot.png","слепое пятно // снимок вышел обычным, я его не узнаю","","center","tilt3")}</div>
</div>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// ЭКСПЕРИМЕНТ // DAY 0159 // ДИКТОФОН НЕ ВЫКЛЮЧАЛСЯ</div>
  <div class="g3">
    <div style="text-align:center;padding:8px;">
      <div style="font-family:'VT323',monospace;font-size:26px;color:var(--g);">6</div>
      <div style="font-size:9px;color:var(--dimmer);">заходов по логам СОКи</div>
    </div>
    <div style="text-align:center;padding:8px;">
      <div style="font-family:'VT323',monospace;font-size:26px;color:var(--yellow);">2</div>
      <div style="font-size:9px;color:var(--dimmer);">помню сам</div>
    </div>
    <div style="text-align:center;padding:8px;">
      <div style="font-family:'VT323',monospace;font-size:26px;color:var(--red);">41 мин</div>
      <div style="font-size:9px;color:var(--dimmer);">записи, которую слушаю как чужую</div>
    </div>
  </div>
</div>

<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div class="sticky red t2" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">на записи мой голос спокойный, я подробно описываю мох, камни, углы, слушаю - и не помню ни одного слова из этих сорока минут.</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      Связь с разделом 15 очевидная: там я писал про места, которые "не пускают", это - <span class="mark">то же самое, но наоборот</span>. Оно вроде как пускает, и при этом не оставляет.<br/><br/>
      Объяснения у меня два, оба мне не нравятся. Первое: со мной что-то не так, и это медицинский вопрос, а не планетарный. Второе: <span class="corrupt">место так устроено</span>.
      СМАЙЛИ даже решил проверить меня и отклонений не нашёл, так что первое я записываю честно, но <span class="ul">не верю в него</span>.
    </p>
  </div>
</div>

<div class="r-soca">Логи навигации фиксируют шесть входов в зону и шесть выходов. Продолжительность от 8 до 41 минуты. Биометрия в пределах нормы во всех шести случаях. Пилот в устной форме подтверждал наличие зоны только два раза. Я не располагаю механизмом, объясняющим избирательную потерю памяти при нормальных показателях.</div>

<hr class="r-div"/>

<!-- ================= АНОМАЛИЯ 03 ================= -->
<div style="display:flex;align-items:center;gap:10px;margin:20px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">A-03</div>
  <div class="r-sep" style="flex:1;margin:0;">ВТОРАЯ ЗАГОТОВКА</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0261 // 12 JUN 1974 // ~11 КМ ВОСТОЧНЕЕ ПОСАДКИ</div>

<div style="display:flex;gap:22px;align-items:flex-start;margin:12px 0;">
  <div class="crash-photo" style="flex:0 0 28%;min-width:0;">${ph("картинк/kaela/second_form.png","масса у ручья // формы ещё нет, но узоры уже идут","","center","tilt4")}</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0 0 12px;">
      Нашёл это уже под конец, когда двигатель был собран и я просто ходил прощаться с местами.<br/><br/>
      У ручья из мха поднимается каменная масса, высота <span class="hi">~1.2 метра</span>, формы никакой - просто вертикальный нарост, слегка расширенный кверху. И я бы прошёл мимо.<br/><br/>
      Но по нему идут <span class="rainbow">те же голубые узоры</span>, и в двух местах - <span class="mark-r">металл</span>. Те самые матово-серые вкрапления, которых на планете больше нигде нет, кроме статуи в озере.
    </p>
    <div class="sticky green t5" style="display:block;max-width:none;box-sizing:border-box;font-size:12px;">Под ним, в мох, уходит небольшое углубление с водой, как у той, только маленькое.</div>
  </div>
</div>

<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div class="hbox r" style="flex:1;min-width:0;margin:0;">
    <strong style="color:var(--red)">вывод, который я не хочу делать, но сделаю.</strong> Статуя в озере - <span class="hi">не единичный случай</span>, а всего лишь не законченная работа, а это - <span class="mark-r">начатая</span>.<br/><br/>
    Если темпы Каэлы те же, что я мерил весь год (камни - сантиметры за неделю, слои - тысячелетия), то эта штука будет статуей очень нескоро, настолько нескоро, что вопрос "что получится" - не ко мне.
  </div>
  <div class="sticky yellow t2" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">Замерил обхват у основания и высоту, вбил колышек с меткой. Если кто-то сюда вернётся - будет с чем сравнить.</div>
</div>

<div class="r-soca">Совпадение материалов между A-01 и A-03 подтверждаю: те же спектральные признаки металла, то же люминесцентное окно узоров. Вероятность независимого возникновения двух таких объектов на исследованной площади я оценивать отказываюсь - выборка из двух не позволяет.</div>

<hr class="r-div"/>

<div class="r-note" style="transform:rotate(0.4deg);margin-top:14px;">
  Всё. три записи, ноль объяснений - рекорд для отчёта, который я весь год старался держать научным.<br/><br/>
  Но если совсем честно, то из всего, что я нашёл на Каэле, <span class="mark">именно это я увезу с собой</span>. Не данные по атмосфере и не календарь, а вот эту мысль: она что-то <span class="ul">делает</span>. долго, коряво, по неизвестным правилам - но делает.<br/><br/>
  <span class="corrupt">и она всё ещё этим занята.</span><br/><br/>
  <strong style="color:var(--red)">Возможно ли, что эти статуи - первые, будущие живые существа здесь, которые Каэла сейчас готовит?</strong> 
  <span style="color:var(--dimmer);font-size:11px;">- Коко, Пилот 01 // ПРИЛОЖЕНИЕ ЗАКРЫТО</span>
</div>
`}

  ]
});
