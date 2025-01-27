import { criarPokemonPeloNomeOuID} from "./cards.js";
import { getApi } from "../api/api.js";
import { removerAcentos } from "../utilitarias/formatarText.js";

export async function filtrarPokemonPorNomeOuId(){
    // Pega o valor do campo de pesquisa (input)
    const inputPesquisar = document.getElementById("campoPesquisa").value;
   
    try{
    // Verifica se o campo de pesquisa está vazio ou contém apenas espaços
        if(inputPesquisar.trim() === ""){
            alert("Digite um nome de um pokemon ou seu número"); // Exibe um alerta se o campo estiver vazio
            return; // Sai da função para evitar execução desnecessária
        }

    // Converte o valor do input para minúsculas e remove acentos
    const inputPesquisarMinusculo = removerAcentos(inputPesquisar.toLowerCase());
    
    const pokemon = await getApi(inputPesquisarMinusculo)
    console.log(pokemon)
    criarPokemonPeloNomeOuID(pokemon)

    }catch{
        alert(`coloque o nome completo do pokemon`)
    }
}


