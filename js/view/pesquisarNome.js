import { criarPokemonPeloNomeOuID } from "../componentes/cards.js";
import { removerAcentos } from "../utilitarias/formatarText.js";
import { mostrarDialog } from "../utilitarias/modal.js";
import { listaDosPokemons } from "../app.js";

export async function filtrarPokemonPorNomeOuId(){
    // Pega o valor do campo de pesquisa (input)
    const inputPesquisar = document.getElementById("campoPesquisa").value;
   
    // Verifica se o campo de pesquisa está vazio ou contém apenas espaços
        if(inputPesquisar.trim() === ""){
        mostrarDialog("Digite um nome de um pokemon ou seu número"); // Exibe um alerta se o campo estiver vazio
           return; // Sai da função para evitar execução desnecessária
        }

    // Converte o valor do input para minúsculas e remove acentos
    const inputPesquisarMinusculo = removerAcentos(inputPesquisar.toLowerCase());

    const pokemonsFiltrados = listaDosPokemons.filter(pokemon => 
        removerAcentos(pokemon.name.toLowerCase()).includes(inputPesquisarMinusculo) || 
        pokemon.id.toString() === inputPesquisarMinusculo
    );

    document.getElementById("campoPesquisa").value = "";

    if(pokemonsFiltrados.length === 0){
        mostrarDialog("Nem um pokemon encotrando")
        return
    }

    if(pokemonsFiltrados){
        criarPokemonPeloNomeOuID(pokemonsFiltrados)
    }
}


