// =====================
// QUOTES & FACTS MODAL
// =====================
const QUOTES = [
  { text: "The impediment to action advances action. What stands in the way becomes the way.", source: "Marcus Aurelius" },
  { text: "If you tell the truth, you don't have to remember anything.", source: "Mark Twain" },
  { text: "Safety is not expensive, it’s priceless.", source: "Trucking maxim" },
  { text: "Amateurs talk strategy; professionals talk logistics.", source: "Military proverb" },
  { text: "The cosmos is within us. We are made of star-stuff.", source: "Carl Sagan" },
  { text: "Slow is smooth, smooth is fast.", source: "Field craft proverb" },
  { text: "Discipline equals freedom.", source: "Jocko Willink" }
];

// Elements
const openQuotes = document.getElementById('openQuotes');
const modal = document.getElementById('quotesModal');
const closeQuotes = document.getElementById('closeQuotes');
const qText = document.getElementById('qText');
const qSource = document.getElementById('qSource');
const btnPrev = document.getElementById('qPrev');
const btnNext = document.getElementById('qNext');
const btnCopy = document.getElementById('qCopy');

let idx = 0;

function renderQuote(i){
  const q = QUOTES[i];
  qText.textContent = `“${q.text}”`;
  qSource.textContent = q.source ? `— ${q.source}` : "";
}

function openModal(){
  if (!modal) return;
  if (QUOTES.length) renderQuote(idx);
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}

// Wire up modal
if (openQuotes) openQuotes.addEventListener('click', (e)=>{ e.preventDefault(); openModal(); });
if (closeQuotes) closeQuotes.addEventListener('click', closeModal);
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && modal && modal.classList.contains('show')) closeModal(); });
if (btnNext) btnNext.addEventListener('click', ()=>{ idx = (idx+1) % QUOTES.length; renderQuote(idx); });
if (btnPrev) btnPrev.addEventListener('click', ()=>{ idx = (idx-1+QUOTES.length) % QUOTES.length; renderQuote(idx); });
if (btnCopy) btnCopy.addEventListener('click', async ()=>{
  try{
    await navigator.clipboard.writeText(`${qText.textContent} ${qSource.textContent}`);
    btnCopy.textContent = "Copied!";
    setTimeout(()=>btnCopy.textContent="Copy", 1200);
  }catch(_){ /* ignore */ }
});


// =====================
// BANNER: LOCAL EXPLODE HOVER
// =====================
(function () {
  const p = document.querySelector('.banner p');
  if (!p) return;

  // Split banner text into spans once
  if (!p.dataset.split) {
    const text = p.textContent;
    p.innerHTML = [...text].map(ch => `<span class="char">${ch === ' ' ? '&nbsp;' : ch}</span>`).join('');
    p.dataset.split = '1';
  }

  // Attach hover listeners to each character
  p.querySelectorAll('.char').forEach(c => {
    c.addEventListener('mouseenter', () => {
      const tx = (Math.random()*2 - 1) * 40; // -40..40 px
      const ty = (Math.random()*2 - 1) * 30; // -30..30 px
      const r  = (Math.random()*2 - 1) * 20; // -20..20 deg
      const s  = 0.9 + Math.random()*0.4;    // 0.9..1.3
      c.style.transform = `translate(${tx}px, ${ty}px) rotate(${r}deg) scale(${s})`;
      c.style.textShadow = `0 8px 20px rgba(0,0,0,.35)`;
    });

    c.addEventListener('mouseleave', () => {
      c.style.transform = 'translate(0,0) rotate(0deg) scale(1)';
      c.style.textShadow = '';
    });
  });
})();


