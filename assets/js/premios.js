const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const aberto = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', aberto);
    hamburger.setAttribute('aria-expanded', String(aberto));
    hamburger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });
}
