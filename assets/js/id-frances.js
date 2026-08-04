// Script do cabecalho mobile
    const btn = document.getElementById("hamburger");
    const menu = document.getElementById("mobile-menu");

    if (btn && menu) {
      btn.addEventListener("click", () => {
        const aberto = menu.classList.toggle("open");
        btn.classList.toggle("open", aberto);
        btn.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
        btn.setAttribute("aria-expanded", String(aberto));
      });
    }

    //Script das bolinhas de idiomas
    document.querySelectorAll(".explorar-idiomas .circulo").forEach(el => {
      el.addEventListener("mouseenter", () => {
        el.classList.add("animando");
      });
      el.addEventListener("mouseleave", () => {
        setTimeout(() => {
          el.classList.remove("animando");
        }, 600);
      });
    });

    //Script das curiosidades
    //Crio uma funcao que aumenta o numero atual do card
    function iniciarContador(numero) {
      let atual = Number(numero.textContent);
      let final = Number(numero.dataset.final);
      //Ja que sao 60fps, significa que terei 120 quadros de animacao
      const duracao = 2000;
      const fps = 60;
      const passo = (final-atual)/120;
      //SetInterval é tipo um loop while em C, com um timer entre iteracoes (50ms aqui)
      const intervalo = setInterval(() => {
        atual += passo;
        numero.textContent = Math.ceil(atual);
        if (atual >= final) {
          atual = final;
          numero.textContent = final;
          //Encerra o loop
          clearInterval(intervalo);
        }
      }, 17);
    }
    const curiosidades = document.querySelectorAll(".info");
    //Crio uma constante observadora / vigia, que vigiará "entries"
    const observador = new IntersectionObserver((entries) => {
        entries.forEach((item, index) => {
          //se o item de entries for observado...
          if(item.isIntersecting) {
            setTimeout(() => {
              //Torna o item visivel, coleta o numero que ele contem e incia o contador
              item.target.classList.add("visivel");
              const numero = item.target.querySelector(".numero");
              //Nao inicia o contador caso o card nao tenha um numero (ONU)
              if (numero) {
                iniciarContador(numero);
              }
              //Cancela a vigilia
              observador.unobserve(item.target);
            }, index*100);
          }
        });
    });
    //Inicia a vigilia, mandando a constante observador observe cada curiosidade
    curiosidades.forEach(item => {
      observador.observe(item);
    });
    //Script dos materiais didaticos
    const destaque = document.querySelector(".material-destaque");
    const miniaturas = document.querySelectorAll(".miniatura");
    miniaturas.forEach(item => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        destaque.classList.add("fade");
        setTimeout(() => {
          const minDestaque = document.querySelector(".ativa");
          minDestaque.classList.remove("ativa");
          item.classList.add("ativa");
          document.getElementById("titulo-destaque")
            .textContent = item.dataset.titulo;
          document.getElementById("descricao-destaque")
            .textContent = item.dataset.desc;
          document.getElementById("img-destaque")
            .src = item.dataset.img;
          document.getElementById("link-destaque")
            .href = item.dataset.link;
          document.getElementById("botao-destaque")
            .href = item.dataset.link;
          destaque.classList.remove("fade");
        }, 300);
      });
    });
