export function criarCardPokemonEquipe(listaDeObjetoPoke){
    const containerEquipe = document.querySelector(".offcanvas-body")
   
    containerEquipe.innerHTML = "";

    listaDeObjetoPoke.forEach(pokemon => {
        containerEquipe.innerHTML += `
            <li class="pokemon__equipe">
                <img src="${pokemon.sprites.front_default}" class="img-card-pokemon ${pokemon.types[0].type.name}" alt="${pokemon.name}">
                <div>

                </div>
                <div class="">
                
                <div>
            </li>
        `
    });
}