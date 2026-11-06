const SITE={
 instagram:"https://www.instagram.com/eclipsesmanela/",
 competitions:{
  speech:{category:"01 / LANGUAGE",title:"ENGLISH SPEECH<br>CONTEST",theme:"Perubahan Cara Pandang Manusia di Era Digital",wave1:"Rp40.000 / orang",wave2:"Rp50.000 / orang",period1:"01–28 Oktober 2026",period2:"29 Oktober–20 November 2026",guide:"guidebooks/Guidebook_English_Speech_ECLIPSE_2026.pdf",docs:"https://drive.google.com/drive/folders/1l9i3MXBW04mtjjPXpKpCOCZiAKkZCz47",register:"https://forms.gle/zVaqaufPrRfTyrWV8",contacts:[
   ["Narahubung Utama","Ni Made Emayuri Madriani","https://wa.me/62895386069006"],["Teknis Lomba","Nyoman Putri Mayka Dewi","+6281237620546"],["Pendaftaran","Adinda Syifa Ramadhani","+62881038274938"],["Pengumpulan Karya","Ni Putu Anila Devika Lestari","+6287757910629"]]},
  video:{category:"02 / AUDIOVISUAL",title:"VIDEO<br>REELS",theme:"Dampak Doomscrolling terhadap Kehidupan Nyata",wave1:"Rp40.000 / tim",wave2:"Rp60.000 / tim",period1:"01–28 Oktober 2026",period2:"29 Oktober–20 November 2026",guide:"guidebooks/Guidebook_Video_Reels_ECLIPSE_2026.pdf",docs:"https://drive.google.com/drive/folders/17W9rmSo7BN425gbwd-Xp3XYbQcOsTvVT",register:"https://forms.gle/LQQwmFpaCaJFR91S7",contacts:[
   ["Narahubung Utama","Putu Trisia Cahaya Prima","+6287840095621"],["Teknis Lomba","Putu Tabitha Mulya Dewi","+6281337485882"],["Pendaftaran","Kadek Ayu Sinta Angelina","+62881037551482"],["Pengumpulan Karya","Ni Putu Anila Devika Lestari","+6287757910629"]]},
  infographic:{category:"03 / DESIGN",title:"INFOGRAFIS",theme:"Penggunaan AI secara Kritis dan Etis",wave1:"Rp20.000 / tim",wave2:"Rp30.000 / tim",period1:"01–28 Oktober 2026",period2:"29 Oktober–20 November 2026",guide:"guidebooks/Guidebook_Infografis_ECLIPSE_2026.pdf",docs:"https://drive.google.com/drive/folders/1ytORpfm-2FoTl-US2R4L0mmX3nxKJwSK",register:"https://forms.gle/HmWPYQBdX3rjfoh28",contacts:[
   ["Narahubung Utama","Ketut Agiesta Suryani","+6287729823483"],["Teknis Lomba","Ni Made Indah Darmayanti","+6288214266503"],["Pendaftaran","Dewa Made Adryanatha Dhaneswara","+6281353969082"],["Pengumpulan Karya","Putu Trisia Cahaya Prima","+6287840095621"]]}
 }
};
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
function toast(msg){const e=$("#toast");e.textContent=msg;e.classList.add("show");clearTimeout(window._t);window._t=setTimeout(()=>e.classList.remove("show"),2600)}
function wa(phone){return /^https?:\/\//i.test(phone) ? phone : "https://wa.me/"+phone.replace(/\D/g,"")}
function setExternal(el,url,label){el.href=url;el.target="_blank";el.rel="noopener noreferrer";el.onclick=null}
function openCompetition(key){
 const d=SITE.competitions[key];if(!d)return;
 $("#modalCategory").textContent=d.category;$("#modalTitle").innerHTML=d.title;$("#modalTheme").textContent=d.theme;
 $("#price1").textContent=d.wave1;$("#price2").textContent=d.wave2;$("#period1").textContent=d.period1;$("#period2").textContent=d.period2;
 const g=$("#guideLink"),docs=$("#docsLink"),r=$("#registerLink");
  g.textContent="OPEN GUIDEBOOK ↗"; docs.textContent="OPEN DOCUMENTS ↗"; r.textContent="REGISTER ↗";
  setExternal(g,d.guide);setExternal(docs,d.docs);setExternal(r,d.register);
  r.classList.add("is-register");
 $("#modalContacts").innerHTML=d.contacts.map(c=>`<div class="modal-contact-row"><span>${c[0]}<br><strong>${c[1]}</strong></span><a href="${wa(c[2])}" target="_blank" rel="noopener noreferrer">WHATSAPP ↗</a></div>`).join("");
 $("#competitionModal").classList.add("open");document.body.style.overflow="hidden";
}
function openModal(id){$(id).classList.add("open");document.body.style.overflow="hidden"}
function closeModals(){$$(".modal").forEach(m=>m.classList.remove("open"));document.body.style.overflow=""}
$$(".competition-card").forEach(c=>c.querySelector(".detail-btn").addEventListener("click",()=>openCompetition(c.dataset.comp)));
$$("[data-open='registration']").forEach(b=>b.addEventListener("click",()=>openModal("#registrationModal")));
$$("[data-close]").forEach(b=>b.addEventListener("click",closeModals));
$$(".register-options button").forEach(b=>b.addEventListener("click",()=>{closeModals();setTimeout(()=>openCompetition(b.dataset.comp),100)}));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModals()});
const ham=$(".hamburger"),mobile=$(".mobile-menu");ham.addEventListener("click",()=>{const o=mobile.classList.toggle("open");ham.setAttribute("aria-expanded",o)});
mobile.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobile.classList.remove("open")));
$$(".contact-tab").forEach(b=>b.addEventListener("click",()=>renderContacts(b.dataset.contact)));
function renderContacts(key){
 const d=SITE.competitions[key];$$(".contact-tab").forEach(b=>b.classList.toggle("active",b.dataset.contact===key));
 $("#contactGrid").innerHTML=d.contacts.map(c=>`<div class="contact-card"><div><span class="role">${c[0]}</span><strong>${c[1]}</strong></div><a href="${wa(c[2])}" target="_blank" rel="noopener noreferrer">CHAT ↗</a></div>`).join("");
}
renderContacts("speech");



/* V17: animated logo assets are delivered as transparent APNG so mobile browsers keep true alpha. */
/* Falling stars / shooting-star field */
(function initStarfield(){
  const canvas = document.getElementById("starfield");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [], shooters = [], w = 0, h = 0, dpr = 1;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduce) return;

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = Math.floor(w*dpr); canvas.height = Math.floor(h*dpr);
    canvas.style.width = w+"px"; canvas.style.height = h+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    const count = coarse ? Math.min(55, Math.max(28, Math.floor(w*h/30000))) : Math.min(120, Math.max(45, Math.floor(w*h/16000)));
    stars = Array.from({length:count}, () => makeStar(true));
  }
  function makeStar(initial){
    return {x:Math.random()*w,y:initial?Math.random()*h:-10-Math.random()*80,
      r:Math.random()*1.45+.25,s:Math.random()*.45+.16,
      drift:Math.random()*.16-.08,alpha:Math.random()*.65+.25,
      tw:Math.random()*Math.PI*2,twSpeed:Math.random()*.045+.012,
      trail:Math.random()>.76};
  }
  function spawnShooter(){
    const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    if(Math.random()>(coarse ? .0032 : .006) || shooters.length>2) return;
    shooters.push({x:Math.random()*w*.85,y:-20,life:0,max:55+Math.random()*45,len:35+Math.random()*55,speed:8+Math.random()*5});
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    for(const s of stars){
      s.y += s.s; s.x += s.drift; s.tw += s.twSpeed;
      if(s.y>h+12 || s.x<-20 || s.x>w+20) Object.assign(s,makeStar(false));
      const a=Math.max(.05,Math.min(1,s.alpha + Math.sin(s.tw)*.18));
      ctx.beginPath(); ctx.fillStyle=`rgba(232,181,102,${a})`; ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
      if(s.trail){
        ctx.beginPath(); ctx.strokeStyle=`rgba(232,181,102,${a*.28})`; ctx.lineWidth=.7;
        ctx.moveTo(s.x,s.y); ctx.lineTo(s.x-s.drift*18,s.y-9); ctx.stroke();
      }
    }
    spawnShooter();
    shooters=shooters.filter(sh=>{
      sh.life++; sh.x+=sh.speed; sh.y+=sh.speed*.72;
      const a=Math.max(0,1-sh.life/sh.max);
      const grad=ctx.createLinearGradient(sh.x,sh.y,sh.x-sh.len,sh.y-sh.len*.72);
      grad.addColorStop(0,`rgba(255,222,157,${a})`); grad.addColorStop(1,`rgba(255,222,157,0)`);
      ctx.strokeStyle=grad; ctx.lineWidth=1.4; ctx.beginPath(); ctx.moveTo(sh.x,sh.y); ctx.lineTo(sh.x-sh.len,sh.y-sh.len*.72); ctx.stroke();
      return sh.life<sh.max && sh.x<w+100 && sh.y<h+100;
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener("resize",resize,{passive:true});
  resize(); draw();
})();

/* 3D tilt + glow + particles on competition cards */
(function initInteractiveCards(){
  const cards = document.querySelectorAll(".competition-card");
  if(!cards.length) return;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const colors = ["#e7a54c","#f0c36b","#fff0c2","#c78432"];

  cards.forEach(card=>{
    const particleLayer=document.createElement("div");
    particleLayer.className="hover-particles";
    card.appendChild(particleLayer);
    let particleTimer=null;

    function emit(){
      if(reduce || !card.classList.contains("is-hovered")) return;
      const p=document.createElement("span");
      p.className="hover-particle"+(Math.random()>.7?" square":"");
      p.style.left=(35+Math.random()*30)+"%";
      p.style.top=(35+Math.random()*28)+"%";
      p.style.setProperty("--dx",((Math.random()-.5)*100)+"px");
      p.style.setProperty("--dy",((-25-Math.random()*80))+"px");
      p.style.background=colors[Math.floor(Math.random()*colors.length)];
      p.style.boxShadow=`0 0 10px ${p.style.background}`;
      particleLayer.appendChild(p);
      setTimeout(()=>p.remove(),900);
    }
    function startParticles(){
      if(reduce) return;
      emit(); particleTimer=setInterval(emit,90);
    }
    function stopParticles(){
      clearInterval(particleTimer); particleTimer=null;
      card.querySelectorAll(".hover-particle").forEach(p=>p.remove());
    }
    card.addEventListener("pointerenter",()=>{
      card.classList.add("is-hovered");
      card.style.setProperty("--lift","-7px");
      startParticles();
    });
    card.addEventListener("pointermove",e=>{
      if(reduce) return;
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width;
      const y=(e.clientY-r.top)/r.height;
      const ry=(x-.5)*14;
      const rx=(.5-y)*12;
      card.style.setProperty("--rx",rx.toFixed(2)+"deg");
      card.style.setProperty("--ry",ry.toFixed(2)+"deg");
      card.style.setProperty("--mx",(x*100).toFixed(1)+"%");
      card.style.setProperty("--my",(y*100).toFixed(1)+"%");
    });
    card.addEventListener("pointerleave",()=>{
      card.classList.remove("is-hovered");
      card.style.setProperty("--rx","0deg");
      card.style.setProperty("--ry","0deg");
      card.style.setProperty("--lift","0px");
      stopParticles();
    });
  });
})();

/* A little 3D response for the registration chooser too */
(function initRegisterButtons(){
  const buttons=document.querySelectorAll(".register-options button");
  buttons.forEach(btn=>{
    btn.addEventListener("pointermove",e=>{
      const r=btn.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      btn.style.transform=`perspective(700px) rotateX(${(-y*5).toFixed(2)}deg) rotateY(${(x*7).toFixed(2)}deg) translateY(-2px)`;
    });
    btn.addEventListener("pointerleave",()=>{btn.style.transform="";});
  });
})();

/* Final: make the main ECLIPSE symbol gently follow the mouse/touch direction */
(function initHeroLogoFollow(){
  const orbit=document.querySelector('.eclipse-orbit');
  const wrap=document.querySelector('.hero-symbol-wrap');
  const logo=document.querySelector('.hero-symbol-wrap .hero-symbol');
  if(!orbit || !wrap || !logo) return;
  const reduce=window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce) return;

  let raf=0;
  let tx=0,ty=0,trx=0,try_=0;
  let cx=0,cy=0,crx=0,cry=0;

  function render(){
    raf=0;
    cx += (tx-cx)*0.16;
    cy += (ty-cy)*0.16;
    crx += (crx*0 + trx-crx)*0.14;
    cry += (cry*0 + try_-cry)*0.14;
    logo.style.setProperty('--logo-x', cx.toFixed(2)+'px');
    logo.style.setProperty('--logo-y', cy.toFixed(2)+'px');
    logo.style.setProperty('--logo-rx', crx.toFixed(2)+'deg');
    logo.style.setProperty('--logo-ry', cry.toFixed(2)+'deg');
    if(Math.abs(tx-cx)+Math.abs(ty-cy)+Math.abs(trx-crx)+Math.abs(try_-cry)>0.15){ raf=requestAnimationFrame(render); }
  }
  function move(clientX,clientY){
    const r=orbit.getBoundingClientRect();
    const x=(clientX-(r.left+r.width/2))/(r.width/2);
    const y=(clientY-(r.top+r.height/2))/(r.height/2);
    const nx=Math.max(-1,Math.min(1,x));
    const ny=Math.max(-1,Math.min(1,y));
    tx=nx*24;
    ty=ny*20;
    trx=-ny*7;
    try_=nx*8;
    wrap.classList.add('is-following');
    if(!raf) raf=requestAnimationFrame(render);
  }
  function reset(){
    tx=ty=trx=try_=0;
    wrap.classList.remove('is-following');
    if(!raf) raf=requestAnimationFrame(render);
  }
  orbit.addEventListener('pointermove',e=>move(e.clientX,e.clientY));
  orbit.addEventListener('pointerleave',reset);
  orbit.addEventListener('pointerdown',e=>{
    move(e.clientX,e.clientY);
    wrap.classList.remove('logo-pulse');
    void wrap.offsetWidth;
    wrap.classList.add('logo-pulse');
  });
  wrap.addEventListener('animationend',e=>{
    if(e.animationName==='logoPulse') wrap.classList.remove('logo-pulse');
  });
})();


/* ==========================================================
   V28 FINAL — transparent mascot flight layers
   Animated WebP is used so chroma-keyed alpha is preserved without
   a green/black rectangle. The original V22 opacity is not reduced.
   ========================================================== */
(function initCompetitionMascotFlight(){
  const flight=document.querySelector('.competition-mascot-flight');
  if(!flight) return;
  const reduce=window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){
    flight.classList.add('reduced-motion');
  }
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(entry.target!==flight) continue;
        flight.classList.toggle('is-visible',entry.isIntersecting);
      }
    },{root:null,rootMargin:'180px 0px',threshold:0.02});
    observer.observe(flight);
  }
})();


/* V33 — direct high-quality mascot animation.
   No Data Saver / slow-network fallback is used. The transparent animation
   is loaded directly when the competition section approaches the viewport. */
(function initDirectMascotAnimation(){
  const image = document.querySelector('.competition-mascot-video');
  const flight = document.querySelector('.competition-mascot-flight');
  if(!image || !flight) return;

  function markVisible(){
    flight.classList.add('is-visible');
  }

  if('IntersectionObserver' in window){
    const observer = new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(entry.isIntersecting){
          markVisible();
          observer.disconnect();
          break;
        }
      }
    }, {root:null, rootMargin:'360px 0px', threshold:0.01});
    observer.observe(flight);
  } else {
    markVisible();
  }
})();
