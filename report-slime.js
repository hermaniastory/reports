/* ============================================================
   report-slime.js  —  PANDEMONIUM-04 // FIELD REPORT
   Pilot 01 (Koko) // VX-09-SlimE // OPEN SPACE SLIME
   Self-contained. Registers itself via registerReport().
   Requires reports-engine.js loaded first.
   ============================================================ */
registerReport({
  id:'VX-09-SlimE',code:'VX-09-SlimE',title:'OPEN SPACE SLIME',
  tag:'unknown',tagLabel:'UNKNOWN',date:'25 APR 1973',
  pilot:'Koko',
  tabs:[
  {id:'main',label:'// REPORT',html:`
<div style="font-family:VT323,monospace;font-size:52px;color:var(--red);text-shadow:0 0 20px rgba(255,34,68,0.5);letter-spacing:0.1em;margin:8px 0">SLIME.</div>
<div class="r-heading">VX-09-SlimE // ANOMALOUS MATTER // filed immediately because I was scared I'd convince myself it didn't happen</div>

<div class="r-note" style="transform:rotate(-0.8deg);font-size:12px">
  We were flying. Normal flight. And there was slime. In space. LIQUID slime floating in open vacuum. 
  Warm. Translucent. Just. There.<br/>
  I am writing this now before my brain starts explaining it away. — Koko
</div>

<hr class="r-div"/>

<div class="g2">
  <div>
    <div class="r-heading">OBJECT DATA</div>
    <div class="r-data">
      <div class="r-row"><span class="r-key">DESIGNATION</span><span class="r-val">VX-09-SlimE</span></div>
      <div class="r-row"><span class="r-key">TYPE</span><span class="r-val r">UNCLASSIFIED</span></div>
      <div class="r-row"><span class="r-key">COORDINATES</span><span class="r-val">X:2471 Y:0883</span></div>
      <div class="r-row"><span class="r-key">STATE</span><span class="r-val b">Liquid // viscous</span></div>
      <div class="r-row"><span class="r-key">TEMPERATURE</span><span class="r-val y">WARM // sensor gave up</span></div>
      <div class="r-row"><span class="r-key">BEHAVIOR</span><span class="r-val">Slow drift. Not frozen. Not dispersing.</span></div>
      <div class="r-row"><span class="r-key">COLOR</span><span class="r-val">Translucent. Greenish. Maybe.</span></div>
      <div class="r-row"><span class="r-key">DISTANCE KEPT</span><span class="r-val r">800m // unanimous decision</span></div>
    </div>
  </div>
  <div>
    <div class="r-sketch">
      <svg width="130" height="130" viewBox="0 0 130 130">
        <ellipse cx="65" cy="65" rx="40" ry="28" fill="rgba(0,200,80,0.06)" stroke="rgba(0,200,80,0.2)" stroke-width="1"/>
        <ellipse cx="55" cy="58" rx="28" ry="18" fill="rgba(0,220,100,0.08)" stroke="rgba(0,220,100,0.18)" stroke-width="0.8"/>
        <ellipse cx="75" cy="72" rx="22" ry="14" fill="rgba(0,200,80,0.07)" stroke="rgba(0,200,80,0.15)" stroke-width="0.7"/>
        <circle cx="48" cy="52" r="6" fill="rgba(0,255,120,0.1)" stroke="rgba(0,255,120,0.2)" stroke-width="0.6"/>
        <circle cx="82" cy="68" r="4" fill="rgba(0,255,120,0.08)" stroke="rgba(0,255,120,0.15)" stroke-width="0.5"/>
        <text x="65" y="110" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(0,180,60,0.35)">approximate shape // drawn from memory</text>
        <text x="65" y="120" text-anchor="middle" font-family="monospace" font-size="7" fill="rgba(0,180,60,0.25)">it kept moving</text>
      </svg>
      <div class="r-sketch-cap">VX-09 // I drew this right after // not exact</div>
    </div>
    <div class="sticky red t4" style="max-width:160px;margin-top:8px">liquid matter in open vacuum is thermodynamically IMPOSSIBLE under everything we know. and yet it was RIGHT THERE.</div>
  </div>
</div>

<div class="r-soca">Standard thermodynamic models do not allow for liquid matter in open vacuum at these temperatures and pressures. The sensor readings were consistent and non-anomalous — meaning the instruments were working correctly. I don't have a model for this. I'm noting that I don't have a model for this.</div>

<div class="r-alert">No contact was made. No samples were collected. PANDEMONIUM held position at 800 meters. This was not a difficult decision.</div>

<hr class="r-div"/>

<div class="r-heading">FOLLOW-UP</div>
<p class="r-text">
  Report sent to <span class="corrupt" style="font-size:16px;letter-spacing:0.2em">████ ANALYSIS DEPT</span> on 25 APR 1973.<br/>
  Response received: <span class="corrupt" style="color:var(--dimmer)">none.</span><br/><br/>
  Will update if we see it again.
</p>

<div class="sticky yellow t2 sticky-right" style="max-width:155px">not sure I want to see it again. but also I kind of do. it was really interesting. I have complicated feelings about the slime.</div>
<div class="clearfix"></div>
  `}
]
});
