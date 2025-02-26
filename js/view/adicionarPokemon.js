import { getApi } from "../api/api.js";
import { criarCardPokemonEquipe } from "../componentes/cardPokemonEquipe.js";
import { alterarContadorPokemon } from "../utilitarias/contadorPokemonEquipe.js";

export let minhaEquipe = JSON.parse(localStorage.getItem('MinhaEquipe')) || []

if(minhaEquipe){
    criarCardPokemonEquipe(minhaEquipe)
    alterarContadorPokemon(minhaEquipe.length)
}

export async function adicionarPokemonParaEquipe(){
    const btnsAdiconarPokemon = document.querySelector('.btn-adicionar');
    btnsAdiconarPokemon.addEventListener('click', async () => {

        if(minhaEquipe.length === 6){
            return alert('Quantidade maxima de pokemon na sua equipe')
        }
        const idDoPokemon = Number(btnsAdiconarPokemon.id) + 1;
        const pokemonParaEquipe = await getApi(idDoPokemon) 
        minhaEquipe.push(pokemonParaEquipe)
        localStorage.setItem('MinhaEquipe', JSON.stringify(minhaEquipe))
        alterarContadorPokemon(minhaEquipe.length)
        criarCardPokemonEquipe(minhaEquipe)
    })
}

export function removePokemonDaEquibe(btns) {
    btns.forEach((btn) => { 
        btn.addEventListener("click", () => {
            const index = btn.id
            minhaEquipe.splice(index, 1); 
            localStorage.setItem("MinhaEquipe", JSON.stringify(minhaEquipe))
            alterarContadorPokemon(minhaEquipe.length)
            criarCardPokemonEquipe(minhaEquipe); 
        });
    });
}