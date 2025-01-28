import { pegarBtnsSaberMais } from "../utilitarias/pegarIdBtn.js";

// Seleciona o container onde os cards dos Pokémons serão exibidos
const containerPokemons = document.querySelector('.lista__pokedex');

// Função para criar e exibir o card de cada Pokémon
export function criarCardPokemon(pokemon) {
    // Adiciona o HTML do card dentro do containerPokemons, criando um item da lista para cada Pokémon
    containerPokemons.innerHTML += `
        <li class="lista__pokemon">
            <div class="card text-bg-dark cardPokemons">
                <!-- Imagem do Pokémon -->
                <img src="${pokemon.sprites.front_default}" class="img-card-pokemon ${pokemon.types[0].type.name}" alt="${pokemon.name}">
                <div class="card-body-main">
                    <!-- Número de identificação do Pokémon -->
                    <p class="card-text">#${pokemon.id.toString()}</p>
                    <!-- Nome do Pokémon, com a primeira letra maiúscula -->
                    <h5 class="card-title">${pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h5>
                    <!-- Botão "Saber mais" visível apenas em dispositivos não móveis -->
                    <button type="button" id="botao-${pokemon.id}" class="btn-success btn-saberMais botao">Saber mais</button>
                </div>
            </div>
        </li>
    `;
}


//------------------------------------------------------------------------------------------------------------------------------------------------------

// Função que cria os cards dos Pokémons filtrados e insere no container
export function criarPokemonPeloNomeOuID(resuldado){

        containerPokemons.innerHTML = "";
    // Itera sobre o array de resultados e cria um card para cada Pokémon
        containerPokemons.innerHTML += `
         <li class="lista__pokemon">
            <div class="card text-bg-dark">
                <img src="${resuldado.sprites.front_default}" class="img-card-pokemon ${resuldado.types[0].type.name}" alt="${resuldado.name}">
                <div class="card-body">
                    <p class="card-text">#${resuldado.id.toString()}</p>
                    <h5 class="card-title">${resuldado.name[0].toUpperCase() + resuldado.name.substring(1)}</h5>
                    <button type="button" id="botao-${resuldado.id}" class="btn-success btn-saberMais botao">Saber mais</button>
                </div>
            </div>
        </li>`

        // Chama as funções que lidam com o botão "Saber mais" e o botão "Som"
        pegarBtnsSaberMais();
}

//------------------------------------------------------------------------------------------------------------------------------------------------------

export function criarPokemonsFiltrados(resuldados){
    containerPokemons.innerHTML = "";
    // Itera sobre o array de resultados e cria um card para cada Pokémon
    resuldados.forEach(resuldado => { 
        containerPokemons.innerHTML += `
         <li class="lista__pokemon">
            <div class="card text-bg-dark">
                <img src="${resuldado.sprites.front_default}" class="img-card-pokemon ${resuldado.types[0].type.name}" alt="${resuldado.name}">
                <div class="card-body">
                    <p class="card-text">#${resuldado.id.toString()}</p>
                    <h5 class="card-title">${resuldado.name[0].toUpperCase() + resuldado.name.substring(1)}</h5>
                    <button type="button" id="botao-${resuldado.id}" class="btn-success btn-saberMais botao">Saber mais</button>
                </div>
            </div>
        </li>
        `;
        // Chama as funções que lidam com o botão "Saber mais" e o botão "Som"
        pegarBtnsSaberMais();
        
    });
}

