
  // Starter Quotes/Facts — customize freely
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

  // Wire up
  if (openQuotes) openQuotes.addEventListener('click', (e)=>{ e.preventDefault(); openModal(); });
  if (closeQuotes) closeQuotes.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && modal.classList.contains('show')) closeModal(); });

  if (btnNext) btnNext.addEventListener('click', ()=>{ idx = (idx+1) % QUOTES.length; renderQuote(idx); });
  if (btnPrev) btnPrev.addEventListener('click', ()=>{ idx = (idx-1+QUOTES.length) % QUOTES.length; renderQuote(idx); });
  if (btnCopy) btnCopy.addEventListener('click', async ()=>{
    try{
      await navigator.clipboard.writeText(`${qText.textContent} ${qSource.textContent}`);
      btnCopy.textContent = "Copied!";
      setTimeout(()=>btnCopy.textContent="Copy", 1200);
    }catch(_){ /* ignore */ }
  });

