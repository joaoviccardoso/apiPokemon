import { getApi } from "../api/api.js";
import { criarCardPokemonEquipe } from "../componentes/cardPokemonEquipe.js";

export let minhaEquipe = JSON.parse(localStorage.getItem('MinhaEquipe')) || []

if(minhaEquipe){
    criarCardPokemonEquipe(minhaEquipe)
}

export async function adicionarPokemonParaEquipe(){
    const btnsAdiconarPokemon = document.querySelector('.btn-adicionar');
    btnsAdiconarPokemon.addEventListener('click', async () => {
        const idDoPokemon = Number(btnsAdiconarPokemon.id) + 1;
        const pokemonParaEquipe = await getApi(idDoPokemon) 
        minhaEquipe.push(pokemonParaEquipe)
        localStorage.setItem('MinhaEquipe', JSON.stringify(minhaEquipe))
        criarCardPokemonEquipe(minhaEquipe)
    })
}

export function removePokemonDaEquibe(btns) {
    btns.forEach((btn) => { 
        btn.addEventListener("click", (event) => {
            const container = event.target.closest(".btn-remover").dataset.index;
            const index = btn.id
            minhaEquipe.splice(index, 1); 
            localStorage.setItem("MinhaEquipe", JSON.stringify(minhaEquipe))
            criarCardPokemonEquipe(minhaEquipe); 
        });
    });
}