// Seleciona o botão de pesquisar Pokémon
const btnPesquisar = document.getElementById("btnBuscar");

// Seleciona o container onde os Pokémons filtrados serão exibidos
const containerPokemonsFiltratos = document.querySelector(".lista__pokedex");

// Adiciona um evento de clique ao botão de pesquisar
btnPesquisar.addEventListener("click", () => {

    // Pega o valor do campo de pesquisa (input)
    const inputPesquisar = document.getElementById("campoPesquisa").value;
  
    // Verifica se o campo de pesquisa está vazio ou contém apenas espaços
    if(inputPesquisar == "" || inputPesquisar.trim() === ""){
        alert("Digite um nome de um pokemon ou seu número"); // Exibe um alerta se o campo estiver vazio
        return; // Sai da função para evitar execução desnecessária
    }

    // Converte o valor do input para minúsculas e remove acentos
    const inputPesquisarMinusculo = removerAcentos(inputPesquisar.toLowerCase());
    
    // Filtra a lista dos Pokémons de acordo com o valor pesquisado (nome ou número)
    const resuldados = listaDosPokemons.filter(pokemon =>{
        // Converte o nome do Pokémon para minúsculas e remove acentos
        const nomeDoPokemonMinusculo = removerAcentos(pokemon.name.toLowerCase());
        // Converte o ID do Pokémon para string para facilitar a comparação
        const idDoPokemon = pokemon.id.toString();

        // Retorna verdadeiro se o nome ou ID do Pokémon contém a string pesquisada
        return nomeDoPokemonMinusculo.includes(inputPesquisarMinusculo) || idDoPokemon.includes(inputPesquisarMinusculo);
    });

    // Verifica se não foram encontrados resultados
    if(resuldados.length === 0){
        alert("Nenhum Pokémon foi encontrado"); // Exibe um alerta
        return; // Sai da função
    } else {
        // Limpa o container de Pokémons filtrados antes de exibir os novos resultados
        containerPokemonsFiltratos.innerHTML = "";
        // Chama a função para criar os cards dos Pokémons filtrados
        criarPokemonsFiltrados(resuldados);
    }
});

// Função que cria os cards dos Pokémons filtrados e insere no container
function criarPokemonsFiltrados(resuldados){
    // Itera sobre o array de resultados e cria um card para cada Pokémon
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
                    <button type="button" id="botaoSomCelular-${resuldado.id}" class="btn btnSomCelular d-sm-none">Som</button>
                </div>
            </div>
        </li>
        `;
        // Chama as funções que lidam com o botão "Saber mais" e o botão "Som"
        pegarBtnsSaberMais();
        pegarSomParaCelular();
    });
}

// Função que remove acentos de uma string para facilitar a pesquisa
function removerAcentos(nome){
    // Normaliza a string e remove caracteres diacríticos (acentos)
    return nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
