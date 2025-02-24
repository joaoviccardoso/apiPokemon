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