(function(window, document, undefined){
  const triggers = document.querySelectorAll('.nav__list-item');
  const background = document.querySelector('.dropdown__background');
  const nav = document.querySelector('.header__nav');
  
  function handleEnter(e) {
    const navItem = e.currentTarget.querySelector('.dropdown');
    navItem.classList.add('dropdown__trigger-enter');
    setTimeout(() => navItem.classList.add('dropdown__trigger-enter--active'), 150);
    background.classList.add('dropdown__background--open');
    const dropdownCoords = navItem.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left,
    };
    
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }
  
  function handleLeave(e) {
    const navItem = e.currentTarget.querySelector('.dropdown');
    navItem.classList.remove('dropdown__trigger-enter', 'dropdown__trigger-enter--active');
    background.classList.remove('dropdown__background--open');
  }
  
  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
})(window, document);