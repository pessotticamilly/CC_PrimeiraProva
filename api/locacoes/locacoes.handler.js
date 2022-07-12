const crud = require("../../crud/index");


async function pesquisarLocacoes() {
    return await crud.pegar("locacoes");
};

async function pesquisarLocacao(id) {
    return await crud.pegarPeloId("locacoes", id);
};

async function criarLocacao(dados) {
    return await crud.adicionarOuEditar("locacoes", false, dados);
};

async function editarLocacao(dados, id) {
    return await crud.adicionarOuEditar("locacoes", id, dados);
};

async function removerLocacao(id) {
    return await crud.remover("locacoes", id);
};


module.exports = {
    pesquisarLocacoes,
    pesquisarLocacao,
    criarLocacao,
    editarLocacao,
    removerLocacao
};