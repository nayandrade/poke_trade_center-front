import { fecharModal } from "../pages/index.js";

export function modalMercado() {
    document.querySelector("#modal").style.display = "flex";

    document.querySelector("#modal-content").innerHTML = `
    <p id="textoTroca">Você tem certeza que deseja trocar a carta Bulbassauro por Evee?</p>
    <div>
        <button type="button" class="negativobtn">NÂO</button>
        <button type="button" class="positivobtn" onclick="sairdomodal()">SIM</button>
    </div>
    `;

    document
        .querySelector(".negativobtn")
        .addEventListener("click", fecharModal);
}
