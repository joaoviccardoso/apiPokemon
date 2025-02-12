import { listaDosPokemons } from "../app.js";
import { btnSaberMaisPokemon } from "../utilitarias/pegarIdBtn.js";


// Seleciona o container onde as informações detalhadas do Pokémon serão exibidas
const containerSaberMais = document.querySelector(".aside-direito");

// Função para exibir mais informações sobre o Pokémon selecionado
export function saberMaisSobrePokemon(numeroDoIdDoBtn, cadeiaEvolutivaDoPokemon){
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

            <h3 class="">Cadeia Evolutiva</h3>
            <ul class="listaCadeiaEvolutiva d-flex justify-content-center gap-3 ${listaDosPokemons[numeroDoIdDoBtn].types[0].type.name}">
                ${cadeiaEvolutivaDoPokemon.map(pokemon => `

                    ${pokemon.minLevel ? `<p class="fontTextos fontLevel d-flex justify-content-center align-items-center">LVL: ${pokemon.minLevel}</p>` : ''}
                    <li class="${pokemon.nome} d-flex flex-column">
                        <img class="img_cabecalho" src="${pokemon.imagem}" alt="${pokemon.nome}" width="60">
                        <p class="fontTextos d-flex justify-content-center">${pokemon.nome}</p>
                    </li>
                    
                `).join('')}
            </ul>

            <div class="card-body">
              <button type="button" id="botaoSaberMais-${listaDosPokemons[numeroDoIdDoBtn].id}" class="btn-saberMais btn-som botao">Som do Pokemon</button>
            </div>
            
        </div>
    `;
    
    // Associa o evento ao botão de som após a criação do card
    console.log(cadeiaEvolutivaDoPokemon)
    btnSaberMaisPokemon();
    fechar()
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


