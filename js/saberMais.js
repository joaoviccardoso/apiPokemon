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

// Função para associar o evento de clique nos botões de som no modo celular
function pegarSomParaCelular(){
    // Seleciona todos os botões de som no modo celular
    const btnsSomPokemonCelular = document.querySelectorAll(".btnSomCelular");
    
    // Adiciona um evento de clique a cada botão de som
    btnsSomPokemonCelular.forEach(function(btn){
        btn.addEventListener('click', function(){
            // Pega o ID do botão e extrai o número do Pokémon a partir do ID
            const idDoBtnSom = this.id;
            const idDoBtnSomString = idDoBtnSom.split("-")[1];
            const numeroDoIdDoBtnSom = Number(idDoBtnSomString) - 1;
            
            // Chama a função para tocar o som do Pokémon
            somDoPokemon(numeroDoIdDoBtnSom);
        });
    });
}

// Função para exibir mais informações sobre o Pokémon selecionado
function saberMaisSobrePokemon(numeroDoIdDoBtn){
    // Exibe as informações do Pokémon no console (apenas para debug)
    console.log(listaDosPokemons[numeroDoIdDoBtn]);
    
    // Atualiza o container com as informações detalhadas do Pokémon
    containerSaberMais.innerHTML = `
        <div class="card cardStatus">
            <img src="${listaDosPokemons[numeroDoIdDoBtn].sprites.other.showdown.front_default}" class="card-img-top img-saberMais" alt="${listaDosPokemons[numeroDoIdDoBtn].name}">
            <div class="card-body">
              <h5 class="card-title">${listaDosPokemons[numeroDoIdDoBtn].name}</h5>
              <p class="card-text">${listaDosPokemons[numeroDoIdDoBtn].types.map(type => type.type.name)}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Peso: ${listaDosPokemons[numeroDoIdDoBtn].weight / 10}Kg</li>
              <li class="list-group-item">Altura: ${listaDosPokemons[numeroDoIdDoBtn].height / 10}m</li>
            </ul>
            <div class="card-body">
              <button type="button" id="botaoSaberMais-${listaDosPokemons[numeroDoIdDoBtn].id}" class="btn btn-saberMais d-none d-sm-block">Som do Pokemon</button>
              <button type="button" id="botaoSomCelular-${listaDosPokemons[numeroDoIdDoBtn].id}" class="btn btnSomCelular d-sm-none">Som</button>
            </div>
          </div>
    `;
    
    // Associa o evento ao botão de som após a criação do card
    btnSaberMaisPokemon();
    pegarSomParaCelular();
}

// Função para tocar o som do Pokémon ao clicar no botão "Som"
function btnSaberMaisPokemon(){
    // Seleciona o botão "Som do Pokémon" dentro do card
    const btnSaberMais = document.querySelector(".btn-saberMais"); 
    
    // Adiciona o evento de clique ao botão
    btnSaberMais.addEventListener('click', function() {
        // Pega o ID do botão e extrai o número do Pokémon a partir do ID
        const idBtnSaberMais = this.id;
        const idBtnSaberMaisString = idBtnSaberMais.split("-")[1];
        const idBtnSaberMaisNumero = Number(idBtnSaberMaisString) - 1;
        
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

