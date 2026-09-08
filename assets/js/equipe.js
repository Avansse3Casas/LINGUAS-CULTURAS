// Para adicionar ou remover alguém, edite apenas esta lista.
// Quando as fotos estiverem disponíveis, informe o caminho em `foto`.
const membros = [
  { nome: 'Alexia Miranda Santos', formacao: 'Graduação em Letras — Língua Inglesa', funcao: 'Bolsista PMET e de iniciação científica', projeto: 'Língua Espanhola no COLTEC · Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Jéssica Laura Rodrigues Gonçalves', formacao: 'Graduação em Letras — Língua Espanhola', funcao: 'Bolsista PMET — Licenciatura', projeto: 'Língua Espanhola no COLTEC · Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Maria Eduarda Sampaio Ferreira', formacao: 'Graduação em Letras — Língua Francesa', funcao: 'Bolsista de extensão e de iniciação científica FAPEMIG', projeto: 'Línguas-Culturas no COLTEC · Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Sarah Carolliny Romão Lima', formacao: 'Graduação em Letras — Língua Francesa', funcao: 'Estagiária de Língua Francesa', projeto: 'Línguas-Culturas no COLTEC' },
  { nome: 'Isabella Canuto Bucker Franchini', formacao: 'Graduação em Letras — Linguística', funcao: 'Bolsista de iniciação científica FAPEMIG e de extensão', projeto: 'Línguas-Culturas no COLTEC · Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Daniele Helena da Silveira', formacao: 'Mestranda em Literatura e graduada em Letras — Grego', funcao: 'Bolsista de iniciação científica FAPEMIG e de extensão', projeto: 'Línguas-Culturas no COLTEC · Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Fernanda Buldrini Barreto', formacao: 'Graduação em Letras — Latim', funcao: 'Bolsista de extensão', projeto: 'Línguas-Culturas no COLTEC' },
  { nome: 'Henrico Reis Barbosa', formacao: 'Mestrado em Engenharia de Automação — Língua Japonesa', funcao: 'Docente voluntário', projeto: 'Línguas-Culturas no COLTEC' },
  { nome: 'Elisa de Oliveira Silva', formacao: 'Graduação em Letras — Língua Japonesa', funcao: 'Docente voluntária', projeto: 'Línguas-Culturas no COLTEC' },
  { nome: 'Ricardo Jianhong Li', formacao: 'Graduação em Engenharia na UFMG — Mandarim', funcao: 'Bolsista de extensão em parceria com o Instituto Confúcio UFMG', projeto: 'COLTEC–Confúcio UFMG: Mandarim e Summer School' },
  { nome: 'Pan', formacao: 'Professora de Mandarim', funcao: 'Parceira internacional do Instituto Confúcio UFMG', projeto: 'COLTEC–Confúcio UFMG: Mandarim e Summer School' },
  { nome: 'Marilina Parziale', formacao: 'Professora de Italiano', funcao: 'Parceira internacional do Consulado da Itália', projeto: 'Línguas-Culturas no COLTEC' },
  { nome: 'Rafael', formacao: 'Técnico em Eletrônica', funcao: 'Pesquisador júnior — Bolsista FAPEMIG', projeto: 'Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Anthonela', formacao: 'Técnica em Desenvolvimento de Sistemas', funcao: 'Pesquisadora júnior — Bolsista FAPEMIG', projeto: 'Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Jéssica Juliana', formacao: 'Cinema — Belas Artes', funcao: 'Bolsista de extensão', projeto: 'Línguas-Culturas no COLTEC' },
];

function iniciais(nome) {
  const partes = nome.trim().split(/\s+/);
  return `${partes[0][0]}${partes.length > 1 ? partes.at(-1)[0] : ''}`.toUpperCase();
}

function retrato(membro) {
  if (membro.foto) return `<img class="member-photo" src="${membro.foto}" alt="Foto de ${membro.nome}">`;
  return `<div class="member-photo member-photo-placeholder" role="img" aria-label="Foto de ${membro.nome} ainda não disponível">${iniciais(membro.nome)}</div>`;
}

document.getElementById('team-grid').innerHTML = membros.map((membro) => `
  <article class="member-card">
    ${retrato(membro)}
    <h3>${membro.nome}</h3>
    <p class="member-function">${membro.funcao}</p>
    <p class="member-education">${membro.formacao}</p>
    <p class="member-project"><span>Atuação</span>${membro.projeto}</p>
  </article>
`).join('');

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const aberto = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', aberto);
    hamburger.setAttribute('aria-expanded', String(aberto));
    hamburger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });
}
