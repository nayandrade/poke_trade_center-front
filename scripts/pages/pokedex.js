import { anunciar } from "../usersFunctions/anunciar.js";
import { headerFooter } from "./index.js";

let pokelist = [];
let meusPokemons = [];

for (let i = 1; i < 152; i++) {
    const pokemon = {
        id: i,
        img: `${i}.png`,
    };
    pokelist.push(pokemon);
}

export function pokemons() {
    headerFooter();
    document.getElementById("conteiner").innerHTML = "";

    pokelist.forEach((pokemon) => {
        let ausente = "";
        let pokemonBuscado = meusPokemons.find((meuPoke) => {
            return pokemon.id === meuPoke;
        });
        if (!pokemonBuscado) {
            ausente = "ausente";
        }
        document.getElementById("conteiner").innerHTML += `
        <div id="cardConteiner">
            <div id="card">
                <img class="${ausente} cardImage" src="cartamelhorada/${pokemon.img}" alt="">
                <p>Quantidade:</p>
                <button type="button">Anunciar</button>
            </div>
        </div>
    `;
    });

    const cards = document.querySelectorAll("#card button");
    cards.forEach((card) => {
        card.addEventListener("click", anunciar);
    });
}
