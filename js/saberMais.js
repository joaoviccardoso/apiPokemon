// Seleciona o container onde as informações detalhadas do Pokémon serão exibidas
const containerSaberMais = document.querySelector(".aside-direito");

// Função para associar o evento de clique nos botões "Saber mais"
function pegarBtnsSaberMais(){
    // Seleciona todos os botões "Saber mais"
    const btnsPokemons = document.querySelectorAll(".btn-success");
    
    // Adiciona um evento de clique a cada botão
    btnsPokemons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Pega o ID do botão e extrai o número do Pokémon a partir do ID
            const idDoBtn = this.id;
            const idDoBtnString = idDoBtn.split("-")[1];
            const numeroDoIdDoBtn = Number(idDoBtnString) - 1;
            
            // Chama a função para exibir as informações detalhadas do Pokémon
            saberMaisSobrePokemon(numeroDoIdDoBtn);
        });
    });
}

// Função para exibir mais informações sobre o Pokémon selecionado
function saberMaisSobrePokemon(numeroDoIdDoBtn){
    // Exibe as informações do Pokémon no console (apenas para debug)
    console.log(listaDosPokemons[numeroDoIdDoBtn]);
    
    // Atualiza o container com as informações detalhadas do Pokémon
    containerSaberMais.innerHTML = `
        <div class="card text-bg-dark cardStatus">
            <div class="container-botao-fechar">
                <button type="button" class="btn-fechar" id="fecharJanela"><img src="./img/perto.png" alt="fechar" width="40"></button>
            </div>
            <img src="${listaDosPokemons[numeroDoIdDoBtn].sprites.front_default}" class="img-card-pokemonSaberMais ${listaDosPokemons[numeroDoIdDoBtn].types[0].type.name}" alt="${listaDosPokemons[numeroDoIdDoBtn].nome}">
            <ul class="m-0 p-0 d-flex flex-column">

                <li class="d-flex flex-column justify-content-center align-items-center">
                    <p class="card-text">#${listaDosPokemons[numeroDoIdDoBtn].id}</p>
                    <h5 class="card-title">${listaDosPokemons[numeroDoIdDoBtn].name}</h5>
                </li>
                <li class="d-flex justify-content-center">
                    ${listaDosPokemons[numeroDoIdDoBtn].types.map(type => `<p class="card-tipo-pai ${type.type.name}">${type.type.name}</p>`).join('')}
                </li>
                <li class="d-flex">
                    <p class="card-atriFisico">Peso: ${listaDosPokemons[numeroDoIdDoBtn].weight / 10}Kg</p>
                    <p class="card-atriFisico">Altura: ${listaDosPokemons[numeroDoIdDoBtn].height / 10}m</p>
                </li>
            </ul>
            <div class="card-body">
              <button type="button" id="botaoSaberMais-${listaDosPokemons[numeroDoIdDoBtn].id}" class="btn-saberMais btn-som botao">Som do Pokemon</button>
            </div>
        </div>
    `;
    
    // Associa o evento ao botão de som após a criação do card
    btnSaberMaisPokemon();
    fechar()
}

// Função para tocar o som do Pokémon ao clicar no botão "Som"
function btnSaberMaisPokemon(){
    // Seleciona o botão "Som do Pokémon" dentro do card
    const btnSaberMais = document.querySelector(".btn-som"); 
    console.log(btnSaberMais)
    
    // Adiciona o evento de clique ao botão
    btnSaberMais.addEventListener('click', function() {
        // Pega o ID do botão e extrai o número do Pokémon a partir do ID
        const idBtnSaberMais = this.id;
        console.log(idBtnSaberMais)
        const idBtnSaberMaisString = idBtnSaberMais.split("-")[1];
        const idBtnSaberMaisNumero = Number(idBtnSaberMaisString) - 1;
        console.log(idBtnSaberMaisNumero)
        
        // Chama a função para tocar o som do Pokémon
        somDoPokemon(idBtnSaberMaisNumero);
    });
}

// Seleciona a imagem da Pokébola para o evento de clique
const imgPokebola = document.querySelector(".imgPokebola");

// Adiciona um evento de clique à imagem da Pokébola para tocar o som
imgPokebola.addEventListener("click", (event) =>{
    // Pega o ID da imagem clicada
    const idDaImg = event.target.id;
    
    // Chama a função para tocar o som do Pokémon
    somDoPokemon(idDaImg);
});

// Função que toca o som do Pokémon correspondente ao ID
function somDoPokemon(id){
    // Cria um novo elemento de áudio com o som do Pokémon
    const audio = new Audio(`${listaDosPokemons[id].cries.latest}`);
    
    // Toca o som do Pokémon
    audio.play();
}

function fechar(){
    const botaoFecharJanela = document.getElementById("fecharJanela");

    botaoFecharJanela.addEventListener("click", (event) =>{
        event.preventDefault()

        containerSaberMais.innerHTML = `
            <img src="./img/image.png" alt="logo pokemon" class="logoPokemon">
        `
    })
}


