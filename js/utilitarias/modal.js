export const dialog = document.getElementById("myDialog");

export function mostrarDialog(texto){
    dialog.innerHTML = `
        <p>${texto}</p>
        <button class="botao" id="closeDialog"><img src="./img/perto.png" alt="fechar" width="40"></button>
    `

    dialog.showModal();
    document.getElementById("closeDialog").addEventListener("click", () => dialog.close())
}