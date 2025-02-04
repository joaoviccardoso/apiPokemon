import { thisIsDarkModel } from "../app.js";

export function verificarBtnThema(){
   // Verifica o estado atual e alterna entre tema claro e escuro
      if(thisIsDarkModel.tema){
         // Se já estiver no modo vermelho, muda para o modo azul
         console.log("verdade")
         thisIsDarkModel.tema = false;
      } else {
         // Se estiver no modo azul, muda para o modo 
         console.log("falso")
         thisIsDarkModel.tema = true;
      }
        
      // Chama a função que aplica o tema correspondente
      chargeTheTheme(thisIsDarkModel);
}


// Função que carrega o tema baseado no valor de thisIsDarkModel
function chargeTheTheme(){
   // Se estiver no modo escuro, aplica o tema escuro e troca a imagem para o ícone de sol
   if(thisIsDarkModel.tema){
      console.log("verdade")
      blackTheme();  // Aplica o tema escuro
   } else {
      console.log("falso")
      // Se estiver no modo claro, aplica o tema claro e troca a imagem para o ícone de lua
      whiteTheme();  // Aplica o tema claro
   }
}

// Função que aplica o tema claro, alterando as variáveis CSS (cores)
function whiteTheme(){
   // Define as cores para o tema claro usando variáveis CSS
   document.documentElement.style.setProperty('--backgroud', 'linear-gradient(to bottom, #5bc0f8, #1c1c3c)');  // Cor de fundo clara
}

// Função que aplica o tema escuro, alterando as variáveis CSS (cores)
function blackTheme(){
   // Define as cores para o tema escuro usando variáveis CSS (referências para variáveis já definidas no CSS)
   document.documentElement.style.setProperty('--backgroud', 'linear-gradient(to bottom, #E63946, #900C3F)');  // Cor de fundo escura
}
