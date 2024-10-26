// script.js

// Adiciona o evento de clique aos botões "Ver Mais"
document.querySelectorAll('.ver-mais').forEach((btn) => {
    btn.addEventListener('click', () => {
        const conteudo = btn.nextElementSibling; // Seleciona o conteúdo expandido
        conteudo.classList.toggle('d-none'); // Alterna a visibilidade
    });
});

// Botão "Voltar ao topo"
const topBtn = document.getElementById('topBtn');

window.onscroll = () => {
    topBtn.style.display = window.scrollY > 300 ? 'block' : 'none'; // Mostra ou esconde o botão dependendo da rolagem
};

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolagem suave para o topo
};
