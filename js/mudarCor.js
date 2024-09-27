const btnMudarCor = document.getElementById("mudarCor");
const imgDarkOrWhite = document.querySelector(".imgThemeDarkOrWhite");

let thisIsDarkModel = false;

btnMudarCor.addEventListener('click', () =>{
   if(thisIsDarkModel){
      thisIsDarkModel = false;
   } else {
      thisIsDarkModel = true;
   }
    
   chargeTheTheme()
})

function chargeTheTheme(){
   if(thisIsDarkModel){
      imgDarkOrWhite.src = "img/sol.png"
      blackTheme()
   } else {
      imgDarkOrWhite.src = "img/lua.png"
      whiteTheme()
   }
}

function whiteTheme(){
   document.documentElement.style.setProperty('--backgroud', '#fcf8ff');
   document.documentElement.style.setProperty('--card', '#fff');
   document.documentElement.style.setProperty('--title', '#000');
   document.documentElement.style.setProperty('--border', '#ccc')
}

function blackTheme(){
   document.documentElement.style.setProperty('--backgroud', 'var(--background-dark)');
   document.documentElement.style.setProperty('--card', 'var(--card-dark)');
   document.documentElement.style.setProperty('--title', 'var(--title-black)');
   document.documentElement.style.setProperty('--border', 'var(--card-dark)')
}