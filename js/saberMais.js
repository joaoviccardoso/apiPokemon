const containerSaberMais = document.querySelector(".aside-direito");

function pegarBtnsSaberMais(){
    const btnsPokemons = document.querySelectorAll(".btn-success");
    console.log(btnsPokemons)
    btnsPokemons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const idDoBtn = this.id
            const idDoBtnString = idDoBtn.split("-")[1];
            const numeroDoIdDoBtn = Number(idDoBtnString) - 1;
            saberMaisSobrePokemon(numeroDoIdDoBtn);
        })
    })
}

function saberMaisSobrePokemon(numeroDoIdDoBtn){
    console.log(listaDosPokemons[numeroDoIdDoBtn])
    containerSaberMais.innerHTML = `
        <div class="card cardStatus">
            <img src="${listaDosPokemons[numeroDoIdDoBtn].sprites.other.showdown.front_default}" class="card-img-top img-saberMais" alt="${listaDosPokemons[numeroDoIdDoBtn].name}">
            <div class="card-body">
              <h5 class="card-title">${listaDosPokemons[numeroDoIdDoBtn].name}</h5>
              <p class="card-text">${listaDosPokemons[numeroDoIdDoBtn].types.map(type => type.type.name)}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Peso: ${listaDosPokemons[numeroDoIdDoBtn].weight / 10}Kg</li>
              <li class="list-group-item">Altura: ${listaDosPokemons[numeroDoIdDoBtn].height / 10}m</li>
            </ul>
            <div class="card-body">
              <button type="button" id="botaoSaberMais-${listaDosPokemons[numeroDoIdDoBtn].id}" class="btn btn-saberMais d-none d-sm-block">Som do Pokemon</button>
            </div>
          </div>
    `
    btnSaberMaisPokemon()      
}

function btnSaberMaisPokemon(){
  const btnSaberMais = document.querySelector(".btn-saberMais"); 
  btnSaberMais.addEventListener('click', function() {
    const idBtnSaberMais = this.id;
    const idBtnSaberMaisString = idBtnSaberMais.split("-")[1];
    const idBtnSaberMaisNumero = Number(idBtnSaberMaisString) - 1;
    somDoPokemon(idBtnSaberMaisNumero)
  })
}

function somDoPokemon(id){
  const audio = new Audio(`${listaDosPokemons[id].cries.latest}`)
  audio.play()
}
