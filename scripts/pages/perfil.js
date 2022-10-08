import { meuspedidos } from "./meusPedidos.js";
import { editarperfil, trocarft } from "../usersFunctions/editarPerfil.js";
import { headerFooter } from "./index.js";

export function perfil() {
    headerFooter();

    document.getElementById("conteiner").innerHTML = `
    <div id="center">
        <div id="ftPerfil"></div>
        <div id="logoUso"></div>
        <div id="infoPerf"> 
            <p>Nome de usuário:</p>
            <p>Classificação:</p>
            <p>Pokedex:</p>
            <p>E-mail:</p>
        </div>
    </div>


    <div id="btoes">
        <div>
            <button type="button" id="editarInfo">Editar Perfil</button>
        </div>
        <div> 
            <button type="button" id="meuspedidos">Meus Pedidos</button>
        </div>
    </div>
    `;

    document.getElementById("ftPerfil").addEventListener("click", trocarft);

    document
        .getElementById("editarInfo")
        .addEventListener("click", editarperfil);

    document
        .getElementById("meuspedidos")
        .addEventListener(
            "click",
            () => (window.location.hash = "#meuspedidos")
        );
}
