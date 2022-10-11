import { meuspedidos } from "./meusPedidos.js";
import { editarperfil, trocarft } from "../usersFunctions/editarPerfil.js";
import { headerFooter } from "./index.js";
import { getToken } from "../autenticar/autenticar.js";

export async function perfil() {
    const token = getToken();

    const userRaw = await fetch("http://localhost:5000/user", {
        method: "GET",
        headers: new Headers({
            authorization: token,
            "Content-Type": "application/x-www-form-urlencoded",
        }),
    });

    if (userRaw.status === 401) {
        window.location.hash = "";
        return;
    }

    const userData = await userRaw.json();

    headerFooter();

    document.getElementById("conteiner").innerHTML = `
    <div id="center">
        <div id="ftPerfil"></div>
        <div id="logoUso"></div>
        <div id="infoPerf"> 
            <p>Nome de usuário: ${userData.userName}</p>
            <p>Classificação: ${userData.classification}</p>
            <p>Pokedex: ${userData.pokedex} / 151</p>
            <p>E-mail: ${userData.email}</p>
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
