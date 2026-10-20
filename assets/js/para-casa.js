(() => {
  const menuButton = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.classList.toggle('open', !isOpen);
      mobileMenu.classList.toggle('open', !isOpen);
    });
  }

  const status = document.getElementById('homework-status');
  const totalActivities = document.getElementById('total-atividades');
  const totalTerms = document.getElementById('total-trimestres');
  const grids = [1, 2, 3].map((term) => document.getElementById(`trimestre-${term}-grid`));
  const counts = [1, 2, 3].map((term) => document.getElementById(`trimestre-${term}-count`));

  function escapeHtml(value = '') {
    const element = document.createElement('div');
    element.textContent = String(value);
    return element.innerHTML;
  }

  function formatDate(value) {
    if (!value) return '';
    const date = new Date(`${value}T12:00:00`);
    if (Number.isNaN(date.getTime())) return '';
    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
  }

  function cardMarkup(item) {
    const deadline = formatDate(item.prazo);
    const labels = [item.idioma, item.turma].filter(Boolean);
    return `<article class="homework-card">
      <div class="homework-card__meta">${labels.map((label) => `<span>${escapeHtml(label)}</span>`).join('')}</div>
      <h3>${escapeHtml(item.titulo)}</h3>
      ${item.descricao ? `<p>${escapeHtml(item.descricao)}</p>` : ''}
      <div class="homework-card__footer">
        ${deadline ? `<time datetime="${escapeHtml(item.prazo)}">Prazo: ${deadline}</time>` : '<span></span>'}
        ${item.url ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">Abrir atividade ↗</a>` : '<span class="homework-card__offline">Orientações em sala</span>'}
      </div>
    </article>`;
  }

  function emptyMarkup() {
    return '<p class="homework-empty">Ainda não há atividades liberadas para este trimestre.</p>';
  }

  function render(items) {
    const termsWithContent = new Set(items.map((item) => Number(item.trimestre))).size;
    totalActivities.textContent = items.length;
    totalTerms.textContent = termsWithContent;

    [1, 2, 3].forEach((term, index) => {
      const termItems = items.filter((item) => Number(item.trimestre) === term);
      counts[index].textContent = `${termItems.length} ${termItems.length === 1 ? 'atividade' : 'atividades'}`;
      grids[index].innerHTML = termItems.length ? termItems.map(cardMarkup).join('') : emptyMarkup();
    });

    status.hidden = true;
  }

  fetch('data/para-casa.json', { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then((items) => {
      if (!Array.isArray(items)) throw new Error('Formato inesperado');
      render(items);
    })
    .catch(() => {
      totalActivities.textContent = '—';
      totalTerms.textContent = '—';
      status.innerHTML = location.protocol === 'file:'
        ? 'Os dados não podem ser carregados abrindo o HTML diretamente. Use o Live Server para visualizar esta página.'
        : 'Não foi possível carregar as atividades agora. Tente novamente em alguns instantes.';
      grids.forEach((grid) => { grid.innerHTML = emptyMarkup(); });
      counts.forEach((count) => { count.textContent = '0 atividades'; });
    });
})();
