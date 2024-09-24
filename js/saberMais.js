const containerSaberMais = document.querySelector(".aside-direito");

function pegarBtnsSaberMais(){
    const btnsPokemons = document.querySelectorAll(".btn-success");
    console.log(btnsPokemons)
    btnsPokemons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const idDoBtn = this.id
            const idDoBtnString = idDoBtn.split("-")[1];
            const numeroDoIdDoBtn = Number(idDoBtnString) - 1;
            console.log(numeroDoIdDoBtn)
            saberMaisSobrePokemon(numeroDoIdDoBtn);
        })
    })
}

function saberMaisSobrePokemon(numeroDoIdDoBtn){
    console.log(listaDosPokemons[numeroDoIdDoBtn])
    containerSaberMais.innerHTML = `
        <div class="card cardStatus">
            <img src="${listaDosPokemons[numeroDoIdDoBtn].sprites.other.showdown.front_default}" class="card-img-top" alt="${listaDosPokemons[numeroDoIdDoBtn].name}">
            <div class="card-body">
              <h5 class="card-title">${listaDosPokemons[numeroDoIdDoBtn].name}</h5>
              <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Peso: ${listaDosPokemons[numeroDoIdDoBtn].weight / 10}Kg</li>
              <li class="list-group-item">Altura: ${listaDosPokemons[numeroDoIdDoBtn].height / 10}m</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
    `
}