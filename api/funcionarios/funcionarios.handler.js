const crud = require("../../crud/index");


async function pesquisarFuncionarios() {
    return await crud.pegar("funcionarios");
};

async function pesquisarFuncionario(id) {
    return await crud.pegarPeloId("funcionarios", id);
};

async function criarFuncionario(dados) {
    return await crud.adicionarOuEditar("funcionarios", false, dados);
};

async function editarFuncionario(dados, id) {
    return await crud.adicionarOuEditar("funcionarios", id, dados);
};

async function removerFuncionario(id) {
    return await crud.remover("funcionarios", id);
};


module.exports = {
    pesquisarFuncionarios,
    pesquisarFuncionario,
    criarFuncionario,
    editarFuncionario,
    removerFuncionario
};