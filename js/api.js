async function getApi() {
    const busca = await fetch('https://pokeapi.co/api/v2/');
    const pokemons = await busca.json()
    console.log(pokemons)
}