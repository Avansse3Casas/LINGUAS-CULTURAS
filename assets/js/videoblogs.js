const cards = [...document.querySelectorAll('.video-card')];
const player = document.querySelector('#videoPlayer');
const videoNome = document.querySelector('#videoNome');
const videoData = document.querySelector('#videoData');
const videoTurma = document.querySelector('#videoTurma');

const thumbnailQualities = ['maxresdefault', 'sddefault', 'hqdefault'];

function loadThumbnail(image, videoId, attempt = 0) {
  const quality = thumbnailQualities[attempt];
  image.dataset.thumbnailAttempt = String(attempt);
  image.src = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

cards.forEach((card) => {
  const image = card.querySelector('.thumb');
  const videoId = card.dataset.video;

  image.addEventListener('error', () => {
    const nextAttempt = Number(image.dataset.thumbnailAttempt) + 1;
    if (nextAttempt < thumbnailQualities.length) loadThumbnail(image, videoId, nextAttempt);
  });

  image.addEventListener('load', () => {
    const nextAttempt = Number(image.dataset.thumbnailAttempt) + 1;
    const isYouTubePlaceholder = image.naturalWidth <= 120;
    if (isYouTubePlaceholder && nextAttempt < thumbnailQualities.length) {
      loadThumbnail(image, videoId, nextAttempt);
    }
  });

  loadThumbnail(image, videoId);
});

function selectVideo(card, shouldScroll = false) {
  cards.forEach((item) => {
    const isSelected = item === card;
    item.classList.toggle('active', isSelected);
    item.setAttribute('aria-pressed', String(isSelected));
  });

  const { video, name, year, group } = card.dataset;
  player.src = `https://www.youtube-nocookie.com/embed/${video}?rel=0`;
  player.title = `Videoblog de ${name}`;
  videoNome.textContent = name;
  videoData.textContent = year;
  videoTurma.textContent = `Turma ${group}`;

  if (shouldScroll) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelector('.player-card').scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
  }
}

cards.forEach((card) => {
  card.addEventListener('click', () => selectVideo(card, true));
});

if (cards.length > 0) selectVideo(cards[0]);
