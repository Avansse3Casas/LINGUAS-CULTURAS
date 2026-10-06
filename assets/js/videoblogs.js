const cards = [...document.querySelectorAll('.video-card')];
const player = document.querySelector('#videoPlayer');
const videoNome = document.querySelector('#videoNome');
const videoData = document.querySelector('#videoData');
const videoTurma = document.querySelector('#videoTurma');
const playerFrame = document.querySelector('.player-frame');
const localPlayerFallback = document.querySelector('#localPlayerFallback');
const localPlayerThumbnail = document.querySelector('#localPlayerThumbnail');
const isLocalFile = window.location.protocol === 'file:';

const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });
}

const thumbnailQualities = ['maxresdefault', 'sddefault', 'hqdefault'];

function loadThumbnail(image, videoId, attempt = 0) {
  const quality = thumbnailQualities[attempt];
  image.dataset.videoId = videoId;
  image.dataset.thumbnailAttempt = String(attempt);
  image.src = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

function enableThumbnailFallback(image) {
  image.addEventListener('error', () => {
    const nextAttempt = Number(image.dataset.thumbnailAttempt) + 1;
    if (nextAttempt < thumbnailQualities.length) {
      loadThumbnail(image, image.dataset.videoId, nextAttempt);
    }
  });

  image.addEventListener('load', () => {
    const nextAttempt = Number(image.dataset.thumbnailAttempt) + 1;
    const isYouTubePlaceholder = image.naturalWidth <= 120;
    if (isYouTubePlaceholder && nextAttempt < thumbnailQualities.length) {
      loadThumbnail(image, image.dataset.videoId, nextAttempt);
    }
  });
}

cards.forEach((card) => {
  const image = card.querySelector('.thumb');
  enableThumbnailFallback(image);
  loadThumbnail(image, card.dataset.video);
});

enableThumbnailFallback(localPlayerThumbnail);

function selectVideo(card, shouldScroll = false) {
  cards.forEach((item) => {
    const isSelected = item === card;
    item.classList.toggle('active', isSelected);
    item.setAttribute('aria-pressed', String(isSelected));
  });

  const { video, name, year, group } = card.dataset;
  player.title = `Videoblog de ${name}`;
  videoNome.textContent = name;
  videoData.textContent = year;
  videoTurma.textContent = `Turma ${group}`;

  if (isLocalFile) {
    player.hidden = true;
    localPlayerFallback.hidden = false;
    playerFrame.classList.add('player-frame--local');
    localPlayerFallback.href = `https://www.youtube.com/watch?v=${video}`;
    localPlayerThumbnail.alt = `Miniatura do videoblog de ${name}`;
    loadThumbnail(localPlayerThumbnail, video);
  } else {
    const origin = encodeURIComponent(window.location.origin);
    player.hidden = false;
    localPlayerFallback.hidden = true;
    playerFrame.classList.remove('player-frame--local');
    player.src = `https://www.youtube.com/embed/${video}?rel=0&origin=${origin}`;
  }

  if (shouldScroll) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelector('.player-card').scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
  }
}

cards.forEach((card) => {
  card.addEventListener('click', () => selectVideo(card, true));
});

if (cards.length > 0) selectVideo(cards[0]);
