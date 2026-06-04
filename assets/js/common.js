(function(){
  window.addEventListener('keydown', function(e){
    if(e.key === 'Tab') document.documentElement.classList.add('keyboard');
  }, { once: true });
})();

(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if(!toggle || !nav) return;

  function setOpen(isOpen){
    nav.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(!!isOpen));
  }

  toggle.addEventListener('click', function(e){
    e.stopPropagation();
    setOpen(!nav.classList.contains('open'));
  });

  nav.addEventListener('click', function(e){
    if(e.target.tagName === 'A') setOpen(false);
  });

  document.addEventListener('click', function(e){
    if(!nav.classList.contains('open')) return;
    if(!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') setOpen(false); });
})();
