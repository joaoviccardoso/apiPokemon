import { listaDosPokemons } from "../app.js";

// Função que toca o som do Pokémon correspondente ao ID
export function somDoPokemon(id){
    // Cria um novo elemento de áudio com o som do Pokémon
    const audio = new Audio(`${listaDosPokemons[id].cries.latest}`);
    
    // Toca o som do Pokémon
    audio.play();
}