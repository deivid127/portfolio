// Mostrar e esconder o menu lateral/modal
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
  
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
  }
  
  // Ocultar/mostrar header na rolagem
  let lastScrollTop = 0;
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > lastScrollTop) {
      // Rolando para baixo - esconder header
      header.style.top = '-70px';
    } else {
      // Rolando para cima - mostrar header
      header.style.top = '0';
    }
  
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
  