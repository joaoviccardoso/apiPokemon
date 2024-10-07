// Seleciona o container onde os cards dos Pokémons serão exibidos
const containerPokemons = document.querySelector('.lista__pokedex');

// Define o número de Pokémons a ser carregado (151 no caso, da primeira geração)
let contadorDePokemons = 151;
// Array que vai armazenar todos os dados dos Pokémons buscados
let listaDosPokemons = [];

// Função principal para carregar os Pokémons
async function pokemons() {
    // Loop para buscar os dados de cada Pokémon, de 1 até o número definido (151)
    for (let i = 1; i <= contadorDePokemons; i++) {
        await getApi(i) // Chama a função que busca a API para cada id de Pokémon
    }
    // Após todos os Pokémons serem carregados, chama outras funções (não estão implementadas aqui)
    pegarBtnsSaberMais() // Função para gerenciar botões "Saber mais"
    pegarSomParaCelular() // Função para gerenciar botões "Som" no celular
}

// Função assíncrona que busca os dados do Pokémon na API usando o ID
async function getApi(id) {
    // Faz a requisição para a API do Pokémon passando o id
    const respostaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // Converte a resposta da API para JSON (dados do Pokémon)
    const listaPokemons = await respostaApi.json();
    // Adiciona o Pokémon atual ao array que contém todos os Pokémons
    listaDosPokemons.push(listaPokemons);
    // Cria o card do Pokémon na tela
    criarCardPokemon(listaPokemons);
}

// Função para criar e exibir o card de cada Pokémon
function criarCardPokemon(pokemon) {
    // Adiciona o HTML do card dentro do containerPokemons, criando um item da lista para cada Pokémon
    containerPokemons.innerHTML += `
        <li class="lista__pokemon">
            <div class="card">
                <!-- Imagem do Pokémon -->
                <img src="${pokemon.sprites.front_default}" class="card-img-top img-card-pokemon" alt="${pokemon.name}">
                <div class="card-body">
                    <!-- Número de identificação do Pokémon -->
                    <p class="card-text">#${pokemon.id.toString()}</p>
                    <!-- Nome do Pokémon, com a primeira letra maiúscula -->
                    <h5 class="card-title">${pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h5>
                    <!-- Tipos do Pokémon (ex: Fogo, Água) -->
                    <p class="card-text">${pokemon.types.map(type => type.type.name)}</p>
                    <!-- Botão "Saber mais" visível apenas em dispositivos não móveis -->
                    <button type="button" id="botao-${pokemon.id}" class="btn btn-success d-none d-sm-block">Saber mais</button>
                    <!-- Botão "Som" visível apenas em dispositivos móveis -->
                    <button type="button" id="botaoSomCelular-${pokemon.id}" class="btn btnSomCelular d-sm-none">Som</button>
                </div>
            </div>
        </li>
    `;
}

// Chama a função principal para começar o processo de carregamento dos Pokémons
pokemons();
