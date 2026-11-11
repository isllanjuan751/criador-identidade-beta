const caixa_prinicpal = document.getElementById("Caixa");
const exibir_nome = document.getElementById("Exibir_Nome");
const exibir_idade = document.getElementById("Exibir_Idade");
const exibir_dinheiro = document.getElementById("Exibir_Dinheiro");

export const open = (nome, idade, dinheiro) => {
    exibir_nome.textContent = "Nome: " + nome;
    exibir_idade.textContent = "Idade: " + idade;
    exibir_dinheiro.textContent = "Dinherio: " + dinheiro;

    caixa_prinicpal.showModal();
};

export const close_p = () => {
    exibir_nome.textContent = "Nome: ";
    exibir_idade.textContent = "Idade: ";
    exibir_dinheiro.textContent = "Dinheiro: ";
    caixa_prinicpal.close();
};