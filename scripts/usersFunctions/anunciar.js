import { fecharModal } from "../pages/index.js";

export function anunciar() {
    document.querySelector("#modal").style.display = "flex";

    document.querySelector("#modal-content").innerHTML = `
    <h1>Anunciar carta</h1>
    <div id="modalAnunciar">
        <p>Em troca:</p>
        <select name="anunciar" id="intencao">
            <option value="filtro" hidden>Filtro</option>
            <option value="numero">Numero</option>  
            <option value="nomePoke">Pokemon</option>
            <option value="proprietário">Proprietário</option>
            <option value="tipo">Tipo</option>
        </select>   
    </div>
    <div>
        <button type="button" class="negativobtn">CANCELAR</button>
        <button type="button" class="positivobtn">CONFIRMAR</button>
    </div>
    `;

    document
        .querySelector(".negativobtn")
        .addEventListener("click", fecharModal);
}
