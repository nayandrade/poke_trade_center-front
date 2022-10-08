export async function logar() {
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    // var aValue = localStorage.getItem(keyName)

    if (email === "" || senha === "") {
        const erro = document.getElementById("erro");
        erro.style.display = "block";
        erro.textContent = "Informe o E-mail e Senha!";
        return;
    }

    const a = await fetch("http://localhost:8000/signin", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: "Bearer: Token"
        },
        body: JSON.stringify({ email: email, password: senha }),
    });
    // const { token } = await a.json();
    // localStorage.setItem("token", JSON.stringify(token));
}
