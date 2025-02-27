import { extrairEvolucoes } from "../utilitarias/extrairIdPokemon.js";

// Função assíncrona que busca os dados do Pokémon na API usando o ID
export async function getApi(id) {
    // Faz a requisição para a API do Pokémon passando o id
    const respostaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // Converte a resposta da API para JSON (dados do Pokémon)
    const pokemon = await respostaApi.json();
    return pokemon
}

export async function getEvolucaoApi(id) {
    const respostaApi = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    console.log(`Buscando: https://pokeapi.co/api/v2/pokemon-species/${id}/`);


    const pokemon = await respostaApi.json();

    const especieUrl = pokemon.evolution_chain.url;

    const especieApi = await fetch(especieUrl);
    const pokemonEspecie = await especieApi.json();

    const listaEvolucaoPokemon = extrairEvolucoes(pokemonEspecie.chain)
    return listaEvolucaoPokemon
}