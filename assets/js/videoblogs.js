//JS do Cabecalho
    const btn  = document.getElementById('hamburger');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });

    //JS da pagina
    const cards = document.querySelectorAll(".card");
    const player = document.querySelector("#videoPlayer");
    const videoNome = document.querySelector("#videoNome");
    const videoData = document.querySelector("#videoData");
    const videoTurma = document.querySelector("#videoTurma");
    
    /*Ativa o primeiro video e suas infos*/
    const videoInicial = cards[0].dataset.video;
    player.src = `https://www.youtube.com/embed/${videoInicial}`;
    videoNome.textContent = cards[0].querySelector(".nome").textContent;
    videoData.textContent = cards[0].querySelector(".data").textContent;
    videoTurma.textContent = cards[0].querySelector(".turma").textContent;
    /*Ativa o primeiro card*/
    cards[0].classList.add("ativo");

    cards.forEach(card => {
        const videoId = card.dataset.video;
        /*Adiciona as thumbs*/
        card.querySelector(".thumb").src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        /*Monitora cliques*/
        card.addEventListener("click", () => {
            /*Adiciona efeito de ativo*/
            cards.forEach(card => {
                card.classList.remove("ativo");
            });
                card.classList.add("ativo");

            /*Atualiza infos do player*/
            const nome = card.querySelector(".nome").textContent;
            const data = card.querySelector(".data").textContent;
            const turma = card.querySelector(".turma").textContent;
            videoNome.textContent = nome;
            videoData.textContent = data;
            videoTurma.textContent = turma;

            /*Atualiza cor do selo*/
            const classeCor = card.querySelector(".turma").classList[1];
            videoTurma.classList.remove(videoTurma.classList[1]);
            videoTurma.classList.add(classeCor);

            /*Troca o video e scrolla de volta para o player*/
            player.src = `https://www.youtube.com/embed/${videoId}`;
            player.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

        });
    });
