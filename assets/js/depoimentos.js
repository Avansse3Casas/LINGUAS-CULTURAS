const depoimentosCursos = [
  {
    idioma: 'grego', idiomaNome: 'Grego', imagem: 'assets/depoimentos/1_grego.png',
    autor: 'Chaylla Mariângela Fraga Silva',
    texto: 'Apesar de ter sido apresentada ao grego através de um material bem redigido e uma professora apaixonada pelo assunto, acredito que o curso abriu portas para uma vontade maior de consumir conteúdos da língua e praticá-la.',
  },
  {
    idioma: 'grego', idiomaNome: 'Grego', imagem: 'assets/depoimentos/2_grego.png',
    autor: 'Inaê Dutra',
    texto: 'Eu gosto muito da cultura grega. Durante a pandemia, li Percy Jackson e me apaixonei. Quando vi no COLTEC que teria oficina de grego antigo, achei que seria maravilhoso. E foi.',
  },
  {
    idioma: 'italiano', idiomaNome: 'Italiano', imagem: 'assets/depoimentos/1_italiano.png',
    autor: 'Isabel Colen',
    texto: 'A professora é muito querida, auxilia no aprendizado e fala em italiano durante todo o curso.',
  },
  {
    idioma: 'italiano', idiomaNome: 'Italiano', imagem: 'assets/depoimentos/2_italiano.png',
    autor: 'Kamila Ramos Silva',
    texto: 'A professora sempre se esforçou para falar até mesmo português, tem uma ótima proficiência e é uma ótima professora. A cada aula eu entendia cada vez mais e adorava a professora.',
  },
  {
    idioma: 'japones', idiomaNome: 'Japonês', imagem: 'assets/depoimentos/1_japones.png',
    autor: 'Estudante da turma de japonês (2025/1)',
    texto: 'Participar das oficinas de Japonês no COLTEC foi muito interessante. Gostei do clima amigável da turma e de compartilhar os aprendizados. Cada aula me deixava com vontade de aprender mais.',
  },
  {
    idioma: 'latim', idiomaNome: 'Latim', imagem: 'assets/depoimentos/1_latim.png',
    autor: 'Noemy Batista da Silva',
    texto: 'Foi bem didático e divertido. Perceber o modo como o latim interfere na nossa vida até os dias de hoje é curioso e bastante interessante.',
  },
];

function criarCardDepoimento(depoimento) {
  return `<figure class="depoimento-card">
    <img src="${depoimento.imagem}" alt="" loading="lazy" decoding="async">
    <figcaption>
      <span class="depoimento-idioma">${depoimento.idiomaNome}</span>
      <span class="depoimento-autor">${depoimento.autor}</span>
      <span class="sr-only">Depoimento: ${depoimento.texto}</span>
    </figcaption>
  </figure>`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-depoimentos-section]').forEach((marcador) => {
    const idioma = marcador.dataset.idioma;
    const selecionados = idioma === 'todos'
      ? depoimentosCursos
      : depoimentosCursos.filter((depoimento) => depoimento.idioma === idioma);
    if (!selecionados.length) {
      marcador.remove();
      return;
    }
    const titulo = idioma === 'todos' ? 'Quem participa, conta' : 'Depoimentos do curso';
    const introducao = idioma === 'todos'
      ? 'Conheça algumas experiências de estudantes que participaram das oficinas do projeto.'
      : 'Veja como estudantes descrevem sua experiência com as oficinas deste idioma.';
    marcador.outerHTML = `<section class="depoimentos-section" aria-labelledby="depoimentos-${idioma}">
      <h2 id="depoimentos-${idioma}" class="subtitulo">${titulo}</h2>
      <p class="depoimentos-intro">${introducao}</p>
      <div class="depoimentos-grid">${selecionados.map(criarCardDepoimento).join('')}</div>
    </section>`;
  });
});
