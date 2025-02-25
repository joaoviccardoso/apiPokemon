export function criarCardPokemonEquipe(listaDeObjetoPoke){
    const containerEquipe = document.querySelector(".offcanvas-body")
   
    containerEquipe.innerHTML = "";

    listaDeObjetoPoke.forEach(pokemon => {
        containerEquipe.innerHTML += `
            <li class="pokemon__equipe d-flex justify-content-around align-items-center">
                <img src="${pokemon.sprites.front_default}" class="img-card-pokemon ${pokemon.types[0].type.name}" alt="${pokemon.name}">
                <div>
                    <h5 class="fontTitulos">${pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h5>
                </div>
                <div class="">
                    <button type="button" class="btn-fechar" id=""><img src="./img/perto.png" alt="fechar" width="40"></button>
                <div>
            </li>
        `
    });
}