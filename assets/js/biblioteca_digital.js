const btn  = document.getElementById('hamburger');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
      btn.addEventListener('click', () => {
        const open = menu.classList.toggle('open');

        btn.classList.toggle('open', open);

        btn.setAttribute(
          'aria-expanded',
          open
        );

        btn.setAttribute(
          'aria-label',
          open ? 'Fechar menu' : 'Abrir menu'
        );
      });
    }

