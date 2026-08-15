const idiomas = {
  espanhol: {
    nome: 'Espanhol', efeito: 'Língua, arte e América Latina', cor: '#b63a42',
    apresentacao: 'No Línguas - Culturas, o espanhol é uma porta para as múltiplas vozes da América Latina, da Espanha e das comunidades hispanofalantes. As propostas articulam língua, arte, circulação de ideias e experiências de internacionalização.',
    curiosidades: [['Variações', 'O espanhol apresenta diferentes sotaques e expressões conforme a região.'], ['América do Sul', 'O contato com países hispanofalantes torna o idioma muito presente no contexto brasileiro.'], ['Arte em movimento', 'Música, cinema, literatura e artes visuais são caminhos para aprender.'], ['Em diálogo', 'Conversar e comparar repertórios mostra como língua e cultura caminham juntas.']],
    materiais: [{ titulo: 'Internacionalização e aprendizado de espanhol', descricao: 'Leitura de apoio sobre experiências de aprendizagem em espanhol.', capa: 'assets/capas/LIVRO_CONVERSAS.jpeg', link: 'em-construcao.html' }],
    projeto: { titulo: 'Exposição Yo Artista', texto: 'Conheça a exposição de produções artísticas desenvolvidas por estudantes nas aulas de espanhol.', imagem: 'assets/imagens/yo_artista.png', link: 'yoartista.html' },
  },
  mandarim: {
    nome: 'Mandarim', efeito: 'Escuta, escrita e encontros culturais', cor: '#9e2c2c',
    apresentacao: 'As atividades de mandarim convidam a conhecer modos de escrita, pronúncia e práticas culturais ligadas às comunidades de língua chinesa. O percurso valoriza curiosidade, escuta e aproximações cuidadosas entre contextos culturais.',
    curiosidades: [['Tons', 'Na pronúncia do mandarim, o contorno da voz ajuda a distinguir palavras.'], ['Caracteres', 'A escrita chinesa é composta por caracteres aprendidos também pela observação de seus traços.'], ['Celebrações', 'Festivais e referências familiares oferecem muitos temas para investigação cultural.'], ['Por etapas', 'Pequenos repertórios de fala, escuta e escrita constroem uma base de aprendizagem.']],
    materiais: [],
  },
  japones: {
    nome: 'Japonês', efeito: 'Escrita, narrativas e culturas do Japão', cor: '#ad3646',
    apresentacao: 'O japonês aproxima estudantes de sistemas de escrita, sonoridades e manifestações culturais do Japão. A aprendizagem combina observação, experimentação e diálogo com produções artísticas, narrativas e práticas do cotidiano.',
    curiosidades: [['Três sistemas', 'Hiragana, katakana e kanji aparecem juntos na escrita japonesa.'], ['Ritmo', 'Unidades sonoras ajudam a organizar a pronúncia e a escuta.'], ['Estações', 'Mudanças de estação são referências frequentes em celebrações e artes.'], ['Repertórios', 'Mangás, cinema, jogos, culinária e festivais abrem caminhos de investigação.']],
    materiais: [{ titulo: 'Japonês I', descricao: 'Material didático do projeto para as primeiras experiências com a língua.', capa: 'assets/capas/Japonês.png', link: 'https://www.canva.com/design/DAGtP_79ueA/U49dBBzpc4t1j-dWX_SzJw/watch' }],
  },
  italiano: {
    nome: 'Italiano', efeito: 'Memória, arte e situações de comunicação', cor: '#16845b',
    apresentacao: 'O italiano permite investigar encontros entre língua, memória, deslocamentos, arte e cotidiano. As propostas de aprendizagem podem partir de situações comunicativas e de repertórios culturais diversos, sempre em diálogo com a experiência dos estudantes.',
    curiosidades: [['Língua românica', 'O italiano compartilha origens históricas com o português e outras línguas românicas.'], ['Sotaques', 'Variações regionais tornam a escuta do italiano uma oportunidade de conhecer territórios.'], ['Arte e cidades', 'Arquitetura, cinema, música e literatura compõem caminhos para estudar a língua.'], ['Palavras viajantes', 'Muitas palavras ligadas à música e às artes circularam do italiano para outras línguas.']],
    materiais: [{ titulo: 'Le mie ricette', descricao: 'Material didático que explora a língua italiana a partir de repertórios culinários.', capa: 'assets/capas/italiano.jpg', link: 'https://canva.link/j2bdy8hd3iyn6xa' }],
  },
  latim: {
    nome: 'Latim', efeito: 'Palavras, histórias e mundos antigos', cor: '#962b2b',
    apresentacao: 'O latim é estudado como língua de textos, histórias e relações que continuam presentes em muitos aspectos do português e de outras línguas. O percurso propõe observar palavras, narrativas, cidades e formas de imaginar o mundo antigo.',
    curiosidades: [['Legado', 'O latim está na origem do português e de outras línguas românicas.'], ['Textos', 'Inscrições, poemas, cartas e narrativas preservam diferentes usos históricos do latim.'], ['Palavras em comum', 'Comparar vocabulário pode revelar famílias de palavras e mudanças de sentido.'], ['Roma e além', 'O estudo do latim abre discussões sobre circulação cultural no Mediterrâneo antigo.']],
    materiais: [{ titulo: 'Passaporte para a Roma Antiga', descricao: 'Material didático para explorar a cultura e a língua latina.', capa: 'assets/capas/Latim.png', link: 'https://www.canva.com/design/DAG1BTAJ6g4/Dkw4XLGzykUfz0pf45yYiQ/view' }],
  },
  grego: {
    nome: 'Grego Antigo', efeito: 'Alfabeto, narrativas e pensamento', cor: '#31739c',
    apresentacao: 'O grego antigo oferece contato com uma tradição escrita ampla e com questões que seguem atravessando filosofia, teatro, ciência, política e artes. As aulas podem transformar a leitura de textos e palavras em investigação histórica e cultural.',
    curiosidades: [['Alfabeto', 'O alfabeto grego é uma referência importante para a história de sistemas de escrita do Ocidente.'], ['Palavras', 'Termos ligados à filosofia, à ciência e às artes ainda circulam em muitas áreas.'], ['Teatro', 'Tragédias, comédias e epopeias abrem conversas sobre linguagem, cena e sociedade.'], ['Mediterrâneo', 'O estudo do grego permite olhar para redes de troca entre cidades antigas.']],
    materiais: [{ titulo: 'Grego Antigo', descricao: 'Material didático do projeto para a iniciação à língua e às culturas gregas.', capa: 'assets/capas/Grego Antigo.png', link: 'https://www.canva.com/design/DAGtP-W00qU/gAGPW6OIVhLmpRs0b24SXg/view' }],
  },
};

const icones = ['assets/icons/noun-globe-8346924.png', 'assets/icons/noun-people-6426018.png', 'assets/icons/noun-graduation-2626819.png', 'assets/icons/Logo_of_the_United_Nations_(B&W).svg.png'];

function cardInfo([titulo, texto], indice) {
  return `<div class="info"><img src="${icones[indice]}" alt="" class="info-icone"><h3>${titulo}</h3><p>${texto}</p></div>`;
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

function renderizarPaginaIdioma() {
  const id = document.body.dataset.idioma;
  const idioma = idiomas[id];
  const raiz = document.getElementById('conteudo-idioma');
  if (!idioma || !raiz) return;
  document.documentElement.style.setProperty('--accent', idioma.cor);
  document.title = `${idioma.nome} — Línguas e Culturas`;
  const projeto = idioma.projeto ? `<section class="projeto-destaque"><a href="${idioma.projeto.link}"><img src="${idioma.projeto.imagem}" alt="Imagem da ${idioma.projeto.titulo}"><div><p>Projeto em destaque</p><h2>${idioma.projeto.titulo}</h2><p>${idioma.projeto.texto}</p></div></a></section>` : '';
  raiz.innerHTML = `<section class="banner"><div class="imgBanner idioma-banner-placeholder">Imagem do idioma em atualização</div><h1 class="titulo">${idioma.nome}</h1></section><section class="descricao"><h1 class="subtitulo">Sobre o idioma</h1><div class="presentation"><div class="presImg"><div class="idioma-placeholder-foto">Imagem e registros das atividades<br>em atualização</div></div><div class="presContent"><p class="presEffect">${idioma.efeito}</p><p class="text">${idioma.apresentacao}</p></div></div></section><section class="curiosidades">${idioma.curiosidades.map(cardInfo).join('')}</section>${projeto}<section class="materiais"><h1 class="subtitulo">Materiais e publicações</h1>${materiais(idioma)}</section>${galeria()}<section class="cta-inscricao"><div class="cta-card"><div class="cta-icone" aria-hidden="true">✦</div><div class="cta-texto"><h2>Gostou do ${idioma.nome}?</h2><p>Participe gratuitamente das oficinas do projeto Línguas e Culturas. Aprenda, compartilhe experiências e descubra o mundo pelo idioma.</p></div><a class="cta-botao" href="em-construcao.html">Quero participar</a></div></section><section class="explorar-idiomas"><div class="explorar-card"><div class="idiomas-icone" aria-hidden="true">◎</div><div class="explorar-texto"><h2>Explore outros idiomas</h2><p>Cada língua abre uma nova janela para o mundo. Conheça também as outras frentes do projeto.</p></div><div class="filtro-idiomas">${explorar(id)}</div></div></section>`;
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
