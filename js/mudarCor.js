// Seleciona o botão que vai mudar o tema (claro/escuro)
const btnMudarCor = document.getElementById("mudarCor");

// Seleciona a imagem do ícone que vai ser trocada (sol/lua) dependendo do tema
const imgDarkOrWhite = document.querySelector(".imgThemeDarkOrWhite");

// Variável que controla o estado atual do tema (inicia como tema claro)
let thisIsDarkModel = false;

// Adiciona um evento de clique no botão de mudar tema
btnMudarCor.addEventListener('click', () => {
   // Verifica o estado atual e alterna entre tema claro e escuro
   if(thisIsDarkModel){
      // Se já estiver no modo escuro, muda para o modo claro
      thisIsDarkModel = false;
   } else {
      // Se estiver no modo claro, muda para o modo escuro
      thisIsDarkModel = true;
   }
    
   // Chama a função que aplica o tema correspondente
   chargeTheTheme();
});

// Função que carrega o tema baseado no valor de thisIsDarkModel
function chargeTheTheme(){
   // Se estiver no modo escuro, aplica o tema escuro e troca a imagem para o ícone de sol
   if(thisIsDarkModel){
      imgDarkOrWhite.src = "img/sol.png";  // Muda o ícone para "sol" (tema escuro)
      blackTheme();  // Aplica o tema escuro
   } else {
      // Se estiver no modo claro, aplica o tema claro e troca a imagem para o ícone de lua
      imgDarkOrWhite.src = "img/lua.png";  // Muda o ícone para "lua" (tema claro)
      whiteTheme();  // Aplica o tema claro
   }
}

// Função que aplica o tema claro, alterando as variáveis CSS (cores)
function whiteTheme(){
   // Define as cores para o tema claro usando variáveis CSS
   document.documentElement.style.setProperty('--backgroud', '#fcf8ff');  // Cor de fundo clara
   document.documentElement.style.setProperty('--card', '#fff');  // Cor do card (branco)
   document.documentElement.style.setProperty('--title', '#000');  // Cor do título (preto)
   document.documentElement.style.setProperty('--border', '#ccc');  // Cor da borda (cinza claro)
}

// Função que aplica o tema escuro, alterando as variáveis CSS (cores)
function blackTheme(){
   // Define as cores para o tema escuro usando variáveis CSS (referências para variáveis já definidas no CSS)
   document.documentElement.style.setProperty('--backgroud', 'var(--background-dark)');  // Cor de fundo escura
   document.documentElement.style.setProperty('--card', 'var(--card-dark)');  // Cor do card escuro
   document.documentElement.style.setProperty('--title', 'var(--title-black)');  // Cor do título para tema escuro
   document.documentElement.style.setProperty('--border', 'var(--card-dark)');  // Cor da borda (escuro)
}
