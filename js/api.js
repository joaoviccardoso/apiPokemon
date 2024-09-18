async function getApi(){
    const respostaApi = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    const listaPokemons = await respostaApi.json()
    console.log(listaPokemons)
}

