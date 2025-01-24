import { getApi } from "./api/api.js";
import { criarPokemonsFiltrados } from "./componentes/cardPesquisarNome.js";
import { criarCardPokemon } from "./componentes/cards.js";

// Define o número de Pokémons a ser carregado (151 no caso, da primeira geração)
let contadorDePokemons = 151;
// Array que vai armazenar todos os dados dos Pokémons buscados
let listaDosPokemons = [];
// Seleciona o botão de pesquisar Pokémon
const btnPesquisar = document.getElementById("btnBuscar");

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

// Adiciona um evento de clique ao botão de pesquisar
btnPesquisar.addEventListener("click", async () => {

    // Pega o valor do campo de pesquisa (input)
    const inputPesquisar = document.getElementById("campoPesquisa").value;
  
    try{
    // Verifica se o campo de pesquisa está vazio ou contém apenas espaços
        if(inputPesquisar == "" || inputPesquisar.trim() === ""){
            alert("Digite um nome de um pokemon ou seu número"); // Exibe um alerta se o campo estiver vazio
            return; // Sai da função para evitar execução desnecessária
        }

    // Converte o valor do input para minúsculas e remove acentos
    const inputPesquisarMinusculo = removerAcentos(inputPesquisar.toLowerCase());
    
    const pokemon = await getApi(inputPesquisarMinusculo)
    console.log(pokemon)
    criarPokemonsFiltrados(pokemon)

    }catch{
        alert(`coloque o nome completo do pokemon`)
    }

});

// Função que remove acentos de uma string para facilitar a pesquisa
function removerAcentos(nome){
    // Normaliza a string e remove caracteres diacríticos (acentos)
    return nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Chama a função principal para começar o processo de carregamento dos Pokémons
pokemons();
