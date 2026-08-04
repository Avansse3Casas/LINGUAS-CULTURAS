const btn = document.getElementById('hamburger');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
      btn.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        btn.classList.toggle('open', open);
        btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        btn.setAttribute('aria-expanded', String(open));
      });
    }

    const gallery = document.getElementById('gallery');
    const count = document.getElementById('count');
    const search = document.getElementById('search');
    const emptyState = document.getElementById('empty-state');
    const audioPlayer = document.getElementById('audio-player');
    let activeButton = null;

    function playIcon() {
      return `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle>
          <path d="M10 8.8v6.4c0 .5.6.8 1 .5l5-3.2c.4-.3.4-.8 0-1.1l-5-3.2c-.4-.2-1 .1-1 .6Z" fill="currentColor"></path>
        </svg>
      `;
    }

    function render(items) {
      gallery.innerHTML = items.map((obra, index) => `
        <article class="art-card">
          <figure class="art-media">
            <img src="${obra.imagem}" alt="Pintura de ${obra.autor}" loading="lazy">
          </figure>
          <div class="art-copy">
            <h2 class="art-title">${obra.autor}</h2>
            <span class="class-chip">Turma: ${obra.turma}</span>
            <p class="description">${obra.descricao}</p>
            <button class="audio-button" type="button" data-audio="${obra.audio || ''}" data-empty="${obra.audio ? 'false' : 'true'}" aria-label="Reproduzir audiodescrição da obra de ${obra.autor}">
              ${playIcon()}
              <span>${obra.audio ? 'Ouvir audiodescrição' : 'Áudio em breve'}</span>
            </button>
          </div>
        </article>
      `).join('');

      count.textContent = `${items.length} ${items.length === 1 ? 'obra' : 'obras'} na galeria`;
      emptyState.classList.toggle('show', items.length === 0);
    }

    function normalize(value) {
      return value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    }

    search.addEventListener('input', () => {
      const term = normalize(search.value.trim());
      const filtered = yoArtistaObras.filter((obra) => {
        const haystack = normalize(`${obra.autor} ${obra.turma} ${obra.descricao}`);
        return haystack.includes(term);
      });
      render(filtered);
    });

    gallery.addEventListener('click', (event) => {
      const button = event.target.closest('.audio-button');
      if (!button) return;

      const src = button.dataset.audio;
      if (!src) {
        button.querySelector('span').textContent = 'Áudio em breve';
        return;
      }

      if (activeButton && activeButton !== button) {
        activeButton.querySelector('span').textContent = 'Ouvir audiodescrição';
      }

      if (audioPlayer.src.endsWith(src) && !audioPlayer.paused) {
        audioPlayer.pause();
        button.querySelector('span').textContent = 'Ouvir audiodescrição';
      } else {
        audioPlayer.src = src;
        audioPlayer.play();
        button.querySelector('span').textContent = 'Pausar áudio';
        activeButton = button;
      }
    });

    audioPlayer.addEventListener('ended', () => {
      if (activeButton) {
        activeButton.querySelector('span').textContent = 'Ouvir audiodescrição';
      }
    });

    render(yoArtistaObras);
