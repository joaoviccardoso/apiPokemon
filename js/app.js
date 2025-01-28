import { getApi } from "./api/api.js";
import { criarCardPokemon } from "./componentes/cards.js";
import { filtrarPokemonPorNomeOuId } from "./componentes/pesquisarNome.js";
import { filtrarPorSelectType } from "./componentes/pesquisarSelect.js";
import { somDoPokemon } from "./componentes/somPokemon.js";
import { pegarBtnsSaberMais } from "./utilitarias/pegarIdBtn.js";

// Define o número de Pokémons a ser carregado (151 no caso, da primeira geração)
let contadorDePokemons = 151;
// Array que vai armazenar todos os dados dos Pokémons buscados
export let listaDosPokemons = [];
// Seleciona o botão de pesquisar Pokémon

// Função principal para carregar os Pokémons
async function pokemons() {
    // Loop para buscar os dados de cada Pokémon, de 1 até o número definido (151)
    for (let i = 1; i <= contadorDePokemons; i++) {
        const pokemon = await getApi(i) // Chama a função que busca a API para cada id de Pokémon
        listaDosPokemons.push(pokemon)
        criarCardPokemon(pokemon);
    }
    console.log(listaDosPokemons)
    // Após todos os Pokémons serem carregados, chama outras funções
    pegarBtnsSaberMais() // Função para gerenciar botões "Saber mais"
}

// Seleciona o botão de pesquisar por nome 
const btnPesquisar = document.getElementById("btnBuscar");
// Adiciona um evento de clique ao botão de pesquisar
btnPesquisar.addEventListener("click", filtrarPokemonPorNomeOuId)

// Seleciona o botão de filtrar
const btnFiltrar = document.getElementById("btnFiltrar");
// Adiciona um evento de clique ao botão de filtrar
btnFiltrar.addEventListener('click', filtrarPorSelectType);

// Seleciona a imagem da Pokébola para o evento de clique
const imgPokebola = document.querySelector(".imgPokebola");

// Adiciona um evento de clique à imagem da Pokébola para tocar o som
imgPokebola.addEventListener("click", (event) =>{
    // Pega o ID da imagem clicada
    const idDaImg = event.target.id;
    
    // Chama a função para tocar o som do Pokémon
    somDoPokemon(idDaImg);
});


// Chama a função principal para começar o processo de carregamento dos Pokémons
pokemons();
