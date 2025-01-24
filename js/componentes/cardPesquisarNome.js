// Seleciona o container onde os Pokémons filtrados serão exibidos
const containerPokemonsFiltratos = document.querySelector(".lista__pokedex");

// Função que cria os cards dos Pokémons filtrados e insere no container
export function criarPokemonsFiltrados(resuldados){
    // Itera sobre o array de resultados e cria um card para cada Pokémon
    resuldados.forEach(resuldado => { 
        containerPokemonsFiltratos.innerHTML += `
         <li class="lista__pokemon">
            <div class="card text-bg-dark">
                <img src="${resuldado.sprites.front_default}" class="img-card-pokemon ${resuldado.types[0].type.name}" alt="${resuldado.name}">
                <div class="card-body">
                    <p class="card-text">#${resuldado.id.toString()}</p>
                    <h5 class="card-title">${resuldado.name[0].toUpperCase() + resuldado.name.substring(1)}</h5>
                    <button type="button" id="botao-${resuldado.id}" class="btn-success btn-saberMais botao">Saber mais</button>
                </div>
            </div>
        </li>
        `;
        // Chama as funções que lidam com o botão "Saber mais" e o botão "Som"
        pegarBtnsSaberMais();
        
    });
}
