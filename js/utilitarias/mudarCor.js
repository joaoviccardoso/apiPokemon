import { thisIsDarkModel } from "../app.js";

export function verificarBtnThema(){
   // Verifica o estado atual e alterna entre tema claro e escuro
      if(thisIsDarkModel.tema){
         // Se já estiver no modo escuro, muda para o modo claro
         console.log("verdade")
         thisIsDarkModel.tema = false;
      } else {
         // Se estiver no modo claro, muda para o modo escuro
         console.log("falso")
         thisIsDarkModel.tema = true;
      }
        
      // Chama a função que aplica o tema correspondente
      chargeTheTheme(thisIsDarkModel);
}


// Função que carrega o tema baseado no valor de thisIsDarkModel
function chargeTheTheme(){
   // Se estiver no modo escuro, aplica o tema escuro e troca a imagem para o ícone de sol
   if(thisIsDarkModel){
      blackTheme();  // Aplica o tema escuro
   } else {
      // Se estiver no modo claro, aplica o tema claro e troca a imagem para o ícone de lua
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
