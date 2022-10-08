export async function cadastrar() {
    const nome = document.querySelector("#nomeC").value;
    const email = document.querySelector("#emailC").value;
    const senha = document.querySelector("#senhaC").value;
    const senhaconf = document.querySelector("#senhaconfC").value;

    const erro = document.getElementById("erro");

    if (nome === "") {
        erro.style.display = "block";
        erro.textContent = "O campo Nome precisa ser preenchido!";
        return;
    }
    if (email === "") {
        erro.style.display = "block";
        erro.textContent = "O campo E-mail precisa ser preenchido!";
        return;
    }
    if (senha === "") {
        erro.style.display = "block";
        erro.textContent = "O campo Senha precisa ser preenchido!";
        return;
    }
    if (senhaconf === "") {
        erro.style.display = "block";
        erro.textContent = "O campo Confirmar Senha precisa ser preenchido!";
        return;
    }
    if (senha !== senhaconf) {
        erro.style.display = "block";
        erro.textContent = "As senhas não são iguais!";
        return;
    }

    const a = await fetch("http://localhost:8000/signup", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: senha,
            userName: nome,
            userImage: "imagem",
            userStatus: "user",
        }),
    });
    const res = await a.json();
    const token = JSON.stringify(res);

    console.log(token);
}
