// Seleciona o botão de filtrar pelo tipo de Pokémon
const btnFiltrar = document.getElementById("btnFiltrar");

// Adiciona um evento de clique ao botão de filtrar
btnFiltrar.addEventListener('click', function(){
    // Obtém o valor selecionado no dropdown (select) de tipos de Pokémon
    const resuldadoSelect = document.querySelector(".selectTipos").value; 
    
    // Verifica se o usuário não escolheu um tipo válido (ou deixou a opção padrão)
    if(resuldadoSelect == "Tipo do pokemon"){
        alert("Coloque um tipo do pokemon para pesquisar"); // Alerta o usuário que é necessário selecionar um tipo
        return; // Interrompe a execução se não houver um tipo válido
    }
    
    // Filtra a lista de Pokémons de acordo com o tipo selecionado
    const pokemonResuldado = listaDosPokemons.filter(pokemon =>{
        // Extrai os tipos do Pokémon atual, criando um array com os tipos
        const typesPokemon = pokemon.types.map(type => type.type.name);
        console.log(typesPokemon); // Exibe os tipos no console (para debug)

        // Retorna verdadeiro se o Pokémon contém o tipo selecionado
        return typesPokemon.includes(resuldadoSelect);
    });
    
    // Se houve resultado na filtragem
    if (pokemonResuldado){
        // Limpa o container de Pokémons filtrados antes de exibir os novos resultados
        containerPokemonsFiltratos.innerHTML = "";
        // Chama a função para criar os cards dos Pokémons filtrados
        criarPokemonsFiltrados(pokemonResuldado);
    } else {
        // Exibe um alerta se algo deu errado ou não encontrou nenhum Pokémon
        alert("Ops... Ocorreu um erro");
    }
});
