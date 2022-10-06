let pokelist = [];
let meusPokemons = [];

for (let i = 1; i < 152; i++) {
    const pokemon = {
        id: i,
        img: `${i}.png`,
    };
    pokelist.push(pokemon);
}

const conteiner = document.getElementById("conteiner");

function pokemons() {
    conteiner.innerHTML = "";

    pokelist.forEach((pokemon) => {
        let ausente = "";
        let pokemonBuscado = meusPokemons.find((meuPoke) => {
            return pokemon.id === meuPoke;
        });
        console.log(pokemonBuscado);
        if (!pokemonBuscado) {
            ausente = "ausente";
        }
        conteiner.innerHTML += `
        <div id="cardConteiner">
            <div id="card">
                <img class="${ausente} cardImage" src="cartamelhorada/${pokemon.img}" alt="">
                <p>Quantidade:</p>
                <button type="button" onclick="anunciar()">Anunciar</button>
            </div>
        </div>
    `;
    });
}

///////////////// adicionados ///////////////
function market() {
    conteiner.innerHTML = `      
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
            <td><button class="tabelabtn" onclick="modalMercado()">Trocar</button></td>
        </tr>
    </table>`;
}

function meuspedidos() {
    conteiner.innerHTML = `
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
                <td><button class="tabelabtn cancelbtn" onclick="modalCancelar()">Cancelar</button></td>
            </tr>
        </table>
    `;
}

function modalsair() {
    document.querySelector("#modal").style.display = "flex";

    document.querySelector("#modal-content").innerHTML = `
    <h1>VOCÊ TEM CERTEZA 
    QUE DESEJA SAIR?</h1>
    <div>
        <button type="button" class="negativobtn" onclick="sairdomodal()">NÂO</button>
        <button type="button" class="positivobtn" onclick="sairdomodal()">SIM</button>
    </div>
    `;
}

function sairdomodal() {
    document.querySelector("#modal").style.display = "none";
}

function anunciar() {
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
        <button type="button" class="negativobtn" onclick="sairdomodal()">CANCELAR</button>
        <button type="button" class="positivobtn" onclick="sairdomodal()">CONFIRMAR</button>
    </div>
    `;
}

function modalMercado() {
    document.querySelector("#modal").style.display = "flex";

    document.querySelector("#modal-content").innerHTML = `
    <p id="textoTroca">Você tem certeza que deseja trocar a carta Bulbassauro por Evee?</p>
    <div>
        <button type="button" class="negativobtn" onclick="sairdomodal()">NÂO</button>
        <button type="button" class="positivobtn" onclick="sairdomodal()">SIM</button>
    </div>
    `;
}

function modalCancelar() {
    document.querySelector("#modal").style.display = "flex";

    document.querySelector("#modal-content").innerHTML = `
    <h1 id="textoCancelar">Cancelar o pedido de troca de Bulbassauro por Evee?</h1>
    <div>
        <button type="button" class="negativobtn" onclick="sairdomodal()">NÂO</button>
        <button type="button" class="positivobtn" onclick="sairdomodal()">SIM</button>
    </div>
    `;
}
