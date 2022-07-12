const crud = require("../../crud/index");


async function pesquisarLivros() {
    return await crud.pegar("livros");
};

async function pesquisarLivro(id) {
    return await crud.pegarPeloId("livros", id);
};

async function criarLivro(dados) {
    return await crud.adicionarOuEditar("livros", false, dados);
};

async function editarLivro(dados, id) {
    return await crud.adicionarOuEditar("livros", id, dados);
};

async function removerLivro(id) {
    return await crud.remover("autores", id);
};


module.exports = {
    pesquisarLivros,
    pesquisarLivro,
    criarLivro,
    editarLivro,
    removerLivro
};