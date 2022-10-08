import { fecharModal } from "../pages/index.js";

export function cancelarTroca() {
    document.querySelector("#modal").style.display = "flex";

    document.querySelector("#modal-content").innerHTML = `
    <h1 id="textoCancelar">Cancelar o pedido de troca de Bulbassauro por Evee?</h1>
    <div>
        <button type="button" class="negativobtn">NÂO</button>
        <button type="button" class="positivobtn" onclick="sairdomodal()">SIM</button>
    </div>
    `;

    document
        .querySelector(".negativobtn")
        .addEventListener("click", fecharModal);
}
