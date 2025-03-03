export const dialog = document.getElementById("myDialog");

export function mostrarDialog(texto){
    dialog.innerHTML = `
        <h2 class="avisoModal">Aviso!</h2>
        <p class="mensagemModal">${texto}</p>
        <button class="btn-modal" id="closeDialog">Fechar</button>
    `

    dialog.showModal();
    requestAnimationFrame(() => {
        dialog.style.opacity = "1";
        dialog.style.transform = "scale(1)";
    });
    document.getElementById("closeDialog").addEventListener("click", () => fecharDialog())
}

function fecharDialog() {
    dialog.style.opacity = "0";
    dialog.style.transform = "scale(0.8)";

    // Espera a animação antes de fechar de fato
    setTimeout(() => {
        dialog.close();
    }, 300);
}