const btnPesquisar = document.getElementById("btnBuscar");
const containerPokemonsFiltratos = document.querySelector(".lista__pokedex");

btnPesquisar.addEventListener("click", () =>{

    const inputPesquisar = document.getElementById("campoPesquisa").value;
  
    if(inputPesquisar == "" || inputPesquisar.trim() === ""){
        alert("Digite um nome de um pokemon ou seu numero")
        return
    }
    
    const resuldados = listaDosPokemons.filter(pokemon =>{
        const nomeDoPokemonMinusculo = removerAcentos(pokemon.name.toLowerCase());
        const idDoPokemon = pokemon.id.toString();

        return nomeDoPokemonMinusculo.includes(inputPesquisar) || idDoPokemon.includes(inputPesquisar)
    })

    if(resuldados.length === 0){
        alert("Nem um pokemon foi encontrado")
        return;
    } else {
        containerPokemonsFiltratos.innerHTML = "";
        criarPokemonsFiltrados(resuldados)
    }
})

function criarPokemonsFiltrados(resuldados){
    resuldados.forEach(resuldado => { 
        containerPokemonsFiltratos.innerHTML += `
         <li class="lista__pokemon">
            <div class="card">
                <img src="${resuldado.sprites.front_default}" class="card-img-top img-card-pokemon" alt="${resuldado.name}">
                <div class="card-body">
                    <p class="card-text">#${resuldado.id.toString()}</p>
                    <h5 class="card-title">${resuldado.name[0].toUpperCase() + resuldado.name.substring(1)}</h5>
                    <p class="card-text">${resuldado.types.map(type => type.type.name)}</p>
                    <button type="button" id="botao-${resuldado.id}" class="btn btn-success d-none d-sm-block">Saber mais</button>
                </div>
            </div>
        </li>
    `
    pegarBtnsSaberMais()
    });
}

function removerAcentos(nome){
    return nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

