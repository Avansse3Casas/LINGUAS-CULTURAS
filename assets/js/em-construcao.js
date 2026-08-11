document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');

  if (!botao || !menu) return;

  botao.addEventListener('click', () => {
    const aberto = menu.classList.toggle('open');
    botao.classList.toggle('open', aberto);
    botao.setAttribute('aria-expanded', String(aberto));
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });
});
