import { getEvolucaoApi } from "../api/api.js";
import { saberMaisSobrePokemon } from "../componentes/saberMaisCard.js";
import { somDoPokemon } from "./somPokemon.js";

// Função para associar o evento de clique nos botões "Saber mais"
export async function pegarBtnsSaberMais(){
    // Seleciona todos os botões "Saber mais"
    const btnsPokemons = document.querySelectorAll(".btn-success");
    
    // Adiciona um evento de clique a cada botão
    btnsPokemons.forEach( async function(btn) {
        btn.addEventListener('click', async function() {
            // Pega o ID do botão e extrai o número do Pokémon a partir do ID
            const idDoBtn = this.id;
            const idDoBtnString = idDoBtn.split("-")[1];
            const numeroDoIdDoBtn = Number(idDoBtnString) - 1;
            const cadeiaEvolutivaDoPokemon = await getEvolucaoApi(idDoBtnString)

            // Chama a função para exibir as informações detalhadas do Pokémon
            saberMaisSobrePokemon(numeroDoIdDoBtn, cadeiaEvolutivaDoPokemon);
        });
    });
}

//-------------------------------------------------------------------------------------------------

// Função para tocar o som do Pokémon ao clicar no botão "Som"
export function btnSaberMaisPokemon(){
    // Seleciona o botão "Som do Pokémon" dentro do card
    const btnSaberMais = document.querySelector(".btn-som"); 
    console.log(btnSaberMais)
    
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