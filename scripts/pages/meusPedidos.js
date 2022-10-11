import { cancelarTroca } from "../usersFunctions/cancelarTroca.js";
import { headerFooter } from "./index.js";
import { getToken } from "../autenticar/autenticar.js";

export async function meuspedidos() {
    headerFooter();
    const token = getToken();

    const pokeraw = await fetch("http://localhost:5000/mymarket", {
        method: "GET",
        headers: new Headers({
            authorization: token,
            "Content-Type": "application/x-www-form-urlencoded",
        }),
    });

    if (pokeraw.status === 401) {
        window.location.hash = "";
        return;
    }

    const pokemons = await pokeraw.json();

    document.getElementById("conteiner").innerHTML = `
        <input placeholder="PESQUISAR" type="text" id="pesquisar">
        <select name="filtro">
            <option value="filtro" hidden>Filtro</option>
            <option value="numero">Numero</option>  
            <option value="nomePoke">Pokemon</option>
            <option value="tipo">Tipo</option>
        </select>
        
        <table>
            <tr>
                <th>Numero</th>
                <th>Proprietário</th>
                <th>Pokemon</th>
                <th>Em Troca de</th>
                <th>Gotch ya</th>
            </tr>
        </table>
    `;

    pokemons.forEach((pokemon) => {
        document.querySelector("table").innerHTML += `
        <tr>
            <td>N°${pokemon.number}</td>
            <td>${pokemon.userName}</td>
            <td>${pokemon.name}</td>
            <td>${pokemon.pokeIntentName}</td>
            <td>
                <button class="tabelabtn cancelbtn" data-pokeintent="${pokemon.pokeIntentName}" data-mycardname="${pokemon.name}" data-mycardid="${pokemon.id}">Cancelar</button>
            </td>
        </tr>
        `;
    });

    const td = document.querySelectorAll("td button");
    td.forEach((td) => {
        td.addEventListener("click", cancelarTroca);
    });
}
