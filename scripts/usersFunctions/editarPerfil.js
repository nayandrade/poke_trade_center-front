import { fecharModal } from "../pages/index.js";

export function editarperfil() {
    document.querySelector("#modal").style.display = "flex";

    document.querySelector("#modal-content").innerHTML = `
    <h1>Editar Perfil</h1>
    <div id="formEditar">
        <div id="divnome">
            <label for="nameEdit" >Nome:</label>
            <input type="text" id="nameEdit" />
        </div>

        <div>
            <label for="emailEdit" >E-mail:</label>
            <input type="text" id="emailEdit" />
        </div>

        <div>
            <label for="senhaEdit" >Senha:</label>
            <input type="password" id="senhaEdit" />
        </div>

    </div>
    <div>
        <button type="button" class="negativobtn">CANCELAR</button>
        <button type="button" class="positivobtn">SALVAR</button>
    </div>
    `;

    document
        .querySelector(".negativobtn")
        .addEventListener("click", fecharModal);
}

export function trocarft() {
    document.querySelector("#modal").style.display = "flex";

    document.querySelector("#modal-content").innerHTML = `
    <h1>Escolha seu avatar</h1>
    <div id="modalAnunciar">
        <select name="trocarft" id="trocarftmodal">
            <option value="filtro" hidden>Filtro</option>
            <option value="numero">Numero</option>  
            <option value="nomePoke">Pokemon</option>
            <option value="proprietário">Proprietário</option>
            <option value="tipo">Tipo</option>
        </select>   
    </div>
    <div>
        <button type="button" class="negativobtn">CANCELAR</button>
        <button type="button" class="positivobtn">SALVAR</button>
    </div>
    `;

    document
        .querySelector(".negativobtn")
        .addEventListener("click", fecharModal);
}
