const crud = require("../../crud/index");


async function pesquisarAutores() {
    return await crud.pegar("autores");
};

async function pesquisarAutor(id) {
    return await crud.pegarPeloId("autores", id);
};

async function criarAutor(dados) {
    return await crud.adicionarOuEditar("autores", false, dados);
};

async function editarAutor(dados, id) {
    return await crud.adicionarOuEditar("autores", id, dados);
};

async function removerAutor(id) {
    return await crud.remover("autores", id);
};

module.exports = {
    pesquisarAutores,
    pesquisarAutor,
    criarAutor,
    editarAutor,
    removerAutor
};