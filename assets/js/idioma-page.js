const idiomas = {
  espanhol: {
    nome: 'Espanhol', efeito: 'Língua, arte e América Latina', cor: '#b63a42',
    apresentacao: 'No Línguas - Culturas, o espanhol é uma porta para as múltiplas vozes da América Latina, da Espanha e das comunidades hispanofalantes. As propostas articulam língua, arte, circulação de ideias e experiências de internacionalização.',
    curiosidades: [
      { numero: 500, prefixo: '+', texto: 'Milhões de falantes nativos', icone: 'pessoas' },
      { numero: 20, texto: 'Países soberanos têm o espanhol como língua oficial', icone: 'globo' },
      { titulo: 'Ñ', texto: 'Um dos símbolos mais reconhecíveis da língua', simbolo: 'Ñ' },
      { titulo: 'ONU', texto: 'Uma das seis línguas oficiais da organização', icone: 'onu' },
    ],
    materiais: [{ titulo: 'Internacionalização e aprendizado de espanhol', descricao: 'Leitura de apoio sobre experiências de aprendizagem em espanhol.', capa: 'assets/capas/LIVRO_CONVERSAS.jpeg', link: 'em-construcao.html' }],
    projeto: { titulo: 'Exposição Yo Artista', texto: 'Conheça a exposição de produções artísticas desenvolvidas por estudantes nas aulas de espanhol.', imagem: 'assets/imagens/yo_artista.png', link: 'yoartista.html' },
  },
  mandarim: {
    nome: 'Mandarim', efeito: 'Escuta, escrita e encontros culturais', cor: '#9e2c2c',
    apresentacao: 'As atividades de mandarim convidam a conhecer modos de escrita, pronúncia e práticas culturais ligadas às comunidades de língua chinesa. O percurso valoriza curiosidade, escuta e aproximações cuidadosas entre contextos culturais.',
    curiosidades: [
      { titulo: '+1 bilhão', texto: 'De falantes nativos', icone: 'pessoas' },
      { numero: 4, sufixo: ' + neutro', texto: 'Tons que podem alterar o significado das palavras', simbolo: '♪' },
      { titulo: '汉字', texto: 'Caracteres chineses usados na escrita', simbolo: '汉字' },
      { titulo: 'ONU', texto: 'O chinês é uma das seis línguas oficiais', icone: 'onu' },
    ],
    materiais: [],
  },
  japones: {
    nome: 'Japonês', efeito: 'Escrita, narrativas e culturas do Japão', cor: '#ad3646',
    apresentacao: 'O japonês aproxima estudantes de sistemas de escrita, sonoridades e manifestações culturais do Japão. A aprendizagem combina observação, experimentação e diálogo com produções artísticas, narrativas e práticas do cotidiano.',
    curiosidades: [
      { numero: 3, texto: 'Sistemas de escrita: hiragana, katakana e kanji', simbolo: 'あ' },
      { numero: 120, prefixo: '+', texto: 'Milhões de falantes', icone: 'pessoas' },
      { titulo: 'Kanji', texto: 'Milhares de caracteres fazem parte da escrita', simbolo: '漢' },
      { titulo: 'Brasil–Japão', texto: 'O Brasil abriga a maior comunidade de descendentes de japoneses fora do Japão', icone: 'globo' },
    ],
    materiais: [{ titulo: 'Japonês I', descricao: 'Material didático do projeto para as primeiras experiências com a língua.', capa: 'assets/capas/Japonês.png', link: 'https://www.canva.com/design/DAGtP_79ueA/U49dBBzpc4t1j-dWX_SzJw/watch' }],
  },
  italiano: {
    nome: 'Italiano', efeito: 'Memória, arte e situações de comunicação', cor: '#16845b',
    apresentacao: 'O italiano permite investigar encontros entre língua, memória, deslocamentos, arte e cotidiano. As propostas de aprendizagem podem partir de situações comunicativas e de repertórios culturais diversos, sempre em diálogo com a experiência dos estudantes.',
    curiosidades: [
      { titulo: 'Romance', texto: 'O italiano descende do latim', simbolo: 'LATIM' },
      { titulo: 'Dante', texto: 'Teve papel fundamental na consolidação do italiano literário', placeholder: 'livro' },
      { titulo: 'Música', texto: 'Allegro, piano, forte e soprano são termos italianos', simbolo: '♫' },
      { numero: 4, texto: 'Países reconhecem o italiano como língua oficial', icone: 'globo' },
    ],
    materiais: [{ titulo: 'Le mie ricette', descricao: 'Material didático que explora a língua italiana a partir de repertórios culinários.', capa: 'assets/capas/italiano.jpg', link: 'https://canva.link/j2bdy8hd3iyn6xa' }],
  },
  latim: {
    nome: 'Latim', efeito: 'Palavras, histórias e mundos antigos', cor: '#962b2b',
    apresentacao: 'O latim é estudado como língua de textos, histórias e relações que continuam presentes em muitos aspectos do português e de outras línguas. O percurso propõe observar palavras, narrativas, cidades e formas de imaginar o mundo antigo.',
    curiosidades: [
      { numero: 2000, prefixo: '+', texto: 'Anos de história documentada', placeholder: 'templo romano' },
      { numero: 5, texto: 'Grandes línguas românicas nasceram do latim', placeholder: 'árvore linguística' },
      { titulo: 'Vaticano', texto: 'Mantém o latim como língua oficial', icone: 'globo' },
      { titulo: 'Ciência & Direito', texto: 'Milhares de termos dessas áreas têm origem latina', icone: 'formacao' },
    ],
    materiais: [{ titulo: 'Passaporte para a Roma Antiga', descricao: 'Material didático para explorar a cultura e a língua latina.', capa: 'assets/capas/Latim.png', link: 'https://www.canva.com/design/DAG1BTAJ6g4/Dkw4XLGzykUfz0pf45yYiQ/view' }],
  },
  grego: {
    nome: 'Grego Antigo', efeito: 'Alfabeto, narrativas e pensamento', cor: '#31739c',
    apresentacao: 'O grego antigo oferece contato com uma tradição escrita ampla e com questões que seguem atravessando filosofia, teatro, ciência, política e artes. As aulas podem transformar a leitura de textos e palavras em investigação histórica e cultural.',
    curiosidades: [
      { numero: 3000, prefixo: '+', texto: 'Anos de registros escritos', placeholder: 'pergaminho' },
      { numero: 24, texto: 'Letras no alfabeto grego moderno', simbolo: 'Ω' },
      { titulo: 'Ciência', texto: 'Símbolos gregos aparecem constantemente na matemática e nas ciências', simbolo: 'π' },
      { titulo: 'Alfabeto', texto: 'Deu origem, indiretamente, ao alfabeto latino', simbolo: 'Α→A' },
    ],
    materiais: [{ titulo: 'Grego Antigo', descricao: 'Material didático do projeto para a iniciação à língua e às culturas gregas.', capa: 'assets/capas/Grego Antigo.png', link: 'https://www.canva.com/design/DAGtP-W00qU/gAGPW6OIVhLmpRs0b24SXg/view' }],
  },
};

const icones = {
  globo: 'assets/icons/noun-globe-8346924.png',
  pessoas: 'assets/icons/noun-people-6426018.png',
  formacao: 'assets/icons/noun-graduation-2626819.png',
  onu: 'assets/icons/Logo_of_the_United_Nations_(B&W).svg.png',
};

function iconeCuriosidade(curiosidade) {
  if (curiosidade.icone) return `<img src="${icones[curiosidade.icone]}" alt="" class="info-icone">`;
  if (curiosidade.simbolo) return `<span class="info-icone info-icone-texto" aria-hidden="true">${curiosidade.simbolo}</span>`;
  return `<span class="info-icone info-icone-placeholder" aria-label="Ícone pendente: ${curiosidade.placeholder}">${curiosidade.placeholder}</span>`;
}

function cardInfo(curiosidade) {
  const titulo = curiosidade.numero === undefined
    ? `<h3>${curiosidade.titulo}</h3>`
    : `<h3 class="numero" data-final="${curiosidade.numero}" data-prefixo="${curiosidade.prefixo || ''}" data-sufixo="${curiosidade.sufixo || ''}">0</h3>`;
  return `<div class="info">${iconeCuriosidade(curiosidade)}${titulo}<p>${curiosidade.texto}</p></div>`;
}

function materiais(idioma) {
  if (!idioma.materiais.length) return '<p class="materiais-vazios">Os materiais didáticos deste idioma estão em preparação. Acompanhe as novidades por aqui.</p>';
  const principal = idioma.materiais[0];
  const miniaturas = idioma.materiais.map((material, indice) => `<a class="miniatura${indice === 0 ? ' ativa' : ''}" href="${material.link}" data-titulo="${material.titulo}" data-img="${material.capa}" data-link="${material.link}" data-desc="${material.descricao}"><img class="capa-miniatura" src="${material.capa}" alt="Capa de ${material.titulo}"><h3>${material.titulo}</h3></a>`).join('');
  return `<div class="material-destaque"><div class="capa-container"><a id="link-destaque" href="${principal.link}" target="_blank" rel="noopener noreferrer"><img id="img-destaque" class="capa-destaque" src="${principal.capa}" alt="Capa de ${principal.titulo}"><div class="overlay"><span class="button">Ver material</span></div></a></div><div class="texto-destaque"><h3 id="titulo-destaque">${principal.titulo}</h3><p id="descricao-destaque">${principal.descricao}</p><a id="botao-destaque" class="botao-destaque" href="${principal.link}" target="_blank" rel="noopener noreferrer">Acessar material</a></div></div><div class="grade-miniaturas">${miniaturas}</div>`;
}

function galeria() {
  const placeholder = (classe, texto) => `<div class="${classe}"><div class="idioma-placeholder-foto">${texto}</div><div class="overlay"><h3>Registro em breve</h3></div></div>`;
  return `<section class="galeria"><h1 class="subtitulo">Galeria</h1><div class="galeria-grid">${placeholder('foto-grande', 'Imagem grande em atualização')}<div class="galeria-coluna">${placeholder('foto', 'Imagem quadrada em atualização')}${placeholder('foto', 'Imagem quadrada em atualização')}</div>${placeholder('foto-vertical', 'Imagem vertical em atualização')}</div></section>`;
}

function explorar(idAtual) {
  const destinos = [['espanhol', 'Espanhol'], ['mandarim', 'Mandarim'], ['frances', 'Francês'], ['japones', 'Japonês'], ['italiano', 'Italiano'], ['latim', 'Latim'], ['grego', 'Grego']].filter(([id]) => id !== idAtual);
  return destinos.map(([id, nome]) => `<a href="${id === 'frances' ? 'id-frances.html' : `idioma-${id}.html`}" class="circulo ${id}"><div class="circulo-inner"><div class="frente">${nome}</div><div class="verso"></div></div></a>`).join('');
}

function iniciarCuriosidades(raiz) {
  const cards = raiz.querySelectorAll('.curiosidades .info');
  const revelar = (card) => {
    card.classList.add('visivel');
    const numero = card.querySelector('.numero');
    if (!numero) return;
    const final = Number(numero.dataset.final);
    const prefixo = numero.dataset.prefixo || '';
    const sufixo = numero.dataset.sufixo || '';
    const inicio = performance.now();
    const atualizar = (agora) => {
      const progresso = Math.min((agora - inicio) / 1200, 1);
      numero.textContent = `${prefixo}${Math.round(final * progresso)}${sufixo}`;
      if (progresso < 1) requestAnimationFrame(atualizar);
    };
    requestAnimationFrame(atualizar);
  };
  if (!('IntersectionObserver' in window)) {
    cards.forEach(revelar);
    return;
  }
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      revelar(entrada.target);
      observador.unobserve(entrada.target);
    });
  }, { threshold: 0.2 });
  cards.forEach((card) => observador.observe(card));
}

function renderizarPaginaIdioma() {
  const id = document.body.dataset.idioma;
  const idioma = idiomas[id];
  const raiz = document.getElementById('conteudo-idioma');
  if (!idioma || !raiz) return;
  document.documentElement.style.setProperty('--accent', idioma.cor);
  document.title = `${idioma.nome} — Línguas e Culturas`;
  const projeto = idioma.projeto ? `<section class="projeto-destaque"><a href="${idioma.projeto.link}"><img src="${idioma.projeto.imagem}" alt="Imagem da ${idioma.projeto.titulo}"><div><p>Projeto em destaque</p><h2>${idioma.projeto.titulo}</h2><p>${idioma.projeto.texto}</p></div></a></section>` : '';
  raiz.innerHTML = `<section class="banner"><div class="imgBanner idioma-banner-placeholder">Imagem do idioma em atualização</div><h1 class="titulo">${idioma.nome}</h1></section><section class="descricao"><h1 class="subtitulo">Sobre o idioma</h1><div class="presentation"><div class="presImg"><div class="idioma-placeholder-foto">Imagem e registros das atividades<br>em atualização</div></div><div class="presContent"><p class="presEffect">${idioma.efeito}</p><p class="text">${idioma.apresentacao}</p></div></div></section><section class="curiosidades">${idioma.curiosidades.map(cardInfo).join('')}</section>${projeto}<section class="materiais"><h1 class="subtitulo">Materiais e publicações</h1>${materiais(idioma)}</section>${galeria()}<section class="cta-inscricao"><div class="cta-card"><div class="cta-icone" aria-hidden="true">✦</div><div class="cta-texto"><h2>Gostou do ${idioma.nome}?</h2><p>Participe gratuitamente das oficinas do projeto Línguas e Culturas. Aprenda, compartilhe experiências e descubra o mundo pelo idioma.</p></div><a class="cta-botao" href="em-construcao.html">Quero participar</a></div></section><section class="explorar-idiomas"><div class="explorar-card"><div class="idiomas-icone" aria-hidden="true">◎</div><div class="explorar-texto"><h2>Explore outros idiomas</h2><p>Cada língua abre uma nova janela para o mundo. Conheça também as outras frentes do projeto.</p></div><div class="filtro-idiomas">${explorar(id)}</div></div></section>`;
  iniciarCuriosidades(raiz);
  raiz.querySelectorAll('.miniatura').forEach((miniatura) => miniatura.addEventListener('click', (evento) => {
    evento.preventDefault();
    raiz.querySelector('.miniatura.ativa')?.classList.remove('ativa');
    miniatura.classList.add('ativa');
    raiz.querySelector('#titulo-destaque').textContent = miniatura.dataset.titulo;
    raiz.querySelector('#descricao-destaque').textContent = miniatura.dataset.desc;
    raiz.querySelector('#img-destaque').src = miniatura.dataset.img;
    raiz.querySelector('#img-destaque').alt = `Capa de ${miniatura.dataset.titulo}`;
    ['#link-destaque', '#botao-destaque'].forEach((seletor) => raiz.querySelector(seletor).href = miniatura.dataset.link);
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarPaginaIdioma();
  const botao = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (botao && menu) botao.addEventListener('click', () => { const aberto = menu.classList.toggle('open'); botao.classList.toggle('open', aberto); botao.setAttribute('aria-expanded', String(aberto)); });
});
