const idiomas = {
  espanhol: {
    nome: 'Espanhol', nativo: 'Español', cor: '#c43b45',
    apresentacao: 'No Línguas - Culturas, o espanhol é uma porta para as múltiplas vozes da América Latina, da Espanha e das comunidades hispanofalantes. As atividades articulam língua, arte, circulação de ideias e experiências de internacionalização.',
    curiosidades: [
      ['Muitas vozes', 'O espanhol muda de sonoridade, vocabulário e expressões conforme a região em que é falado.'],
      ['Perto de nós', 'O contato com países hispanofalantes faz do espanhol uma língua importante nas relações brasileiras na América do Sul.'],
      ['Arte em movimento', 'Música, cinema, literatura e artes visuais são caminhos para explorar as culturas em espanhol.'],
      ['Aprender em diálogo', 'Conversar, interpretar e comparar repertórios ajuda a perceber como língua e cultura caminham juntas.'],
    ],
    experiencias: [
      ['Exposição Yo Artista', 'Produções artísticas de estudantes transformam a aprendizagem de espanhol em mostra cultural.'],
      ['Culturas hispanofalantes', 'Atividades podem aproximar diferentes territórios, histórias e modos de expressão.'],
      ['Produção criativa', 'Textos, áudios e imagens permitem experimentar o idioma para além do livro didático.'],
    ],
    materiais: [{ titulo: 'Internacionalização e aprendizado de espanhol', descricao: 'Leitura de apoio sobre experiências de aprendizagem em espanhol.', capa: 'assets/capas/LIVRO_CONVERSAS.jpeg' }],
    projeto: { titulo: 'Exposição Yo Artista', texto: 'Conheça a exposição de produções artísticas desenvolvidas por estudantes nas aulas de espanhol.', imagem: 'assets/imagens/yo_artista.png', url: 'yoartista.html' },
  },
  mandarim: {
    nome: 'Mandarim', nativo: '普通话', cor: '#a72e2e',
    apresentacao: 'As atividades de mandarim convidam a conhecer modos de escrita, pronúncia e práticas culturais ligadas às comunidades de língua chinesa. O percurso valoriza curiosidade, escuta e aproximações cuidadosas entre contextos culturais.',
    curiosidades: [
      ['Tons importam', 'Na pronúncia do mandarim, a altura e o contorno da voz ajudam a distinguir palavras.'],
      ['Escrita visual', 'Os caracteres chineses têm uma longa história e são aprendidos também por meio da observação de seus traços.'],
      ['Datas e celebrações', 'Calendários, festivais e referências familiares oferecem muitos temas para investigação cultural.'],
      ['Aprender por etapas', 'Pequenos repertórios de fala, escuta e escrita podem construir uma base sólida de aprendizagem.'],
    ],
    experiencias: [
      ['Práticas de escrita', 'Explorar os traços dos caracteres e os instrumentos de escrita é uma experiência visual e corporal.'],
      ['Escuta e pronúncia', 'Atividades de oralidade ajudam a perceber os tons e ritmos da língua.'],
      ['Cultura em pesquisa', 'Propostas futuras podem reunir gastronomia, arte, história e cotidiano.'],
    ],
    materiais: [],
  },
  japones: {
    nome: 'Japonês', nativo: '日本語', cor: '#b93c48',
    apresentacao: 'O japonês aproxima estudantes de sistemas de escrita, sonoridades e manifestações culturais do Japão. A aprendizagem combina observação, experimentação e diálogo com produções artísticas, narrativas e práticas do cotidiano.',
    curiosidades: [
      ['Três sistemas', 'Hiragana, katakana e kanji aparecem juntos na escrita japonesa e cumprem funções diferentes.'],
      ['Ritmo da fala', 'A língua trabalha com unidades sonoras que ajudam a organizar a pronúncia e a escuta.'],
      ['Estações do ano', 'Mudanças de estação são referências frequentes em celebrações, artes e vocabulário cotidiano.'],
      ['Cultura pop e tradição', 'Mangás, cinema, jogos, culinária e festivais podem abrir muitas portas de investigação.'],
    ],
    experiencias: [
      ['Leitura e escrita', 'Atividades podem apresentar os alfabetos e os primeiros caracteres em contextos significativos.'],
      ['Narrativas visuais', 'Imagens e histórias ajudam a discutir linguagem, arte e circulação cultural.'],
      ['Oficinas culturais', 'Espaço para futuras experiências de caligrafia, origami e expressões artísticas.'],
    ],
    materiais: [{ titulo: 'Japonês I', descricao: 'Material didático do projeto para as primeiras experiências com a língua.', capa: 'assets/capas/Japonês.png' }],
  },
  italiano: {
    nome: 'Italiano', nativo: 'Italiano', cor: '#16845b',
    apresentacao: 'O italiano permite investigar encontros entre língua, memória, deslocamentos, arte e cotidiano. As propostas de aprendizagem podem partir de situações comunicativas e de repertórios culturais diversos, sempre em diálogo com a experiência dos estudantes.',
    curiosidades: [
      ['Língua românica', 'O italiano compartilha origens históricas com o português, o espanhol, o francês e outras línguas românicas.'],
      ['Muitos sotaques', 'Variações regionais tornam a escuta do italiano uma oportunidade de conhecer diferentes territórios.'],
      ['Arte e cidades', 'Arquitetura, cinema, música e literatura compõem caminhos possíveis para estudar a língua.'],
      ['Palavras viajantes', 'Muitas palavras ligadas à música, à culinária e às artes circularam do italiano para outras línguas.'],
    ],
    experiencias: [
      ['Conversas do cotidiano', 'Situações reais de fala e escuta podem orientar práticas iniciais de comunicação.'],
      ['Culinária e memória', 'Receitas e histórias familiares oferecem material para explorar vocabulário e cultura.'],
      ['Produções culturais', 'Espaço para futuras atividades com cinema, canções e narrativas italianas.'],
    ],
    materiais: [{ titulo: 'Le mie ricette', descricao: 'Material didático que explora a língua italiana a partir de repertórios culinários.', capa: 'assets/capas/italiano.jpg' }],
  },
  latim: {
    nome: 'Latim', nativo: 'Lingua Latina', cor: '#9d2929',
    apresentacao: 'O latim é estudado como língua de textos, histórias e relações que continuam presentes em muitos aspectos do português e de outras línguas. O percurso propõe observar palavras, narrativas, cidades e formas de imaginar o mundo antigo.',
    curiosidades: [
      ['Legado linguístico', 'O latim está na origem do português e de outras línguas românicas.'],
      ['Língua de textos', 'Inscrições, poemas, cartas e narrativas preservam diferentes usos históricos do latim.'],
      ['Palavras em comum', 'Comparar vocabulário pode revelar famílias de palavras e mudanças de significado ao longo do tempo.'],
      ['Roma e além', 'O estudo do latim abre discussões sobre circulação cultural no Mediterrâneo antigo.'],
    ],
    experiencias: [
      ['Viagem pela Roma Antiga', 'Textos e mapas podem construir percursos por espaços, personagens e acontecimentos históricos.'],
      ['Etimologias em investigação', 'A pesquisa de palavras aproxima o latim do repertório presente no português.'],
      ['Narrativas clássicas', 'Mitos e histórias criam pontes entre leitura, teatro, artes e imaginação.'],
    ],
    materiais: [{ titulo: 'Passaporte para a Roma Antiga', descricao: 'Material didático para explorar a cultura e a língua latina.', capa: 'assets/capas/Latim.png' }],
  },
  grego: {
    nome: 'Grego Antigo', nativo: 'Ἑλληνικὴ γλῶσσα', cor: '#31739c',
    apresentacao: 'O grego antigo oferece contato com uma tradição escrita ampla e com questões que seguem atravessando filosofia, teatro, ciência, política e artes. As aulas podem transformar a leitura de textos e palavras em investigação histórica e cultural.',
    curiosidades: [
      ['Alfabeto grego', 'O alfabeto grego é uma referência importante para a história de vários sistemas de escrita do Ocidente.'],
      ['Palavras que permanecem', 'Termos ligados à filosofia, à ciência e às artes ainda circulam em muitas áreas do conhecimento.'],
      ['Teatro e narrativa', 'Tragédias, comédias e epopeias abrem conversas sobre linguagem, cena e sociedade.'],
      ['Mundo mediterrâneo', 'O estudo do grego permite olhar para redes de troca e encontro entre cidades antigas.'],
    ],
    experiencias: [
      ['Primeiros passos no alfabeto', 'A leitura e a escrita das letras ajudam a construir uma aproximação gradual com a língua.'],
      ['Mitos em circulação', 'Narrativas antigas podem inspirar leituras, recriações e diálogos com a cultura contemporânea.'],
      ['Palavras da ciência', 'Investigar raízes gregas aproxima o idioma de vocabulários presentes em diversas disciplinas.'],
    ],
    materiais: [{ titulo: 'Grego Antigo', descricao: 'Material didático do projeto para a iniciação à língua e às culturas gregas.', capa: 'assets/capas/Grego Antigo.png' }],
  },
};

function criarElemento(tag, texto, classe) {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (texto) elemento.textContent = texto;
  return elemento;
}

function renderizarPaginaIdioma() {
  const idioma = idiomas[document.body.dataset.idioma];
  const raiz = document.getElementById('conteudo-idioma');
  if (!idioma || !raiz) return;

  document.documentElement.style.setProperty('--accent', idioma.cor);
  document.title = `${idioma.nome} — Línguas e Culturas`;

  const curiosidades = idioma.curiosidades.map(([titulo, texto]) => `<article class="curiosidade"><h3>${titulo}</h3><p>${texto}</p></article>`).join('');
  const experiencias = idioma.experiencias.map(([titulo, texto]) => `<article class="experiencia"><h3>${titulo}</h3><p>${texto}</p></article>`).join('');
  const materiais = idioma.materiais.length
    ? idioma.materiais.map((material) => `<article class="material-card"><img src="${material.capa}" alt="Capa de ${material.titulo}"><div class="material-card__texto"><h3>${material.titulo}</h3><p>${material.descricao}</p></div></article>`).join('')
    : '<p class="idioma-vazio">Os materiais didáticos deste idioma estão em preparação. Acompanhe as novidades por aqui.</p>';
  const projeto = idioma.projeto
    ? `<section class="idioma-projeto"><div><p class="section-eyebrow">Projeto em destaque</p><h2>${idioma.projeto.titulo}</h2><p>${idioma.projeto.texto}</p><a class="botao-projeto" href="${idioma.projeto.url}">Conhecer o projeto</a></div><img src="${idioma.projeto.imagem}" alt="Imagem do projeto ${idioma.projeto.titulo}"></section>`
    : '';

  raiz.innerHTML = `
    <section class="idioma-hero"><div><p class="idioma-hero__eyebrow">Línguas - Culturas · COLTEC UFMG</p><h1>${idioma.nome}</h1><p class="idioma-hero__native">${idioma.nativo}</p></div></section>
    <div class="idioma-conteudo">
      <section class="idioma-intro"><div><p class="section-eyebrow">Apresentação</p><h2>Aprender língua é viver cultura.</h2><p>${idioma.apresentacao}</p></div><div class="placeholder-visual">Imagem e registros das atividades<br>em atualização</div></section>
      ${projeto}
      <section class="idioma-secao"><header><p class="section-eyebrow">Para descobrir</p><h2>Curiosidades</h2></header><div class="curiosidades-grid">${curiosidades}</div></section>
      <section class="idioma-secao"><header><p class="section-eyebrow">Materiais do projeto</p><h2>Materiais e produções</h2></header><div class="materiais-grid">${materiais}</div></section>
      <section class="idioma-secao"><header><p class="section-eyebrow">Possibilidades</p><h2>Experiências de aprendizagem</h2></header><div class="experiencias-grid">${experiencias}</div></section>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarPaginaIdioma();

  const botao = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!botao || !menu) return;

  botao.addEventListener('click', () => {
    const aberto = menu.classList.toggle('open');
    botao.classList.toggle('open', aberto);
    botao.setAttribute('aria-expanded', String(aberto));
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });
});
