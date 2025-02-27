import { calcularHP } from "../utilitarias/calcularHp.js";
import { removePokemonDaEquibe } from "../view/adicionarPokemon.js";

export function criarCardPokemonEquipe(listaDeObjetoPoke){
    const containerEquipe = document.querySelector(".offcanvas-body")
   
    containerEquipe.innerHTML = "";

    listaDeObjetoPoke.forEach((pokemon, index) => {
        const li = document.createElement("li");
        li.classList.add("pokemon__equipe", "d-flex", "justify-content-around", "align-items-center");

        li.innerHTML = `
                <img src="${pokemon.sprites.front_default}" class="img-card-pokemon ${pokemon.types[0].type.name}" alt="${pokemon.name}">
                <div>
                    <h5 class="fontTitulos">${pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h5>
                    ${pokemon.types.map(type => `<p class="card-tipo-pai cardTipoEquipe ${type.type.name}">${type.type.name}</p>`).join('')}
                    <h3 class="fontTextos Level">LV:50</h3>
                    <div class="barraDeVida">
                        <div class="barraDeVida-span d-flex">
                            <span class="hp-texto d-flex justify-content-between"><p class="cardTipoEquipe">${pokemon.stats[0].stat.name.toUpperCase()} </p> <p class="cardTipoEquipe">${calcularHP(pokemon.stats[0].base_stat)}</p></span> 
                        </div>
                    </div>

                </div>
                <div class="">
                    <button type="button" class="btn-remover" id="${index}">
                        <img src="./img/perto.png" alt="fechar" width="40">
                    </button>
                <div>
        `

        containerEquipe.appendChild(li)
    });

    const btnRemover = document.querySelectorAll(".btn-remover");
    removePokemonDaEquibe(btnRemover)
}