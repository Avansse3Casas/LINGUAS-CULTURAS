document.addEventListener('DOMContentLoaded', () => {
  //JS do cabecalho
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    btn.setAttribute('aria-expanded', String(open));
    });
  }

  //JS do Seletor
  document.querySelectorAll(".circulo").forEach(el => {
            el.addEventListener("mouseenter", () => {
                el.classList.add("animando");
            });
            el.addEventListener("mouseleave", () => {
                setTimeout(() => {
                    el.classList.remove("animando");
                }, 600);
            });
        });

  //JS do Carrossel
  const track = document.querySelector(".custom-track");
    const slides = document.querySelectorAll(".carousel-slide");
    const dotsContainer = document.querySelector(".carousel-dots");

  if (track && dotsContainer && slides.length) {
    let index = 0;
    let interval;

    slides.forEach((_, i) => { 
      const dot = document.createElement("span");
      dot.addEventListener("click", () => {
        index = i;
        updateSlide();
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    });

    function updateSlide() {
      track.style.transform = `translateX(-${index * 100}%)`;
      document.querySelectorAll(".carousel-dots span")
        .forEach(dot => dot.classList.remove("active"));
      document.querySelectorAll(".carousel-dots span")[index]
        .classList.add("active");
    }

    const nextButton = document.querySelector(".carousel-next");
    const prevButton = document.querySelector(".carousel-prev");

    if (nextButton) {
    nextButton.onclick = () => {
      index = (index + 1) % slides.length;
      updateSlide();
      resetAutoplay();
    };
    }

    if (prevButton) {
    prevButton.onclick = () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlide();
      resetAutoplay();
    };
    }

    function startAutoplay() {
      interval = setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlide();
      }, 4000);
    }
    function resetAutoplay() {
      clearInterval(interval);
      startAutoplay();
    }

    updateSlide();
    startAutoplay();
  }
  //Aqui, adicionarei a proxima secao JS
  });
