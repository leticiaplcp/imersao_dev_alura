let cardContainer = document.querySelector("main");
let campoBusca = document.querySelector("header input");
let dados = [];

async function carregarDadosIniciais() {
    let resposta = await fetch ("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

function iniciarBusca() {
    let termoBusca = campoBusca.value.toLowerCase();
    let dadosFiltrados = dados.filter(dado => {
        return dado.nome.toLowerCase().includes(termoBusca) || 
               dado.descricao.toLowerCase().includes(termoBusca);
    });
    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar os novos
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.ano}</p>
        <p>${dado.descricao}</p>
        <a href="#">Saiba mais</a>
        `;
        cardContainer.appendChild(article);
    
    }
}

carregarDadosIniciais();