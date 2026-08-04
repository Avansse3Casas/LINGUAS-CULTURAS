// Para adicionar ou remover alguém, edite apenas esta lista.
  const membros = [
    { nome: "Nome do membro", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80", formacao: "Graduação ou área de formação", funcao: "Bolsista de extensão", lattes: "#" },
    { nome: "Nome do membro", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80", formacao: "Graduação ou área de formação", funcao: "Bolsista de iniciação científica", lattes: "#" },
    { nome: "Nome do membro", foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", formacao: "Graduação ou área de formação", funcao: "Colaborador(a)", lattes: "#" }
  ];
  document.getElementById("team-grid").innerHTML = membros.map((membro) => `
    <a class="member-card" href="${membro.lattes}" target="_blank" rel="noopener noreferrer" aria-label="Ver currículo Lattes de ${membro.nome}">
      <img src="${membro.foto}" alt="Foto de ${membro.nome}"><h3>${membro.nome}</h3><p class="member-function">${membro.funcao}</p><p class="member-education">${membro.formacao}</p><span class="member-link">Currículo Lattes <span aria-hidden="true">↗</span></span>
    </a>`).join("");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger.addEventListener("click", () => { const open = hamburger.classList.toggle("open"); mobileMenu.classList.toggle("open", open); hamburger.setAttribute("aria-expanded", String(open)); hamburger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu"); });
