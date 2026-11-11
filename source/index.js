import "./index.css";

const input_nome = document.getElementById("Nome"); // Input onde o usuario digita o nome
const input_idade = document.getElementById("idade"); // Input onde o usuario digita a idade
const input_dinheiro = document.getElementById("Dinheiro"); // Input onde o usuario digita o dinheiro
const btn_criar = document.getElementById("btnCriar"); // Botão que cria a identidade
const btn_fechar = document.getElementById("btn-fechar"); // Botão de fechar

btn_criar.addEventListener("click", async() => {
    const nome = input_nome.value;
    const idade = input_idade.value;
    const dinehiro = Number(input_dinheiro.value);

    const {open} = await import("./dialog.js")
    open(nome, idade, dinehiro);
});

btn_fechar.addEventListener("click", async() => {
    const {close_p} = await import("./dialog.js");

    close_p();
});