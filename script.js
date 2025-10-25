// Scroll Reveal
const revealEls = document.querySelectorAll('section, header h1, header p, .hero-buttons');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold:0.1});
revealEls.forEach(el=>observer.observe(el));
