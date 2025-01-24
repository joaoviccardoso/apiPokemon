// Função assíncrona que busca os dados do Pokémon na API usando o ID
export async function getApi(id) {
    // Faz a requisição para a API do Pokémon passando o id
    const respostaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // Converte a resposta da API para JSON (dados do Pokémon)
    const pokemon = await respostaApi.json();
    return pokemon
}