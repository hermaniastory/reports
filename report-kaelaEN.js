/* ============================================================
   report-kaela.js - PANDEMONIUM-04 // FIELD REPORT
   Pilot 01 (Koko) // planet GXN-44-Kaela // KAELA
   ============================================================ */
registerReport({
  id:'GXN-44-Kaela',code:'GXN-44-Kaela',title:'KAELA',
  tag:'planet',tagLabel:'PLANET',date:'14 OCT 1973',
  pilot:'Koko',
  lang:'en',
  refMap:{
    'the soil section':['observations',5],
    'the air section':['observations',2],
    'the fungi section':['observations',8],
    'the geology section':['observations',16],
    'the Sanoer section':['moons',0],
  },
  styles:`
    /* Kaela-specific layout tweaks (auto-scoped: [data-report="GXN-44-Kaela"]) */
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
  {id:'passport',label:'// PASSPORT',html:`
<div style="font-family:'VT323',monospace;font-size:64px;color:var(--g);text-shadow:0 0 30px rgba(0,255,136,0.4);letter-spacing:0.1em;margin:8px 0 4px;animation:glitch1 8s infinite">KAELA</div>
<div style="font-size:9px;color:var(--dimmer);letter-spacing:0.2em;margin-bottom:4px;">GXN-44-Kaela // ASTRO PASSPORT // filed by Koko, Pilot 01 // <span style="color:var(--red)">UNOFFICIAL</span></div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.15em;margin-bottom:14px;">PD-04 // DAY 0021 // 14 OCT 1973</div>

<!-- INTRO + ORBIT PHOTO -->
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:16px;">
  <div style="flex:1;min-width:0;">
    <p class="r-text">
      The name isn't mine — officially this thing is called <span class="hib">GXN-44-Kaela</span>, and I actually like the name, it sounds more serious than anything I'd have come up with myself. When we were entering the system,
      <span class="hi">the Pandemonium's onboard computer pinged a match with an archive code</span> from the NGC-1300 catalogue.
      Three objects with a similar index - and only one of them alive, <span class="rainbow">geosapient</span>. Guess which one we're hanging over?<br/><br/>
      Status on the card: <span class="blink" style="color:var(--red);font-family:'VT323',monospace;font-size:18px;">COLONIZATION PROHIBITED</span>.
      Special note - contact with a sapient form. <span class="corrupt">Someone has already tramped around here before me... Or tried very hard to.</span>
      I'm not making this up: the record was in the system before I saw anything with my own eyes, and the two line up.
      <span class="mark">So no, I'm not inventing things. Honestly, I'm too lazy to invent, so we work with what we've got. </span>
    </p>
    <div class="r-soca" style="margin-top:10px;">Archive record - roughly 40 years before the current mission. Source not listed, file corrupted. Simple conclusion: you are not the first one here. I won't be reassuring you, do what you want.</div>
    <div style="display:flex;gap:10px;margin-top:14px;align-items:flex-start;">
      <div class="sticky green t2" style="flex:1;font-size:12px;">p-type orbit. Kaela goes around BOTH stars at once. and the stars themselves stand there like they're glued on, not moving at all (at least that's how it looks), on the Crux side it's warmer: ~+22°C. on the Erden side: ~+16°C. difference somewhere around ~4–6°. Sanoer - low, barely peeks over the horizon. Noelle - close to the planet and pretty fast, you can see it in the sky almost always.</div>
      <div class="sticky yellow t4" style="flex:1;font-size:12px;">angular diameter of Crux from the surface - about 3–4 times bigger than the Mini-Nova I'm used to, the way I remember it from Astralis. I'm used to a thing that huge being dim and half-dead, and this one is - warm and alive.. unfamiliar?</div>
      <div class="sticky blue t5" style="flex:1;font-size:12px;">distance to Crux estimated by parallax and brightness, came out somewhere around ~0.3 AU. the margin of error is monstrous, of course, but the order of magnitude is right.</div>
    </div>
  </div>
  <div style="flex-shrink:0;flex-basis:320px;transform:rotate(-1.8deg);margin-top:6px;">
    <div style="width:320px;height:320px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
      <img src="${PD_IMG_BASE}картинк/kaela/orbit_diagram.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
      <div style="font-size:28px;opacity:0.25;">📷</div>
      <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/orbit_diagram.png</div>
    </div>
    <div style="font-size:9px;color:var(--dimmer);margin-top:4px;text-align:center;letter-spacing:0.08em;max-width:320px;">orbit diagram // hand-drawn // scale is approximate // i tried</div>

  </div>
</div>

<div class="r-sep">WHERE DID THE NAMES COME FROM?</div>
<div style="display:flex;gap:18px;align-items:flex-start;">
  <p class="r-text" style="flex:1;">
    We've already established they were invented before me. The moment we entered the system, <span class="hi">SOCA had already pulled the archive data</span>.
    The codes were sitting there: NGC-1300-Beta-Crux, KRX-Crux, TQN-Erden, GXN-44-Kaela.
    I take them as they are, shortened a couple for myself - <span class="hib">Crux, Erden, Kaela</span>, because saying the full thing every time is clearly beyond me.
    The moons - Sanoer and Noelle, were in the database too.
    <span class="corrupt">Who named them - no idea.</span> Maybe the first surveyors, maybe some automated system stamping them out in a row.
    But the names came before me. So thanks, I'm using what's ready.
  </p>
  <div class="sticky yellow t2" style="flex-shrink:0;width:220px;font-size:13px;">NGC-1300-Beta-Crux - I think they stuck "Crux" on because one star visually resembles a cross, though I just call the whole system Crux System. Laziness - the engine of nomenclature!</div>
</div>

<div class="r-sep">LOCATION</div>
<div style="display:flex;gap:16px;align-items:flex-start;">
  <div style="flex:2;display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;">
    <div>
      <div class="r-heading">GALAXY</div>
    <p class="r-text"><span class="hi">NGC 1300</span> - spiral, barred, ~65 million light years from here, in the constellation Eridanus, apparently?<br/><br/>
      <span class="ghost">converted it into kilometres once, got a number with 21 digits. yeah, the places we end up, honestly...</span><br/><br/>
      <span class="strike">How we even ended up here - still unclear. Knowing my travels, it's fair to assume I wasn't even watching where we were flying.</span></p>
    </div>
    <div>
      <div class="r-heading">STELLAR SYSTEM</div>
    <p class="r-text"><span class="hib spread">NGC-1300-Beta-Crux</span><br/>unofficially: <span class="hi">Crux System</span><br/><br/>
      A binary system, two stars. Kaela goes around both at once - one big circle for the pair.<br/>
      <span class="skew" style="font-size:12px;">it's like living under two suns at once, and you can tell them apart just by how they feel - one is noticeably warm, like standing near a fire, the other one just shines - and pretty dimly at that.</span></p>
    </div>
    <div>
      <div class="r-heading">ORBIT TYPE</div>
      Circumbinary <span class="mark">P-type</span> - stable.<br/><br/>
      Orbital period - roughly <span class="hi">286 days</span> ±2–3 days.<br/>
      <span class="corrupt">counted it over several months by the shifting positions of the stars, there's a margin of error, yes.</span>
      <div class="sticky green t2" style="width:100%;font-size:12px;margin-top:8px;">and the result - a climate that's indecently stable. Seasons are barely noticeable and there are no sharp swings.. at least it's safe.</div>
    </div>
  </div>
  <div style="flex:1;display:flex;align-items:center;justify-content:center;align-self:stretch;">
    <div class="sticky yellow t3" style="width:220px;font-size:14px;padding:18px 20px;">SOCA keeps saying "geosapient" like it's an ordinary word. it is NOT an ordinary word! There are 3 known cases in the entire archive, KAELA is one of them, THREE!!!</div>
  </div>
</div>

<div class="r-sep">PHYSICAL PARAMETERS // my measurements and guesses</div>
<div class="r-note" style="font-size:12px;transform:rotate(-0.4deg);margin-bottom:12px;">everything below - measured myself, by hand. SOCA nitpicked and corrected afterwards, where we didn't agree - I left both numbers, at least that's more honest (and it spites her)</div>

<div style="display:flex;gap:16px;align-items:flex-start;">
  <div style="flex:1;">
    <div class="r-stats">
      <div class="r-stat"><div class="r-stat-lbl">RADIUS</div><div class="r-stat-val">5 800<span class="r-stat-unit">km</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">MASS</div><div class="r-stat-val">0.81<span class="r-stat-unit">M⊕</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">GRAVITY</div><div class="r-stat-val">0.91<span class="r-stat-unit">g</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">TEMP</div><div class="r-stat-val">+16–22<span class="r-stat-unit">°C</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">AXIS TILT</div><div class="r-stat-val">11.7<span class="r-stat-unit">°</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">DAY</div><div class="r-stat-val">~59<span class="r-stat-unit">Earth h</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">YEAR</div><div class="r-stat-val">~286<span class="r-stat-unit">Earth d</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">MOONS</div><div class="r-stat-val">2</div></div>
    </div>
  </div>
  <div style="flex:1.2;display:flex;flex-direction:column;gap:8px;">
    <table style="border-collapse:collapse;font-size:12px;width:100%;">
      <tr style="background:rgba(0,255,136,0.04)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);white-space:nowrap;">RADIUS</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">by transit across the star, error ~5–7%. <span style="color:var(--g)">~5800 km</span> - slightly smaller than Earth.</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);">MASS</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">by gravitational influence on the moons. ±10%. <span style="color:var(--g)">0.81 M⊕</span>.</td></tr>
      <tr style="background:rgba(0,255,136,0.04)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);">GRAVITY</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">timed an object falling from 1 m. <span style="color:var(--yellow)">repeat runs always gave the same result.</span> <span style="color:var(--g)">0.91g</span>.</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);">TEMP</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">shipboard sensors, error ±1–2°C. <span style="color:var(--g)">+16–22°C</span> The climate is astonishingly even.</td></tr>
      <tr style="background:rgba(0,255,136,0.04)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);">AXIS TILT</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">by the movement of the stars across the sky. <span style="color:var(--g)">11.7°</span> - almost like Mars, but SOCA says 11.4°... We didn't come to an agreement.</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);">DAY</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">timed between two Crux sunrises. <span style="color:var(--g)">~59 h</span> ±10 minutes.</td></tr>
      <tr style="background:rgba(0,255,136,0.04)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dimmer);">YEAR</td><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.12);color:var(--dim);">by the angle of the stars, <span style="color:var(--g)">~286 days</span> ±2–3 days. <span class="corrupt">possibly wrong.</span></td></tr>
    </table>
  </div>
</div>

<div class="r-sep">ATMOSPHERE</div>
<div style="display:flex;gap:20px;align-items:stretch;margin:10px 0;">
  <div style="flex:1;display:flex;align-items:center;justify-content:center;">
    <table style="border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--dimmer);">N₂</td><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);font-family:'VT323',monospace;font-size:24px;color:var(--g);text-shadow:0 0 8px rgba(0,255,136,0.4);">78%</td></tr>
      <tr style="background:rgba(0,255,136,0.03)"><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--dimmer);">O₂</td><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);font-family:'VT323',monospace;font-size:24px;color:var(--g);text-shadow:0 0 8px rgba(0,255,136,0.4);">18%</td></tr>
      <tr><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--dimmer);">organic vapors</td><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--yellow);">present</td></tr>
      <tr style="background:rgba(0,255,136,0.03)"><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--dimmer);">fluorescent cpds</td><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--yellow);">present</td></tr>
      <tr><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--dimmer);">pressure</td><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--g);">~0.94 atm <span style="color:var(--dimmer);font-size:11px;">// sensor: 0.96</span></td></tr>
      <tr style="background:rgba(0,255,136,0.03)"><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--dimmer);">breathable</td><td style="padding:7px 18px;border:1px solid rgba(0,255,136,0.15);color:var(--g);">YES — <span style="color:var(--yellow)">filter required</span></td></tr>
    </table>
  </div>
  <div style="flex:1.4;display:flex;flex-direction:column;gap:10px;justify-content:center;">
    <p class="r-text">
      Composition taken from air samples through the Pandemonium's filter. Breathable - <span class="mark">with the filter only</span>.
      Without it, dizziness rolls in after a couple of hours.<br/>
      <span class="mark-y">Verified from personal experience! Went out for 23 minutes out of curiosity, and my head started spinning at minute 18.</span> I don't recommend repeating it.<br/><br/>
      The fluorescent particles are visible even without instruments if you catch the right angle of light - <span class="hi">like dust in a sunbeam, except the specks glow on their own</span>. Pressure I took both by feel and by sensor. The sensor said 0.96 atm, I got 0.94. A tiny difference. Overall, pleased with the result.
    </p>
    <div class="r-note" style="transform:rotate(0.8deg);font-size:12px;">
      the air here feels like ice water - every breath is heavy, like you swallowed something very cold and keep breathing anyway, I can't describe it more precisely. on Astralis I got used to cold, but there it's dry and dead, and this one is somehow wet.
    </div>
    <div class="r-soca">Filter is rated for 8 hours. First visit: he stayed out 11. Second visit: 23 minutes with no filter at all, "to understand it", he told me to relax.</div>
  </div>
</div>

<div style="font-size:8px;color:var(--dimmer);letter-spacing:0.12em;margin:18px 0 -8px;text-align:right;">// PD-04 DAY 0040 // 02 NOV 1973 // writing this up three weeks later</div>

<div class="r-sep">PSIONIC FIELD // the main thing I'm trying to understand</div>
<p class="r-text">
  And heeere is where it gets interesting!! The planet generates a field! How it works - I don't know, what to measure it with - also don't know, what to do about it - also don't know. But observing it and building theories is pretty entertaining.
  And that it <span class="HUGE">exists</span> - that I know for sure. Because:
</p>

<div style="display:flex;gap:16px;align-items:flex-start;margin-top:12px;">
  <div style="flex:1;display:flex;flex-direction:column;gap:10px;">

    <div class="hbox y">
      <div style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">01 // TIME RUNS DIFFERENTLY</div>
      Sat down to look at the horizon, felt like - about 20 minutes. In fact - <span style="color:var(--yellow);font-family:'VT323',monospace;font-size:14px;">4 HOURS</span>.
      I haven't lost it!! It's just that at some point time stopped registering at all.
      <span class="corrupt">SOCA logged 3h 47min of inactivity, readings normal, pulse - the lowest across the whole observation period (as if that needed observing, yeah).</span>
    </div>

    <div class="hbox">
      <div style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">02 // FEAR AND AGGRESSION FADE</div>
      Dropped a tool overboard right before landing, and didn't even swear!
      Only afterwards did it hit me that this is <span class="mark-r">not normal</span>.
      I know myself: normally I'd have put on a whole performance for the entire ship. And here - I just went on with my day. Either the air does that,
      or it's the field. I'm rarely that calm!!
      <span class="ghost">though honestly - that's a feeling, not evidence. So for now I've got nothing to prove.. But that's only for now!</span>
    </div>

    <div class="hbox b">
      <div style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">03 // EMPATHY INTENSIFIES</div>
      The planet feels alive. There's no wildlife here at all, zero - and yet you still feel
      that something here is <span class="rainbow">definitely alive</span>. And it's clearly not "nature" (although it might be that too), but something that feels different.
      <span class="corrupt">curious: if this thing has a mood - would I feel it when it's in a bad one?</span>
    </div>

    <div class="hbox r">
      <div style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">04 // KAELA IS LOOKING YOU OVER</div>
      The ship hung in the clouds for 4 minutes, and specifically didn't break down - it just <span class="blink">froze</span>.
      The landing turned out mediocre, but the fault was there before orbit, as far as I even remember?
      And in the end the ship seemed to <span class="mark">set itself down carefully</span>.
      <span class="corrupt">that's strange, right? tell me that's strange!</span>
    </div>

  </div>

  <div style="flex-shrink:0;display:flex;flex-direction:column;gap:12px;width:240px;">
    <div style="display:flex;align-items:center;justify-content:center;align-self:stretch;">
      <div class="sticky blue t5" style="width:220px;font-size:14px;padding:18px 20px;">Apparently the planet has its own preferences about who to make contact with. SOCA can't explain the mechanism behind that choice, and it clearly annoys her (that's what she gets for acting so clever). My theory: maybe the planet has its own opinions about who gets to land on it at all. Very "scientific", yes yes...</div>
    </div>
    <div class="r-soca">In the records I hold, the selection pattern shows no correlation with species, age, or psychological profile. I am simply logging this fact - and nothing more, Koko.</div>
    <div class="sticky red t3" style="width:220px;font-size:12px;">
      <span style="text-decoration:line-through;opacity:0.5;">does she know that I'm here?</span><br/>
      <span style="color:var(--dimmer);font-size:10px;">- no answer to that seems fun to me.</span>
    </div>
  </div>
</div>

<div class="r-sep">QUESTIONS WITHOUT ANSWERS</div>
<div style="display:flex;gap:16px;align-items:flex-start;">
  <div style="flex:1;">
    <ul class="r-list" style="gap:8px;">
      <li><span class="hi">Why is the planet alive?</span> And what exactly makes it alive?</li>
      <li><span class="corrupt">Who tramped around here before me - and where did they go?</span></li>
      <li>Will I even be able to <span class="blink" style="color:var(--red)">leave?</span></li>
    </ul>
  </div>
  <div style="flex:1;">
    <div class="r-note" style="transform:rotate(-0.8deg);">
      How long I'll be stuck here - no idea. But while I'm stuck - I'm writing down everything I see, even the nonsense.
      Because if I do get out one day, these scribbles might turn out to be even more interesting than they seem now. And if I don't.. Well, let at least someone read it and find out it was interesting here. If anyone finds these records, of course.<br/><br/>
      <span style="color:var(--dimmer);font-size:11px;">— Koko, Pilot 01</span>
    </div>
    <div class="r-soca">Record saved. Recipient not specified.</div>
  </div>
</div>
  `},
  
  /* ============================================================
    STARS - CRUX AND ERDEN
   ============================================================ */

  {id:'stars',label:'// STARS',html:`
<div style="font-family:'VT323',monospace;font-size:36px;color:var(--b);letter-spacing:0.15em;margin-bottom:4px;animation:glitch1 10s infinite">CRUX &amp; ERDEN // EVERYTHING I'VE WORKED OUT</div>
<div style="font-size:9px;color:var(--dimmer);letter-spacing:0.2em;margin-bottom:4px;">STARS TAB // PART 1 // filed by Koko, Pilot 01</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.15em;margin-bottom:14px;">PD-04 // DAY 0046 // 08 NOV 1973</div>

<!-- INTRO -->
<div style="display:flex;gap:18px;align-items:flex-start;margin-bottom:16px;">
  <p class="r-text" style="flex:1;">
    I've spent a lot of time here. <span class="corrupt">How much - don't ask</span>, I lost count: days on Kaela are enormously long, and my watch gave up the ghost back at the landing. But I'm hoping SOCA is kindly keeping count of the days...
    On the plus side, I stared at the stars so long that I started catching their movement even without instruments.<br/><br/>
    At first I just looked, then I started writing down everything I caught. And after that, cross-checking it with the ship's log and whatever SOCA had to say.<br/><br/>
    In this kind of meticulous astronomy I'm honestly no genius. But when you're <span class="mark-r">stuck in a system with two suns</span> - there's more than enough time to reflect on your astronomical talents.
  </p>
  <div style="flex-shrink:0;display:flex;flex-direction:column;gap:10px;width:200px;">
    <div class="sticky yellow t2" style="font-size:13px;"><span style="text-decoration:line-through;opacity:0.5;">Claudia, I could really use you here!!!</div>
    <div class="sticky blue t5" style="font-size:12px;">dug up some old spectral class tables in the ship's log, without them I wouldn't have figured out the stars at all. SOCA said the tables are apparently about 30 years out of date, I said "better than nothing". she agreed, which is rare!</div>
  </div>
</div>

<div class="r-sep">STAR 1 - KRX-Crux // <span style="color:#ff6644;letter-spacing:0.2em">"CRUX"</span></div>

<div style="display:flex;gap:20px;align-items:flex-start;margin:14px 0;">
  <!-- LEFT: photo + sketch -->
  <div style="flex-shrink:0;flex-basis:220px;display:flex;flex-direction:column;gap:10px;">
    <div style="transform:rotate(-1.5deg);">
      <div style="width:220px;height:220px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/star_krx.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:28px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/star_krx.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">Crux at sunset. <span style="color:var(--yellow)">My favourite shot!!</span></div>
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
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:2px;letter-spacing:0.08em;">KRX-Crux // M5V // sketch</div>
    </div>
  </div>

  <!-- RIGHT: data + text -->
  <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
    <p class="r-text">
      Crux - a <span class="hi">red dwarf</span>, spectral class <span class="mark">M5V</span>.
      Colour: <span style="color:#ff6644;">deep red with an orange cast</span>. <span class="hi">It doesn't blind you</span> - that's the surprising part!
      Temperature: ~<span class="HUGE" style="font-size:30px;">2800–3200 K</span>. SOCA says - normal for an M5V. By the standards of a "normal" star it's a barely warm stove.
    </p>

    <table style="border-collapse:collapse;font-size:12px;width:100%;">
      <tr style="background:rgba(255,80,20,0.05)"><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);white-space:nowrap;">SPECTRAL CLASS</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:#ff8844;">M5V</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);">TEMPERATURE</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dim);">~2800–3200 K // nearly twice as cold as the Sun</td></tr>
      <tr style="background:rgba(255,80,20,0.05)"><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);">ANGULAR DIAMETER</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dim);">~3.2–3.5° <span style="color:var(--dimmer)">(the Sun from Earth: 0.5° - Crux is 6–7 times bigger)</span></td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);">DISTANCE TO KAELA</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dim);">~0.75–0.85 AU // my estimate ±10%</td></tr>
      <tr style="background:rgba(255,80,20,0.05)"><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);">LUMINOSITY</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dim);">~30–40% of Earth's Sun // but the heat accumulates</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);">FLARE ACTIVITY</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--g2);">NONE OBSERVED // not a single flare the whole time</td></tr>
      <tr style="background:rgba(255,80,20,0.05)"><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--dimmer);">SUNSET DURATION</td><td style="padding:6px 10px;border:1px solid rgba(255,80,40,0.2);color:var(--yellow);">3 h 14 min // timed it several times</td></tr>
    </table>

    <div class="r-note" style="transform:rotate(-0.8deg);font-size:12px;">
      The sunset takes about 3 hours. Honestly, I didn't believe it, so I decided to do it properly and timed it the next time - 3 hours 16 minutes. Well then.
    </div>
    <div class="r-soca">Sunset duration by the ship's chronometer: 3h 14min ±4 min. The pilot measured it by hand, with a stopwatch. A small discrepancy with my data, I won't complain.</div>
    <div class="sticky yellow t1" style="max-width:100%;font-size:13px;margin-top:4px;">sat there with a snack and watched it set. And SOCA kindly reminded me the filter has 2 hours left. She really knows how to ruin a moment!</div>
    <div class="r-smaily">Three hours of sunset plus a snack - that is, by the way, a model evening, exactly how rest should be done!! While SOCA is busy ruining moments I'll say: keep eating in peace and enjoy it, and watch your sunset, you have my permission!</div>
  </div>
</div>

<div class="r-sep">STAR 2 - TQN-Erden // <span style="color:#cc8833;letter-spacing:0.2em">"ERDEN"</span></div>

<div style="display:flex;gap:20px;align-items:flex-start;margin:14px 0;">
  <!-- LEFT: text + data + note -->
  <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
    <p class="r-text">
      Erden - an <span class="hi">orange dwarf</span>, spectral class <span class="mark-y">K4V</span>.
      Physically it's <span class="hi">larger</span> than Crux, but it hangs further away - so it looks smaller in the sky.<br/><br/>
      Colour: <span style="color:#cc8833;">warm orange-yellow</span>.
      It provides a second layer of light, without it the sky would be far too red.<br/><br/>
      Noticed: when Erden sets, the clouds turn coppery, and the shadows go orange.
      Crux casts greenish shadows - and together they draw <span class="rainbow">double shadows</span>.
      Measured the angle between them - it wanders from <span class="hi">15 to 45 degrees</span>, depending on where Kaela is right now.
    </p>

    <table style="border-collapse:collapse;font-size:12px;width:100%;">
      <tr style="background:rgba(200,130,50,0.05)"><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);white-space:nowrap;">SPECTRAL CLASS</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:#cc8833;">K4V</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);">TEMPERATURE</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dim);">~4500–4800 K // warmer than Crux, but further away</td></tr>
      <tr style="background:rgba(200,130,50,0.05)"><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);">ANGULAR DIAMETER</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dim);">~2.1–2.3° // smaller than Crux in the sky, but brighter</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);">DISTANCE TO KAELA</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dim);">~1.0–1.1 AU // further than Crux. like a second lamp at the end of the street.</td></tr>
      <tr style="background:rgba(200,130,50,0.05)"><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);">LUMINOSITY</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dim);">~50–60% extra light // twice as bright as Crux</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--yellow);">brightness variation ~2–3% // possibly stellar activity</td></tr>
      <tr style="background:rgba(200,130,50,0.05)"><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dimmer);">SUNSET DURATION</td><td style="padding:6px 10px;border:1px solid rgba(200,130,50,0.25);color:var(--dim);">~1.5–2 h // faster than Crux, but Crux is still up</td></tr>
    </table>

    <div class="r-note" style="transform:rotate(1deg);font-size:12px;">
      Watching two suns is pretty interesting. Honestly, I've never seen anything like it, and to be honest, I'd barely even heard of this type of system.
    </div>
    <div class="r-soca">Erden's brightness variation within 2–3% is logged. Probable cause - starspots and weak convection, normal for a K4V, no danger. Why am I the only one tracking this, pilot???</div>
  </div>

  <!-- RIGHT: sketch + photo -->
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
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:2px;letter-spacing:0.08em;">TQN-Erden // K4V // sketch</div>
    </div>
    <div style="transform:rotate(3deg);">
      <div style="width:220px;height:220px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/double_shadow.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:22px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 4px;">картинк/kaela/double_shadow.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">my shadows - green from Crux, copper from Erden, the best proof there is!!</div>
    </div>
  </div>
</div>

<div class="r-sep">ORBIT OF THE STARS // WHAT I WORKED OUT LATER</div>

<div style="display:flex;gap:20px;align-items:flex-start;margin:14px 0;">
  <div style="flex:1;">
    <p class="r-text">
      The stars <span class="hi">don't stand still</span>. They circle a common centre of mass.
      That point lies between them, but <span class="mark-y">closer to Crux</span> - it's heavier, so it pulls harder.<br/><br/>
      Distance between the stars: ~<span class="hi">0.2–0.25 AU</span> - roughly like Astralis to Mars, meaning neighbourly close.<br/>
      Orbital period: by Kepler's formula (found it in the ship's memory) and by the visible shifts - roughly <span class="hi">6–8 years</span>.<br/>
      So in one Kaela year (286 days) the stars cover only <span class="mark">1/8 of their orbit</span>, which is why they looked rooted in place to me during my first days on the planet.<br/><br/>
      Speed: if a full circle takes 7 years - about <span class="hib">0.5–1 km/s</span>.
      <span class="corrupt">Indecently slow, like they're just hanging there.</span>
    </p>
    <div class="r-data" style="margin-top:8px;">
      <div class="r-row"><span class="r-key">DISTANCE BETWEEN STARS</span><span class="r-val y">~0.2–0.25 AU // ±15%</span></div>
      <div class="r-row"><span class="r-key">ORBITAL PERIOD</span><span class="r-val">~6–8 Earth years // Kepler's formula</span></div>
      <div class="r-row"><span class="r-key">SPEED OF STARS</span><span class="r-val b">~0.5–1 km/s // very slow</span></div>
      <div class="r-row"><span class="r-key">CENTRE OF MASS</span><span class="r-val">shifted toward Crux // it's heavier</span></div>
    </div>
    <div class="r-soca" style="margin-top:10px;">Calculating the period by Kepler's third law with the known data gives ~6.4 years. The pilot got 6–8 - the range covers the true value. There is an error margin, but apparently once again I have nothing to complain about.</div>
  </div>

  <!-- Star orbit diagram -->
  <div style="flex-shrink:0;transform:rotate(-1deg);">
    <div style="width:260px;height:260px;border:1px solid rgba(0,255,136,0.15);background:rgba(0,0,0,0.4);padding:10px;position:relative;">
      <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">// ORBIT OF STARS // rough sketch</div>
      <svg width="240" height="220" viewBox="0 0 240 220">
        <!-- Orbit circle -->
        <ellipse cx="120" cy="115" rx="85" ry="80" fill="none" stroke="rgba(0,255,136,0.15)" stroke-width="1" stroke-dasharray="5,4"/>
        <!-- Center of mass -->
        <circle cx="120" cy="115" r="4" fill="rgba(0,255,136,0.4)" stroke="var(--g)" stroke-width="1"/>
        <text x="128" y="111" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.5)">centre of mass</text>
        <!-- Crux - smaller star but more massive, closer to center of mass -->
        <circle cx="60" cy="115" r="14" fill="rgba(255,80,20,0.15)" stroke="#ff5522" stroke-width="1.5"/>
        <circle cx="60" cy="115" r="7" fill="rgba(255,100,40,0.25)"/>
        <text x="60" y="139" text-anchor="middle" font-family="monospace" font-size="8" fill="#ff6644">Crux</text>
        <text x="60" y="149" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(255,80,20,0.4)">heavier</text>
        <!-- Erden - physically bigger star, farther from center of mass -->
        <circle cx="188" cy="115" r="17" fill="rgba(180,100,20,0.12)" stroke="#cc7733" stroke-width="1.5"/>
        <circle cx="188" cy="115" r="9" fill="rgba(200,120,40,0.2)"/>
        <text x="188" y="142" text-anchor="middle" font-family="monospace" font-size="8" fill="#cc8833">Erden</text>
        <text x="188" y="152" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(180,100,20,0.4)">further</text>
        <!-- Distance arrow -->
        <line x1="78" y1="105" x2="175" y2="105" stroke="rgba(0,255,136,0.2)" stroke-width="0.8" marker-end="url(#arr)"/>
        <text x="128" y="100" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.35)">~0.2–0.25 AU</text>
        <!-- Rotation arrows -->
        <path d="M 38 95 Q 20 70 60 58" fill="none" stroke="rgba(255,80,20,0.3)" stroke-width="1" stroke-dasharray="3,2"/>
        <path d="M 202 95 Q 220 70 188 58" fill="none" stroke="rgba(180,100,20,0.3)" stroke-width="1" stroke-dasharray="3,2"/>
      </svg>
      <div style="font-size:8px;color:var(--dimmer);text-align:center;margin-top:4px;letter-spacing:0.08em;">period ~6–8 years // arrows = direction of rotation</div>
    </div>
  </div>
</div>

<div class="r-sep">KAELA'S ORBIT // MY CALCULATIONS</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:12px 0;">
  <div style="flex:1;">
    <p class="r-text">
      Kaela's orbit is <span class="mark-r">not a circle.</span>
      When Kaela is closer to Crux, its disc swells to almost <span class="hi">3.5°</span>.
      When further - it shrinks to <span class="hi">2.8–2.9°</span>. The difference is visible even without instruments, if you know where to look.
    </p>
    <div class="r-stats" style="margin-top:10px;">
      <div class="r-stat"><div class="r-stat-lbl">ECCENTRICITY</div><div class="r-stat-val">~0.08</div></div>
      <div class="r-stat"><div class="r-stat-lbl">PERIAPSIS</div><div class="r-stat-val">~0.85<span class="r-stat-unit">AU</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">APOAPSIS</div><div class="r-stat-val">~0.95<span class="r-stat-unit">AU</span></div></div>
      <div class="r-stat"><div class="r-stat-lbl">PERIOD</div><div class="r-stat-val">~286<span class="r-stat-unit">days</span></div></div>
    </div>
    <div class="r-note" style="transform:rotate(-0.6deg);font-size:12px;margin-top:10px;">
      at periapsis Kaela is closer to Crux → warmer (~+22°C).<br/>
      at apoapsis further from Crux, slightly closer to Erden → cooler (~+16°C).<br/>
      difference ~4–6 degrees, and the climate is stable anyway, the orbit is nearly circular - 0.08 is nothing.
    </div>
  </div>
  <div style="flex-shrink:0;display:flex;flex-direction:column;gap:10px;width:200px;">
    <div class="sticky green t3" style="font-size:12px;">eccentricity 0.08 - basically a circle, for comparison: Mars is 0.093, a perfect circle is 0, Kaela is somewhere in between. A nice, calm orbit.</div>
    <div class="sticky purple t5" style="font-size:12px;">SOCA called my method of measuring eccentricity "non-standard, but logical". Now that's praise, thanks a lot.</div>
  </div>
</div>

<div style="font-size:8px;color:var(--dimmer);letter-spacing:0.12em;margin:18px 0 -8px;text-align:right;">// PD-04 DAY 0063 // 25 NOV 1973 // wrote this section separately, after several weeks of observation</div>

<div class="r-sep">WHY THERE IS NO NIGHT // MY EXPLANATION AND THE NUMBERS</div>

<p class="r-text" style="margin-bottom:14px;">
  I clearly thought about this for a long time. For several days I just stared at the sky and wrote down when each star set and rose. Here's what I arrived at:
</p>

<div style="display:flex;gap:18px;align-items:flex-start;">
  <div style="flex:1;display:flex;flex-direction:column;gap:10px;">

    <!-- Sunset schedule diagram -->
    <div style="border:1px solid rgba(0,255,136,0.18);background:rgba(0,0,0,0.3);padding:14px 16px;">
      <div style="font-size:9px;color:var(--dimmer);letter-spacing:0.18em;margin-bottom:10px;">// LIGHTING CYCLE DIAGRAM // one nominal Kaela day</div>
      <div style="position:relative;height:60px;margin-bottom:8px;">
        <!-- Timeline -->
        <div style="position:absolute;top:28px;left:0;right:0;height:2px;background:rgba(0,255,136,0.1);"></div>
        <!-- Crux block -->
        <div style="position:absolute;top:8px;left:0;width:62%;height:18px;background:rgba(255,80,20,0.2);border:1px solid rgba(255,80,20,0.4);display:flex;align-items:center;justify-content:center;">
          <span style="font-size:9px;color:#ff8844;letter-spacing:0.1em;">Crux above horizon</span>
        </div>
        <!-- Erden block -->
        <div style="position:absolute;top:34px;left:18%;width:65%;height:18px;background:rgba(180,100,20,0.2);border:1px solid rgba(180,100,20,0.4);display:flex;align-items:center;justify-content:center;">
          <span style="font-size:9px;color:#cc8833;letter-spacing:0.1em;">Erden above horizon</span>
        </div>
        <!-- Overlap indicator -->
        <div style="position:absolute;top:18px;left:18%;width:44%;height:14px;background:rgba(255,200,50,0.08);border-top:1px dashed rgba(255,200,50,0.3);border-bottom:1px dashed rgba(255,200,50,0.3);">
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:8px;color:var(--dimmer);letter-spacing:0.08em;margin-bottom:8px;">
        <span>00:00</span><span>~15:00</span><span>~30:00</span><span>~45:00</span><span>59:00</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;font-size:10px;">
        <div style="border:1px solid rgba(255,80,20,0.2);padding:5px 7px;color:var(--dim);">Crux sets first<br/><span style="color:#ff8844;">~3.5 h sunset</span></div>
        <div style="border:1px solid rgba(255,200,50,0.2);padding:5px 7px;color:var(--dim);">gap between sunsets<br/><span style="color:var(--yellow);">~2–3 hours</span></div>
        <div style="border:1px solid rgba(180,100,20,0.2);padding:5px 7px;color:var(--dim);">Erden sets second<br/><span style="color:#cc8833;">~1.5–2 h sunset</span></div>
      </div>
    </div>

    <div class="hbox" style="font-size:13px;">
      <strong style="color:var(--g);">01.</strong> Crux and Erden don't set at the same time. The gap is <span class="hi">~2–3 hours</span>. Crux is gone - Erden is still up. Erden is gone - Crux is already climbing back.
    </div>
    <div class="hbox b" style="font-size:13px;">
      <strong style="color:var(--b);">02.</strong> The atmosphere <span class="hib">glows on its own</span>. Fluorescent particles re-emit the light they've stored. Even with both stars below the horizon, illumination drops by only 30–40%.
    </div>
    <div class="hbox y" style="font-size:13px;">
      <strong style="color:var(--yellow);">03.</strong> The clouds work like a <span class="hiy">giant screen</span>. They light the surface from below even without direct starlight. Basically - a free night light the size of a planet.
    </div>
    <div class="r-soca">Confirmed: minimum surface illumination with both stars down - 62% of the daytime norm. Cause - fluorescent re-emission from the atmosphere and cloud scattering, meaning there is no night here in the usual sense. Though it doesn't stop you sleeping anyway, of course.</div>
  </div>

  <div style="flex-shrink:0;display:flex;flex-direction:column;gap:10px;width:210px;">
    <div class="sticky red t2" style="font-size:12px;">checked it myself: stood outside when both stars had set. not dark, not one bit. overall I'm not complaining, you can't see much in the dark, and here it's bright everywhere. that's good, right?</div>
    <div class="sticky yellow t4" style="font-size:12px;">I remember at the start, looking at the sky, telling myself - any moment now it'll get dark! And it didn't, and then I stopped waiting. I just live in this permanent twilight now.</div>
    <div class="r-note" style="transform:rotate(1.2deg);font-size:11px;">bottom line: Crux warms, Erden lights, the atmosphere re-emits on its own, the clouds add more on top, result - there is no night on Kaela.</div>
  </div>
</div>

<div class="r-sep">SUMMARY // PART 1</div>

<div style="display:flex;gap:16px;align-items:flex-start;">
  <ul class="r-list" style="flex:1;gap:8px;">
    <li><span class="hi">Crux</span> - closer, but colder, responsible for warmth. Sunset 3h 14min.</li>
    <li><span style="color:#cc8833;">Erden</span> - further, but brighter, responsible for light. Sunset 1.5–2h.</li>
    <li>The stars circle a centre of mass - their year is <span class="hi">~6–8 years</span>.</li>
    <li>Kaela's orbit is slightly elongated - eccentricity <span class="hi">~0.08</span>, almost a circle.</li>
    <li>There is no night - the stars don't set together, the atmosphere <span class="rainbow">glows on its own</span>.</li>
  </ul>
  <div style="flex:1;">
    <div class="r-note" style="transform:rotate(-0.5deg);font-size:12px;">
      wrote it down so I don't forget. Because when I get home <span class="corrupt">(if I get home)</span> - I'll have to explain all of this to someone, and I want the explanations to be right, not "eyeballed"!!<br/><br/>
      <span style="color:var(--dimmer);font-size:10px;">- Koko, Pilot 01 // PART 1 COMPLETE</span>
    </div>
    <div class="r-soca">Record verified. Errors in the pilot's calculations - within acceptable limits, conclusions broadly correct. For someone who is "no genius in astronomy", quite sufficient.</div>
  </div>
</div>

<div class="r-sep">PART 2 // <span style="color:var(--b)">WHY KAELA HASN'T DIED</span></div>
<div style="font-size:9px;color:var(--dimmer);letter-spacing:0.18em;margin-bottom:4px;">STARS TAB // PART 2 (FINAL) // filed by Koko, Pilot 01 // Record No.2</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.15em;margin-bottom:14px;">PD-04 // DAY 0136 // 06 FEB 1974</div>

<div class="r-sep">PRECESSION // WHY THE ORBIT DOESN'T STAY PUT</div>

<div style="display:flex;gap:20px;align-items:flex-start;margin:14px 0;">
  <div style="flex:1;">
    <p class="r-text">
      I've said it already: the stars slowly circle a centre of mass, period - <span class="hi">6–8 years</span>. And Kaela completes a full orbit in 286 days.<br/><br/>
      But if the stars crawl slowly while Kaela races around them - <span class="mark">why doesn't its orbit stay in place</span> when the stars shift?<br/><br/>
      The answer: Kaela's orbit <span class="rainbow">turns as well</span>. It's called <span class="hib">orbital precession</span> - the slow rotation of the orbit itself through space.
    </p>
    <div class="r-note" style="transform:rotate(-0.7deg);font-size:12px;margin-top:10px;">
      noticed the periapsis creeps by a small angle every month. at first I decided I'd botched the calculations, rechecked three months later - the same shift. that's when I asked SOCA to look, she said: precession, and that it's synchronised with the movement of the stars.
    </div>
  </div>

  <!-- Precession diagram -->
  <div style="flex-shrink:0;transform:rotate(1deg);">
    <div style="width:260px;border:1px solid rgba(0,255,136,0.15);background:rgba(0,0,0,0.4);padding:10px;">
      <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">// PRECESSION // the orbit turns over time</div>
      <svg width="240" height="200" viewBox="0 0 240 200">
        <circle cx="120" cy="100" r="3" fill="rgba(0,255,136,0.4)" stroke="var(--g)" stroke-width="1"/>
        <!-- Orbit position 1 (now) -->
        <ellipse cx="120" cy="100" rx="95" ry="50" fill="none" stroke="rgba(255,80,20,0.3)" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="218" y="98" font-family="monospace" font-size="7" fill="rgba(255,100,40,0.5)">now</text>
        <!-- Orbit position 2 (rotated, later) -->
        <ellipse cx="120" cy="100" rx="95" ry="50" fill="none" stroke="rgba(0,200,255,0.25)" stroke-width="1.2" stroke-dasharray="4,3" transform="rotate(35 120 100)"/>
        <text x="175" y="40" font-family="monospace" font-size="7" fill="rgba(0,200,255,0.45)">in 6–8 years</text>
        <!-- Rotation arrow -->
        <path d="M 215 80 A 95 50 0 0 1 195 35" fill="none" stroke="rgba(0,255,136,0.3)" stroke-width="1" marker-end="url(#arr2)"/>
        <text x="150" y="20" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.4)">~5–8°/year</text>
      </svg>
      <div style="font-size:8px;color:var(--dimmer);text-align:center;margin-top:4px;letter-spacing:0.08em;">periapsis always at Crux, apoapsis - at Erden</div>
    </div>
  </div>
</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:14px 0;">
  <div style="flex:1;">
    <div class="r-heading">NUMBERS AND SPEEDS (my estimates)</div>
    <div class="r-data">
      <div class="r-row"><span class="r-key">ORBITAL PRECESSION</span><span class="r-val y">~5–8° per year</span></div>
      <div class="r-row"><span class="r-key">PER STELLAR CYCLE (6–8 YEARS)</span><span class="r-val">~30–50° of rotation</span></div>
      <div class="r-row"><span class="r-key">ENOUGH TO</span><span class="r-val b">compensate for the stars' movement</span></div>
    </div>
    <div class="r-soca" style="margin-top:10px;">Calculated precession rate for a system with this mass ratio and period - 6.2°/year. The pilot gave a range of 5–8°, the exact value falls inside it.</div>
  </div>
  <div style="flex-shrink:0;width:200px;">
    <div class="sticky blue t4" style="font-size:12px;">SOCA said the precession is "synchronised with the movement of the stars", so I asked - is that a coincidence? And she answers: "the probability of a random coincidence is extremely low". Right, I'll write that down as "no, not a coincidence", clearly simpler.</div>
  </div>
</div>

<div class="hbox r" style="font-size:13px;margin:14px 0;">
  <strong style="color:var(--red);">WHY THIS MATTERS:</strong> if the orbit didn't turn - in 3–4 years Kaela would be dragged closer to Erden and further from Crux.
  Erden is brighter and hotter - it would <span class="blink" style="color:var(--red)">roast the planet to unacceptable temperatures</span>, the atmosphere could start falling apart.
  But that doesn't happen - the orbit turns along with the stars. The planet basically saves itself, well done it.
</div>

<div style="font-size:8px;color:var(--dimmer);letter-spacing:0.12em;margin:18px 0 -8px;text-align:right;">// PD-04 DAY 0158 // 28 FEB 1974 // this part took the longest to write, had to recalculate several times</div>

<div class="r-sep">WHY THE SYSTEM HAS BEEN STABLE FOR BILLIONS OF YEARS</div>

<p class="r-text" style="margin-bottom:12px;">How does a system this complicated manage to exist for so long - and not fall apart entirely?</p>

<div style="display:flex;flex-direction:column;gap:10px;">
  <div class="hbox" style="font-size:13px;">
    <strong style="color:var(--g);">01. LOW STELLAR ACTIVITY.</strong> Crux and Erden are old, quiet stars. Crux: not a single flare across the whole observation period. Erden: rare brightness variations (2–3%), but that's not a problem. Radiation and particle streams aren't tearing the atmosphere apart.
  </div>
  <div class="hbox b" style="font-size:13px;">
    <strong style="color:var(--b);">02. ORBITAL RESONANCE.</strong> Not a hundred percent sure, but it looks like the stars' orbital period and Kaela's orbital precession are <span class="hib">synchronised</span>. When one process adjusts to another - the system becomes stable.
  </div>
  <div class="hbox y" style="font-size:13px;">
    <strong style="color:var(--yellow);">03. TWO STARS = DOUBLE BUFFER.</strong> If one star dims slightly - the other makes up the missing light. The climate holds steady even when one of the stars plays with its brightness.
  </div>
  <div class="hbox" style="font-size:13px;border-left-color:var(--g2);background:rgba(0,255,200,0.04);">
    <strong style="color:var(--g2);">04. THE ATMOSPHERE IS A PERFECT THERMOSTAT.</strong> Dense clouds push part of the heat back into space, fluorescent particles scatter the light and soften it, the climate holds in the <span class="hi">+16…+22°C</span> range even as the distance to the stars wanders.
  </div>
</div>

<div class="r-sep">NEW PHOTOGRAPH</div>
<div style="display:flex;gap:20px;align-items:flex-start;margin:14px 0;">
  <div style="flex-shrink:0;transform:rotate(-2.2deg);">
    <div style="width:260px;height:260px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
      <img src="${PD_IMG_BASE}картинк/kaela/kaela_sky_dual.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
      <div style="font-size:28px;opacity:0.25;">📷</div>
      <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/kaela_sky_dual.png</div>
    </div>
    <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;max-width:260px;">the sky with both stars visible at once</div>
  </div>
  <p class="r-text" style="flex:1;">
    Photographed the sky with both stars up at the same time. That's not rare - you can almost always see them both.
    But sometimes the angle between them gets wide, and then the sky looks <span class="hi">especially beautiful</span>.
    Took the shot to show how two stars light the planet from different sides. And because it's beautiful, fine.
  </p>
</div>

<div class="r-sep">FINAL CONCLUSION</div>

<div style="display:flex;gap:18px;align-items:flex-start;">
  <div style="flex:1;">
    <p class="r-text" style="margin-bottom:10px;">
      <span style="text-decoration:line-through;opacity:0.4;">I've spent far more than 40 hours here.</span>
      <span style="color:var(--dimmer);font-size:10px;">[edit, FEB 1974: it's funny rereading this now, almost 5 months have gone by]</span>
      I didn't count the days - they're long, and I lost track. But I watched, wrote things down, calculated, rechecked. And here's what I understood:
    </p>
      <li><span style="color:#ff6644;">Crux</span> and <span style="color:#cc8833;">Erden</span> - two stars working as a pair: Crux gives warmth, Erden gives light. Basically they complement each other.</li>
      <li>Their orbit is slow - <span class="hi">6–8 years</span>. Kaela manages several laps around them in that time.</li>
      <li>Kaela's orbit <span class="rainbow">turns along with the stars</span>, which is why it always gets warmth from Crux and light from Erden.</li>
      <li>There is no night: the stars set out of sync, the atmosphere glows on its own, the clouds send the light back.</li>
    </ul>
  </div>
  <div style="flex:1;">
    <div class="r-note" style="transform:rotate(0.6deg);font-size:12px;">
      FINAL THOUGHTS: how much longer I'll be stuck here - I don't know, and maybe I won't make it back at all. But I want someone to understand how this system works.<br/><br/>
      wrote down everything I could, though I already understand it's not all perfect - there are error margins, there are things I don't fully understand. But at least it's not all that bad, and thanks for that!<br/><br/>
      <span style="color:var(--dimmer);font-size:10px;">- Koko, Pilot 01 // Record No.2</span>
      <span style="color:var(--dimmer);font-size:10px;">- Koko, Pilot 01 // Record No.2</span>
    </div>
    <div class="r-soca" style="margin-top:10px;">Pilot's data accepted for archiving. Recipient not specified. End of record.</div>
  </div>
</div>
  `},

  /* ============================================================
    MOONS - SANOER AND NOELLE
   ============================================================ */

  {id:'moons',label:'// MOONS',html:`
<div style="font-family:'VT323',monospace;font-size:36px;color:var(--b);letter-spacing:0.15em;margin-bottom:4px;animation:glitch1 10s infinite">SANOER & NOELLE</div>
<div style="font-size:9px;color:var(--dimmer);letter-spacing:0.2em;margin-bottom:4px;">TWO MOONS, TWO ORBITS // filed by Koko, Pilot 01</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.15em;margin-bottom:14px;">PD-04 // DAY 0070 // 02 DEC 1973</div>

<!-- INTRO -->
<div style="display:flex;gap:18px;align-items:flex-start;margin-bottom:16px;">
  <p class="r-text" style="flex:1;">
    Kaela has two moons. Two completely different ones that happened to end up around the same planet
    and somehow learned to <span class="hi">get along</span>.<br/><br/>
    I've been here several months already. Watched them every day: measured movement, light, their effect on the surface, and their behaviour generally.
    And I've got things to say about them!<br/><br/>
    <span class="corrupt">Honestly - I have a favourite!! I won't say whi- Fine, I'll say it later, I give up.</span>
    They affect you differently too: one <span class="mark">looks calm, almost peaceful,</span>, the other <span class="mark-y">pulls your gaze in so you can't look away (literally or metaphorically?)</span>.
  </p>
  <div class="sticky purple t3" style="flex-shrink:0;width:210px;font-size:12px;">spoiler: the favourite is Sanoer, he's quiet and doesn't push himself on you, while Noelle is like the neighbour who stares out the window exactly when you leave the house, it's creepy.</div>
</div>

<table style="border-collapse:collapse;font-size:11px;width:100%;margin-bottom:18px;">
  <tr><th style="padding:6px 10px;border:1px solid rgba(0,255,136,0.18);color:var(--dimmer);background:rgba(0,255,136,0.04);font-size:9px;">PARAMETER</th><th style="padding:6px 10px;border:1px solid rgba(100,180,255,0.18);color:#7ab8ff;background:rgba(100,180,255,0.04);font-size:9px;">SANOER</th><th style="padding:6px 10px;border:1px solid rgba(200,200,200,0.18);color:#ccc;background:rgba(200,200,200,0.04);font-size:9px;">NOELLE</th></tr>
  <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Diameter</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dim);">~400 km</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--dim);">~700 km</td></tr>
  <tr style="background:rgba(0,255,136,0.02)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Surface</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dim);">Ice, crystals</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--dim);">Rock, craters</td></tr>
  <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Colour</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:#7ab8ff;">bluish-silver</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:#ccc;">white, grey</td></tr>
  <tr style="background:rgba(0,255,136,0.02)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Orbit</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dim);">elliptical, slow</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--dim);">nearly circular, fast</td></tr>
  <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Distance</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dim);">80–200 thousand km</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--dim);">30–40 thousand km</td></tr>
  <tr style="background:rgba(0,255,136,0.02)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Period</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--yellow);">~18–20 days</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--red);">~3–4 days</td></tr>
  <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Inclination</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dim);">noticeable to the equator</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--dim);">nearly aligned</td></tr>
  <tr style="background:rgba(0,255,136,0.02)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Grav. influence</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dimmer);">almost none</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--g);">present (0.3 cm tide)</td></tr>
  <tr><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Emot. influence</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:#7ab8ff;">calming</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:#ccc;">draws attention</td></tr>
  <tr style="background:rgba(0,255,136,0.02)"><td style="padding:6px 10px;border:1px solid rgba(0,255,136,0.1);color:var(--dimmer);">Distinctive feature</td><td style="padding:6px 10px;border:1px solid rgba(100,180,255,0.1);color:var(--dim);">perfect cracks in the ice</td><td style="padding:6px 10px;border:1px solid rgba(200,200,200,0.1);color:var(--dim);">craters shaped like a face</td></tr>
</table>

<div class="r-sep">SANOER // <span style="color:var(--b);letter-spacing:0.3em">THE COLD MARBLE</span></div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:14px 0;">
  <div style="flex:1;">
    <p class="r-text">
      In the navigation file it was listed as <span class="hib">Sanoer</span>. Who named it that - again, I don't know. But that's what I call it, and I think it <span class="hi">suits him</span>.<br/><br/>
      Diameter: <span class="mark">~400 km</span> - estimated from angular size and distance to Kaela.
      Surface - crystalline ice: hard, transparent, with <span class="hi">perfectly straight cracks</span>.
      Through the telescope it gleams dully, like frosted glass. High albedo - visible even at dusk.<br/><br/>
      Colour: bluish-silver, sometimes with a violet cast, in Crux's light - pinkish-grey, in Erden's light - copper-blue.
    </p>
    <div class="r-note" style="transform:rotate(-1deg);font-size:12px;margin-top:10px;">
      first time I saw those cracks through the telescope - tried to sketch them, and couldn't explain the geometry: they run almost parallel, like they were drawn with a ruler. That doesn't pass for natural fracturing... sat over the drawing and never figured it out.
    </div>
    <div class="r-soca">Parallel cracks with this degree of regularity are statistically improbable for a natural tectonic process on a body of this size. I have no alternative explanation.</div>
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
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:4px;letter-spacing:0.1em">Sanoer // ice cracks // est.</div>
    </div>
    <div style="transform:rotate(3deg);">
      <div style="width:220px;height:220px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/sanoer_horizon.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:28px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/sanoer_horizon.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">Sanoer on horizon // Tumannik</div>
    </div>
  </div>
</div>

<div style="display:flex;gap:16px;align-items:flex-start;margin:10px 0;">
  <div style="flex:1;">
    <div class="r-data">
      <div class="r-row"><span class="r-key">ORBIT</span><span class="r-val">elliptical // slow</span></div>
      <div class="r-row"><span class="r-key">PERIOD</span><span class="r-val y">~18–20 Earth days // approximate</span></div>
      <div class="r-row"><span class="r-key">MIN. DISTANCE</span><span class="r-val">~80 000 km</span></div>
      <div class="r-row"><span class="r-key">MAX. DISTANCE</span><span class="r-val">~200 000 km</span></div>
      <div class="r-row"><span class="r-key">GRAV. INFLUENCE</span><span class="r-val" style="color:var(--dimmer)">almost none</span></div>
    </div>
  </div>
  <div style="flex:1;">
    <div class="hbox b" style="font-size:12px;">
      <strong style="color:var(--b)">PHASE HERALD.</strong> At closest approach it gets brighter and the light turns pink. Shadows on the surface go almost pink, lasts about 3–4 hours.
    </div>
    <div class="sticky blue t3" style="width:100%;font-size:12px;margin-top:10px;">watched him for weeks - he barely moves, at first that bothered me, then it clicked that this IS his particular behaviour. Apparently he's just got nowhere to hurry to. A pretty funny thing to say about... a moon.</div>
  </div>
</div>

<hr class="r-div"/>
<div class="r-sep">NOELLE // <span style="color:var(--yellow);animation:blink 2s infinite;letter-spacing:0.25em">THE EYE</span></div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:14px 0;">
  <div style="flex-shrink:0;display:flex;flex-direction:column;gap:10px;width:220px;">
    <div style="transform:rotate(-3.5deg);">
      <div style="width:220px;height:220px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/noelle_overhead.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:28px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/noelle_overhead.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">Noelle overhead // 03:00 local</div>
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
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:4px;letter-spacing:0.1em">Noelle // craters // looks like a face</div>
    </div>
  </div>

  <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
    <p class="r-text">
      This one was in the navigation file too - <span class="hi">Noelle</span>. The name caught me immediately - it sounds almost more human. I'd name my dog that.. if I had one.
      And it suits him, because he really does <span class="mark-r">look at you</span>, however creepy that sounds.<br/><br/>
      Diameter: <span class="HUGE" style="font-size:26px">~700 km</span> - almost twice the size of Sanoer.
      Rocky surface, covered in craters. <span class="rainbow">The craters form something like a face</span>:
      two big ones as eyes, one as a mouth, the cracks - like facial features.<br/><br/>
      Colour: pale white, greyish, with dark patches. Sometimes light gold when Erden is shining.
      <span class="ghost">medium albedo - it reflects light, but not as brightly as Sanoer.</span>
    </p>
    <div class="r-note" style="transform:rotate(1.3deg);font-size:12px;">
      the first time I realised it was a face - I was actually surprised, then stood there a long while studying it. I even showed SOCA as a joke, and she hands me "face recognition in random patterns is a well-known cognitive effect". Yeah SOCA, your sense of humour is beyond saving.
    </div>
    <div class="hbox" style="font-size:12px;">
      A huge white disc, taking up almost a third of the sky. The craters are visible without any telescope.
      <span class="hi">It moves fast</span> - watch for five minutes and you genuinely notice it shift.
    </div>
    <div class="r-soca">Tidal ground uplift confirmed by three independent measurements: 0.3 cm ± 0.05 when Noelle passes the zenith. The effect is weak but statistically stable.</div>
  </div>
</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:10px 0;">
  <div style="flex-shrink:0;width:220px;">
    <div class="sticky red t2" style="width:100%;font-size:12px;">this clearly wasn't supposed to be a face, but here we are. Two craters - eyes, one - a mouth. You can look from different angles: it doesn't lose the shape. whatever this is - either it was made this way on purpose (right, by whom??), or I'm slowly losing my mind.</div>
  </div>
  <div style="flex:1;">
    <div class="r-data" style="display:grid;grid-template-columns:1fr 1fr;gap:4px 20px;">
      <div class="r-row"><span class="r-key">ORBIT</span><span class="r-val r">nearly circular // fast</span></div>
      <div class="r-row"><span class="r-key">PERIOD</span><span class="r-val r">~3–4 Earth days</span></div>
      <div class="r-row"><span class="r-key">MIN. DISTANCE</span><span class="r-val">~30 000 km</span></div>
      <div class="r-row"><span class="r-key">MAX. DISTANCE</span><span class="r-val">~40 000 km</span></div>
      <div class="r-row"><span class="r-key">GRAV. INFLUENCE</span><span class="r-val y">present // tidal uplift 0.3 cm</span></div>
    </div>
    <div class="r-soca" style="margin-top:10px;">The pareidolia phenomenon, i.e. recognising faces in random terrain - is common when observing cratered surfaces. But the symmetry of this formation exceeds the typical random value by 40%. This is not proof of design, merely a statistical anomaly.</div>
  </div>
</div>

<hr class="r-div"/>
<div style="font-size:8px;color:var(--dimmer);letter-spacing:0.12em;margin:18px 0 -8px;text-align:right;">// PD-04 DAY 0088 // 20 DEC 1973 // came back to this tab after measuring the orbits</div>

<div class="r-sep">WHY THEY NEVER COLLIDE</div>

<p class="r-text" style="margin-bottom:14px;">
  I thought they had to cross somewhere. But then I measured their orbits - and understood why that doesn't happen.
</p>

<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
    <div class="hbox b" style="font-size:12px;">
      <strong style="color:var(--b)">01. DIFFERENT PLANES.</strong> Noelle runs almost in the equatorial plane. Sanoer - at a noticeable angle to it.
      Like two rings on a finger: one straight, one crooked. <span class="mark">They can't intersect in principle</span>.
    </div>
    <div class="hbox" style="font-size:12px;">
      <strong style="color:var(--g)">02. DIFFERENT RADII.</strong> Noelle is close (30–40 thousand km). Sanoer is far (80–200 thousand km).
      There's a gap of <span class="hi">~40 000 km</span> between them - like two ring corridors on a station: one on the inner circle, the other on the outer.
    </div>
    <div class="hbox y" style="font-size:12px;">
      <strong style="color:var(--yellow)">03. THEY DON'T EVEN OVERLAP IN PROJECTION.</strong> Sanoer's nearest point (80 thousand km) is still further out than Noelle's farthest (40 thousand km), so there's always a gap.
    </div>
  </div>

  <!-- Two rings diagram -->
  <div style="flex-shrink:0;transform:rotate(-1deg);">
    <div style="width:260px;border:1px solid rgba(0,255,136,0.15);background:rgba(0,0,0,0.4);padding:10px;">
      <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:6px;">// TWO RINGS // different planes, different radii</div>
      <svg width="240" height="200" viewBox="0 0 240 200">
        <circle cx="120" cy="100" r="3" fill="rgba(0,255,136,0.4)" stroke="var(--g)" stroke-width="1"/>
        <text x="128" y="96" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.5)">Kaela</text>
        <!-- Noelle orbit - flat ellipse close -->
        <ellipse cx="120" cy="100" rx="55" ry="14" fill="none" stroke="rgba(200,200,200,0.4)" stroke-width="1.3"/>
        <circle cx="175" cy="100" r="5" fill="rgba(200,200,200,0.3)" stroke="#ccc" stroke-width="1"/>
        <text x="180" y="92" font-family="monospace" font-size="7" fill="rgba(200,200,200,0.55)">Noelle</text>
        <!-- Sanoer orbit - tilted larger ellipse -->
        <ellipse cx="120" cy="100" rx="100" ry="55" fill="none" stroke="rgba(100,180,255,0.35)" stroke-width="1.3" transform="rotate(-20 120 100)"/>
        <circle cx="30" cy="65" r="6" fill="rgba(120,180,255,0.25)" stroke="#7ab8ff" stroke-width="1"/>
        <text x="10" y="55" font-family="monospace" font-size="7" fill="rgba(120,180,255,0.5)">Sanoer</text>
        <text x="60" y="180" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(0,255,136,0.3)">gap always ~40 000 km</text>
      </svg>
    </div>
  </div>
</div>

<div class="r-note" style="transform:rotate(-0.5deg);font-size:12px;">
  why did it turn out this way? most likely - the result of a long gravitational evolution, at some point the moons could have had different orbits,
  but under the influence of Kaela, each other and the binary star they settled into stable configurations.
  Noelle got captured close and fast - he's too heavy to be thrown out. Sanoer stayed far and slow - he's too small to work his way closer.
</div>

<hr class="r-div"/>
<div class="r-sep">THE DAY OF TWO EYES</div>

<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div class="sticky yellow t2" style="flex-shrink:0;width:200px;font-size:12px;">saw it once, when both were up at the same time. Sanoer on the horizon, Noelle at the zenith. It made for an interesting picture, actually.</div>
  <div style="flex-shrink:0;transform:rotate(2deg);">
    <div style="width:260px;height:200px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
      <img src="${PD_IMG_BASE}картинк/kaela/two_moons_day.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
      <div style="font-size:26px;opacity:0.25;">📷</div>
      <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/two_moons_day.png</div>
    </div>
    <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">both moons visible at once</div>
  </div>
  <p class="r-text" style="flex:1;">
    Both moons are visible at once - Sanoer on the horizon, Noelle at the zenith. The sky becomes <span class="hi">especially deep</span>, and the shadows - doubled and multicoloured.
  </p>
</div>

<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <p class="r-text" style="flex:1;">
    Honestly - side by side they look ridiculous. Noelle is almost twice the size of Sanoer,
    and when both hang in the sky at once - it's like setting a floodlight next to its own indicator bulb.
    <span class="hi">One is clearly in charge, the other is just glad he got to come along.</span><br/><br/>
    I don't blame Sanoer. He's small, distant and quiet. But seeing them together - it's funny every time.
    <span class="ghost">and every time I see that difference I even want to laugh.</span>
  </p>
  <div style="flex-shrink:0;width:340px;border:1px solid rgba(0,255,136,0.15);background:rgba(0,0,0,0.4);padding:12px;transform:rotate(-1deg);">
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;margin-bottom:8px;text-align:center;">Day of Two Eyes // approximate sky view // relative sizes</div>
    <svg width="316" height="170" viewBox="0 0 280 150">
      <circle cx="65" cy="75" r="32" fill="rgba(100,160,255,0.08)" stroke="rgba(140,190,255,0.28)" stroke-width="1.2"/>
      <line x1="42" y1="52" x2="88" y2="98" stroke="rgba(150,200,255,0.15)" stroke-width="1"/>
      <line x1="36" y1="80" x2="94" y2="64" stroke="rgba(150,200,255,0.1)" stroke-width="0.8"/>
      <circle cx="195" cy="75" r="58" fill="rgba(200,200,200,0.05)" stroke="rgba(200,200,200,0.2)" stroke-width="1.2"/>
      <circle cx="174" cy="58" r="13" fill="none" stroke="rgba(200,200,200,0.18)" stroke-width="0.9"/>
      <circle cx="212" cy="82" r="17" fill="none" stroke="rgba(200,200,200,0.18)" stroke-width="0.9"/>
      <circle cx="180" cy="92" r="9" fill="none" stroke="rgba(200,200,200,0.12)" stroke-width="0.7"/>
      <text x="65" y="118" text-anchor="middle" font-family="monospace" font-size="9" fill="rgba(140,190,255,0.5)">Sanoer</text>
      <text x="195" y="142" text-anchor="middle" font-family="monospace" font-size="9" fill="rgba(200,200,200,0.4)">Noelle</text>
    </svg>
  </div>
</div>

<hr class="r-div"/>
<div class="r-sep">WHAT I WANT TO UNDERSTAND</div>

<div style="display:flex;gap:18px;align-items:flex-start;">
  <ul class="r-list" style="flex:1;gap:8px;">
    <li>Why do Noelle's craters form a face? <span class="ghost">Coincidence? Or geology?</span></li>
    <li>Why does Sanoer have such perfectly straight cracks? <span class="ghost">Tectonics? Or something else?</span></li>
    <li>How do the moons affect Kaela's psionic field?</li>
    <li>Why are the orbits exactly like this? <span class="hi">Evolution or interference?</span></li>
  </ul>
  <div style="flex:1;">
    <div class="r-note" style="transform:rotate(0.7deg);font-size:11px;">
      If you dig deeper and switch on your inner astronomy professional - the answers seem to suggest themselves.
      <span style="text-decoration:line-through;opacity:0.4;">or maybe it isn't a coincidence at all, and someone made that face on purpose</span><br/>
      <span style="color:var(--dimmer);font-size:9px;">- Right, if only I knew who was even here before me.</span>
    </div>
    <div class="r-soca" style="margin-top:10px;">The hypothesis of deliberate origin for Noelle's crater relief is neither confirmed nor refuted by the available data. Archived as an open question.</div>
  </div>
</div>
  `},

  /* ============================================================
   CALENDAR
   ============================================================ */

  {id:'calendar',label:'// CALENDAR',html:`
<div style="font-family:'VT323',monospace;font-size:36px;color:var(--b);letter-spacing:0.15em;margin-bottom:4px;animation:glitch1 10s infinite">HOW I LEARNED TO COUNT TIME</div>
<div style="font-size:9px;color:var(--dimmer);letter-spacing:0.2em;margin-bottom:4px;">CALENDAR TAB // filed by Koko, Pilot 01 // 9 months on Kaela</div>
<div style="font-size:9px;letter-spacing:0.15em;margin-bottom:14px;">
  <span style="color:var(--b)">PD-04 // DAY 0114 // 15 JAN 1974</span>
  <span style="color:var(--dimmer);margin-left:10px;">// updated: <span style="text-decoration:line-through;opacity:0.4;">can't remember the exact date</span> <span style="color:var(--g2)">DAY 0192 // 03 APR 1974</span></span>
</div>

<!-- INTRO -->
<div style="display:flex;gap:18px;align-items:flex-start;margin-bottom:16px;">
  <p class="r-text" style="flex:1;">
    When I ended up here I had no proper clock. Well, I had one, but it counted standard time,
    and Kaela lives differently. Days here stretch for almost <span class="hi">59 hours</span>, and the year is <span class="hi">286 standard days</span>.
    I worked it out fast: if I don't invent my own system - I'll simply lose count.<br/><br/>
    I've been here <span class="mark">9 months by the standard count</span>. That was enough to observe, measure and write things down.
    Everything I saw - the movement of the stars, sunrises and sunsets, the positions of the moons, the angles between the suns.
    I gathered data for months and built the Kaela calendar out of it.<br/><br/>
    <span class="corrupt">The calendar is unofficial.</span> I didn't just sit down and invent it "because I felt like it".
    Where I had enough data - I used it directly, where I didn't - I filled the gaps theoretically,
    and then <span class="hi">checked whether it added up or not</span>. It's my personal instrument, and so far it hasn't let me down.
  </p>
  <div class="sticky blue t3" style="flex-shrink:0;width:210px;font-size:12px;">SOCA corrected my rough calculations a couple of times, sometimes she agreed straight away, sometimes she'd drop a "check it again". And sometimes she was right, and sometimes I was.</div>
</div>

<div class="r-sep">HOW I PUT IT TOGETHER</div>

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">
  <div class="hbox" style="font-size:12px;"><strong style="color:var(--g)">STEP 1.</strong> Measured the length of a day, timed the gap between two Crux sunrises. Got <span class="hi">~59 standard hours</span>, meaning one Kaela day.</div>
  <div class="hbox b" style="font-size:12px;"><strong style="color:var(--b)">STEP 2.</strong> Measured the length of a year. Tracked when Kaela returns to the same orbital point relative to the stars. Got <span class="hi">~286 standard days</span>.</div>
  <div class="hbox y" style="font-size:12px;"><strong style="color:var(--yellow)">STEP 3.</strong> Converted into local units: 1 day = 59 hours, 1 week = 5 days (the moons' phases repeat roughly every 5 days), 1 month = 3 weeks = 15 days, 1 year = 8 months = 120 days.</div>
  <div class="hbox" style="font-size:12px;border-left-color:var(--g2);background:rgba(0,255,200,0.04);"><strong style="color:var(--g2)">STEP 4.</strong> Checked with my own eyes. Compared the calculations against the actual movement of the stars and moons - it all seemed to line up. Error no more than <span class="hi">1–2%</span>.</div>
  <div class="hbox r" style="font-size:12px;"><strong style="color:var(--red)">STEP 5.</strong> Handed out names. To everything I saw - to make it easier to navigate. The names came by themselves, out of what I saw and felt on those days.</div>
</div>

<div class="r-sep">CALENDAR STRUCTURE</div>

<table class="r-table" style="width:100%;margin-bottom:16px;">
  <tr><th>UNIT</th><th>DURATION</th><th>IN STANDARD DAYS</th></tr>
  <tr><td class="hi">1 day</td><td>59 hours</td><td>~2.5 days</td></tr>
  <tr><td class="hi">1 week</td><td>5 days</td><td>~12.5 days</td></tr>
  <tr><td class="hi">1 month</td><td>3 weeks (15 days)</td><td>~37.5 days</td></tr>
  <tr><td class="hi">1 year</td><td>8 months (120 days)</td><td>~300 days</td></tr>
</table>

<div class="r-note" style="transform:rotate(-0.5deg);font-size:12px;margin-bottom:16px;">
  the real Kaela year is ~286 standard days, but I rounded up to 300 for convenience. The 14-day difference is my measurement error, but for my purposes it doesn't matter.
</div>

<div class="r-sep">KAELA WEEKS (5 DAYS)</div>

<div class="cal-grid">
  <div class="cal-day"><div class="cal-day-name">DAY 1</div><div class="cal-day-kaela" style="color:var(--dimmer)">Wanderday</div><div class="cal-day-desc">Clouds are thicker, the light is diffuse. Feels like a typical Monday.</div></div>
  <div class="cal-day"><div class="cal-day-name">DAY 2</div><div class="cal-day-kaela" style="color:var(--b)">Mistday</div><div class="cal-day-desc">A damp day, dew on the moss, low clouds, Sanoer looks dull.</div></div>
  <div class="cal-day"><div class="cal-day-name">DAY 3</div><div class="cal-day-kaela" style="color:var(--g2)">Mossday</div><div class="cal-day-desc">The moss is at its most active... And that's it. Not a particularly noticeable day. </div></div>
  <div class="cal-day"><div class="cal-day-name">DAY 4</div><div class="cal-day-kaela" style="color:var(--yellow)">Swiftday</div><div class="cal-day-desc">A day of movement. Noelle is brighter and faster, the wind is stronger than usual.</div></div>
  <div class="cal-day" style="border-color:rgba(0,204,255,0.3)"><div class="cal-day-name">DAY 5</div><div class="cal-day-kaela" style="color:var(--b)">Phaseday</div><div class="cal-day-desc">Sanoer's phase is clearly visible, the shadows turn pink.</div></div>
</div>

<div class="r-sep">KAELA MONTHS (8 MONTHS)</div>

<div class="month-grid">
  <div class="month-box"><div class="month-num">01</div><div class="month-name">Mistar</div><div class="month-desc">Start of the year. Crux and Erden at maximum angle, dense clouds.</div></div>
  <div class="month-box"><div class="month-num">02</div><div class="month-name">Zephyr</div><div class="month-desc">The wind dies down, the sky is clearer, the stars begin closing in.</div></div>
  <div class="month-box" style="border-color:rgba(255,80,40,0.2)"><div class="month-num" style="color:#ff7744">03</div><div class="month-name" style="color:#ff7744">Squall</div><div class="month-desc">Temperature swings, clouds thicken, Erden noticeably brighter.</div></div>
  <div class="month-box" style="border-color:rgba(0,255,136,0.2)"><div class="month-num" style="color:var(--g)">04</div><div class="month-name" style="color:var(--g)">Mossil</div><div class="month-desc">The moss blooms, glowing brighter than at any point in the year, peak bioluminescence.</div></div>
  <div class="month-box"><div class="month-num">05</div><div class="month-name">Rainer</div><div class="month-desc">The rainy month. Damp, warm, but overcast, the stars are barely visible.</div></div>
  <div class="month-box" style="border-color:rgba(0,180,255,0.25)"><div class="month-num" style="color:var(--b)">06</div><div class="month-name" style="color:var(--b)">Astral</div><div class="month-desc">The clearest month, Crux and Erden almost in a line.</div></div>
  <div class="month-box"><div class="month-num">07</div><div class="month-name">Floren</div><div class="month-desc">Flowering. Plants get brighter and visibly bloom.</div></div>
  <div class="month-box" style="border-color:rgba(100,100,100,0.15)"><div class="month-num" style="color:var(--dimmer)">08</div><div class="month-name" style="color:var(--dimmer)">Gloamer</div><div class="month-desc">End of the year, the stars drift apart, the temperature drops by 1–2°.</div></div>
</div>

<hr class="r-div"/>
<div style="font-size:8px;color:var(--dimmer);letter-spacing:0.12em;margin:18px 0 -8px;text-align:right;">// PD-04 DAY 0140 // 10 FEB 1974 // added the special days later - at first I didn't notice the pattern</div>

<div class="r-sep">SPECIAL DAYS IN THE CALENDAR</div>

<p class="r-text" style="margin-bottom:16px;">
  I noticed: across the year there are days when the positions of the stars or moons line up into <span class="rainbow">unique configurations</span>, so I wrote them down and gave them names.
</p>

<!-- CARD GRID - special days -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:14px;">

  <!-- Phase Herald -->
  <div style="border:1px solid rgba(255,200,0,0.25);background:rgba(30,22,0,0.35);padding:14px 16px;position:relative;">
    <svg width="50" height="50" viewBox="0 0 50 50" style="position:absolute;top:10px;right:10px;opacity:0.5;">
      <circle cx="25" cy="25" r="18" fill="none" stroke="rgba(255,200,0,0.3)" stroke-width="1"/>
      <circle cx="25" cy="25" r="6" fill="rgba(255,200,0,0.4)"/>
      <circle cx="40" cy="25" r="3" fill="rgba(255,200,0,0.6)"/>
    </svg>
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;">EVERY WEEK</div>
    <div style="font-family:'VT323',monospace;font-size:24px;color:var(--yellow);margin:4px 0 8px;">PHASE HERALD</div>
    <div style="font-size:11px;color:var(--dim);line-height:1.6;">Sanoer at maximum brightness, shadows turn pink for 3–4 hours. Comes to its closest approach.</div>
  </div>

  <!-- Day of Two Eyes -->
  <div style="border:1px solid rgba(0,255,200,0.25);background:rgba(0,30,25,0.35);padding:14px 16px;position:relative;">
    <svg width="50" height="50" viewBox="0 0 50 50" style="position:absolute;top:10px;right:10px;opacity:0.5;">
      <circle cx="15" cy="35" r="5" fill="rgba(140,190,255,0.4)" stroke="rgba(140,190,255,0.5)" stroke-width="0.8"/>
      <circle cx="36" cy="15" r="11" fill="none" stroke="rgba(200,200,200,0.4)" stroke-width="1"/>
      <circle cx="32" cy="11" r="2.5" fill="none" stroke="rgba(200,200,200,0.3)" stroke-width="0.6"/>
    </svg>
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;">ONCE EVERY ~5 WEEKS</div>
    <div style="font-family:'VT323',monospace;font-size:24px;color:var(--g2);margin:4px 0 8px;">DAY OF TWO EYES</div>
    <div style="font-size:11px;color:var(--dim);line-height:1.6;">Sanoer and Noelle visible at the same time, the psionic field feels more distinct.</div>
  </div>

  <!-- Day of Maximum Angle -->
  <div style="border:1px solid rgba(255,34,68,0.25);background:rgba(30,5,8,0.35);padding:14px 16px;position:relative;">
    <svg width="50" height="50" viewBox="0 0 50 50" style="position:absolute;top:10px;right:10px;opacity:0.5;">
      <circle cx="6" cy="25" r="5" fill="rgba(255,80,20,0.4)"/>
      <circle cx="44" cy="25" r="4" fill="rgba(180,100,20,0.35)"/>
      <line x1="6" y1="25" x2="44" y2="25" stroke="rgba(255,34,68,0.2)" stroke-width="0.8" stroke-dasharray="2,2"/>
    </svg>
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;">ONCE A YEAR // MISTAR</div>
    <div style="font-family:'VT323',monospace;font-size:20px;color:var(--red);margin:4px 0 8px;">MAX. ANGLE</div>
    <div style="font-size:11px;color:var(--dim);line-height:1.6;">Crux and Erden on opposite sides of the sky, shadows especially long, spreading apart.</div>
  </div>

  <!-- Day of Minimum Angle -->
  <div style="border:1px solid rgba(150,150,150,0.2);background:rgba(15,15,15,0.35);padding:14px 16px;position:relative;">
    <svg width="50" height="50" viewBox="0 0 50 50" style="position:absolute;top:10px;right:10px;opacity:0.5;">
      <circle cx="25" cy="25" r="5" fill="rgba(255,80,20,0.35)"/>
      <circle cx="27" cy="25" r="3" fill="rgba(180,100,20,0.3)"/>
    </svg>
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;">ONCE A YEAR // GLOAMER</div>
    <div style="font-family:'VT323',monospace;font-size:20px;color:var(--dimmer);margin:4px 0 8px;">MIN. ANGLE</div>
    <div style="font-size:11px;color:var(--dim);line-height:1.6;">Crux and Erden almost at the same point in the sky, the shadows nearly merge into one.</div>
  </div>

  <!-- Crux Day -->
  <div style="border:1px solid rgba(255,120,68,0.25);background:rgba(30,15,5,0.35);padding:14px 16px;position:relative;">
    <svg width="50" height="50" viewBox="0 0 50 50" style="position:absolute;top:10px;right:10px;opacity:0.6;">
      <circle cx="25" cy="25" r="10" fill="rgba(255,80,20,0.4)" stroke="#ff5522" stroke-width="1"/>
    </svg>
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;">ONCE A YEAR // SQUALL</div>
    <div style="font-family:'VT323',monospace;font-size:20px;color:#ff7744;margin:4px 0 8px;">CRUX DAY</div>
    <div style="font-size:11px;color:var(--dim);line-height:1.6;">Erden is hidden behind Crux, only one star visible, lasts 3–4 days.</div>
  </div>

  <!-- Erden Day -->
  <div style="border:1px solid rgba(0,180,255,0.25);background:rgba(0,15,30,0.35);padding:14px 16px;position:relative;">
    <svg width="50" height="50" viewBox="0 0 50 50" style="position:absolute;top:10px;right:10px;opacity:0.6;">
      <circle cx="25" cy="25" r="10" fill="rgba(200,120,40,0.4)" stroke="#cc7733" stroke-width="1"/>
    </svg>
    <div style="font-size:8px;color:var(--dimmer);letter-spacing:0.15em;">ONCE A YEAR // ASTRAL</div>
    <div style="font-family:'VT323',monospace;font-size:20px;color:var(--b);margin:4px 0 8px;">ERDEN DAY</div>
    <div style="font-size:11px;color:var(--dim);line-height:1.6;">Crux is hidden behind Erden, the sky is brighter. Exactly half a year after Crux Day.</div>
  </div>

</div>

<div style="display:flex;gap:14px;align-items:flex-start;">
  <div class="sticky yellow t2" style="flex:1;font-size:12px;">Phase Herald is my favourite day of the week, no contest. The pink shadows look beautiful every single time.</div>
  <div class="sticky green t4" style="flex:1;font-size:12px;">on the Day of Two Eyes the psionic field is especially noticeable, I feel her more distinctly.</div>
</div>

<hr class="r-div"/>
<div class="r-sep">SKETCH // 8 POSITIONS OF KAELA ON ITS ORBIT</div>

<div style="margin:16px 0;">
  <div style="width:100%;aspect-ratio:1000/220;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px;cursor:pointer;">
    <img src="${PD_IMG_BASE}картинк/kaela/calendar_sketch.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
    <div style="font-size:30px;opacity:0.25;">📷</div>
    <div style="font-size:9px;color:var(--dimmer);text-align:center;padding:0 8px;">картинк/kaela/calendar_sketch.png</div>
  </div>
  <div style="font-size:9px;color:var(--dimmer);margin-top:5px;text-align:center;letter-spacing:0.08em;">
    8 positions of Kaela on its orbit, one per month. Visible: position 1 (Mistar) - maximum angle, position 3 (Squall) - Crux covers Erden, position 6 (Astral) - Erden covers Crux, position 8 (Gloamer) - minimum angle.
  </div>
</div>

<hr class="r-div"/>
<div class="r-sep">MY NOTES</div>

<div style="display:flex;flex-direction:column;gap:10px;">
  <div class="r-note" style="transform:rotate(-0.6deg);font-size:12px;">
    <strong style="color:var(--dimmer);font-size:10px;">ON THE CALENDAR:</strong><br/>
    "The days match the movement of the stars, the months - the positions of the moons. Which means the calendar really does work the way I needed it to. If you ask me, this is a whole discovery - I invented time!!! <span style="text-decoration:line-through;opacity:0.4;">all that's left is to invent the clock</span>"
  </div>
  <div class="r-note" style="transform:rotate(0.5deg);font-size:12px;border-left-color:#ff7744;">
    <strong style="color:#ff7744;font-size:10px;">ON CRUX DAY:</strong><br/>
    "Today I saw only Crux, Erden was gone. I knew it was coming, but when I saw it with my own eyes - I was actually surprised. It's strange - seeing one star instead of two, the sky felt somehow empty and unfamiliar."
  </div>
  <div class="r-note" style="transform:rotate(-0.3deg);font-size:12px;border-left-color:var(--b);">
    <strong style="color:var(--b);font-size:10px;">ON ERDEN DAY:</strong><br/>
    "Today only Erden, no sign of Crux, the sky got brighter than usual. Erden is brighter than Crux - so the day came out especially bright."
  </div>
</div>

<hr class="r-div"/>
<div class="r-sep">WHAT I WANT TO UNDERSTAND</div>

<div style="display:flex;gap:18px;align-items:flex-start;">
  <ul class="r-list" style="flex:1;gap:8px;">
    <li>Will this calendar still work years from now, when the stars have shifted? <span class="ghost">(I know the orbit precesses, but so far I see no changes)</span></li>
    <li>Are there other special days I've overlooked?</li>
    <li>Can Crux Day or Erden Day coincide with the Day of Two Eyes? <span class="hi">I'll check that later</span></li>
  </ul>
  <div style="flex:1;">
    <div class="r-soca">Orbital precession over the pilot's observation window (9 months) yields a shift of less than 1°. Changes to the calendar structure will not become noticeable for another 3–4 years. The current calendar will hold its accuracy. You will be the one recalculating it, I'll remind you.</div>
  </div>
</div>
  `},

  /* ============================================================
   OBSERVATIONS
   ============================================================ */

  {id:'observations',label:'// OBSERVATIONS',html:`
<div style="font-family:'VT323',monospace;font-size:42px;color:var(--g);text-shadow:0 0 25px rgba(0,255,136,0.4);letter-spacing:0.1em;margin-bottom:2px;animation:glitch1 9s infinite">FIELD NOTES</div>
<div style="font-size:9px;color:var(--dimmer);letter-spacing:0.2em;margin-bottom:4px;">OBSERVATIONS TAB // a full record of everything there is on Kaela // filed by Koko, Pilot 01</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.15em;margin-bottom:16px;">PD-04 // DAY 0001 // 24 SEP 1973 - still ongoing</div>

<div class="r-note" style="font-size:13px;line-height:2;transform:rotate(-0.4deg);margin-bottom:18px;">
  Well, let's start with the fact that here I wrote completely freely, with no template at all. SOCA asked me to "organise it by category" - and do I need that? Of course not. Everything here is in the order I remember it and write it down. Some of it I wrote the same day I saw it, some I thought through later - I try to always mark the date. - Koko
</div>

<!-- ------------------------------------------- -->
<!-- 1. GENERAL FEEL OF THE PLANET // FIRST DAY -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:10px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">01</div>
  <div class="r-sep" style="flex:1;margin:0;">GENERAL FEEL OF THE PLANET // FIRST DAY</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0001 // 24 SEP 1973</div>

<p class="r-text">
  right, I'll start from the very beginning, otherwise I'll forget the details later.<br/><br/>
  the landing turned out lousy, honestly - it's hard to call it a "landing" in the normal sense. <span class="mark-r">THE PANDEMONIUM was already faulty before entering Kaela's atmosphere</span> - that's not her fault, noting it separately.
  somewhere on approach part of the stabilisers failed, and I was already thinking we'd just splatter.
  I mentioned somewhere that we came down calmly, but that doesn't change the fact that hitting the surface was hard - by feel, at the moment of contact it was somewhere around <span class="hi">4–5g</span>, maybe more: no exact accelerometer data, the instruments cut out for a while.
</p>

<div class="g2" style="margin:14px 0;">
  <div class="r-data">
    <div class="r-row"><span class="r-key">LANDING IMPACT</span><span class="r-val r">~4–5g // estimated</span></div>
    <div class="r-row"><span class="r-key">KOKO'S CONDITION</span><span class="r-val">intact // no fractures or concussion</span></div>
    <div class="r-row"><span class="r-key">INJURIES</span><span class="r-val y">bruised shoulder // split eyebrow</span></div>
    <div class="r-row"><span class="r-key">SHIP'S CONDITION</span><span class="r-val r">took it worse than I did</span></div>
  </div>
  <div class="r-soca">The pilot showed signs of mild post-traumatic agitation, typical of a crash landing: rapid breathing, dilated pupils. Coordination and pupillary response - normal, concussion ruled out. He of course declared he was "fine" before the check was finished.</div>
</div>

<div style="display:flex;gap:22px;margin:14px 0;">
  <div style="flex:1;min-width:0;">
    <div class="r-smaily" style="margin:0 0 14px;">ALIVE! Officially confirmed: the eyebrow will heal, the shoulder will stop aching soon enough, but that scratch on the hull - that's outside my department :). You held up well - for someone who just fell out of the sky.</div>
    <p class="r-text" style="margin:0;">
      as for me: intact. No concussion, no fractures, a bruise on the shoulder from the harness, a split on the left eyebrow - nothing.
      my head rang for the first couple of hours, but that's a normal reaction to impact, not concussion.
      overall I got lucky, but the ship took it worse than I did.<br/><br/>
      and then I went outside.
    </p>
  </div>
  <div class="crash-photo" style="flex:1;min-width:0;">${ph("картинк/kaela/crash_landing.png","THE PANDEMONIUM after landing // and the Astralis flag!!","","center","tilt2")}</div>
</div>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// FIRST IMPRESSIONS // in the order they arrived</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;gap:10px;align-items:baseline;">
      <span style="font-family:'VT323',monospace;font-size:20px;color:var(--b);width:24px;">1</span>
      <span class="r-text" style="font-size:12px;"><span class="hib">gravity</span> - 0.91g. I knew the number, but knowing is one thing and feeling your body suddenly get a bit lighter is another. Took a step and swayed forward: my brain was expecting the usual weight.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:baseline;">
      <span style="font-family:'VT323',monospace;font-size:20px;color:var(--g2);width:24px;">2</span>
      <span class="r-text" style="font-size:12px;"><span class="hi">the air</span> - through the filter it's not as dense as I'm used to, but not thin either, breathing is fine. A strange feeling - like the air is slightly more "empty", even though by composition everything needed seemed to be there.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:baseline;">
      <span style="font-family:'VT323',monospace;font-size:20px;color:var(--yellow);width:24px;">3</span>
      <span class="r-text" style="font-size:12px;"><span class="mark-y">the silence</span> - now that was genuinely strange. I waited for some kind of sound - almost nothing, not absolute silence, but a kind of <em>dense</em> silence. Personally I'm used to something always humming or droning in the background.</span>
    </div>
  </div>
</div>

<div class="r-soca">The microphones register the same picture the pilot describes: background noise level 60–70% below typical for open terrain with vegetation of this density.</div>

<p class="r-text" style="margin-top:12px;">
  and then I saw her.<br/><br/>
  fine, I know how this is going to sound. But the first word that surfaced in my head when I looked around was <span class="HUGE" style="font-size:25px;">"alive"</span>.
  Not in the sense of "there are plants here, so the planet is alive" - that's trite, any planet with a biosphere is technically "alive".
  I mean something else. It felt like <span class="ul">the soil itself</span> underfoot wasn't just ground for life to grow in, but something whole, unified, and it <span class="rainbow">noticed</span> us.<br/><br/>
I wrote it down immediately, in the first twenty minutes after stepping out, while the feeling was fresh - I knew that if I waited, the rational part of my brain would rewrite that explanation and paint over it,
  <span class="corrupt">and I don't want it erased.</span>
</p>

<div style="display:flex;gap:22px;align-items:center;margin:14px 0;">
  <div class="surface-photo" style="flex:0 0 30%;min-width:0;">${ph("картинк/kaela/koko_surface.png","me on the surface, wide shot // first photo here, still in shock, honestly","","center","tilt1")}</div>
  <div class="r-soca" style="flex:1;margin:0;">The pilot showed signs of mild post-traumatic agitation, typical of a crash landing, which may have affected his perception of the first minutes on the surface. I note this not to devalue the observation, but for completeness.</div>
</div>

<div style="display:flex;gap:16px;align-items:flex-start;margin:14px 0;">
  <div class="sticky purple t3" style="max-width:200px;flex-shrink:0;">the first night (or rather - the first darkness cycle, of which there isn't really any here) went without sleep. I just sat by the wreckage and looked... And thought, naturally.</div>
  <div class="r-smaily" style="flex:1;margin:0;">Didn't sleep all night - but got to study a new planet noticeably longer than any other planet before it!! I consider this an excellent place for further investigation!!</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 2. ATMOSPHERE AND AIR -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">02</div>
  <div class="r-sep" style="flex:1;margin:0;">ATMOSPHERE AND AIR</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0008 // 01 OCT 1973</div>

<p class="r-text">
  Came back to this topic a week later, once I'd recovered and could take proper measurements instead of just describing sensations.<br/><br/>
  Air composition: <span class="hib">78% N₂, 18% O₂</span>, the rest - organic vapours and fluorescent compounds.
  But here I want to go into more detail, because the numbers alone don't tell you what it's actually like.
</p>

<div class="g3" style="margin:14px 0;">
  <div class="hbox" style="font-size:12px;">
    <strong style="color:var(--g)">WHY THE FILTER</strong><br/>
    you can breathe without it (tested - 23 minutes, see passport), but with long exposure the particles cause dizziness, the mesh screens out anything larger than ~2 microns.
  </div>
  <div class="hbox b" style="font-size:12px;">
    <strong style="color:var(--b)">SMELL</strong><br/>
    "ice water" isn't the smell of cold, it's the sensation of the air's <em>density</em> as you inhale, like drawing in something more viscous, with a faint metallic aftertaste.
  </div>
  <div class="hbox y" style="font-size:12px;">
    <strong style="color:var(--yellow)">ORGANICS</strong><br/>
    concentration of organic vapours ~3–4% of atmospheric volume. Rough spectrometer estimate, error ±1%.
  </div>
</div>

<div class="r-sep" style="margin-top:20px;">FLUORESCENCE // THE MAIN THING I WANT TO WRITE ABOUT HERE</div>

<div style="display:flex;gap:22px;margin:14px 0;">
  <div class="crash-photo" style="flex:0 0 24%;min-width:0;">${ph("картинк/kaela/air_glow.png","night air with fluorescent particles - shot with a long exposure, otherwise you can barely see it with the eye","","center","tilt3")}</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0 0 12px;">
      the particles in the air glow. Not all the time - mostly the glow is visible in darkness (or rather, in the dim half-dark that's the most you get here) or at a certain angle of light from Crux/Erden.
      first noticed it on day three: I was standing outside at dusk and saw the air in front of my face shimmer slightly - tiny points, bluish-violet, drifting very slowly, like dust in a sunbeam, except they give off light themselves rather than reflecting it.<br/><br/>
      couldn't photograph it right away - the particles are too dim for normal shooting. The shot on the left was taken with about an <span class="hi" style="font-family:'VT323',monospace;font-size:18px;">8 second</span> exposure (the Pandemonium's camera settings, I couldn't adjust them precisely), and even so the glow is barely there in the photo - to the eye in the dark it's more noticeable.
    </p>
    <div class="r-soca" style="margin:0;">Spectral analysis of the fluorescent particles gives an emission peak in the 480–520 nm range (bluish-green). Origin of the particles not established: possibly biological (spores, microorganism pollen), possibly mineral (fine dust with crystalline inclusions). A precise answer requires laboratory analysis, unavailable on board.</div>
  </div>
</div>

<div class="r-note" style="transform:rotate(-0.7deg);font-size:12px;margin-top:10px;">
  honestly - I'm not sure whether it's biological or mineral. Sometimes I look at that glow and think: what if this IS Kaela, in the most literal sense - just spread through the air as the tiniest particles. I know it sounds like the ravings of a tired man at two in the morning (by local count it's its own thing, but either way it's late). still, the thought is worth writing down.
</div>

<div class="clearfix"></div>

<div class="hbox r" style="margin:14px 0;font-size:13px;">
  noticed another detail I hadn't recorded before: the concentration of fluorescent particles is <span class="mark-r">higher</span> around clusters of moss and bioluminescent plants than on open rocky patches.
  The difference, by estimate, is about <span class="hi">2–3</span> times (not an exact measurement, judged by eye from the density of the glow). Possibly the source of the particles is the plants themselves, something like pollen or spores.
  <span class="hi">Need to check this closer to the section on fungi and plants.</span>
</div>

<div style="display:flex;gap:20px;align-items:flex-start;margin-top:14px;">
  <div style="flex:1;min-width:0;">
    <table class="r-table" style="width:100%;margin:0;">
      <tr><th>PARAMETER</th><th>VALUE</th><th>COMMENT</th></tr>
      <tr><td class="hi">N₂</td><td>78%</td><td style="color:var(--dimmer)">standard for a breathable atmosphere</td></tr>
      <tr><td class="hi">O₂</td><td>18%</td><td style="color:var(--dimmer)">slightly below the Earth norm (21%)</td></tr>
      <tr><td class="y">organic vapours</td><td>~3–4%</td><td style="color:var(--dimmer)">source not established</td></tr>
      <tr><td class="b">fluor. particles</td><td>variable</td><td style="color:var(--dimmer)">peak 480–520 nm, higher near vegetation</td></tr>
      <tr><td>pressure</td><td>~0.94 atm</td><td style="color:var(--dimmer)">see passport</td></tr>
    </table>
  </div>
  <div class="sticky green t2" style="max-width:200px;flex-shrink:0;">the air here feels alive in the literal sense - not just a medium for breathing, but something that acts on its own: stores, glows, reacts. I've never heard of this on any other planet, not even in theory.. Well, or I'm just poorly informed.</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 3. CLIMATE AND WEATHER -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">03</div>
  <div class="r-sep" style="flex:1;margin:0;">CLIMATE AND WEATHER</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0025 // 19 OCT 1973</div>

<p class="r-text">
  Three weeks here, and I can finally say something meaningful about the weather instead of just "it's warm and nice here".<br/><br/>
  <strong style="color:var(--g)">Why there are no sharp seasonal changes.</strong> I've already measured Kaela's axial tilt - <span class="hi">11.7°</span> (passport, day 21).
  for comparison: Mars has a tilt of ~<span class="hib">25°</span> - meaning Kaela is tilted about half as much.
  That's the direct reason the seasons here are so mild: the angle of incoming light from Crux and Erden barely changes across the year.
</p>

<div class="g3" style="margin:14px 0;">
  <div class="r-stat" style="text-align:center;"><div class="r-stat-lbl">KAELA TILT</div><div class="r-stat-val">11.7<span class="r-stat-unit">°</span></div></div>
  <div class="r-stat" style="text-align:center;"><div class="r-stat-lbl">EARTH TILT</div><div class="r-stat-val" style="color:var(--dimmer)">23.5<span class="r-stat-unit">°</span></div></div>
  <div class="r-stat" style="text-align:center;"><div class="r-stat-lbl">MARS TILT</div><div class="r-stat-val" style="color:var(--dimmer)">25<span class="r-stat-unit">°</span></div></div>
</div>

<p class="r-text">
  tried to estimate the difference in insolation (how much light the surface receives) between the "summer" and "winter" points of a nominal Kaela year.
  By my calculations (rough ones - I'm no astrophysicist, I used simple trigonometry) the difference is only <span class="mark-y">~6–8%</span>.
  On a planet with a noticeable axial tilt the gap between seasonal extremes would be close to <span class="hi">30%</span>. That's the whole secret of the stable temperature.
</p>

<div class="hbox b" style="margin:14px 0;font-size:13px;">
  <strong style="color:var(--b)">TEMPERATURE.</strong> +16…+22°C year-round - logged daily for 21 days, readings morning/midday/evening (nominally - there's no real morning or evening here, I go by the angle of the stars).
  recorded minimum - <span class="hi" style="font-family:'VT323',monospace;font-size:18px;">+14.2°C</span> (once, at orbital apoapsis), maximum - <span class="hi" style="font-family:'VT323',monospace;font-size:18px;">+23.8°C</span> (at periapsis).
  the spread - only <span class="rainbow">9.6 degrees</span> across the entire observation period. On a normal planet with seasons, a single location easily racks up 40–50 degrees over a year.
</div>
<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// MY TEMPERATURE READINGS // 21 DAYS OF OBSERVATION</div>
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
  <div style="font-size:8px;color:var(--dimmer);text-align:center;margin-top:4px;">21 data points // the line is nearly flat - that IS the main observation</div>
</div>

<p class="r-text">
  <strong style="color:var(--g2)">why there's no snow, hurricanes or droughts.</strong> snow - obvious: the temperature never once dropped anywhere near zero.
  Hurricanes - those need sharp pressure differences between zones, and here the pressure is even (~<span class="hi">0.94 atm</span>) and the temperature barely varies across space:
  over these weeks I covered a radius of roughly <span class="hi">40 km</span> from the landing site on foot - the temperature spread between points is no more than <span class="hi">1–2 degrees</span>.
  Droughts - the water circulates non-stop (section 4), there are no long dry periods.
</p>

<div class="r-sep" style="margin-top:18px;">PRECIPITATION // THE TWO RAINS I CAUGHT</div>

<div class="g2" style="margin:12px 0;">
  <div class="r-data">
    <div class="r-row"><span class="r-key">RAIN 1</span><span class="r-val">drizzle // ~40 minutes</span></div>
    <div class="r-row"><span class="r-key">DROPLETS</span><span class="r-val">fine, warm</span></div>
    <div class="r-row"><span class="r-key">WATER TEMP.</span><span class="r-val y">≈ air temperature, −2..3°C</span></div>
  </div>
  <div class="r-data">
    <div class="r-row"><span class="r-key">RAIN 2</span><span class="r-val r">heavier // 1h 12min</span></div>
    <div class="r-row"><span class="r-key">INTENSITY</span><span class="r-val">comparable to light Earth rain</span></div>
    <div class="r-row"><span class="r-key">PUDDLE ABSORPTION</span><span class="r-val hi">⌀50cm in 8–10 minutes</span></div>
  </div>
</div>

<div style="display:flex;gap:22px;margin:14px 0;">
  <div style="flex:1;min-width:0;">
    <div class="r-soca" style="margin:0 0 12px;">Low variability in temperature and pressure rules out the formation of convective cells powerful enough for storm systems. The cloud cover saturates with moisture evenly and releases it in small portions rather than accumulating energy for major precipitation.</div>
    <div class="r-note" style="transform:rotate(-0.6deg);margin:0;">
      honestly, I was braced for a planet with two suns to be extreme - heat, storms, something dramatic. And it turned out the opposite: the mildest weather I've seen across all my travels.
    </div>
  </div>
  <div class="crash-photo" style="flex:0 0 22%;min-width:0;">${ph("картинк/kaela/gentle_rain.png","warm light rain on Kaela - shot during the second rainfall, 1h12min","","center","tilt2")}</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 4. WATER (OCEANS, LAKES, RIVERS) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">04</div>
  <div class="r-sep" style="flex:1;margin:0;">WATER // OCEANS, LAKES, RIVERS</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0034 // 28 OCT 1973</div>

<p class="r-text">
  found a large body of water roughly <span class="hi">12 km</span> from the landing site, walked it in a day (with stops - at this gravity you can walk a long time and barely tire, a fairly familiar feeling).<br/><br/>
  <strong style="color:var(--b)">are there big oceans?</strong> Yes, but not enormous ones. I can't give exact dimensions for the whole water system - Kaela is large, I physically can't cover all of it in one mission.
  But the ocean I found, by estimate (looked from high ground, plus worked it out from my walking pace along the shore) - the visible coastline runs at least <span class="mark">15–20 km</span> in one direction, and the horizon hides the rest.
  It doesn't qualify as a "vast ocean" by planetary standards, but you certainly can't call it a pond either.
</p>

<div class="r-sep" style="margin-top:16px;">WATER ANALYSIS // SOCA'S SAMPLE</div>

<div style="display:flex;gap:22px;align-items:flex-start;margin:12px 0;">
  <div style="flex:0 0 30%;min-width:0;">
    <div class="r-data">
      <div class="r-row"><span class="r-key">PH</span><span class="r-val">~7.4 // slightly alkaline</span></div>
      <div class="r-row"><span class="r-key">MINERALISATION</span><span class="r-val">low // like spring water on Earth</span></div>
      <div class="r-row"><span class="r-key">CLARITY</span><span class="r-val hi">visibility ~5–6 metres</span></div>
      <div class="r-row"><span class="r-key">WATER TEMP.</span><span class="r-val y">+18°C // close to the air</span></div>
    </div>
  </div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--yellow)">hot springs.</strong> There are plenty here - across my trips I've found <span class="HUGE" style="font-size:29px;">3</span> already, all within 20 km of the landing site.
      The water in them is warm, in places almost hot (I put one at around <span class="hi">38–40°C</span> - didn't measure precisely),
      slightly mineralised - a bit salty to the taste, with a faint metallic aftertaste.
    </p>
  </div>
</div>

<div style="display:flex;gap:16px;align-items:flex-start;margin:14px 0;">
  <div class="row-photo" style="flex:1;min-width:0;">${ph("картинк/kaela/koko_ocean.png","me waist-deep in the water","","center","tilt5")}</div>
  <div class="sticky blue t4" style="flex:1;min-width:0;max-width:none;box-sizing:border-box;font-size:12px;">waded in up to my waist, took a photo for scale (and because I wanted to). The water is warm even at depth - and that's strange: usually it's colder near the bottom than at the surface. Here it's the opposite, perfectly even.</div>
  <div class="row-photo" style="flex:1;min-width:0;">${ph("картинк/kaela/hot_spring.png","a hot spring among moss and rocks - one of the three I found","","center","tilt2")}</div>
  <div class="sticky purple t5" style="flex:1;min-width:0;max-width:none;box-sizing:border-box;font-size:12px;">Even decided to sit in one of the springs, and maybe 40 minutes went by? Honestly, it was actually good. I'm writing this down not as an observation, just because I'm bragging.</div>
</div>

<div class="hbox" style="margin:14px 0;font-size:13px;">
  <strong style="color:var(--g)">WHY THE WATER DOESN'T GO STAGNANT.</strong> I think it's good circulation - the rivers I've seen (found <span class="hi">2</span>, both flowing into the ocean) run constantly and don't dry up.
  Rain regularly tops the system up, evaporation and precipitation hold some kind of balance, the hot springs hint at geothermal activity beneath the crust (the geology section), and that also drives water through the system.
</div>

<table class="r-table" style="width:100%;margin-top:14px;">
  <tr><th>OBJECT</th><th>FOUND</th><th>CHARACTERISTICS</th></tr>
  <tr><td class="hi">ocean</td><td>1</td><td style="color:var(--dimmer)">coastline ≥15–20 km of the visible portion</td></tr>
  <tr><td class="hi">rivers</td><td>2</td><td style="color:var(--dimmer)">both flow into the ocean, level stable ±3cm / 6 days</td></tr>
  <tr><td class="y">hot springs</td><td>3</td><td style="color:var(--dimmer)">+38–40°C, mineralised</td></tr>
</table>

<div class="r-soca" style="margin-top:10px;">Water circulation is confirmed by stable river levels across 6 days of observation - variation no greater than 3 cm. This indicates a balanced hydrological system with no signs of seasonal flooding or drying.</div>

<div class="r-note" style="transform:rotate(0.8deg);margin-top:10px;">
  A question I have no answer to yet: where does all this water even come from on a planet with such a stable atmosphere and not a single visible glacier? I'll think about it later. Wrote it down so I don't forget (I'll forget anyway)
</div>

<hr class="r-div"/>

<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div class="sticky red t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">SOCA compiled the damage into a list. Fourteen items, two of them critical.</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g)">about the ship, briefly.</strong> THE PANDEMONIUM is repairable - that became clear in the second week, and it's the best news so far. No spare parts, but there's hull metal, tools, me and my favourite assistants ♥ ♥ ♥.<br/><br/>
      Started, as usual, <span class="mark-y">not with the most important thing, but with the most interesting one</span>: first I rebuilt the sensor assembly, because I wanted to measure the atmosphere more precisely. The critical items are, for now, simply listed.
    </p>
  </div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 5. SOIL AND LANDSCAPE -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">05</div>
  <div class="r-sep" style="flex:1;margin:0;">SOIL AND LANDSCAPE</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0048 // 11 NOV 1973</div>

<div style="display:flex;gap:22px;align-items:flex-start;margin:12px 0;">
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g)">The soil.</strong> Soft and hard at the same time - sounds like nonsense, but that's exactly how it feels.
      It doesn't give way underfoot like sand, and doesn't spring back like moss, but it isn't stone either, I'd call it "yielding" - it gives a little, then holds your weight.
      Measured the depth of a boot print in several places: on average <span class="hi">3–5 mm</span> of compression, and the soil restores its shape in roughly <span class="hi">10–15 minutes</span> after I leave - I even checked, went back to the same print several times.<br/><br/>
      That last part genuinely threw me. Normal soil doesn't behave like that: press it down and it stays pressed until someone loosens it again.
      <span class="mark">but this one seems to forget on its own that anyone stepped on it.</span>
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
    <div class="sticky yellow t2" style="display:block;max-width:none;box-sizing:border-box;font-size:12px;margin-top:10px;text-align:left;">a small aside: <span style="font-family:'VT323',monospace;font-size:16px;color:var(--yellow);">on 5 NOVEMBER I turned 16!!!</span> SOCA delivered: "congratulations on surviving another year; statistically this is no cause for celebration, but I am glad for you". the best birthday wish of my life, honestly.. (celebrating your birthday on an unknown planet is clearly... an interesting experience?)</div>
  </div>
</div>

<div class="r-soca">The soil's shape recovery within a fixed period may be explained by a high content of elastic organic fibres in the upper substrate layer - on the principle of springy fibrous mosses, which also partially recover their shape after loading. A full explanation requires compositional analysis, unavailable on current equipment.</div>

<p class="r-text" style="margin-top:12px;">
  <strong style="color:var(--b)">Rocks with perfectly straight cracks.</strong> I already wrote about this in the Sanoer section (the same cracks there) - and here, right on Kaela's surface, I find the same thing.
  The cracks in some rocks run parallel with a precision that makes the eye uneasy. Measured the angle between adjacent cracks on one specimen -
  a deviation of only <span class="hi">2–3 degrees</span> across nearly 30 cm of rock. For comparison, ordinary tectonic cracks (checked against the reference in the PANDEMONIUM's memory) have an angular spread of <span class="hib">15–20 degrees</span> and more.
</p>

<p class="r-text">
  <strong style="color:var(--g2)">Why there's no mud, swamps or deserts.</strong> Mud - the soil drains water quickly (section 4), there's nothing to stagnate.
  Swamps - for the same reason, standing water doesn't linger. Deserts - the climate is too even in humidity, there are no sharply arid zones
  (I've covered a decent radius already and haven't met anything resembling a dry sandy patch anywhere - except a small beach by the sea, but that's a separate story, I'll tell it later).
</p>

<div style="display:flex;gap:18px;align-items:flex-start;justify-content:space-between;margin:14px 0;">
  <div class="sticky yellow t3" style="flex:0 0 10%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">walked over the same spot several times in a row, deliberately - to check whether a path would stay. Came back an hour later: almost nothing visible. Either this soil is very springy, or it really is doing something on its own.</div>
  <div style="flex:0 0 35%;min-width:0;display:flex;flex-direction:column;gap:12px;">
    <div class="r-stat" style="text-align:center;"><div class="r-stat-lbl">PRINT COMPRESSION</div><div class="r-stat-val">3-5<span class="r-stat-unit">mm</span></div></div>
    <div class="r-stat" style="text-align:center;"><div class="r-stat-lbl">RECOVERY</div><div class="r-stat-val">10-15<span class="r-stat-unit">min</span></div></div>
    <div class="r-stat" style="text-align:center;"><div class="r-stat-lbl">CRACK ANGLE</div><div class="r-stat-val">±2-3<span class="r-stat-unit">°</span></div></div>
  </div>
  <div class="crash-photo" style="flex:0 0 32%;min-width:0;">${ph("картинк/kaela/crystal_rocks.png","rocks with crystal inclusions — the parallel cracks are visible right on the surface","","center","tilt2")}</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 6. CRYSTALS AND MINERALS -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">06</div>
  <div class="r-sep" style="flex:1;margin:0;">CRYSTALS AND MINERALS</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0052 // 15 NOV 1973</div>

<p class="r-text">
  Over the last few weeks I've collected <span class="HUGE" style="font-size:30px;">7</span> different crystal samples and decided to sort them out before I forget where I picked up which.<br/><br/>
  I've noted somewhere already: the crystals reflect light in a way that's somehow wrong - first they hold it for a second, then let it go. Now I have more data, so I'll describe it more precisely.
</p>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// MY SAMPLES // sketches and light-retention times</div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">
    <div style="text-align:center;">
      <svg width="60" height="60" viewBox="0 0 60 60" style="opacity:0.7;"><polygon points="30,8 42,25 36,52 24,52 18,25" fill="rgba(0,220,150,0.1)" stroke="rgba(0,220,150,0.35)" stroke-width="1"/></svg>
      <div style="font-size:7px;color:var(--dimmer);">#1 // 0.4-0.6s</div>
    </div>
    <div style="text-align:center;">
      <svg width="60" height="60" viewBox="0 0 60 60" style="opacity:0.7;"><polygon points="30,10 48,30 30,50 12,30" fill="rgba(0,200,255,0.1)" stroke="rgba(0,200,255,0.3)" stroke-width="1"/></svg>
      <div style="font-size:7px;color:var(--dimmer);">#2 // 0.5s</div>
    </div>
    <div style="text-align:center;border:1px solid rgba(255,200,0,0.3);border-radius:2px;padding:2px;">
      <svg width="56" height="56" viewBox="0 0 60 60" style="opacity:0.85;"><polygon points="30,6 40,22 50,30 40,38 30,54 20,38 10,30 20,22" fill="rgba(255,220,100,0.15)" stroke="rgba(255,220,100,0.5)" stroke-width="1.2"/><circle cx="30" cy="30" r="3" fill="rgba(255,255,200,0.5)"/></svg>
      <div style="font-size:7px;color:var(--yellow);">#3 // 1.2s + ???</div>
    </div>
    <div style="text-align:center;">
      <svg width="60" height="60" viewBox="0 0 60 60" style="opacity:0.7;"><circle cx="30" cy="30" r="20" fill="rgba(180,100,220,0.08)" stroke="rgba(180,100,220,0.3)" stroke-width="1"/></svg>
      <div style="font-size:7px;color:var(--dimmer);">#4 // 0.3s</div>
    </div>
  </div>
</div>

<p class="r-text">
  sample #1 - prismatic, transparent with a faint green cast, holds light for roughly <span class="hi">0.4–0.6 seconds</span>
  (timed by eye with a stopwatch - not exact science, but it reproduces on repeat runs).<br/><br/>
  sample #3 - the one I already wrote about (the geometry) - the strangest of the lot. Not only does it hold light longer than the others
  (about <span class="hi" style="font-family:'VT323',monospace;font-size:18px;">1.2 seconds</span> - twice the average), but occasionally, very rarely, I've caught it flaring <span class="blink" style="color:var(--yellow)">by itself</span>, with no external source, for a fraction of a second.
  Caught it <span class="mark-y">several times over two weeks</span> of observation. SOCA couldn't explain it with standard fluorescence - that requires energy accumulated from external light,
  and here the flare happened even when the sample had been sitting in a dark container for hours.
</p>

<p class="r-text" style="margin-top:10px;">I'm not classifying this sample. Honestly - I have no idea what it is.</p>

<div style="display:flex;gap:22px;align-items:flex-start;margin:12px 0;">
  <div class="crash-photo" style="flex:0 0 24%;min-width:0;">${ph("картинк/kaela/surface_rocks.png","surface rocks and crystals","","center","tilt1")}</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0 0 12px;">
      <strong style="color:var(--g2)">A possible link to the glow of the moss and the atmosphere.</strong> Just a guess for now, but a logical one: if these crystals can hold light longer than ordinary material,
      and fluorescent particles float in the air that also store and re-emit light (section 2) - maybe it's one and the same mechanism, just in different states of matter.
      Solid (crystals), gaseous (particles in the air) and, possibly, biological (the glowing moss, which I'll get to).
    </p>
    <div class="r-soca" style="margin:0 0 12px;">Sample #3 exhibits spontaneous luminescence with no obvious excitation source. Three cases recorded across 14 days of storage. Possible explanations: residual energy from prolonged accumulation (unlikely given the length of the dark phase) or an unknown light-generation mechanism. I recommend continued observation. And not keeping it at the head of your bunk, just in case.</div>
    <div class="sticky purple t5" style="display:block;max-width:none;box-sizing:border-box;font-size:12px;">sample #3 now sits on the shelf in my cabin. In the evenings I sometimes stare at it and wait - maybe it'll flash now. Never caught the moment live, only noticed afterwards that something had clearly changed.</div>
  </div>
</div>

<div class="r-data" style="margin:32px 0 10px;">
  <div class="r-row"><span class="r-key">SAMPLES COLLECTED</span><span class="r-val hi">7</span></div>
  <div class="r-row"><span class="r-key">AVERAGE LIGHT RETENTION</span><span class="r-val">0.4–0.6 sec</span></div>
  <div class="r-row"><span class="r-key">MAXIMUM (SAMPLE #3)</span><span class="r-val y">1.2 sec + spontaneous flares</span></div>
  <div class="r-row"><span class="r-key">SELF-LUMINESCENCE EVENTS</span><span class="r-val r">3 in 14 days of observation</span></div>
</div>

<div class="hbox b" style="margin:14px 0;font-size:13px;">
  If that's the case - then the whole planet works as one big mechanism: storing light and slowly giving it back. If it's confirmed, that'll be genuinely insane.
  <span class="corrupt">I'm not sure yet, but I like the idea indecently much.</span>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 7. PLANTS (FLORA) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">07</div>
  <div class="r-sep" style="flex:1;margin:0;">PLANTS (FLORA)</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0061 // 24 NOV 1973</div>

<p class="r-text">
  This is probably the biggest section of everything I've written so far, and I suspect it'll only keep swelling - there are incredibly many plants here, and they're so different that I'm not even sure I'm right to call them "plants" in the usual sense of the word.<br/><br/>
  A general observation before I get into specific species: there's no clear boundary here between "moss", "lichen" and "tree" as I'm used to understanding them. The vegetation here is more of a spectrum of forms flowing smoothly into one another.
  In two months I've counted more than <span class="hi">15 visually distinguishable types</span> - and I keep finding new ones. For order's sake I use a simplified system by height and structure:
  ground-cover (up to 10 cm), shrub-like (10 cm - 1 m), tree-like (above 1 m). You couldn't call it real botanical taxonomy, I'm no specialist, but some kind of system is needed so I don't get lost in my own notes.
</p>

<div class="hbox b" style="margin:14px 0;font-size:13px;">
  An important detail I haven't mentioned before: there really are <strong style="color:var(--b)">forests</strong> here. Whole stretches of dense vegetation, the trees standing close enough for their crowns to touch.
  Walked through one such stretch about <span class="hi">4 kilometres</span> across, and for almost all of it there was unbroken vegetation underfoot - I've seen surprisingly few genuinely empty, bare patches on Kaela.
  The largest open area I recorded - about <span class="hi">200×150 metres</span> of rocky bald patch, and even there individual clumps of "glass ivy" stuck out around the edges.
</div>

<div class="r-sep" style="margin-top:18px;">TREES // AN UNEXPECTED RESEMBLANCE</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:12px 0;">
  <div style="flex:1.3;">
    <p class="r-text">
      And here's the most unexpected observation of the whole period: some trees look almost like Earth tropical ones. Structurally - exactly what I saw on the training holograms of Earth rainforests in the PANDEMONIUM's archive:
      broad leaf blades, a multi-tiered crown, and on some specimens - aerial roots. I even deliberately set the silhouette of one tree beside an archive image of a banyan - the resemblance in crown shape and branching pattern
      turned out to be greater than I expected from a planet in a completely different star system. This is convergence of form, of course, not kinship: inside (when I took samples) - no Earth cellulose at all,
      rather the same gel-like mass I described in other species, just in a denser outer shell.<br/><br/>
      Measured the height of several such trees - from <span class="hi">4 to about 9 metres</span>, the tallest was closer to <span class="hi">11 metres</span> (estimated from the shadow and the star's light angle - not an exact measurement, but the method works: I know the angle, I get the height by simple trigonometry, give or take a metre).
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
        <text x="100" y="215" text-anchor="middle" font-family="monospace" font-size="8" fill="rgba(0,180,80,0.4)">aerial roots // est.</text>
      </svg>
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:3px;letter-spacing:0.08em;">"tropical" tree // silhouette, sketched from life</div>
    </div>
  </div>
</div>

<p class="r-text" style="margin-top:10px;">
  Bioluminescence in almost every species - the bluish-green glow I already described in the air section and separately for the moss. There's purple too, more rarely, mostly on the larger shrub forms.
  I rated brightness by species subjectively on a scale of 1 to 5 (1 - barely perceptible, 5 - bright enough to read by), and most fall in the 2–3 range.
  "bell moss" (described below) - the only species I've found that I gave a 5.
</p>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// GLOW BRIGHTNESS SCALE // subjective rating by species</div>
  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:120px;font-size:10px;color:var(--dim);">bone tree</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);position:relative;"><div style="width:5%;height:100%;background:rgba(150,150,150,0.4);"></div></div><span style="font-size:9px;color:var(--dimmer);">0/5</span></div>
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:120px;font-size:10px;color:var(--dim);">glass ivy</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);position:relative;"><div style="width:40%;height:100%;background:rgba(0,220,200,0.4);"></div></div><span style="font-size:9px;color:var(--dimmer);">2/5</span></div>
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:120px;font-size:10px;color:var(--dim);">tropical species</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);position:relative;"><div style="width:60%;height:100%;background:rgba(0,220,150,0.4);"></div></div><span style="font-size:9px;color:var(--dimmer);">3/5</span></div>
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:120px;font-size:10px;color:var(--yellow);">bell moss</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);position:relative;"><div style="width:100%;height:100%;background:rgba(200,80,255,0.5);"></div></div><span style="font-size:9px;color:var(--yellow);">5/5</span></div>
  </div>
</div>

<div class="r-sep" style="margin-top:20px;">SPECIFIC SPECIES // WHAT I FOUND AND MEASURED</div>

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
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:2px;">glass ivy // shoots with veins</div>
    </div>
  </div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g2)">Glass ivy.</strong> ground-cover, creeps across rocks, thin translucent shoots <span class="hi">2–4 mm</span> thick (measured with calipers from the medkit), colour - pale green with a faint blue tint.
      Thin glowing veins are visible inside. Cut one shoot for analysis - inside is a gel-like mass with no clear cellular organisation, as far as I can see through my portable magnifying glass
      (10x, not a microscope, so cell details could easily have escaped me). At the cut the mass glowed faintly by itself for about <span class="hi">10</span> seconds, then went out -
      SOCA thinks it was a reaction of damaged tissue to contact with air, something like an oxidative stress response, though the exact mechanism is unknown.
    </p>
  </div>
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/glass_ivy.png","glass ivy - close-up of shoots on rock","","center","tilt2")}</div>
</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:14px 0;">
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/bell_moss.png","bell moss - a cluster of roughly 30 specimens","","center","tilt4")}</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g2)" style="color:#cc66ff">Bell moss.</strong> Shrub form, grows in tufts, shoot height <span class="hi">5–8 cm</span>, with an open bell-like thing 1–2 cm across at the tip,
      glows purple brighter than any species I've found. An interesting detail: the bells sway slightly in sync even with no wind.
      The sway cycle is roughly once every <span class="hi">12–15 seconds</span> by the stopwatch, and the neighbouring cluster (I watched a population of about 30) swayed almost in phase,
      with minimal timing spread between neighbours. I've found no explanation for this synchrony - it doesn't pass for random noise, the period is too stable.
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
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:2px;">bell moss // swaying bells</div>
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
        <text x="100" y="195" text-anchor="middle" font-family="monospace" font-size="8" fill="rgba(150,150,150,0.4)">parallel bark cracks // est.</text>
      </svg>
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:2px;">bone tree // bark structure</div>
    </div>
  </div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:#ccc">Bone tree.</strong> Tree form, one of the largest plants I've found: height <span class="hi">2–2.5 metres</span>, trunk about <span class="hi">15 cm</span> in diameter at the base,
      hard to the touch, almost stone-like - hence the name. Colour greyish-white, almost no bioluminescence - one of the few such species. The bark is covered in fine, nearly parallel cracks,
      like the ones I described in the soil and crystal sections (angular deviation on this specimen is about <span class="hi">4–5 degrees</span> - slightly more than in the minerals, but still noticeably lower than in ordinary tree bark).
      Found <span class="hi">three</span> such trees within about a kilometre of my usual route - maybe they grow slowly and rarely, maybe there are simply fewer of them here.
    </p>
  </div>
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/bone_tree.png","bone tree - general view, one of the three I found","","center","tilt3")}</div>
</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin:14px 0;">
  <div class="hbox r" style="flex:0 0 25%;min-width:0;margin:0;font-size:12px;">
    <strong style="color:var(--red)">IMPORTANT CORRECTION:</strong> I used to think the pink-fuchsia liquid was specific to one particular plant species. That's not the case - on closer inspection,
    I see it occurs in <span class="mark-r">many, but not all</span> plants, regardless of species or form: found it in ground-cover types and in tree forms alike.
    The bone tree, for instance, has none at all, while the tropical species has some, but not much. I'll write a full section on this liquid separately, it deserves one.
  </div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g)">Tropical species (no name yet).</strong> Tree form, the very one I described above - broad leaf blade, multi-tiered crown. The leaves are large, up to <span class="hi">25–30 cm</span> long,
      bright green with faint bluish venation, moderate bioluminescence (I give it a 3 on my scale). took a leaf for analysis - thickness about <span class="hi">2 mm</span>,
      held to the light - a net-like vein structure, strangely similar in pattern to the broadleaf species in the archive, and that surprised me most of all: the evolutionary history here is completely independent.
    </p>
  </div>
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/tropical_leaf.png","leaf of the tropical species - the net-like vein structure shows when held to the light","","center","tilt1")}</div>
</div>

<hr class="r-div"/>
<div class="r-sep">PLANT MOVEMENT // A CONTROLLED EXPERIMENT</div>

<p class="r-text">
  Now about plant movement - in my opinion the most interesting observation in the whole section, and I want to describe it as precisely as possible, with a concrete method, not just "it moved".<br/><br/>
  Ran a small controlled experiment. Went up to a clump of bell moss, stood at a fixed distance (about <span class="hi">40 cm</span>,
  and stood there motionless for <span class="hi">20 minutes</span>, recording the position of one chosen bell every 2 minutes - by eye, against an imaginary axis through a rock behind the plant.
</p>

<table class="r-table" style="width:100%;margin:14px 0;">
  <tr><th>TIME</th><th>DEFLECTION ANGLE</th><th>NOTE</th></tr>
  <tr><td>0 min</td><td class="hi">0°</td><td style="color:var(--dimmer)">starting position</td></tr>
  <tr><td>8 min</td><td class="y">5–8°</td><td style="color:var(--dimmer)">first noticeable deflection</td></tr>
  <tr><td>14 min</td><td class="y">~20°</td><td style="color:var(--dimmer)">continues turning</td></tr>
  <tr><td>18 min</td><td class="r">30–35°</td><td style="color:var(--dimmer)">last reading before stepping away</td></tr>
  <tr style="background:rgba(0,200,255,0.04)"><td>+25 min after stepping away</td><td class="b">~12–15°</td><td style="color:var(--dimmer)">return began, not completed</td></tr>
</table>

<p class="r-text">
  An important methodological detail: I deliberately stood so as not to block either star from the plant - to rule out simple phototropism (growth toward light) as the explanation.
  The movement went specifically toward me, not toward the light source. That's the key point of the whole observation!!!
</p>

<div class="r-soca">Directed movement with no visible photostimulus has, on the current data, no standard explanation in known botany. The recorded response rate (on the order of 1.5–2° per minute at the start) exceeds typical thigmonastic reactions: Mimosa pudica, for example, responds faster, but to direct contact rather than to approach without touch. Possible explanations: a reaction to the body's thermal radiation, to changes in CO2 concentration from breathing, or the same mechanism underlying the planet's general psionic field. I have listed the options in descending order of comfort.</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin-top:10px;">
  <div class="sticky green t4" style="flex:0 0 15%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">15+ species in 2 months. Forests, trees that look like they stepped out of the archive tropics, plants that reach toward you. I thought I'd find some odd moss and a couple of shrubs here, and instead I found a full, living, actively reacting ecosystem.</div>
  <div class="r-note" style="flex:1;min-width:0;transform:rotate(-0.6deg);margin:26px 0 0;">
    personally I lean toward the second option (that last one SOCA gave), but that isn't science anymore, it's my personal feeling - and I want that clearly separated in the record!!
  </div>
</div>

<hr class="r-div"/>


<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div class="r-note" style="flex:1;min-width:0;transform:rotate(0.5deg);margin:0;">
    Today was supposed to be a repair day: third item on the list, wiring in the nose assembly. Instead - fifteen plant species, four pages of notes and one branch that turned toward me.<br/><br/>
    <span class="corrupt">The wiring can wait.</span> It's been waiting since October and, by all appearances, doesn't mind.
  </div>
  <div class="sticky yellow t5" style="flex:0 0 20%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">SOCA asked whether I actually plan to repair the ship, of course I do!! But the follow-up question "when?" I didn't answer.</div>
</div>

<!-- ------------------------------------------- -->
<!-- 8. FUNGI -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">08</div>
  <div class="r-sep" style="flex:1;margin:0;">FUNGI</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0067 // 30 NOV 1973</div>

<p class="r-text">
  If there are fifteen-plus plant species here, I've found fewer fungi so far - <span class="hi">eight distinguishable forms</span>, but they make up for it in size and strangeness.
  Given the complete absence of animals (there'll be a separate section), I have a hypothesis, let me record it now: the entire "second branch" of complex life on Kaela - the one usually taken by animals,
  went into fungi here. Not proven, it's my assumption, but visually it suggests itself: the fungi here are more varied and more active than anything I've seen anywhere, even in the standard training materials!!
</p>

<div style="display:flex;gap:18px;align-items:flex-start;margin:16px 0;">
  <div style="flex:1;padding-top:26px;">
    <p class="r-text">
      <strong style="color:var(--g)">Size.</strong> That's the first thing that hits you. The largest specimen I've found - a cap roughly <span class="HUGE" style="font-size:29px;">1.4 metres</span> across,
      and that's measured with nothing but the tape from the medkit so far, with a stalk about 35 cm thick at the base. For comparison I dug into the archive: the largest known fungi (giant puffballs and the like, I'm comparing with Earth ones naturally) rarely exceed half a metre across.
      This one was almost as tall as me - took a photo beside it for scale.
    </p>
  </div>
  <div style="flex-shrink:0;width:260px;">
    <div style="transform:rotate(-2deg);">
      <div style="width:260px;height:260px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/koko_giant_fungus.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:28px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/koko_giant_fungus.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">me next to the largest specimen // for scale</div>
    </div>
  </div>
</div>

<p class="r-text">
  <strong style="color:var(--b)">Glow.</strong> Almost every species I've found glows, and on average brighter than the plants. I use the same 1–5 scale as for the flora:
  most fungi fall in the <span class="hi">3–4</span> range, two species I rated the maximum <span class="hi">5</span>. The colour of the glow varies: on the large capped ones it's more often bluish-green,
  on the small tubular ones I've come across <span class="mark-y">orange</span> - the only non green-purple shade of glow I've found anywhere on the planet.
</p>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// FUNGAL GLOW BY SPECIES // the same 1–5 scale</div>
  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:140px;font-size:10px;color:var(--dim);">giant cap</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);"><div style="width:80%;height:100%;background:rgba(0,220,200,0.45);"></div></div><span style="font-size:9px;color:var(--dimmer);">4/5</span></div>
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:140px;font-size:10px;color:var(--dim);">spiral fungus</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);"><div style="width:100%;height:100%;background:rgba(0,255,200,0.5);"></div></div><span style="font-size:9px;color:var(--dimmer);">5/5</span></div>
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:140px;font-size:10px;color:#ffaa44;">small tubular (orange)</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);"><div style="width:100%;height:100%;background:rgba(255,150,50,0.5);"></div></div><span style="font-size:9px;color:#ffaa44;">5/5</span></div>
    <div style="display:flex;align-items:center;gap:10px;"><span style="width:140px;font-size:10px;color:var(--dim);">symmetrical cluster</span><div style="flex:1;height:8px;background:rgba(0,255,136,0.06);"><div style="width:60%;height:100%;background:rgba(0,200,180,0.4);"></div></div><span style="font-size:9px;color:var(--dimmer);">3/5</span></div>
  </div>
</div>

<div class="r-sep" style="margin-top:18px;">STRANGE GEOMETRY</div>

<div style="display:flex;gap:20px;align-items:flex-start;margin:16px 0;">
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/symmetric_fungi_group.png","a symmetrical cluster of five caps — the spacings are near-identical","","center","tilt1")}</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      Here's what surprises me - some species grow not just upward or sideways, but in shapes that look almost geometrically regular.
      Found one specimen growing as a spiral: the stalk curved in an arc, making almost a full turn at a height of about <span class="hi">60 cm</span> before opening its cap.
      Estimated the twist angle by eye - something close to a logarithmic spiral, like a nautilus shell, but that's not an exact measurement, just a resemblance I noticed.<br/><br/>
      Another specimen grew as a cluster of <span class="hi">five</span> separate caps arranged perfectly symmetrically around a common centre - the spacing between neighbours varied by no more than <span class="hi">2–3 cm</span>
      across a total cluster diameter of about <span class="hi">70 cm</span>. Random growth doesn't usually produce that kind of regularity.
    </p>
  </div>
  <div class="flora-sketch" style="flex:0 0 18%;min-width:0;">
    <div style="transform:rotate(2.5deg);">
      <svg width="220" height="220" viewBox="0 0 200 200" style="opacity:0.75;display:block;">
        <path d="M100,175 L95.9,171.8 L92,168.5 L88.3,165.2 L84.8,162 L81.6,158.8 L78.7,155.5 L76.2,152.2 L74.1,149 L72.4,145.8 L71.1,142.5 L70.3,139.2 L69.9,136 L69.9,132.8 L70.3,129.5 L71.2,126.2 L72.4,123 L74,119.8 L75.9,116.5 L78.1,113.2 L80.6,110 L83.2,106.8 L86,103.5 L89,100.2 L92,97 L95,93.8 L98,90.5 L101,87.2 L103.8,84 L106.5,80.8 L109.1,77.5 L111.4,74.2 L113.5,71 L115.4,67.8 L116.9,64.5 L118.2,61.2 L119.2,58 L119.8,54.8 L120.2,51.5 L120.2,48.2 L120,45" fill="none" stroke="rgba(0,220,180,0.45)" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="124" cy="40" rx="24" ry="15" fill="rgba(0,230,190,0.15)" stroke="rgba(0,230,190,0.4)" stroke-width="1.2"/>
        <circle cx="100" cy="175" r="2.5" fill="rgba(0,220,180,0.5)"/>
        <text x="100" y="195" text-anchor="middle" font-family="monospace" font-size="8" fill="rgba(0,220,180,0.4)">spiral growth // ~270°, rising</text>
      </svg>
      <div style="font-size:9px;color:var(--dimmer);text-align:center;margin-top:2px;">spiral fungus // sketched from life</div>
    </div>
  </div>
</div>

<hr class="r-div"/>
<div class="r-sep">GROWTH RATE // MEASURED OVER ONE FULL KAELA DAY</div>

<p class="r-text">
  This one I decided to test experimentally: a small fungus I noticed in the evening (local time) had visibly grown by the next morning.
  Stuck a notched stick beside it, a primitive ruler - and measured the height of that same specimen across one full Kaela day (<span class="hi">59 hours</span>).
</p>

<table class="r-table" style="width:100%;margin:14px 0;">
  <tr><th>TIME</th><th>HEIGHT</th><th>NOTE</th></tr>
  <tr><td>0 h</td><td class="hi">~4 cm</td><td style="color:var(--dimmer)">start of measurement</td></tr>
  <tr><td>20 h</td><td class="y">~9 cm</td><td style="color:var(--dimmer)">active growth</td></tr>
  <tr><td>40 h</td><td class="y">~14 cm</td><td style="color:var(--dimmer)">growth continues</td></tr>
  <tr style="background:rgba(0,200,255,0.04)"><td>59 h (end of cycle)</td><td class="b" style="font-family:'VT323',monospace;font-size:16px;">~17 cm</td><td style="color:var(--dimmer)">growth stopped, cap opened</td></tr>
</table>

<div class="hbox b" style="margin:14px 0;font-size:13px;">
  That gives a growth rate on the order of <span class="hi">0.3–0.35 cm per hour</span> during the active phase - even the fastest known fungi (some inky caps, for instance) rarely exceed that,
  though it's a poor comparison: I'm no mycologist and I don't know the exact records off the top of my head.
</div>

<div class="r-soca">Such a growth rate requires very high metabolic activity and constant access to water and nutrition - which is consistent with the overall picture of the planet, where water circulates continuously and the soil is, by all appearances, rich in organics.</div>

<p class="r-text" style="margin-top:12px;">
  Took a tissue sample from one fungus for analysis, and inside - porous, damp, riddled with small cavities, somewhat like a sponge.
  The cut is pale, yellowish-white, with no glow inside (the light comes only from the cap's surface).
</p>

<div style="display:flex;gap:18px;align-items:flex-start;margin-top:10px;">
  <div class="r-note" style="flex:1;min-width:0;transform:rotate(-0.5deg);margin:0;">
    My personal thought, can't confirm it: if the fungi really do replace animals here in the ecological sense - maybe it's their enormous biomass and fast metabolism that drive the very circulation of matter that makes the soil so "alive" (thinking back to section 5, where it recovers its shape after footprints). For now it's just me connecting dots in my head, nothing is proven!
  </div>
  <div class="sticky purple t2" style="flex:0 0 20%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">8 fungal species, and I'm sure I'll find more. One the size of me, another growing in a spiral, none of them should logically grow that fast, and yet they do.</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 9. UNUSUAL LIQUID (PINK RESIN) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">09</div>
  <div class="r-sep" style="flex:1;margin:0;">UNUSUAL LIQUID // PINK RESIN</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0073 // 06 DEC 1973</div>

<p class="r-text">
  Back when I was writing about the plants I promised a separate section on this liquid - here it is!<br/><br/>
  As I noted in the correction to section 7: the liquid isn't tied to a single species. Found it in <span class="hi">6 of the 15+</span> plant species I've found, regardless of form or size -
  in ground-cover, shrub and tree forms alike. The tropical species has it, the bone tree - none at all. I still can't see the pattern behind which plants contain it.
</p>

<div style="display:flex;gap:18px;align-items:flex-start;margin:16px 0;">
  <div style="flex:1;min-width:0;align-self:center;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g)">Appearance.</strong> From the outside, plants with this liquid don't stand out at all - ordinary green, the same texture, the same glow if the species has one.
      But damage a stem, branch or leaf - and almost immediately a viscous liquid starts seeping out, a vivid <span class="mark-r">pink-fuchsia</span> colour.
      The contrast is sharp and genuinely startling the first time - I brushed a shrub with my hand back then and for a second was certain it was blood, until I registered that the colour was all wrong.
    </p>
  </div>
  <div style="flex-shrink:0;width:270px;">
    <div style="transform:rotate(2.5deg);">
      <div style="width:270px;height:270px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/fuchsia_resin.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:28px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/fuchsia_resin.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">a green plant with pink liquid seeping out of it</div>
    </div>
  </div>
</div>

<p class="r-text">
  <strong style="color:var(--b)">Consistency.</strong> Viscous, like resin - it doesn't run quickly, more like creeps slowly and sets fairly fast in the air.
  timed the setting on one sample: the surface film started to skin over after about <span class="hi">3–4 minutes</span>,
  full hardening (as far as I could track it) took about <span class="hi">25–30 minutes</span>, after which the set droplet turned translucent, slightly darker than in liquid form.<br/><br/>
  Took a sample for analysis - collected roughly <span class="hi">5 ml</span> in a small container.
</p>

<div class="r-soca">Basic analysis of the liquid gives high viscosity (comparable to plant resins), a pH of about 5.8 (mildly acidic) and organic compounds of undetermined structure. The colour pigment is stable in air - the oxidation typical of many resins has not been recorded.</div>

<div class="r-sep" style="margin-top:18px;">WHAT IT MIGHT BE // THREE WORKING HYPOTHESES</div>

<div class="g3" style="margin:14px 0;">
  <div class="hbox" style="font-size:12px;">
    <strong style="color:var(--g)">01. DEFENCE</strong><br/>
    Seal the wound, deter anything chewing on the tissue. But there are no herbivores on Kaela (section 11) - possibly a legacy of an earlier evolutionary stage, or protection against microorganisms.
  </div>
  <div class="hbox b" style="font-size:12px;">
    <strong style="color:var(--b)">02. NUTRITION / TRANSPORT</strong><br/>
    An analogue of phloem sap - carrying nutrients. In that case the bright colour is just a by-product of the composition, not a deliberate signal.
  </div>
  <div class="hbox y" style="font-size:12px;">
    <strong style="color:var(--yellow)">03. PSIONIC FIELD</strong><br/>
    <span class="corrupt">This one is pure speculation.</span> the colour is so vivid and unnatural that it looks almost like a deliberate signal rather than a random metabolic product.
  </div>
</div>

<div class="r-note" style="transform:rotate(-0.6deg);margin-top:10px;">
  Honestly, green on the outside and vivid pink on the inside seems too interesting to me to be just an evolutionary accident. But I remember that nature generally likes bright colours without any "purpose" in the sense I imagine it, so I'm not jumping to conclusions.
</div>

<div class="r-sep" style="margin-top:18px;">QUESTION: DOES THE LIQUID AFFECT THE PLANT'S OWN COLOUR?</div>

<p class="r-text">
  since the question came up - I checked deliberately. The answer appears to be no: at least not directly and not visually.<br/><br/>
  Plants with fuchsia liquid inside look exactly the same from outside as those without - the same range of green, the same saturation, no pink or violet tint
  seeps out through the skin of the stem or leaf, not even in thin translucent species like glass ivy. I even held several specimens up to the light
  (the way I did with the tropical leaf's venation) - the liquid inside shows as dark veins or patches, but the colour comes through the tissue weakly, more like an echo than actual pink.<br/><br/>
  Honestly, that surprised me a little - I expected a pigment that vivid to show through at least slightly. Possibly the outer shell carries its own green pigment,
  which completely hides what's underneath, like an opaque layer.
</p>

<div class="hbox r" style="margin:14px 0;font-size:13px;">
  The only exception I found - at sites of old mechanical damage (a healed cut, the place a branch broke off) you can sometimes see a barely visible pinkish rim along the edge of the healing tissue,
  presumably residue from liquid that seeped out and was partly reabsorbed during healing. But that isn't the plant's own colouring, just a mark from an old wound.
</div>

<div class="r-soca">The absence of visible pigment penetration through the outer tissues despite significant internal concentration indicates an effective barrier mechanism - probably a specialised cell layer analogous to plant epidermis, preventing the migration of pigmented compounds to the surface.</div>

<div class="r-note" style="transform:rotate(0.7deg);margin-top:10px;">
  Conclusion: the green on the outside is a separate, independent colouring system with no connection to what's inside. The plant seems to deliberately hide that brightness until you damage it.
</div>

<hr class="r-div"/>

<p class="r-text">
  tasted the liquid - one tiny drop (pinhead-sized, no more), after SOCA confirmed that basic analysis showed no obvious toxins at that volume (as if that concerned me).
  The taste is faintly bitter, with a light metallic aftertaste, distantly - something between conifer resin and an unripe berry.
  Noticed no side effects over the following day of self-observation.
</p>

<div class="hbox r" style="margin:14px 0;font-size:13px;">
  <strong style="color:var(--red);">Though it's worth clarifying:</strong> I only tried a microscopic dose and only after consulting SOCA on the basic analysis. That doesn't mean the liquid is safe in large quantities - I haven't tested that deliberately and don't plan to, sorry, I don't need that just yet.
</div>

<p class="r-text">
  Collected three samples from different species, the colour on all of them looks identical (vivid fuchsia), but I haven't compared the exact chemical composition of each - possibly it isn't the same liquid across species, just similar in colour. A question for later.
</p>

<div style="display:flex;gap:18px;align-items:flex-start;margin:12px 0;">
  <div class="r-data" style="flex:1;min-width:0;margin:0;">
    <div class="r-row"><span class="r-key">SPECIES WITH THE LIQUID</span><span class="r-val hi">6 of 15+ found</span></div>
    <div class="r-row"><span class="r-key">LIQUID PH</span><span class="r-val">~5.8 // mildly acidic</span></div>
    <div class="r-row"><span class="r-key">TIME TO START SETTING</span><span class="r-val">3–4 minutes</span></div>
    <div class="r-row"><span class="r-key">FULL HARDENING</span><span class="r-val">~25–30 minutes</span></div>
    <div class="r-row"><span class="r-key">SAMPLES COLLECTED</span><span class="r-val y">3 different species</span></div>
  </div>
  <div class="sticky purple t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">the set droplets are now somewhere on the ship too, next to crystal #3. The collection is turning out strange - a glowing rock and a frozen pink droplet, perfect!!</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 10. FRUIT AND FOOD -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">10</div>
  <div class="r-sep" style="flex:1;margin:0;">FRUIT AND FOOD</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0079 // 12 DEC 1973</div>

<div style="font-family:'VT323',monospace;font-size:30px;color:var(--red);text-shadow:0 0 18px rgba(255,34,68,0.4);letter-spacing:0.08em;margin-bottom:10px;">this section is no less interesting.</div>

<p class="r-text">
  Imagine I could have just up and died while writing it? Well, not literally of course (I hope), but the risk was entirely real! <br/><br/>
  <strong style="color:var(--g)">are there edible plants?</strong> Yes. but I found that out backwards - ate first, learned it was edible after.<br/><br/>
  Found a small tree (not one of the species I've already described - a separate, still unclassified species, about 1.8 metres tall, with rounded leaves, no noticeable glow)
  with clusters of fruit hanging low, within reach. The fruits are round, roughly <span class="hi">6–7 cm</span> across, smooth skin, dark violet with a faint metallic sheen.
</p>

<div class="hbox r" style="margin:14px 0;font-size:14px;">
  In my defence I'll say I was hungry (SOCA and I had only just sorted out yet another breakdown in the filtration system, I hadn't eaten properly in about ten hours!!!!) and curious - which, as you may have noticed by now, is my main motive in nearly every situation on this planet.
  Picked one fruit and ate it, <span class="blink" style="color:var(--red);font-family:'VT323',monospace;font-size:18px;">without checking whether it was poisonous.</span>
</div>

<div class="r-soca">This was undertaken without prior consultation and without any analysis of the fruit's composition, risk assessment absent. I log this not to criticise after the fact, but for the record: in future, samples of this kind should be accompanied by at least a basic spectral analysis before consumption... Which Koko, I already anticipate, will flatly ignore.</div>

<p class="r-text" style="margin-top:10px;">
  SOCA told me outright that I'm an "idiot" the moment I finished eating. I answered something like "well, it's too late now" - which is probably not the best argument when you've just eaten some random crap, but it really was too late.
</p>

<div style="display:flex;gap:18px;align-items:flex-start;margin:16px 0;">
  <div style="flex-shrink:0;width:270px;">
    <div style="transform:rotate(2deg);">
      <div style="width:270px;height:270px;border:1px solid var(--border);background:rgba(0,0,0,0.6);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;">
        <img src="${PD_IMG_BASE}картинк/kaela/strange_fruit.png" style="width:100%;height:100%;object-fit:cover;display:none;" onload="this.style.display='block';this.parentElement.querySelectorAll('div').forEach(d=>d.style.display='none');"/>
        <div style="font-size:28px;opacity:0.25;">📷</div>
        <div style="font-size:8px;color:var(--dimmer);text-align:center;padding:0 6px;">картинк/kaela/strange_fruit.png</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">the fruit I ate - dark violet, metallic sheen</div>
    </div>
  </div>
  <div style="flex:1;min-width:0;align-self:center;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g2)">Taste.</strong> sweet, slightly tart, I'd compare it to something between a pear and a melon - juicy flesh, slightly grainy texture (similar to a pear's),
      found no stone or seeds inside, though I didn't cut the fruit open properly, I just bit into it.
    </p>
  </div>
</div>

<p class="r-text">
  For the next few hours my babysitters watched my condition closely - pulse, temperature, whether there was nausea, dizziness, any unusual sensations, SMAILY ran continuous monitoring.
</p>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// CONDITION MONITORING // first 6 hours after consumption</div>
  <div style="position:relative;height:50px;margin:10px 0 4px;">
    <div style="position:absolute;top:24px;left:0;right:0;height:2px;background:rgba(0,255,136,0.12);"></div>
    <div style="position:absolute;top:18px;left:2%;width:10px;height:14px;background:rgba(255,34,68,0.35);border:1px solid rgba(255,34,68,0.5);"></div>
    <div style="position:absolute;top:18px;left:16%;width:10px;height:14px;background:rgba(0,255,136,0.25);border:1px solid rgba(0,255,136,0.4);"></div>
    <div style="position:absolute;top:18px;left:33%;width:10px;height:14px;background:rgba(255,200,0,0.3);border:1px solid rgba(255,200,0,0.45);"></div>
    <div style="position:absolute;top:18px;left:66%;width:10px;height:14px;background:rgba(0,255,136,0.25);border:1px solid rgba(0,255,136,0.4);"></div>
    <div style="position:absolute;top:18px;left:99%;width:10px;height:14px;background:rgba(0,180,255,0.25);border:1px solid rgba(0,180,255,0.4);"></div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;font-size:9px;">
    <div style="color:var(--red);text-align:center;">0h<br/><span style="color:var(--dimmer);font-size:8px;">ate the fruit</span></div>
    <div style="color:var(--g);text-align:center;">1h<br/><span style="color:var(--dimmer);font-size:8px;">pulse normal</span></div>
    <div style="color:var(--yellow);text-align:center;">2h<br/><span style="color:var(--dimmer);font-size:8px;">mild drowsiness*</span></div>
    <div style="color:var(--g);text-align:center;">4h<br/><span style="color:var(--dimmer);font-size:8px;">fully normal</span></div>
    <div style="color:var(--b);text-align:center;">6h<br/><span style="color:var(--dimmer);font-size:8px;">monitoring lifted</span></div>
  </div>
  <div style="font-size:8px;color:var(--dimmer);margin-top:6px;">*possibly just tiredness from lack of sleep, not definitely linked to the fruit</div>
</div>

<div class="r-smaily">While you were chewing on that pearmelon without asking anyone's permission, I was already prepared to hunt down every possible antidote for four classes of likely toxins, and surprise - you didn't need any of it!! You're intact, the fruit is apparently delicious, but next time ask BEFORE, not after, let me be the hero in advance rather than after the fact!</div>

<p class="r-text">
  An hour after eating my pulse was normal, after two hours I felt mildly drowsy, but that could just as easily have been tiredness -
  I hadn't slept properly the previous day because of the filtration breakdown. By four hours - completely normal condition, no symptoms.
  SMAILY ended the intensive monitoring after six hours, once it was clear there'd be no acute reaction.
</p>

<div class="hbox" style="margin:14px 0;font-size:14px;">
  <span class="HUGE" style="font-size:22px;">Koko didn't die, so it's edible!</span> - sounds like a joke, but that is in fact exactly how I established this particular fruit was safe for me personally.
  It was a crude test on my own body, and I'm clearly lucky - there are plenty of toxins that don't act immediately,
  but over days or weeks, and six hours of monitoring wouldn't have caught them... Well, if my reports suddenly cut off - you know the reason.
</div>

<div class="hbox r" style="margin:14px 0;font-size:13px;">
  <strong style="color:var(--red);">For the record, note to future me:</strong> this is not a reason to repeat it with every new fruit, Kokoro!!!!! it worked out this time,
  and next time??? I need to work out a proper testing method instead of relying on luck, or hunger will drive you completely out of your mind!
</div>

<p class="r-text">
  Since then I've eaten the same fruit several more times (the same tree species, found two more nearby) - the reaction is always the same, no problems.
  It's effectively become part of my diet, breaking up the standard ship rations.<br/><br/>
  I've also found, but haven't tried yet, at least two other kinds of fruit - one small and bright yellow, growing in clusters on a shrub form somewhat like bell moss,
  but without the glow; the second large and elongated, on one of the trees resembling the tropical species. These I'll test far more carefully: minimal sample and long observation,
  seeing as I already got lucky once... Well, or I'll eat it without thinking again, who knows??
</p>

<div style="display:flex;gap:24px;align-items:center;justify-content:center;margin:12px 0;">
  <div class="sticky yellow t2" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">honestly, it was actually good. The first proper food that wasn't rations in many weeks - and tasty, if a bit... sweet. Sometimes curiosity is definitely worth it, I don't regret it!</div>
  <div class="r-data" style="flex:0 1 55%;min-width:0;margin:0;">
    <div class="r-row"><span class="r-key">FRUIT EATEN</span><span class="r-val hi">diameter 6–7 cm, violet</span></div>
    <div class="r-row"><span class="r-key">TASTE</span><span class="r-val">sweet, tart // pear + melon</span></div>
    <div class="r-row"><span class="r-key">MONITORING</span><span class="r-val y">6 hours, no adverse reaction</span></div>
    <div class="r-row"><span class="r-key">REPEAT SAMPLES</span><span class="r-val">several times, no problems</span></div>
    <div class="r-row"><span class="r-key">OTHER FRUIT TYPES FOUND</span><span class="r-val r">2, not yet tested</span></div>
  </div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 11. ABSENCE OF ANIMALS (BUT NOT OF LIFE) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">11</div>
  <div class="r-sep" style="flex:1;margin:0;">ABSENCE OF ANIMALS // BUT NOT OF LIFE</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0086 // 19 DEC 1973</div>

<p class="r-text">
  Almost three months walking this planet and I still haven't met <span class="HUGE" style="font-size:30px;">a single</span> animal.
  Not a bird, not an insect, nothing resembling a mammal, reptile or fish - nothing at all I could confidently call an animal in the usual sense.
  That doesn't mean there are none at all - Kaela is big, I can't cover all of it, I can't vouch for an entire planet. But across the territory I've managed to explore
  (cumulative survey radius - somewhere around <span class="hi">60–70 km</span> in every direction from the landing site, not a solid circle but more of a ragged web of routes) - nothing.
</p>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// TALLY // LAST MONTH OF TARGETED OBSERVATION</div>
  <div class="g3">
    <div style="text-align:center;border:1px solid rgba(255,34,68,0.2);padding:10px;">
      <div style="font-family:'VT323',monospace;font-size:34px;color:var(--red);">0</div>
      <div style="font-size:9px;color:var(--dimmer);">confirmed contacts with animal life</div>
    </div>
    <div style="text-align:center;border:1px solid rgba(255,34,68,0.2);padding:10px;">
      <div style="font-family:'VT323',monospace;font-size:34px;color:var(--red);">0</div>
      <div style="font-size:9px;color:var(--dimmer);">sounds indicating animals</div>
    </div>
    <div style="text-align:center;border:1px solid rgba(255,34,68,0.2);padding:10px;">
      <div style="font-family:'VT323',monospace;font-size:34px;color:var(--red);">0</div>
      <div style="font-size:9px;color:var(--dimmer);">tracks, droppings, skeletal remains</div>
    </div>
  </div>
</div>

<p class="r-text">
  <strong style="color:var(--g)">Why did evolution go differently?</strong> I have no exact answer, only guesses, and I've already touched on some of them in the fungi section.
  Working hypothesis: the entire biological niche usually occupied by animals - mobile organisms feeding on other organisms or parts of them - either never arose here at all,
  or something else displaced it, most likely the fungi, which I've already described as incredibly active, fast-growing and varied.<br/><br/>
  Worked it out logically: if Kaela's ecosystem doesn't spend its "spare" energy on mobile predators and herbivores, it may be redirected into the growth of the plants and fungi themselves -
  which possibly explains why the fungi here shoot up at such a rate (section 8, a fungus grew <span class="hi">17 cm in one cycle</span>) and why the vegetation is so dense and active.
</p>

<div class="r-soca">The absence of mobile fauna alongside a complex and metabolically active flora and mycoflora may indeed indicate an alternative distribution of energy through the trophic chain. But confirming the hypothesis requires a full ecological analysis, unavailable with current equipment. Logged as a plausible but unproven model.</div>

<div class="r-note" style="transform:rotate(0.6deg);margin-top:10px;">
  "all the energy went into plants and fungi" - it sounds nice as a phrase, but let me stress: for now that's my personal interpretation of the data, not a confirmed fact.
  Maybe the reason animals never appeared on Kaela is something else entirely - maybe something in the planet's chemistry, maybe the psionic field somehow affects the formation of a nervous system
  (that's pure speculation, I'm writing it down just so I don't lose the idea), maybe something from the planet's history, about which I know absolutely nothing.
</div>

<hr class="r-div"/>
<div class="r-sep">BUT ARE THERE BACTERIA AND MICROORGANISMS?</div>

<p class="r-text">
  yes, definitely - I can state this with more confidence than my reasoning about large animals. We took several samples - from rocks, from soil, from the water of one spring -
  and the basic analysis showed clear microscopic activity.
</p>

<table class="r-table" style="width:100%;margin:14px 0;">
  <tr><th>SAMPLE</th><th>ACTIVITY</th><th>NOTE</th></tr>
  <tr><td class="hi">soil</td><td class="r">high</td><td style="color:var(--dimmer)">metabolic markers elevated</td></tr>
  <tr><td class="hi">spring water</td><td class="y">moderate</td><td style="color:var(--dimmer)">thermophilic forms</td></tr>
  <tr><td class="hi">rock surfaces</td><td style="color:var(--dimmer)">low</td><td style="color:var(--dimmer)">present, but faint</td></tr>
  <tr style="background:rgba(255,34,68,0.04)"><td colspan="2" class="r">classification</td><td style="color:var(--red)">impossible with current equipment</td></tr>
</table>

<p class="r-text">
  SOCA can't give an exact classification of the microorganisms found - the PANDEMONIUM's equipment isn't designed for full microbiological analysis,
  there are only basic sensors that register the fact of activity (metabolic markers, changes in sample composition over time), but give no detailed picture.
  I know they're there, but I don't really know what they are.<br/><br/>
  This, incidentally, partly explains the finding from the soil section - the soil recovering after footprints may be linked not only to the structure of the soil itself,
  but also to the activity of the microorganisms in it, which quickly process and restore the upper layer. <span class="ghost">this is just connecting facts, not a proven causal link, but logically it looks plausible.</span>
</p>

<div class="r-note" style="transform:rotate(-0.5deg);margin-top:14px;">
  a strange feeling - standing on a planet full of life, hearing (or rather, not hearing, right) the seething activity of growth and metabolism all around,
  and still not meeting a single creature that would look back at you. Only plants that sometimes turn toward me, but that isn't the same as a gaze!
</div>

<div style="display:flex;gap:18px;align-items:center;margin:14px 0;">
  <div class="hbox y" style="flex:1;min-width:0;margin:0;font-size:14px;">
    Think about it: <span class="mark-y">I'm the only animal here</span>. In the most literal evolutionary sense of the word. The whole of Kaela, as far as I've worked out - is me and everything else that isn't me.
  </div>
  <div class="sticky purple t4" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">This observation leads straight into the next section - if there are no animals, yet something definitely moves, reacts and possibly even chooses, the question of what that something is only gets sharper.</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 12. THE KAELA PHENOMENON: NATURE OR MIND? -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">12</div>
  <div class="r-sep" style="flex:1;margin:0;">THE KAELA PHENOMENON // NATURE OR MIND?</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0095 // 28 DEC 1973 // CASES FROM DAY 0034 TO 0089, GATHERED GRADUALLY, WRITING IT ALL AT ONCE</div>

<div style="display:flex;gap:18px;align-items:center;margin:12px 0;">
  <div class="sticky yellow t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">if SOCA is reading this: yes, I'm aware that "anecdote is not statistics". you've already told me that, stop being such a drag!!!</div>
  <div class="r-note" style="flex:1;min-width:0;transform:rotate(-0.9deg);font-size:13px;margin:0;">
    I put this section off longer than any other. not because there's nothing to write - but because writing it means admitting out loud the thing
    I've so far only scribbled in the margins in snatches, afraid of sounding <span class="corrupt">unscientific</span>. Riiiight, let's start with the facts first,
    <span class="HUGE" style="font-size:22px;">then</span> - what I think about it.
  </div>
</div>

<div style="display:flex;align-items:baseline;gap:10px;margin:20px 0 6px;">
  <span class="skew" style="font-family:'VT323',monospace;font-size:22px;">CASE 01</span>
  <span style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;">// THE BRANCH // DAY 0034</span>
</div>

<div style="display:flex;gap:20px;align-items:flex-start;">
  <p class="r-text" style="flex:1;">
    Was standing by a tree (species <span class="hib">Kaela-Arbor-3</span>), photographing the bark, noticed a side branch at chest height.
    Set the camera to time-lapse, tripod, didn't touch its position - <span class="mark">40 minutes</span>. Wind per the weather station - 0.2 m/s, effectively dead calm.<br/><br/>
    The branch turned toward me by <span class="hi">15–20°</span>, measured with a protractor on freeze-frames every 5 minutes, didn't believe myself the first time, recounted.
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
        <text x="65" y="128" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(0,180,60,0.35)">dashed = before // solid = after</text>
      </svg>
      <div class="r-sketch-cap" style="margin-top:22px;">freehand, from freeze-frames // not to scale</div>
    </div>
  </div>
</div>

<div class="r-soca">Previously recorded thigmonastic response rate to an approaching body - 1.5–2°/min in the initial phase. The observed movement - about 0.4–0.5°/min, but prolonged, without the characteristic return oscillation typical of comparable known reactions.</div>

<div class="clearfix"></div>

<div style="display:flex;align-items:baseline;gap:10px;margin:22px 0 6px;">
  <span class="skew" style="font-family:'VT323',monospace;font-size:22px;">CASE 02</span>
  <span style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;">// THE PATH // DAY 0041 → DAY 0050</span>
</div>

<p class="r-text">
  Cut across the moss between the springs, there was <span class="mark-r">no path</span> there. Memorised three boulders as landmarks - well, just in case, habit, what can you do.
  Walked it once, <span class="ul">once</span>.<br/><br/>
  Came back along the same route 9 days later, and where my path had been - a flattened strip about 40 cm wide, following the route <span class="hi">including the zigzag</span> I made going around a puddle.
  You physically can't tread that in one pass, and there's nobody else out there to walk it.
</p>

<div style="display:flex;gap:18px;align-items:center;margin:14px 0;">
  <div class="r-data" style="flex:1;min-width:0;margin:0;">
    <div class="r-row"><span class="r-key">TRACK WIDTH</span><span class="r-val">~40 cm</span></div>
    <div class="r-row"><span class="r-key">NUMBER OF PASSES</span><span class="r-val hi">1 (one)</span></div>
    <div class="r-row"><span class="r-key">DAYS ELAPSED</span><span class="r-val y">9</span></div>
    <div class="r-row"><span class="r-key">TRACK CONDITION</span><span class="r-val r">sharper than right afterwards</span></div>
  </div>
  <div class="sticky green t1" style="flex:0 0 24%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">The alternative I'm obliged to consider: the moss here recovers its shape abnormally fast (see the soil section). Maybe it's simply "the track hasn't grown over yet". but it got SHARPER, and that isn't the same as "hasn't grown over".</div>
  <div style="flex:0 0 24%;min-width:0;">
    <div style="transform:rotate(1.2deg);">
      <div style="width:100%;aspect-ratio:1;border:1px solid var(--border);background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;padding:14px;box-sizing:border-box;">
        <div style="font-size:12px;color:var(--dimmer);text-align:center;line-height:1.6;">there should have been a photo here...<br/>But Koko duly lost it!!</div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:3px;text-align:center;letter-spacing:0.08em;">the path I never trod // the landmark boulders are visible on the right</div>
    </div>
  </div>
</div>

<div style="display:flex;align-items:baseline;gap:10px;margin:22px 0 6px;">
  <span class="skew" style="font-family:'VT323',monospace;font-size:22px;">CASE 03</span>
  <span style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;">// THE STONES // DAY 0058 → DAY 0064</span>
</div>

<p class="r-text">
  The most disputable thing in here. Marked the positions of five stones (5–12 cm) near the camp with paint - a control in case of erosion.
  The ground is level, I checked with a spirit level, tectonics on Kaela are minimal (see section 16). after 6 days -
</p>

<table class="r-table">
  <tr><th>STONE</th><th>DISPLACEMENT</th><th>DIRECTION</th></tr>
  <tr><td class="hi">#1</td><td class="r">3.2 cm</td><td style="color:var(--dimmer)">SE</td></tr>
  <tr><td class="hi">#2</td><td style="color:var(--dimmer)">0 cm</td><td style="color:var(--dimmer)">-</td></tr>
  <tr><td class="hi">#3</td><td class="r">2.1 cm</td><td style="color:var(--dimmer)">SE</td></tr>
  <tr><td class="hi">#4</td><td style="color:var(--dimmer)">0 cm</td><td style="color:var(--dimmer)">-</td></tr>
  <tr style="background:rgba(255,34,68,0.04)"><td class="hi">#5</td><td class="r">3.8 cm</td><td style="color:var(--dimmer)">SE</td></tr>
</table>

<div style="display:flex;gap:18px;align-items:stretch;margin:14px 0;">
  <div class="sticky red t4" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">3 out of 5 - not random, all in the same direction. If it were chance or erosion, the spread of directions would be wider. I had to check several more times before I believed my own data!!!!</div>
  <div class="r-smaily" style="flex:1;min-width:0;align-self:center;margin:0;">while Koko spends a second day painting stones from his personal kit and crawling around them with a spirit level - I consider it my duty to add something of my own here: pulse normal, obsession level elevated, but that appears to be his standard working state!</div>
</div>

<div class="hbox y" style="margin:18px 0;">
  <strong style="color:var(--g)">A conclusion, if you can call it that.</strong> I'm not claiming Kaela is sapient in the sense of "having a brain". Possibly it's a distributed reaction of the ecosystem to a foreign body -
  something like the way a mycelium passes signals between trees, only faster and more noticeable, or else something I simply have no model for yet.
</div>

<div class="r-soca">Three documented cases across 79 days - a statistically insignificant sample. Drawing conclusions requires an order of magnitude more variable control. The data is archived as a basis for future systematic observation, not as a confirmed phenomenon.</div>

<div class="r-note" style="transform:rotate(0.7deg);margin-top:10px;">
  SOCA please don't interrupt!!! Although she is, of course, right. I keep logging every case like this - photos, coordinates, timestamps, so that one day we'll have a sample and not an anecdote.
  But that feeling from the first day, that the ground under me is alive and noticed me - it never went away since, it just stopped being only a feeling.
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 13. ELECTROMAGNETISM AND INSTRUMENTS -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">13</div>
  <div class="r-sep" style="flex:1;margin:0;">ELECTROMAGNETISM // THE INSTRUMENTS ARE ACTING STRANGE</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0100 // 02 JAN 1974 // FIRST DETECTION - DAY 0052, THEN REPEAT VISITS</div>

<p class="r-text">
  I'll start with the dry part - so there's something to compare the anomaly against later. Kaela does have a magnetic field, and a fairly weak one.
</p>

<div style="display:flex;gap:18px;align-items:center;margin:14px 0;">
  <div class="r-stats" style="flex:1;min-width:0;margin:0;">
    <div class="r-stat"><div class="r-stat-lbl">FIELD STRENGTH</div><div class="r-stat-val">30<span class="r-stat-unit">µT</span></div></div>
    <div class="r-stat"><div class="r-stat-lbl">POLE OFFSET</div><div class="r-stat-val" style="color:var(--b)">7<span class="r-stat-unit">°</span></div></div>
    <div class="r-stat"><div class="r-stat-lbl">ANOMALY ZONES FOUND</div><div class="r-stat-val" style="color:var(--yellow)">4</div></div>
    <div class="r-stat"><div class="r-stat-lbl">MAX. COMPASS DEVIATION</div><div class="r-stat-val" style="color:var(--red)">40<span class="r-stat-unit">°</span></div></div>
  </div>
  <div class="sticky blue t2" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">for comparison (from the reference book): Earth's field is 25 µT at the equator, up to 65 at the poles. Kaela is in the same order of magnitude, nothing exotic. SO FAR!!!</div>
</div>

<div style="display:flex;gap:20px;align-items:flex-start;margin-top:14px;">
  <p class="r-text" style="flex:1;">
    The analogue compass (a spare, in case the electronics fail - SOCA insisted) is normally off by 1–2°, that's instrument error.
    But there are <span class="hi">4 points</span> along the route (marked <span class="mark-y">EM-01 - EM-04</span>) where the needle is pulled 15–40° off the calculated north.
    It repeats consistently on return visits - meaning it's not a malfunction, but something local and permanent.
  </p>
  <div>
    <div class="r-sketch">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(0,255,136,0.15)" stroke-width="1"/>
        <line x1="60" y1="60" x2="60" y2="18" stroke="rgba(0,255,136,0.15)" stroke-width="1" stroke-dasharray="2,3"/>
        <line x1="60" y1="60" x2="88" y2="30" stroke="rgba(255,34,68,0.5)" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 60 30 A 30 30 0 0 1 82 36" fill="none" stroke="rgba(255,200,0,0.4)" stroke-width="1"/>
        <text x="94" y="24" font-family="monospace" font-size="8" fill="rgba(255,34,68,0.5)">~32°</text>
        <text x="60" y="112" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(0,180,60,0.35)">EM-02 // dashed = true N</text>
      </svg>
      <div class="r-sketch-cap" style="margin-top:26px;">compass in zone EM-02, sketched on site</div>
    </div>
  </div>
</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin-top:8px;">
  <div style="flex:1;min-width:0;">
    <table class="r-table" style="width:100%;margin:0;">
      <tr><th>ZONE</th><th>DEVIATION</th><th>FIELD GAIN</th><th>BIO-ACTIVITY (SOCA)</th></tr>
      <tr><td class="hi">EM-01</td><td class="y">15°</td><td style="color:var(--dimmer)">×1.4</td><td class="b">elevated</td></tr>
      <tr><td class="hi">EM-02</td><td class="r">32°</td><td style="color:var(--dimmer)">×2.1</td><td class="b">elevated // the branch was here, see case 01</td></tr>
      <tr><td class="hi">EM-03</td><td class="y">18°</td><td style="color:var(--dimmer)">×1.6</td><td style="color:var(--dimmer)">background, no change</td></tr>
      <tr style="background:rgba(255,34,68,0.04)"><td class="hi">EM-04</td><td class="r">40°</td><td style="color:var(--dimmer)">×1.9</td><td class="b">elevated</td></tr>
    </table>
    <div class="schema" style="margin:16px 0 0;">
      <div class="schema-title">// OVERLAP OF EM ANOMALY AND THE "PSIONIC" BACKGROUND</div>
      <div class="hbox b" style="margin:0;">
        <span class="HUGE" style="font-size:26px;">3 of 4</span> magnetic anomaly zones coincide with zones of elevated bioelectrical activity. EM-03 is the exception, an ordinary magnetic anomaly without any of the rest,
        not 100%, but it doesn't look like chance on a sample this small either.
      </div>
    </div>
  </div>
  <div class="sticky yellow t5" style="flex:0 0 15%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">day 0052, zone EM-01: the handheld scanner gave distorted air-composition readings for 40 seconds, then recovered on its own. writing it honestly: "it fixed itself and I don't know why" — a poor formulation for an engineering log. I don't have a better one yet.</div>
</div>

<div class="r-soca">Local magnetic anomalies are instrumentally confirmed and statistically significant. A link to the ecosystem's bioelectrical activity is probable, but there is insufficient data to establish causation in either direction.</div>

<div class="r-note" style="transform:rotate(-0.6deg);margin-top:10px;">
  SOCA is interrupting again!!!! And again she's right, but read between the lines: even she doesn't say "coincidence, end of story", she OBVIOOOUSLY means "insufficient data". and that isn't the same as "there's nothing here", got it, got it, yes???<br/><br/>
  I plan to return to EM-02 with more sensitive equipment as soon as SOCA finishes calibrating the spare magnetometer. If it works out - I'll find out whether the zone reacts to me specifically or to any foreign body at all.
</div>

<hr class="r-div"/>


<div class="r-soca">A reminder, since this has gone unrecorded in the log for a third week: item 6 of the repair list (sealing the cargo bay seam) has not moved since DAY 0081. Item 9 has not been started. I am not hurrying you, I am logging it.</div>

<div class="r-note" style="transform:rotate(-0.5deg);margin-top:10px;">
  fair enough. yesterday I was going to deal with the seam - on the way to the bay I noticed the moss by the ramp was glowing brighter than usual, and spent the next four hours sitting with it. The seam is still there, it's not going anywhere. <span class="ghost">Neither is the moss, to be fair.</span>
</div>

<!-- ------------------------------------------- -->
<!-- 14. THE SOUNDS OF KAELA -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">14</div>
  <div class="r-sep" style="flex:1;margin:0;">THE SOUNDS OF KAELA</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0104 // 06 JAN 1974 // RECORDINGS FROM DAY 0028–0071 ATTACHED SEPARATELY</div>

<p class="r-text">Spent a long time thinking about how to even write this - the topic is strange in itself. How do you describe in words something that's almost absent? I'll start with what actually makes sound here, seeing as there are no animals.</p>

<table class="r-table" style="margin-top:10px;">
  <tr><th>SOURCE</th><th>HOW IT SOUNDS</th><th>STATUS</th></tr>
  <tr><td class="hi">wind</td><td style="color:var(--dimmer)">quieter than Earth wind at the same speed, the foliage damps the upper frequencies - what's left is a low hum you feel in your chest more than hear</td><td class="b">explainable</td></tr>
  <tr><td class="hi">water</td><td style="color:var(--dimmer)">burbling, splashing - just like on Earth, the only "normal" sound here</td><td style="color:var(--dimmer)">normal</td></tr>
  <tr><td class="hi">creaking</td><td style="color:var(--dimmer)">low, drawn out, direction shifts - 4 recordings in a month</td><td class="y">unexplained</td></tr>
  <tr style="background:rgba(255,34,68,0.04)"><td class="hi">fungi</td><td style="color:var(--dimmer)">a rare dry click, once coincided in time with a cap changing shape</td><td class="r">coincidence?</td></tr>
</table>

<div class="sticky yellow t2 sticky-right" style="max-width:190px;position:relative;z-index:5;">recorded the creaking about 4 times. Not wind, not the PANDEMONIUM's machinery. Working hypothesis - crystal growth in the rock (section 6), microfractures.</div>

<div class="r-note" style="transform:rotate(-0.7deg);margin-top:14px;">
  And now - the silence. Not in the sense of "silence = absence of sound", but in that here it doesn't feel like an absence. I deliberately tried recording it on the dictaphone - in case it's just tiredness and unfamiliar surroundings.
  Listened back, and on the recording it sounds even more wrong than it did in the moment - as if the microphone doesn't know how to lie to itself the way I do.
</div>

<div class="g3" style="margin-top:12px;">
  <div class="r-stat"><div class="r-stat-lbl">BACKGROUND NOISE vs NORM</div><div class="r-stat-val" style="color:var(--red);">−65<span class="r-stat-unit">%</span></div></div>
  <div class="r-stat"><div class="r-stat-lbl">CREAK RECORDINGS</div><div class="r-stat-val">4</div></div>
  <div class="r-stat"><div class="r-stat-lbl">SOURCE OF THE CREAK</div><div class="r-stat-val" style="color:var(--yellow);font-size:24px;">?</div></div>
</div>

<div class="r-soca">Background noise density is statistically below the norm, but within physically explainable limits: high air humidity and the structure of the plant cover are sufficient to account for the observed attenuation.</div>

<p class="r-text" style="margin-top:10px;">A reasonable explanation, which I sort of believe. Out of interest, not for science: sometimes I deliberately stay quiet longer and just listen, not because I expect to hear anything. The silence here is somehow <span class="corrupt">dense</span>. haven't found a better word yet.</p>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 15. INTERACTION WITH THE PLANET (PERSONAL EXPERIENCE) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">15</div>
  <div class="r-sep" style="flex:1;margin:0;">INTERACTION WITH THE PLANET // PERSONAL EXPERIENCE</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0109 // 11 JAN 1974 // OBSERVATIONS DAY 0040–0083, THE LEAST SCIENTIFIC SECTION OF THEM ALL</div>

<p class="r-text">Let me say it plainly up front: precise wording from here on doesn't make the content any less subjective. I've come to feel that Kaela chooses who to interact with and how. Not with me in any special sense - with any presence that ends up here, she reacts selectively rather than uniformly.</p>

<div style="display:flex;gap:18px;align-items:center;margin-top:12px;">
  <div class="sticky purple t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">How did I work that out? I didn't, I just felt it. I know that methodologically this is the worst possible answer - I'm writing it down precisely because it's the worst. I don't want to rationalise it after the fact, and that's that.</div>
  <div style="flex:1;min-width:0;">
    <div class="hbox r" style="margin:0 0 12px;">
      <strong style="color:var(--red)">places that "don't let you in".</strong> 6 occasions in 3 months - I approach an ordinary-looking patch and turn back before reaching it, for no visible reason, just "not here". once I went through deliberately - nothing physical happened, but the sense of not belonging only got stronger.
    </div>
    <div class="hbox b" style="margin:0;">
      <strong style="color:var(--b)">And the reverse.</strong> Rarer, usually near the springs, the opposite feeling - it pulls, and pulls specifically, not "it's pretty here", but as if the place wants me to be exactly here and exactly now.
    </div>
  </div>
</div>

<p class="r-text" style="margin-top:14px;">cross-referenced the points with the EM anomalies (section 13) and SOCA's bio-activity zones. The overlap is partial, not complete - some of the "calling" places show no instrument deviation at all, and I pass through some EM zones feeling nothing. Which means it doesn't reduce to what the instruments can already measure.</p>

<div class="r-data" style="margin:10px 0;">
  <div class="r-row"><span class="r-key">"NOT-LETTING-YOU-IN" PLACES</span><span class="r-val r">6 in 3 months</span></div>
  <div class="r-row"><span class="r-key">FALSE POSITIVES</span><span class="r-val hi">0 (never once "just imagined it")</span></div>
  <div class="r-row"><span class="r-key">OVERLAP WITH EM/BIO ZONES</span><span class="r-val y">partial, not complete</span></div>
</div>

<div class="r-soca">The alternative hypothesis must be considered equally: prolonged isolation and an unfamiliar environment encourage the formation of false perceptual patterns. At the current volume of observation this explanation cannot be ruled out.</div>

<div class="r-note" style="transform:rotate(0.5deg);margin-top:10px;">
  Reasonable, and I'm obliged to state it alongside what I'd like to be true. But if it's just my brain finding patterns in noise - it's remarkably consistent in its false positives: 6 times, and not once "I imagined it and everything was fine".
  Writing it as it is, not as a proven phenomenon, but as something I observed in myself consistently enough that I have no right to ignore it.
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 16. GEOLOGY: ARE THERE VOLCANOES, TECTONICS? -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">16</div>
  <div class="r-sep" style="flex:1;margin:0;">GEOLOGY // ARE THERE VOLCANOES, TECTONICS?</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0114 // 16 JAN 1974 // FIELD OBSERVATIONS DAY 0060–0081</div>

<div style="display:flex;gap:18px;align-items:flex-start;">
  <p class="r-text" style="flex:1;min-width:0;margin:0;">Briefly: haven't seen a single active volcano - across a survey radius of 60–70 km, no cones, no lava fields, no fresh deposits. That doesn't mean there are none at all, I've simply covered a negligible percentage of the surface.<br/><br/>
  But there is definitely tectonics somewhere down there - just slow or deep, or maybe both at once. <strong style="color:var(--g)">The hot springs</strong> are the main argument: the water is consistently warm, and the heat comes from somewhere. From the gradient through sample composition SOCA put the heat source at a depth of no more than a few km.</p>
  <div class="sticky yellow t2" style="flex:0 0 20%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;align-self:flex-start;">The cracks in the rocks (section 5) - SOCA said a natural process with that kind of regularity is statistically improbable. Now I think: maybe it isn't an anomaly separate from tectonics, but simply another TYPE of it - slow, even, without ragged faults.</div>
</div>

<table class="r-table" style="margin-top:10px;">
  <tr><th>INDICATOR</th><th>VALUE</th><th>NOTE</th></tr>
  <tr><td class="hi">microtremors in 3 weeks</td><td class="y">2</td><td style="color:var(--dimmer)">the PANDEMONIUM's accelerometers, not a seismograph</td></tr>
  <tr><td class="hi">magnitude (SOCA's estimate)</td><td style="color:var(--dimmer)">~1.5–2.0</td><td style="color:var(--dimmer)">on Earth nobody usually notices this</td></tr>
  <tr style="background:rgba(0,255,136,0.03)"><td class="hi">depth of heat source</td><td class="b">≤ a few km</td><td style="color:var(--dimmer)">from the temperature gradient of the samples</td></tr>
</table>

<div class="hbox" style="margin:14px 0;">
  <strong style="color:var(--g)">Conclusion.</strong> The planet is tectonically alive, but in a very calm, slowed-down mode - no active faults, no subduction, no volcanism I could observe directly. Geologically Kaela behaves much like its flora: slowly, purposefully, in no hurry at all.
  <div class="r-soca" style="margin:8px 0 0;">"In no hurry at all" is not a geological term.</div>
</div>

<div style="display:flex;align-items:baseline;gap:10px;margin:24px 0 6px;">
  <span class="skew" style="font-family:'VT323',monospace;font-size:18px;">ADDENDUM</span>
  <span style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;">// LAYERS, AGE, CAVES // PD-04 DAY 0121 // 23 JAN 1974</span>
</div>

<p class="r-text">When I wrote the first version of this section I stuck to volcanoes and seismics - but more has piled up, and leaving it out wouldn't be honest. The geology here turned out more interesting than I thought in the first month.</p>

<div class="sticky yellow t3 sticky-left" style="max-width:170px;">day 0067: a 40 m cliff, part of the shore - the water undercut the slope and exposed a section almost its full height. Stood there twenty minutes just looking, before I remembered I'm supposed to photograph it, not admire it, yeaaah...</div>

<p class="r-text">Counted <span class="hi">14</span> distinct layers, from 20 cm to almost 4 m thick. The colour alternates: dark grey, a band with a lilac cast (I suspect the same mineral as in the fruit and the sand - it looks similar, haven't checked the composition), grey again, lighter. In three layers - inclusions of crystals from the same family (section 6), but larger, 3–4 cm across.<br/><br/>
From photographs of the section (the spectrometer isn't portable, can't test on site) SOCA suggested a sedimentary origin - the rock built up gradually, probably underwater, layer by layer, rather than all at once as in an eruption. It indirectly confirms what I already suspected: on Kaela the slow processes win out over the catastrophic ones.</p>

<div class="schema" style="margin:16px 0 16px 200px;">
  <div class="schema-title">// ATTEMPT TO ESTIMATE THE SECTION'S AGE // ROUGH, INDIRECT</div>
  <div class="g3">
    <div style="text-align:center;padding:8px;">
      <div style="font-family:'VT323',monospace;font-size:26px;color:var(--g);">14</div>
      <div style="font-size:9px;color:var(--dimmer);">layers in the section</div>
    </div>
    <div style="text-align:center;padding:8px;">
      <div style="font-family:'VT323',monospace;font-size:26px;color:var(--b);">~40m</div>
      <div style="font-size:9px;color:var(--dimmer);">total thickness of the sequence</div>
    </div>
    <div style="text-align:center;padding:8px;">
      <div style="font-family:'VT323',monospace;font-size:20px;color:var(--yellow);">0.3–2 million years</div>
      <div style="font-size:9px;color:var(--dimmer);">estimate based on Earth analogues*</div>
    </div>
  </div>
</div>

<div class="r-soca">The estimate rests on the assumption that sedimentation on Kaela proceeds at a rate comparable to Earth's. There are no direct grounds for testing that assumption. In essence this is not an estimate of age, but an estimate of "how long it would have taken on Earth" - which is not the same thing. And I hope the pilot understands that too.</div>

<p class="r-text" style="margin-top:10px;">Of course I understand!!! and I agree - writing it honestly. This isn't the planet's age, it's the age of ONE outcrop. Kaela itself is obviously older, possibly by orders of magnitude.</p>

<div style="display:flex;gap:18px;align-items:flex-start;margin-top:14px;">
  <p class="r-text" style="flex:1;">
    <strong style="color:var(--g2)">Caves.</strong> Found two, the first - in that same cliff, an entrance a metre by a metre and a half, running about 12 m deep, beyond that too narrow without gear.
    The second - I literally fell into it through the moss, my leg went into a hidden cavity. The cavity is ~3×4 m, the ceiling covered in the same glowing moss as outside, only brighter here - a guess, unconfirmed by SOCA: maybe it's the only "signal" of its own activity available to it in the dark.<br/><br/>
    In both the temperature is 3–4° below the surface and far more stable - logical for underground cavities.
  </p>
  <div class="sticky red t5" style="flex:0 0 20%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;align-self:flex-start;">In the mossy cave - growths on the walls, not crystals and not moss, some third thing: the texture of a mineral, but slightly elastic to the touch. Didn't take a sample - I don't understand what it is, and I don't want to risk it after the fruit business (section 10, yes, I remember promising not to do that again).</div>
</div>
<div class="clearfix"></div>

<div class="r-note" style="transform:rotate(-0.5deg);margin-top:12px;">
  A link to section 12: if the soil recovers abnormally fast, the stones move, the plants reach toward you - what if the planet's geology isn't a system separate from that "living" reaction, but part of it?
  The slowness and stability of the sedimentary rock could explain why the conditions for whatever this is came together here at all, speculation. Writing it down so I don't lose the thought, not because I'm ready to defend it to anyone except myself at 3 in the morning with a mug of something resembling coffee.
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 17. SAND AND DESERTS (THERE ARE ALMOST NONE) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">17</div>
  <div class="r-sep" style="flex:1;margin:0;">SAND AND DESERTS // THERE ARE ALMOST NONE</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0126 // 28 JAN 1974 // FIELD TRIP DAY 0075</div>

<div style="display:flex;gap:18px;align-items:flex-start;">
  <p class="r-text" style="flex:1;">
    There is sand, but not much: one genuinely sandy stretch in all this time, the shore of the inland sea, ~200–300 m along the edge, ten metres inland at most, then straight into moss.
    The colour is greyish-violet, with the same fine metallic inclusions as in the fruit skin (section 10) and the crystals (section 6) - haven't tested the composition directly, only by eye.<br/><br/>
    deserts in the usual sense - <span class="mark-r">none whatsoever</span>. logical: the climate is stable (section 3), the water doesn't stagnate (section 4), the vegetation colonises even bare rock.
  </p>
  <div style="flex:0 0 28%;min-width:0;">
    <div style="transform:rotate(-1.4deg);">
      <div style="position:relative;width:100%;aspect-ratio:4/3;border:1px solid var(--border);background:#050806;overflow:hidden;">
        <!-- corrupted data bands -->
        <div style="position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,255,136,0.05) 0px,rgba(0,255,136,0.05) 1px,transparent 1px,transparent 4px);"></div>
        <div style="position:absolute;top:14%;left:-6%;width:112%;height:9%;background:rgba(255,34,68,0.18);transform:skewX(-8deg);"></div>
        <div style="position:absolute;top:31%;left:-4%;width:108%;height:5%;background:rgba(0,200,255,0.16);transform:skewX(5deg);"></div>
        <div style="position:absolute;top:52%;left:-8%;width:116%;height:12%;background:rgba(0,255,136,0.10);transform:skewX(-3deg);"></div>
        <div style="position:absolute;top:71%;left:-3%;width:106%;height:4%;background:rgba(255,200,0,0.20);transform:skewX(9deg);"></div>
        <div style="position:absolute;top:84%;left:-6%;width:112%;height:7%;background:rgba(255,34,68,0.12);transform:skewX(-6deg);"></div>
        <!-- garbage characters -->
        <div style="position:absolute;inset:0;font-family:'VT323',monospace;font-size:13px;line-height:1.15;color:rgba(0,255,136,0.28);letter-spacing:0.06em;padding:6px;overflow:hidden;word-break:break-all;">
          ▓▒░█▓▒░ ██▒▓░█ ▒░▓█▒▓ ░█▓▒░█ ▓▒░██▓ ▒░█▓▒░ █▓▒░██ ▓▒░█▓▒ ░██▓▒░ █▓▒░█▓ ▒░██▓▒ ░█▓▒░█ ▓▒░██▓ ▒░█▓▒░ █▓▒░██ ▓▒░█▓▒ ░██▓▒░ █▓▒░█▓ ▒░██▓▒ ░█▓▒░█ ▓▒░██▓ ▒░█▓▒░ █▓▒░██ ▓▒░█▓▒ ░██▓▒░ █▓▒░█▓ ▒░██▓▒ ░█▓▒░█ ▓▒░██▓ ▒░█▓▒░
        </div>
        <!-- error message -->
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center;padding:10px;">
          <div class="blink" style="font-family:'VT323',monospace;font-size:26px;color:var(--red);text-shadow:2px 0 rgba(0,200,255,0.6),-2px 0 rgba(255,34,68,0.6);letter-spacing:0.12em;">IMG READ ERR</div>
          <div style="font-family:'VT323',monospace;font-size:15px;color:rgba(255,200,0,0.75);">0x3F // DATA CORRUPTED</div>
          <div class="corrupt" style="font-size:9px;color:var(--dimmer);word-break:break-all;">картинк/kaela/sand_beach.jpg</div>
        </div>
      </div>
      <div style="font-size:9px;color:var(--dimmer);margin-top:4px;text-align:center;letter-spacing:0.08em;">The only sandy stretch found // shore of the inland sea <span style="color:var(--red)">// file unreadable</span></div>
    </div>
  </div>
</div>

<div style="display:flex;gap:20px;align-items:center;justify-content:center;margin-top:10px;">
  <div class="r-data" style="flex:0 1 52%;min-width:0;margin:0;">
    <div class="r-row"><span class="r-key">BEACH AREA</span><span class="r-val">~200-300 m along the shore</span></div>
    <div class="r-row"><span class="r-key">DEPTH INLAND</span><span class="r-val y">≤10 m</span></div>
    <div class="r-row"><span class="r-key">STRETCHES FOUND IN 75 DAYS</span><span class="r-val r">1</span></div>
  </div>
  <div class="sticky green t4" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">The near-exception - the rocky fields by the fissures (section 16), bare rock with no soil. I marked two such fields early on, and both seem to have shrunk slightly over the months - the mosses are advancing. Need to go back with a tape measure, for now it's only an impression.</div>
</div>

<div class="clearfix"></div>
<div class="hbox y" style="margin-top:14px;">Kaela physically can't afford a desert: the climate is too stable, the ecosystem too pushy (in a good way). Even bare rock here isn't an endpoint, just a patch the moss hasn't reached yet.</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 18. FLOWERS (FAMILIAR TO US AND NOT) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">18</div>
  <div class="r-sep" style="flex:1;margin:0;">FLOWERS // FAMILIAR TO US AND NOT</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0140 // 11 FEB 1974</div>

<div style="display:flex;gap:18px;align-items:flex-start;margin-top:10px;">
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0 0 12px;">put this section off longest of all - not because there are few flowers, but because every time I decided I'd found all the main species, a new one popped up. I'll start with what surprised me most in the first month: there are flowers here that look <span class="hi">almost like the Earth ones</span> from the archive. Not identical, but recognisable.</p>
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g2)">species 1 - the ordinary one (nominally).</strong> In clusters on open clearings, stem 15–20 cm, five petals, pale blue with a white centre - a metallic glint along the edge at certain light angles gives away its non-Earth origin.
      Faint scent, something between jasmine and wet stone.
    </p>
  </div>
  <div class="sticky red t4" style="flex:0 0 20%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;align-self:center;">There are no pollinators on the planet (section 11), so why would a flower be beautiful and fragrant if there's nobody to appreciate it? Maybe the pollinators are microscopic, maybe the shape does something else - gathers light, regulates temperature? I don't know, I'm writing down the question, not the answer.</div>
</div>

<div class="r-soca">The presence of developed petals and aromatic compounds in a plant with no recorded pollinating organisms is statistically atypical for the convergent evolution of such structures.</div>

<div style="display:flex;align-items:baseline;gap:10px;margin:20px 0 6px;">
  <span class="skew" style="font-family:'VT323',monospace;font-size:20px;">SPECIES 2</span>
  <span style="font-size:10px;color:var(--dimmer);letter-spacing:0.15em;">// "GLASS LILY" // DAY 0119 // by the hot springs</span>
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
          <text x="75" y="145" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(0,180,60,0.35)">drew it from memory, the petals are more transparent than this came out</text>
        </svg>
        <div class="r-sketch-cap" style="margin-top:22px;">glass lily // GXN-44-Kaela, spring zone</div>
      </div>
  </div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      Grows only in the warm, humid zone around the springs (section 4). Six elongated petals, symmetrically opened outward - in shape, yes, it resembles a lily.
      But <span class="mark">the petals are translucent</span>, almost frosted glass - you can see the blurred outlines of whatever's behind the flower through them. Nearly colourless at the base, pale blue toward the tips.
      Not brittle to the touch - slightly elastic, cool, smooth.<br/><br/>
      The centre - not stamens in the usual sense, but a cluster of tiny crystalline structures (like those in the rock, section 6, and in the cave, section 16), the size of a grain of rice, shimmering faintly in shade.
      Blooms for 3–4 days, then the petals cloud over, turn white and fall.
    </p>
  </div>
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/glass_lily.jpg","glass lily, close-up by the spring - photo in poor light, I'll reshoot it","","center","tilt1")}</div>
</div>

<p class="r-text" style="margin-top:10px;">Spectral analysis with the handheld scanner - high silicon content together with organic fibres, something like natural bioglass, if such a term even exists - possibly I've just invented it.</p>

<div class="g2" style="margin-top:16px;">
  <div style="flex:1;">
    <p class="r-text" style="margin:0;"><strong style="color:var(--g2)">species 3 - parasite bells.</strong> They wind around the semi-stone trees, dark violet, in clusters. Whether they parasitise or just use them for support - didn't check, didn't want to do harm without reason.
    They close during the day and open toward sunset (section 9) - a clear daily rhythm on a planet with no pronounced day-night cycle.</p>
  </div>
  <div style="flex:1;">
    <p class="r-text" style="margin:0;"><strong style="color:var(--yellow)">species 4 - yellow clusters on bell moss.</strong> Mentioned it in passing already (section 10). haven't tasted it - unlike the fruit, here I drew my conclusions. Visually the most "ordinary" of the lot - almost indistinguishable from the buttercups in the archive, slightly larger and richer in colour.</p>
  </div>
</div>

<table class="r-table" style="margin-top:14px;">
  <tr><th>SPECIES</th><th>WHERE IT GROWS</th><th>DISTINCTIVE FEATURE</th></tr>
  <tr><td class="hi">"the ordinary one"</td><td style="color:var(--dimmer)">open clearings</td><td class="b">metallic glint along the edge</td></tr>
  <tr style="background:rgba(0,200,255,0.04)"><td class="hi">glass lily</td><td style="color:var(--dimmer)">by the hot springs</td><td class="y">translucent petals, lives 3-4 days</td></tr>
  <tr><td class="hi">parasite bells</td><td style="color:var(--dimmer)">on semi-stone trees</td><td class="hi">daily rhythm, close during the day</td></tr>
  <tr style="background:rgba(255,200,0,0.03)"><td class="hi">yellow clusters</td><td style="color:var(--dimmer)">"bell moss"</td><td style="color:var(--dimmer)">almost Earth-like in appearance</td></tr>
</table>

<div style="display:flex;gap:20px;align-items:center;margin-top:12px;">
  <div class="r-note" style="flex:1;min-width:0;margin:0;">If I had to pick one flower from Kaela and describe it with the word "beautiful" - with no caveats and no questions about evolution - I'd pick the glass lily. The others are interesting, strange, worth studying, but this one is simply beautiful, and sometimes that's enough, even in a report you're supposed to keep scientific.</div>
  <div class="flora-photo" style="flex:0 0 25%;min-width:0;">${ph("картинк/kaela/paint_flowers.jpg","three species in one photo, they happened to be growing together - lucky","","center","tilt3")}</div>
</div>
<div class="clearfix"></div>

<div class="hbox" style="margin-top:14px;">
  <strong style="color:var(--g)">Why they exist if there are no pollinators</strong> - still don't know. SOCA threw out hypotheses (thermoregulation, attracting microscopic life forms we haven't found, an evolutionary «leftover» from earlier planetary conditions) - all plausible, none confirmed. I just walk around photographing what I find beautiful, and let the explanation be found by whoever comes here after me with better equipment than my handheld scanner.
</div>


<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div class="sticky blue t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">repairs: 12 of 14 items closed, what's left is aligning the stabilisers and sealing the seam. Machined the part for the stabilisers yesterday, got it right on the third attempt.</div>
  <div class="r-soca" style="flex:1;min-width:0;margin:0;">Repair progress over the last month exceeds that of the previous three. I note this without comment on the reasons. The reason is known to me: you have realised that sooner or later you will have to decide whether you are staying or not.</div>
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 19. KOKO'S CONDITION (PERSONAL SECTION, NOT ABOUT THE PLANET) -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">19</div>
  <div class="r-sep" style="flex:1;margin:0;">KOKO'S CONDITION // PERSONAL SECTION, NOT ABOUT THE PLANET</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0151 // 22 FEB 1974</div>

<p class="r-text">SOCA insisted I write this. Word for word: <span class="hi">"your section on fungi is longer than the one on your own physical condition across five months of the mission. That is no longer prioritising, that is avoidance",</span> she never picks anything gentler, I'm used to it.<br/><br/>
Fine, writing it. I'm 16 (turned it this month, if SOCA counted the calendar right - I lost track myself long before my birthday). I've been flying for years now, and the routine was much the same: work until I drop, then sleep however long it works out, then work again, on Kaela that hasn't changed, only the backdrop has.</p>

<div style="display:flex;gap:20px;align-items:center;justify-content:center;margin-top:12px;">
  <div class="r-data" style="flex:0 1 52%;min-width:0;margin:0;">
    <div class="r-row"><span class="r-key">AVERAGE SLEEP (40 DAYS)</span><span class="r-val y">4h 20min</span></div>
    <div class="r-row"><span class="r-key">MAX. TIME AWAKE IN A ROW</span><span class="r-val r">61 hours</span></div>
    <div class="r-row"><span class="r-key">MEALS MISSED (MONTH)</span><span class="r-val r">13</span></div>
    <div class="r-row"><span class="r-key">WEIGHT CHANGE SINCE LANDING</span><span class="r-val y">−3.4 kg</span></div>
  </div>
  <div class="sticky yellow t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">Sleep ranges from an hour and a half (after finding the glowing sample, section 9, couldn't fall asleep until I understood what was going on with it - still haven't, gave up waiting) to almost 11 hours, when I physically collapsed after 61 hours awake mapping the plateau.</div>
</div>

<div class="r-soca">This behavioural pattern was recorded before the landing on Kaela, in the onboard logs of the pilot's previous two missions. The planet is not the cause of the pattern. The planet is the context in which the pattern continues unchanged.</div>

<p class="r-text" style="margin-top:10px;">SOCA is right, and I have nothing to counter with - except that it is quite productive: I finished mapping the plateau, classified more fungal species than I'd planned, found the glass lily precisely because that evening I didn't stop at "it's late, I'm tired", that's not a justification, just how I function, writing it honestly, unlikely to change it.</p>

<!--<div class="r-smaily">okay, I don't usually get into the personal sections, but since this one is directly about me as a medic: 13 missed meals in a month isn't «that's how I work», it's «my pilot forgets he has a body». I won't lecture (SOCA has already lectured for both of us), I'll just leave a reminder somewhere visible - because I care. and because I decided to :)</div> -->

<div style="display:flex;gap:18px;align-items:flex-start;margin-top:14px;">
  <p class="r-text" style="flex:1;min-width:0;margin:0;">
    <strong style="color:var(--g2)">Concentration and hyperfocus.</strong> The thing I notice in myself most often, and the hardest to describe precisely. When something grips me - and on Kaela almost everything does - I lose my sense of time completely, not metaphorically.
    Once I sat over a crystal sample (section 6) for seven straight hours, sketching it from different angles, and only came out of it because SOCA's suit-check timer went off, not because I felt tired. In the moment I don't get tired, the tiredness comes afterwards, all at once, as if it had been piling up the whole time.
  </p>
  <div class="sticky blue t5" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;align-self:center;">Not a new pattern, I've known it for years, but before there were others on board who could interrupt, pull me out, and here - only SOCA and SMAILY, and they both do it their own way, but it isn't the same as a live person who claps you on the shoulder and yells "GET TO BED RIGHT NOW!!!!"</div>
</div>

<p class="r-text" style="margin-top:10px;">
  <strong style="color:var(--yellow)">Emotional baseline.</strong> I won't pretend it's a flat line. There are days (usually after a big find - the parasite bells, working through the rock section) when there's so much energy that I work around the clock with no sense of strain at all - subjectively wonderful, productive, clear. From previous missions I know: what follows is the crash - a day or two when everything is harder than usual, concentration falls apart, I get angry at small things (mostly at my own errors in calculations). Only one thing helps - just getting through it without forcing anything.
  SOCA calls it "a cyclical productivity model with predictable phases of depletion", and mine is simpler - "just how I'm built". Well, essentially we're both right, just with different vocabularies.
</p>

<div class="r-note" style="transform:rotate(-0.6deg);margin-top:12px;">
  For the record, since this is an official report section and not a diary: I don't consider this a problem that needs solving. I worked this way for years before Kaela and will after, if there is an "after". The planet has nothing to do with it - it simply threw enough interesting things at me for the pattern to unfold at full strength!!
</div>

<hr class="r-div"/>

<!-- ------------------------------------------- -->
<!-- 20. TIME ON KAELA: THE FEELING OF IT -->
<!-- ------------------------------------------- -->

<div style="display:flex;align-items:center;gap:10px;margin:18px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">20</div>
  <div class="r-sep" style="flex:1;margin:0;">TIME ON KAELA // THE FEELING OF IT</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0165 // 08 MAR 1974</div>

<p class="r-text">Not about how time is formally structured - that's already in the calendar section, with the numbers and the 59-hour cycle. This section is about what goes on in my head when I try to actually use that time.<br/><br/>
<strong style="color:var(--g)">I've lost count of the days,</strong> and that isn't even metaphorical. SOCA keeps a day counter, I look at it in the reports - without her I couldn't name today's day number even to the nearest week. The first three or four weeks I kept it in my head, then I simply stopped - not a decision: the counter in my head switched itself off once I realised the days here don't divide into comprehensible chunks the usual way.</p>

<div class="g2" style="margin-top:10px;">
  <div class="hbox b" style="margin:0;">
    59 hours isn't a "day" in the sense the body recognises a day. Too long a stretch to be one piece, but not two ordinary days in a row either - somewhere in between, for which I apparently just have no internal sense.
    I experience time as one long undivided stream with separate events in it (found the lily, finished the fruit, SOCA swore at a calculation) rather than as numbered days.
  </div>
  <div class="hbox y" style="margin:0;">
    There's no night as such (the pseudo-night section, 62% of the daytime norm). On board, night usually worked as the boundary between "was" and "will be" - a sort of perceptual reset. Here that boundary physically doesn't exist, and my brain apparently hasn't invented a replacement for it... Thouuugh honestly, even on my own ship I never really separated days from nights. This is space, not Earth, I've literally lived like this my whole life!
  </div>
</div>

<div class="r-soca">The pilot's circadian indicators show a gradual shift toward an irregular cycle with an average period of 31–34 hours between sleep phases. Full synchronisation with the 59-hour planetary cycle has not been recorded.</div>

<div class="g3" style="margin-top:10px;">
  <div class="r-stat"><div class="r-stat-lbl">PLANETARY CYCLE</div><div class="r-stat-val">59<span class="r-stat-unit">h</span></div></div>
  <div class="r-stat"><div class="r-stat-lbl">AVERAGE SLEEP CYCLE</div><div class="r-stat-val" style="color:var(--yellow)">31–34<span class="r-stat-unit">h</span></div></div>
  <div class="r-stat"><div class="r-stat-lbl">SYNCHRONISATION</div><div class="r-stat-val" style="color:var(--red);font-size:24px;">incomplete</div></div>
</div>

<p class="r-text" style="margin-top:10px;">Meaning even my body didn't fully adapt to her rhythm - it found something of its own, in between. SOCA, as usual, gets clever and calls it "incomplete entrainment adaptation", and I, as usual, can put it more simply: "my body does what it wants, and I just live alongside the process and write down the results".<br/><br/>
But one thing I've definitely noticed: my body got used to the <span class="hi">length</span> of the cycle itself, without ever syncing to its phase. The first weeks, 59 hours felt endless - I kept catching myself thinking "wait, is it still the same day?", and now I don't. The cycle feels like an ordinary unit of time rather than an anomaly I have to keep converting. That didn't come from understanding the number, it came on its own, through the sheer count of cycles lived.</p>

<div class="r-note" style="transform:rotate(0.5deg);margin-top:10px;">
  I thought I'd either adapt completely or not adapt at all. What came out is something between the two, which on the whole suits me fine. As of today - day 165, if SOCA is to be believed. I believe her: the alternative is believing nothing at all, and that's not an option if you want to keep working.
</div>


<hr class="r-div"/>

<div style="display:flex;gap:20px;align-items:center;margin:16px 0;">
  <div class="hbox y" style="flex:1;min-width:0;margin:0;">
    <strong style="color:var(--yellow)">About the ship, since I'm counting time anyway.</strong> Of the fourteen items on SOCA's list, thirteen are closed.
    One is left - aligning the stabilisers, the very thing that dropped me here in the first place. That's a couple of days' work, the assemblies are already built, the part was machined back in February.<br/><br/>
    Meaning it's <span class="mark">almost ready</span>. I'm writing this and eyeing the line suspiciously myself.
  </div>
  <div class="sticky green t4" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">A couple of days' work, I've known that since the end of February, and for some reason I still haven't started.</div>
</div>


<!-- ------------------------------------------- -->
<!-- CLOSING THE LOG // DAY 0251 -->
<!-- ------------------------------------------- -->

<div style="position:relative;margin:26px 0 10px;padding:22px 26px;border:1px solid rgba(0,255,136,0.35);background:linear-gradient(180deg,rgba(0,255,136,0.05),rgba(0,0,0,0.35));box-shadow:0 0 26px rgba(0,255,136,0.10) inset;">
  <div style="position:absolute;top:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,var(--g),var(--b),var(--yellow),var(--red),var(--g));opacity:0.7;"></div>
  <div style="position:absolute;top:6px;left:8px;font-family:'VT323',monospace;font-size:12px;color:rgba(0,255,136,0.45);">┌</div>
  <div style="position:absolute;bottom:6px;right:8px;font-family:'VT323',monospace;font-size:12px;color:rgba(0,255,136,0.45);">┘</div>

  <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:6px;">
    <span class="rainbow" style="font-family:'VT323',monospace;font-size:40px;letter-spacing:0.06em;">CLOSING THE LOG</span>
    <span class="blink" style="font-family:'VT323',monospace;font-size:40px;color:var(--red);">?</span>
  </div>
  <div style="font-size:9px;color:var(--b);letter-spacing:0.14em;margin-bottom:14px;">PD-04 // DAY 0251 // 02 JUN 1974 // ENGINE ASSEMBLED</div>

  <div style="display:flex;gap:22px;align-items:flex-start;flex-wrap:wrap;">
    <p class="r-text" style="flex:1;min-width:260px;margin:0;">
      The engine is assembled, and it seems to be <span class="hi">holding</span>. Meaning technically I could leave tomorrow...<br/><br/>
      Technically.<br/><br/>
      Third day sitting here and I can't finish this line properly, <span class="corrupt">every time I get ready to go, I find something else</span> - yesterday a new species of moss, today a crack in the rock that wasn't there before, or was, and I never noticed it.<br/><br/>
      <span class="mark">I rested here.</span> It's funny writing that in a report about a crash landing, but it's true. So I'm not setting a departure date, let the log just <span class="ul">not end</span> for now.
    </p>
    <div class="sticky green t2" style="flex:0 0 22%;min-width:170px;max-width:none;box-sizing:border-box;font-size:11px;">The engine has actually been ready since the end of May. SOCA knows, of course, she knows everything - but she chose not to nag me about it. Thanks for that much, at least?</div>
  </div>

  <div class="r-soca" style="margin:16px 0 0;">The engine has been functional since DAY 0243, yet the pilot has not filed a launch request for nine days, I am not asking why. The reason is obvious and requires no clarification.</div>
</div>

<!-- ------------------------------------------- -->
<!-- FINAL ENTRY // DAY 0270 -->
<!-- ------------------------------------------- -->

<div style="position:relative;margin:26px 0 6px;padding:24px 26px;border:1px solid rgba(255,34,68,0.4);background:linear-gradient(180deg,rgba(255,34,68,0.06),rgba(0,0,0,0.4));">
  <div style="position:absolute;top:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,var(--red),var(--yellow),var(--red));opacity:0.75;"></div>

  <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:6px;">
    <span class="skew" style="font-family:'VT323',monospace;font-size:44px;color:var(--red);text-shadow:0 0 22px rgba(255,34,68,0.45);letter-spacing:0.08em;">LEAVING.</span>
  </div>
  <div style="font-size:9px;color:var(--yellow);letter-spacing:0.14em;margin-bottom:16px;">PD-04 // DAY 0270 // 21 JUN 1974 // FINAL ENTRY FROM KAELA'S ORBIT</div>

  <div style="display:flex;gap:24px;align-items:center;flex-wrap:wrap;">
    <div class="final-photo" style="flex:0 0 38%;min-width:240px;">${ph("картинк/kaela/koko_orbit_selfie.png","shot from orbit already // Kaela over my shoulder // held the camera one-handed, the other on the rail","","center","tilt5")}</div>
    <p class="r-text" style="flex:1;min-width:260px;margin:0;">
      That's it. reached orbit this morning, ship time.<br/><br/>
      took a photo - <span class="hi">deliberately with her in frame</span>. SOCA said going outside for the sake of a photograph was irrational. As if anyone was going to listen to her, heh-heh.<br/><br/>
      <span class="mark-y">265 days.</span> I got here by accident and nearly crashed, and I'm leaving like someone moving out of a place he lived in. It's even a bit sad, I spent 9 months here and started feeling at home :(<br/><br/>
      <span class="corrupt">whether I'll come back - I don't know,</span> and still, I'll remember this place. until next time.<br/><br/>
      <span style="color:var(--dimmer);font-size:11px;">- Koko, Pilot 01 // GXN-44-Kaela // END OF REPORT</span>
    </p>
  </div>

  <div class="r-soca" style="margin:18px 0 0;">Course plotted. Kaela will remain in the archive as GXN-44. The pilot asked that the planet's coordinates be saved somewhere separately.</div>
</div>

<div style="text-align:center;font-family:'VT323',monospace;font-size:15px;color:var(--dimmer);letter-spacing:0.35em;margin:22px 0 6px;">// END OF LOG //</div>

  `}
  ,
  {id:'anomalies',label:'// ANOMALIES',html:`
<div class="r-heading">GXN-44-Kaela // APPENDIX TO THE REPORT // the things I couldn't file anywhere</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:14px;">PD-04 // DAY 0269 // 20 JUN 1974 // COMPILED THE DAY BEFORE DEPARTURE</div>

<div style="display:flex;gap:20px;align-items:center;margin:12px 0;">
  <p class="r-text" style="flex:1;min-width:0;margin:0;">
    In the observations everything is sorted into sections: soil, water, flora, fungi. that works fine as long as the findings fit into sections.<br/><br/>
    <span class="mark">these three didn't fit.</span> I carried them around in drafts for almost a year, because every time I tried to fit them into the observations it came out either in the wrong section or in the wrong tone.
    I'm putting them into one file now, the day before launch, for a simple reason: if I don't write it down today - <span class="corrupt">I never will</span>.
  </p>
  <div class="sticky yellow t3" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">the wording here will be worse than in the observations. I know. But this isn't really a report anymore, more like scraps I needed to shove somewhere.</div>
</div>

<div class="r-soca">File created at the pilot's request, outside the structure of the main report. Three entries. None has a confirmed explanation, but I am saving them without the label "hypothesis" - because he evidently doesn't have one.</div>

<hr class="r-div"/>

<!-- ================= ANOMALY 01 ================= -->
<div style="display:flex;align-items:center;gap:10px;margin:20px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">A-01</div>
  <div class="r-sep" style="flex:1;margin:0;">THE STATUE IN THE LAKE</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0198 // 10 APR 1974 // ~34 KM SOUTHWEST OF THE LANDING SITE</div>

<div style="display:flex;gap:22px;align-items:flex-start;margin:12px 0;">
  <div class="crash-photo" style="flex:0 0 30%;min-width:0;">${ph("картинк/kaela/statue_full.png","general view // shot from the shore, can't get closer - too deep","","center","tilt2")}</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0 0 12px;">
      Was heading southwest on a new route, came out at a lake. The lake is circular, roughly <span class="hi">40 metres</span> across, and in the middle, sticking up out of the water, is <span class="HUGE" style="font-size:26px;">this</span>.<br/><br/>
      Height - estimated from the shadow and the star's angle - <span class="hi">3.3–3.5 metres</span>. Meaning about twice my height, made of stone. The silhouette is <span class="mark-r">human</span>: torso, shoulders, head, something like arms.
      The legs barely read - below the waist the form blurs and goes into the water as a shapeless mass, as if <span class="ul">they simply haven't been finished yet</span>.
    </p>
    <div class="sticky green t2" style="display:block;max-width:none;box-sizing:border-box;font-size:12px;">Stood on the shore a long time before I got the camera out.. Well, who wouldn't be stunned to see THIS???</div>
  </div>
</div>

<div class="r-data" style="margin:14px 0;">
  <div class="r-row"><span class="r-key">HEIGHT ABOVE WATER</span><span class="r-val hi">~3.3–3.5 m</span></div>
  <div class="r-row"><span class="r-key">LAKE DIAMETER</span><span class="r-val">~40 m</span></div>
  <div class="r-row"><span class="r-key">DEPTH AT THE BASE</span><span class="r-val r">&gt;14 m // never reached the bottom</span></div>
  <div class="r-row"><span class="r-key">MATERIALS</span><span class="r-val y">stone, moss, crystals, metal</span></div>
  <div class="r-row"><span class="r-key">COMPASS DEVIATION</span><span class="r-val r">~20° // marked it as EM-05</span></div>
</div>

<div style="display:flex;gap:22px;align-items:center;margin:14px 0;">
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--b)">The head.</strong> This is where it gets strange. <span class="hib">Water pours from the head</span> - bright blue, translucent, glowing in the same shade as everything else on this planet (480–520 nm, section 2).
      It falls into the lake in an unbroken stream, never running dry, where it comes from - I don't know, there's nothing above the statue.<br/><br/>
      it looks like <span class="mark">hair</span>. and I actually bothered to check from different angles - the stream <span class="hi">goes around the face</span>, it doesn't wash over it, it specifically parts around it.<br/><br/>
      The face is badly formed, like the legs: hollows instead of eyes, a hint of a mouth. But it <span class="ul">reads</span> as a face. Plants stick out of the "hair" - counted four species, three of them familiar (section 7).
    </p>
  </div>
  <div class="crash-photo" style="flex:0 0 30%;min-width:0;">${ph("картинк/kaela/statue_face.png","the head and the waterfall // the stream parts around the face, visible even in a bad shot","","center","tilt5")}</div>
</div>

<div style="display:flex;gap:20px;align-items:flex-start;margin:14px 0;">
  <div class="sticky blue t4" style="flex:0 0 20%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">Waded in chest-deep to shoot the patterns closer. Didn't go further - the bottom drops away sharply. The water is warm, like in the springs.</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      <strong style="color:var(--g2)">The body.</strong> covered in moss and crystals - the same ones I've been collecting all year. Over them, across the stone, run <span class="rainbow">blue patterns</span>: thin lines, glowing on their own, forming a repeating design I never managed to make out,<br/><br/>
      and <span class="mark-r">metal</span>. Inclusions, in places whole plates, matte grey, didn't test a fracture. The problem is that <span class="hib">I have found no metal anywhere on Kaela</span>. Not in the rock, not in the sand, not in the cliff section (section 16), not once in 265 days.
    </p>
  </div>
  <div class="crash-photo" style="flex:0 0 26%;min-width:0;">${ph("картинк/kaela/statue_patterns.png","patterns and metal inclusions // close-up, shot while chest-deep in water","","center","tilt1")}</div>
</div>

<div class="r-soca">Metal is absent from the spectra of soil, sand and rock samples across the entire mission. The presence of worked metal in an object assembled from local materials means one of two things: either the source lies outside the pilot's survey zone, or the material was produced by a process I cannot detect. I am not discarding the second, it is rather more likely.</div>

<div class="r-smaily" style="margin-top:12px;">So my pilot spent three hours standing chest-deep in an unknown body of water for the sake of photographing a pattern?? Well, broadly speaking I'm not complaining, it seems safe enough. But three hours, Koko, three.</div>

<div style="display:flex;gap:20px;align-items:center;margin:16px 0;">
  <div class="hbox y" style="flex:1;min-width:0;margin:0;">
    <strong style="color:var(--yellow)">who made this?</strong> Nobody flew in here. traces of a camp, tools, working the material - nothing. And you don't sculpt something like this by hand anyway: the materials <span class="hi">grew</span> in place, the moss and crystals aren't glued on, they're part of the stone.<br/><br/>
    That leaves the option I'm writing down: <span class="mark-r">Kaela</span> made it. Slowly, very slowly - the same way she moves stones by centimetres in a week (section 12) and lays down rock in layers over thousands of years (section 16).
    The statue looks <span class="ul">old</span>. Going by her pace - she was sculpting this for a very, very long time.
  </div>
  <div class="sticky purple t5" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">The proportions are wrong. The shoulders too narrow, the neck too long, the arms just as long, as if it was sculpted from a description rather than from life.</div>
</div>

<div class="r-note" style="transform:rotate(-0.6deg);margin-top:12px;">
  And the main question I didn't finish writing in the observations and won't finish here: <span class="corrupt">who was she sculpting?</span> Because a human silhouette on a planet with no animals is either a coincidence, or she saw something. And I'm the <span class="mark-y">only animal here</span> across the whole observation period.<br/><br/>
  <span class="ghost">The statue is older than me, checked by the moss on the shoulders - the layer is thicker than a year's growth. So no, it isn't about me, calmed myself down in nine minutes, quite the record.</span>
</div>

<hr class="r-div"/>

<!-- ================= ANOMALY 02 ================= -->
<div style="display:flex;align-items:center;gap:10px;margin:20px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">A-02</div>
  <div class="r-sep" style="flex:1;margin:0;">THE BLIND SPOT</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0157 // 28 FEB 1974 // ~6 KM NORTH OF THE LANDING SITE</div>

<div style="display:flex;gap:22px;align-items:center;margin:12px 0;">
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0 0 12px;">
      A patch about fifteen metres across. Looks ordinary: moss, a couple of shrubs, rocks. The problem is that <span class="mark-r">I don't remember it</span>.<br/><br/>
      Not "remember it poorly", but DON'T REMEMBER IT AT ALL. I step outside the boundary - and within a few minutes all that's left in my head is the sense of a place with not a single detail. Sort of like... a name that's on the tip of your tongue and won't come.
      SOCA says I've been there <span class="hi">six times</span>, but on my own I can recall two. Modules have it lucky - they see it, they store it, and they don't forget.
    </p>
    <div class="hbox b" style="margin:0;font-size:13px;">
      important: <span class="hi">the instruments work</span>. The photographs come out fine, the dictaphone records, the coordinates get logged. The only thing that breaks is what's in my head, which is why I'm writing it here and not in the observations - there's nothing to observe.
    </div>
  </div>
  <div class="crash-photo" style="flex:0 0 28%;min-width:0;">${ph("картинк/kaela/blind_spot.png","the blind spot // the shot came out ordinary, I don't recognise it","","center","tilt3")}</div>
</div>

<div class="schema" style="margin:16px 0;">
  <div class="schema-title">// EXPERIMENT // DAY 0159 // THE DICTAPHONE WAS NEVER SWITCHED OFF</div>
  <div class="g3">
    <div style="text-align:center;padding:8px;">
      <div style="font-family:'VT323',monospace;font-size:26px;color:var(--g);">6</div>
      <div style="font-size:9px;color:var(--dimmer);">entries per SOCA's logs</div>
    </div>
    <div style="text-align:center;padding:8px;">
      <div style="font-family:'VT323',monospace;font-size:26px;color:var(--yellow);">2</div>
      <div style="font-size:9px;color:var(--dimmer);">I remember myself</div>
    </div>
    <div style="text-align:center;padding:8px;">
      <div style="font-family:'VT323',monospace;font-size:26px;color:var(--red);">41 min</div>
      <div style="font-size:9px;color:var(--dimmer);">of recording I listen to like a stranger's</div>
    </div>
  </div>
</div>

<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div class="sticky red t2" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">on the recording my voice is calm, I describe the moss, the rocks, the angles in detail, I listen back - and don't remember a single word of those forty minutes.</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0;">
      The link to section 15 is obvious: there I wrote about places that "don't let you in", and this is <span class="mark">the same thing, but inverted</span>. It seems to let you in, and yet it doesn't let you keep anything.<br/><br/>
      I have two explanations, and I dislike them both. First: something is wrong with me, and it's a medical question rather than a planetary one. Second: <span class="corrupt">the place is simply built that way</span>.
      SMAILY even went and checked me over and found no abnormalities, so I'm writing the first one down honestly, but <span class="ul">I don't believe it</span>.
    </p>
  </div>
</div>

<div class="r-soca">The navigation logs record six entries into the zone and six exits. Duration from 8 to 41 minutes. Biometrics within normal limits in all six cases. The pilot verbally confirmed the zone's existence only twice. I have no mechanism that would explain selective memory loss with normal readings.</div>

<hr class="r-div"/>

<!-- ================= ANOMALY 03 ================= -->
<div style="display:flex;align-items:center;gap:10px;margin:20px 0 4px;">
  <div style="font-family:'VT323',monospace;font-size:14px;color:var(--dimmer);">A-03</div>
  <div class="r-sep" style="flex:1;margin:0;">THE SECOND BLANK</div>
</div>
<div style="font-size:9px;color:var(--b);letter-spacing:0.12em;margin-bottom:12px;">PD-04 // DAY 0261 // 12 JUN 1974 // ~11 KM EAST OF THE LANDING SITE</div>

<div style="display:flex;gap:22px;align-items:flex-start;margin:12px 0;">
  <div class="crash-photo" style="flex:0 0 28%;min-width:0;">${ph("картинк/kaela/second_form.png","the mass by the stream // no shape yet, but the patterns are already running","","center","tilt4")}</div>
  <div style="flex:1;min-width:0;">
    <p class="r-text" style="margin:0 0 12px;">
      Found this right at the end, when the engine was assembled and I was just walking around saying goodbye to places.<br/><br/>
      By the stream a mass of stone rises out of the moss, height <span class="hi">~1.2 metres</span>, no shape to it at all - just a vertical growth, slightly widening toward the top. And I would have walked straight past.<br/><br/>
      But <span class="rainbow">the same blue patterns</span> run across it, and in two places - <span class="mark-r">metal</span>. Those same matte grey inclusions that exist nowhere else on the planet except the statue in the lake.
    </p>
    <div class="sticky green t5" style="display:block;max-width:none;box-sizing:border-box;font-size:12px;">Beneath it, going down into the moss, is a small hollow filled with water, like the other one's, only small.</div>
  </div>
</div>

<div style="display:flex;gap:20px;align-items:center;margin:14px 0;">
  <div class="hbox r" style="flex:1;min-width:0;margin:0;">
    <strong style="color:var(--red)">the conclusion I don't want to draw, but will.</strong> The statue in the lake is <span class="hi">not an isolated case</span>, it's simply an unfinished piece of work, and this one is <span class="mark-r">a started one</span>.<br/><br/>
    If Kaela's pace is the same one I measured all year (stones - centimetres a week, layers - millennia), then this thing will become a statue a very long time from now, so long from now that the question of "what it'll turn into" isn't one for me.
  </div>
  <div class="sticky yellow t2" style="flex:0 0 22%;min-width:0;max-width:none;box-sizing:border-box;font-size:11px;">Measured the girth at the base and the height, drove in a marked stake. If anyone comes back here - they'll have something to compare against.</div>
</div>

<div class="r-soca">I confirm the match in materials between A-01 and A-03: the same spectral signature of metal, the same luminescent window in the patterns. I decline to estimate the probability of two such objects arising independently across the surveyed area - a sample of two does not allow it.</div>

<hr class="r-div"/>

<div class="r-note" style="transform:rotate(0.4deg);margin-top:14px;">
  That's it. three entries, zero explanations - a record for a report I spent the whole year trying to keep scientific.<br/><br/>
  But if I'm being completely honest, out of everything I found on Kaela, <span class="mark">this is what I'm taking with me</span>. Not the atmospheric data and not the calendar, but this thought: she is <span class="ul">making</span> something. slowly, clumsily, by unknown rules - but making it.<br/><br/>
  <span class="corrupt">and she is still at it.</span><br/><br/>
  <strong style="color:var(--red)">Is it possible that these statues are the first, the future living beings here, the ones Kaela is preparing right now?</strong> 
  <span style="color:var(--dimmer);font-size:11px;">- Koko, Pilot 01 // APPENDIX CLOSED</span>
</div>
`}

  ]
});
