import { getToken } from "../autenticar/autenticar.js";

export async function pesquisar() {
    const pesquisa = document.getElementById("pesquisar").value;
    const filtro = document.getElementById("filter").value;

    const token = getToken();

    const pokeraw = await fetch(
        `http://localhost:5000/search/${filtro.replaceAll(
            '"',
            ""
        )}/${pesquisa}`,
        {
            method: "GET",
            headers: new Headers({
                authorization: token,
                "Content-Type": "application/json",
            }),
        }
    );
    const market = await pokeraw.json();

    console.log(market);
}
