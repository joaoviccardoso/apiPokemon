import { getApi } from "./api/api.js";
import { criarCardPokemon } from "./componentes/cards.js";
import { filtrarPokemonPorNomeOuId } from "./componentes/pesquisarNome.js";
import { filtrarPorSelectType } from "./componentes/pesquisarSelect.js";
import { somDoPokemon } from "./componentes/somPokemon.js";
import { verificarBtnThema } from "./utilitarias/mudarCor.js";
import { pegarBtnsSaberMais } from "./utilitarias/pegarIdBtn.js";

// Variável que controla o estado atual do tema (inicia como tema claro)
export let thisIsDarkModel = {
    tema: false
};

// Define o número de Pokémons a ser carregado (151 no caso, da primeira geração)
let contadorDePokemons = 151;
// Array que vai armazenar todos os dados dos Pokémons buscados
export let listaDosPokemons = [];

// Função principal para carregar os Pokémons
async function pokemons() {
    // Loop para buscar os dados de cada Pokémon, de 1 até o número definido (151)
    for (let i = 1; i <= contadorDePokemons; i++) {
        const pokemon = await getApi(i) // Chama a função que busca a API para cada id de Pokémon
        listaDosPokemons.push(pokemon)
        criarCardPokemon(pokemon);
        pegarBtnsSaberMais() // Função para gerenciar botões "Saber mais"
    }
    
}

// Seleciona o botão de pesquisar por nome 
const btnPesquisar = document.getElementById("btnBuscar");
btnPesquisar.addEventListener("click", filtrarPokemonPorNomeOuId)

// Seleciona o botão de filtrar
const btnFiltrar = document.getElementById("btnFiltrar");
btnFiltrar.addEventListener('click', filtrarPorSelectType);

//Seleciona o botão que vai mudar o tema para adicionar um evento de click(claro/escuro)
const btnMudarCor = document.getElementById("mudarCor");
btnMudarCor.addEventListener('click', verificarBtnThema);

// Seleciona a imagem da Pokébola para o evento de clique
const imgPokebola = document.querySelector(".imgPokebola");

imgPokebola.addEventListener("click", (event) =>{
    // Pega o ID da imagem clicada
    const idDaImg = event.target.id;
    
    somDoPokemon(idDaImg);
});

// Chama a função principal para começar o processo de carregamento dos Pokémons
pokemons();

