const containerPokemons = document.querySelector('.lista__pokedex');
let contadorDePokemons = 151;

async function pokemons() {
    for (let i = 1; i <= contadorDePokemons; i++) {
        await getApi(i)
    }
}

async function getApi(id){
    const respostaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const listaPokemons = await respostaApi.json()
    criarCardPokemon(listaPokemons)
    console.log(listaPokemons)
}

function criarCardPokemon(pokemon){
    containerPokemons.innerHTML += `
        <li class="lista__pokemon">
            <div class="card">
                <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
                <div class="card-body">
                    <h5 class="card-title">${pokemon.name}</h5>
                    <p class="card-text">${pokemon.id.toString()}</p>
                    <p class="card-text">${pokemon.types.map(type => type.type.name)}</p>
                </div>
            </div>
        </li>
    `
}

pokemons()