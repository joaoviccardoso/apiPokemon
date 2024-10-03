const btnFiltrar = document.getElementById("btnFiltrar");

btnFiltrar.addEventListener('click', function(){
    const resuldadoSelect = document.querySelector(".selectTipos").value; 
    
    if(resuldadoSelect == "Tipo do pokemon"){
        alert("Coloque um tipo do pokemon para pesquisar")
        return
    }
    
    const pokemonResuldado = listaDosPokemons.filter(pokemon =>{
        const typesPokemon = pokemon.types.map(type => type.type.name)
        console.log(typesPokemon)

        return typesPokemon.includes(resuldadoSelect)
    })
    
    if (pokemonResuldado){
        containerPokemonsFiltratos.innerHTML = ""
        criarPokemonsFiltrados(pokemonResuldado)
    } else{
        alert("Ops... Ouvi um erro")
    }
   
})