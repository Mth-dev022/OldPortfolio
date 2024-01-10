window.onload = function () {
  let isFixed = false;
  let originalHeaderStyles = {}; // Armazena os estilos originais da barra de navegação

  function storeOriginalStyles() {
    const header = document.getElementById('navbar');
    originalHeaderStyles = {
      position: header.style.position,
      top: header.style.top,
      backgroundColor: header.style.backgroundColor,
      transform: header.style.transform,
      transition: header.style.transition,
      boxShadow: header.style.boxShadow,
    };
  }

  function restoreOriginalStyles() {
    const header = document.getElementById('navbar');
    header.style.position = originalHeaderStyles.position || '';
    header.style.top = originalHeaderStyles.top || '';
    header.style.backgroundColor = originalHeaderStyles.backgroundColor || '';
    header.style.transform = originalHeaderStyles.transform || '';
    header.style.transition = originalHeaderStyles.transition || '';
    header.style.boxShadow = originalHeaderStyles.boxShadow || '';
  }

  function handleScroll() {
    const header = document.getElementById('navbar');
    const main = document.getElementById('main');
    const scrollPosition = window.scrollY;
    const innerWidth = window.innerWidth;

    if (innerWidth > 1280) {
      const aElements = document.getElementsByClassName('nav-item');

      if (scrollPosition > 0 && !isFixed) {
        storeOriginalStyles(); // Salva os estilos originais
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        header.style.transform = 'translateY(-40px)';
        header.style.transition = '.9s ease';
        header.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.1)';

        isFixed = true;

        if (main) {
          main.style.paddingTop = header.offsetHeight + 70 + 'px';
        }

        const h1Element = document.getElementById('nav-name');
        if (h1Element) {
          h1Element.style.color = '#000';
          h1Element.style.paddingTop = '15px';
        }

        for (let i = 0; i < aElements.length; i++) {
          aElements[i].style.color = '#000';
          aElements[i].style.paddingTop = ''; // Reverter o padding para o valor original (vazio)
        }

      } else if (scrollPosition === 0 && isFixed) {
        restoreOriginalStyles(); // Restaura os estilos originais
        isFixed = false;
        header.style.transition = '1s ease'

        if (main) {
          main.style.paddingTop = '0'; // Redefine o padding superior
        }

        const h1Element = document.getElementById('nav-name');
        if (h1Element) {
          h1Element.style.color = ''; // Volta à cor padrão
          h1Element.style.paddingTop = '';
        }

        for (let i = 0; i < aElements.length; i++) {
          aElements[i].style.color = ''; // Volta à cor padrão
          aElements[i].style.paddingTop = ''; // Adapte o valor conforme necessário
        }

      }
    }
  }
  window.addEventListener('scroll', handleScroll);
};

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');

  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
  } else {
    menuMobile.classList.add('open');
  }
}
