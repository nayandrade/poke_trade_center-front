import { fecharModal, market } from "../pages/index.js";
import { getToken } from "../autenticar/autenticar.js";

export function modalMercado() {
    document.querySelector("#modal").style.display = "flex";
    const mypokeName = this.dataset.mycard;
    const marketpokeName = this.dataset.marketname;
    const mypokeNum = this.dataset.mycardnum;
    const marketpokeNum = this.dataset.marketnum;

    document.querySelector("#modal-content").innerHTML = `
    <p id="textoTroca">Você tem certeza que deseja trocar a carta ${mypokeName} por ${marketpokeName}?</p>
    <div>
        <button type="button" class="negativobtn">NÂO</button>
        <button type="button" class="positivobtn" data-cardid="${marketpokeNum}" data-cardnum="${mypokeNum}">SIM</button>
    </div>
    `;

    document
        .querySelector(".negativobtn")
        .addEventListener("click", fecharModal);

    document.querySelector(".positivobtn").addEventListener("click", trocar);
}

async function trocar() {
    const id = this.dataset.cardid;
    const number = this.dataset.cardnum;

    const token = getToken();

    const pokeraw = await fetch(`http://localhost:5000/trade/${number}/${id}`, {
        method: "post",
        headers: new Headers({
            authorization: token,
            "Content-Type": "application/x-www-form-urlencoded",
        }),
    });
    const pokemons = await pokeraw.json();

    fecharModal();
    market();
}
