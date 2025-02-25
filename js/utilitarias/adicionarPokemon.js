import { getApi } from "../api/api.js";
import { criarCardPokemonEquipe } from "../componentes/cardPokemonEquipe.js";

export let minhaEquipe = []

export async function adicionarPokemonParaEquipe(){
    const btnsAdiconarPokemon = document.querySelector('.btn-adicionar');
    btnsAdiconarPokemon.addEventListener('click', async () => {
        const idDoPokemon = Number(btnsAdiconarPokemon.id) + 1;
        const pokemonParaEquipe = await getApi(idDoPokemon) 
        minhaEquipe.push(pokemonParaEquipe)
        criarCardPokemonEquipe(minhaEquipe)
    })
}

export function removePokemonDaEquibe(btns) {
    btns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const index = event.target.closest(".btn-remover").dataset.index;
            minhaEquipe.splice(index, 1); 
            criarCardPokemonEquipe(minhaEquipe); 
        });
    });
}