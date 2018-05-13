(function(window, document, undefined) {
  const nav = document.querySelector('.nav');
  const body = document.body;
  let topOfNav = nav.offsetTop;
  
  function fixNav(e) {
    if (window.scrollY >= topOfNav) {
      body.classList.add('nav--fixed');
      body.style.paddingTop = `${nav.offsetHeight}px`;
    } else {
      body.classList.remove('nav--fixed');
      body.style.paddingTop = 0;
    }
  }
  
  window.addEventListener('scroll', fixNav);
  window.addEventListener('resize', () => topOfNav = nav.offsetTop);
})(window, document);
