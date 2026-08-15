// EDITE AQUI: agenda e vídeo
const VIDEO_URL = ""; // Ex.: https://www.youtube.com/embed/SEU_VIDEO
  const AGENDA = [
  {data:"22 AGO", hora:"21H", cidade:"Teodoro Sampaio - SP", local:"Ass. Ribeirão Bonito"},
  {data:"29 AGO", hora:"22H", cidade:"Presidente Epitácio - SP", local:"Filarmônica Piscinas Clube Bar"}
];


const q=s=>document.querySelector(s);
q('#year').textContent=new Date().getFullYear();
q('.menu').onclick=()=>q('.nav nav').classList.toggle('open');
document.querySelectorAll('.nav nav a').forEach(a=>a.onclick=()=>q('.nav nav').classList.remove('open'));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce){addEventListener('scroll',()=>{const y=scrollY;q('.hero-bg').style.transform=`scale(1.08) translateY(${Math.min(y*.12,90)}px)`},{passive:true})}
q('#agendaList').innerHTML=AGENDA.map(x=>`<div class="agenda-row"><strong>${x.data}</strong><span>${x.cidade}<br><small>${x.local}</small></span><span>${x.hora}</span></div>`).join('');
const modal=q('#videoModal');q('#openVideo').onclick=()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');if(VIDEO_URL)q('#videoContent').innerHTML=`<iframe src="${VIDEO_URL}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`};q('#closeVideo').onclick=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};modal.onclick=e=>{if(e.target===modal)q('#closeVideo').click()};
q('#quoteForm').onsubmit=e=>{e.preventDefault();const msg=`Olá Nando Ribeiro! Gostaria de solicitar um orçamento.%0A%0ANome: ${encodeURIComponent(q('#nome').value)}%0ACidade: ${encodeURIComponent(q('#cidade').value)}%0AData: ${encodeURIComponent(q('#data').value||'A definir')}%0ATipo de evento: ${encodeURIComponent(q('#tipo').value)}`;open(`https://wa.me/5518981924494?text=${msg}`,'_blank')};
