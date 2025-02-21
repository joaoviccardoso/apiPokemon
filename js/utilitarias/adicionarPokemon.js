import { getApi } from "../api/api.js";

export async function adicionarPokemonParaEquipe(){
    const btnsAdiconarPokemon = document.querySelector('.btn-adicionar');
    btnsAdiconarPokemon.addEventListener('click', async () => {
        const idDoPokemon = Number(btnsAdiconarPokemon.id) + 1;
        const pokemonParaEquipe = await getApi(idDoPokemon) 
        
    })
}