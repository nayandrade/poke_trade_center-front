import { modalMercado } from "../usersFunctions/trocar.js";
import { headerFooter } from "./index.js";

export function market() {
    headerFooter();

    document.getElementById("conteiner").innerHTML = `      
    <input placeholder="PESQUISAR" type="text" id="pesquisar">
    <select name="filtro">
        <option value="filtro" hidden>Filtro</option>
        <option value="numero">Numero</option>  
        <option value="nomePoke">Pokemon</option>
        <option value="proprietário">Proprietário</option>
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
        <tr>
            <td>Numero</td>
            <td>Proprietário</td>
            <td>Pokemon</td>
            <td>em troca de </td>
            <td><button class="tabelabtn">Trocar</button></td>
        </tr>
    </table>`;

    const td = document.querySelectorAll("td button");
    td.forEach((td) => {
        td.addEventListener("click", modalMercado);
    });
}
