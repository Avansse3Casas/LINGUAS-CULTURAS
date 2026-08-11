(() => {
  const slot = document.querySelector('[data-site-header]');
  if (!slot) return;
  slot.outerHTML = `<header>
    <div class="header-inner">

      <!-- LOGO -->
      <a href="index.html" class="logo">
        <svg class="logo-mark" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Línguas - Culturas" role="img">
          <g transform="translate(40,40)">
            <polygon points="0,-34 10,-12 0,-8 -10,-12" fill="none" stroke="#E0196A" stroke-width="2.2" stroke-linejoin="round"/>
            <g transform="rotate(60)"><polygon points="0,-34 10,-12 0,-8 -10,-12" fill="none" stroke="#F27B22" stroke-width="2.2" stroke-linejoin="round"/></g>
            <g transform="rotate(120)"><polygon points="0,-34 10,-12 0,-8 -10,-12" fill="none" stroke="#0DC9A2" stroke-width="2.2" stroke-linejoin="round"/></g>
            <g transform="rotate(180)"><polygon points="0,-34 10,-12 0,-8 -10,-12" fill="none" stroke="#3B9EE8" stroke-width="2.2" stroke-linejoin="round"/></g>
            <g transform="rotate(240)"><polygon points="0,-34 10,-12 0,-8 -10,-12" fill="none" stroke="#8C5CF7" stroke-width="2.2" stroke-linejoin="round"/></g>
            <g transform="rotate(300)"><polygon points="0,-34 10,-12 0,-8 -10,-12" fill="none" stroke="#C2E020" stroke-width="2.2" stroke-linejoin="round"/></g>
            <circle cx="0" cy="0" r="2" fill="#ffffff" stroke="#ccc" stroke-width="0.5"/>
          </g>
        </svg>
        <div>
          <span class="logo-name">Línguas - Culturas</span>
          <span class="logo-sub">COLTEC · UFMG</span>
        </div>
      </a>

      <!-- NAV DESKTOP -->
      <nav>

        <div class="nav-item">
          <div class="nav-link">
            Línguas
            <svg class="chevron" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="dropdown languages">
            <div class="dd-section-label">Idiomas do projeto</div>
            <div class="lang-grid">
              <a class="lang-chip" href="em-construcao.html">Espanhol</a>
              <a class="lang-chip" href="em-construcao.html">Mandarim</a>
              <a class="lang-chip" href="id-frances.html">Francês</a>
              <a class="lang-chip" href="em-construcao.html">Japonês</a>
              <a class="lang-chip" href="em-construcao.html">Italiano</a>
              <a class="lang-chip" href="em-construcao.html">Latim</a>
              <a class="lang-chip" href="em-construcao.html">Grego</a>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <div class="nav-link">
            Tareas de Casa
            <svg class="chevron" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="dropdown">
            <a class="dropdown-link" href="em-construcao.html">1º Trimestre</a>
            <a class="dropdown-link" href="em-construcao.html">2º Trimestre</a>
            <a class="dropdown-link" href="em-construcao.html">3º Trimestre</a>
          </div>
        </div>

        <div class="nav-item">
          <div class="nav-link">
            Publicações
            <svg class="chevron" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="dropdown">
            <a class="dropdown-link" href="em-construcao.html">Livro teórico</a>
            <a class="dropdown-link" href="em-construcao.html">Livros didáticos</a>
            <a class="dropdown-link" href="id-frances.html">Site Francês</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-link" href="videoblogs.html">Videoblogs</a>
            <a class="dropdown-link" href="em-construcao.html">Reportagens</a>
            <a class="dropdown-link" href="em-construcao.html">Podcasts</a>
            <a class="dropdown-link" href="em-construcao.html">Prêmios</a>
          </div>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="yoartista.html">Exposição Yo Artista</a>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="em-construcao.html">Eventos de Formação Docente</a>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="equipe.html">Quem somos</a>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="em-construcao.html">Sobre o projeto</a>
        </div>

      </nav>

      <!-- HAMBÚRGUER (só mobile) -->
      <button class="hamburger" id="hamburger" type="button" aria-label="Abrir menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <!-- MENU MOBILE -->
    <div class="mobile-menu" id="mobile-menu">

      <details class="mobile-group">
        <summary>
          Línguas
          <svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </summary>
        <div class="mobile-sub">
          <a href="em-construcao.html">Espanhol</a>
          <a href="em-construcao.html">Mandarim</a>
          <a href="id-frances.html">Francês</a>
          <a href="em-construcao.html">Japonês</a>
          <a href="em-construcao.html">Italiano</a>
          <a href="em-construcao.html">Latim</a>
          <a href="em-construcao.html">Grego</a>
        </div>
      </details>

      <details class="mobile-group">
        <summary>
          Tareas de Casa
          <svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </summary>
        <div class="mobile-sub">
          <a href="em-construcao.html">1º Trimestre</a>
          <a href="em-construcao.html">2º Trimestre</a>
          <a href="em-construcao.html">3º Trimestre</a>
        </div>
      </details>

      <details class="mobile-group">
        <summary>
          Publicações
          <svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </summary>
        <div class="mobile-sub">
          <a href="em-construcao.html">Livro teórico</a>
          <a href="em-construcao.html">Livros didáticos</a>
          <a href="id-frances.html">Site Francês</a>
          <a href="videoblogs.html">Videoblogs</a>
          <a href="em-construcao.html">Reportagens</a>
          <a href="em-construcao.html">Podcasts</a>
          <a href="em-construcao.html">Prêmios</a>
        </div>
      </details>

      <a class="mobile-link" href="yoartista.html">Exposição Yo Artista</a>

      <a class="mobile-link" href="em-construcao.html">Eventos de Formação Docente</a>

      <a class="mobile-link" href="equipe.html">Quem somos</a>
      <a class="mobile-link" href="em-construcao.html">Sobre o projeto</a>

    </div>
  </header>
  `;
})();
