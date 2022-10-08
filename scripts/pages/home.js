import { modalsair } from "./modalSair.js";
import { headerFooter } from "./index.js";

export function home() {
    document.querySelector("body").style.backgroundColor = "#a63232";
    document.querySelector("#conteiner").style.display = "flex";
    document.querySelector("#entrar").style.display = "none";

    headerFooter();

    document.getElementById("conteiner").innerHTML = `
    <div id="perfil">
        <div id="perfilImg">
            <img class="img" src="./assets/pokeball.png">
        </div>
        <div id="testPer"><p>Olá Treinador Ash Ketchum</p></div>
    </div>

    <div id="central">
        <div id="textFig">
            <p >Figurinhas Ganhas Hoje:</p>
        </div>
        <div id="campoFig">
            <div class="figuras"></div>
            <div class="figuras"></div>
            <div class="figuras"></div>
            <div class="figuras"></div>
            <div class="figuras"></div>
        </div>
    </div>
    `;

    document.querySelector("#sair").addEventListener("click", modalsair);
}
