const crud = require("../../crud/index");


async function pesquisarEditoras() {
    return await crud.pegar("editoras");
};

async function pesquisarEditora(id) {
    return await crud.pegarPeloId("editoras", id);
};

async function criarEditora(dados) {
    return await crud.adicionarOuEditar("editoras", false, dados);
};

async function editarEditora(dados, id) {
    return await crud.adicionarOuEditar("editoras", id, dados);
};

async function removerEditora(id) {
    return await crud.remover("editoras", id);
};


module.exports = {
    pesquisarEditoras,
    pesquisarEditora,
    criarEditora,
    editarEditora,
    removerEditora
};