registerReport({
  id:'VX-09-SlimE',code:'VX-09-SlimE',title:'OPEN SPACE SLIME',
  tag:'unknown',tagLabel:'UNKNOWN',date:'25 APR 1973',
  pilot:'Koko',
  styles:`
    .slime-lock{min-height:62vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:14px;}
    .slime-lock .sl-big{font-family:VT323,monospace;font-size:64px;color:var(--red);letter-spacing:0.12em;text-shadow:0 0 22px rgba(255,34,68,0.45);line-height:1;}
    .slime-lock .sl-sub{font-size:10px;letter-spacing:0.28em;color:var(--dimmer);}
    .slime-lock .sl-bar{width:min(320px,70vw);height:4px;background:rgba(0,170,85,0.15);overflow:hidden;margin-top:6px;}
    .slime-lock .sl-fill{width:23%;height:100%;background:var(--yellow);box-shadow:0 0 8px var(--yellow);}
    .slime-lock .sl-pct{font-size:9px;letter-spacing:0.2em;color:var(--yellow);}
    .slime-lock .r-soca{max-width:460px;text-align:left;margin-top:18px;}
  `,
  tabs:[
  {id:'main',label:'// REPORT',html:`
<div class="slime-lock">
  <div class="sl-big">RECORD DAMAGED</div>
  <div class="sl-sub">VX-09-SlimE // ANOMALOUS MATTER // READ ACCESS DENIED</div>
  <div class="sl-bar"><div class="sl-fill"></div></div>
  <div class="sl-pct">RECOVERY IN PROGRESS — 23%</div>
  <div class="r-soca">This file is still being reconstructed. Most of it is noise. The rest is Koko. Come back later.</div>
</div>
  `}
]
});
 
