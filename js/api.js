const containerPokemons = document.querySelector('.lista__pokedex');

let contadorDePokemons = 151;
let listaDosPokemons = [];

async function pokemons() {
    for (let i = 1; i <= contadorDePokemons; i++) {
        await getApi(i)
    }
    pegarBtnsSaberMais()
    pegarSomParaCelular()
}

async function getApi(id){
    const respostaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const listaPokemons = await respostaApi.json()
    listaDosPokemons.push(listaPokemons)
    criarCardPokemon(listaPokemons)
}

function criarCardPokemon(pokemon){
    containerPokemons.innerHTML += `
        <li class="lista__pokemon">
            <div class="card">
                <img src="${pokemon.sprites.front_default}" class="card-img-top img-card-pokemon" alt="${pokemon.name}">
                <div class="card-body">
                    <p class="card-text">#${pokemon.id.toString()}</p>
                    <h5 class="card-title">${pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h5>
                    <p class="card-text">${pokemon.types.map(type => type.type.name)}</p>
                    <button type="button" id="botao-${pokemon.id}" class="btn btn-success d-none d-sm-block">Saber mais</button>
                    <button type="button" id="botaoSomCelular-${pokemon.id}" class="btn btnSomCelular d-sm-none">Som</button>
                </div>
            </div>
        </li>
    `
}

pokemons()