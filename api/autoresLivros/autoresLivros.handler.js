const crud = require('../../crud/index');


async function pesquisarAutoresLivros() {
    return await crud.pegar("autoresLivros");
};

async function pesquisarAutorLivro(id) {
    return await crud.pegarPeloId("autoresLivros", id);
};

async function criarAutorLivro(dados) {
    return await crud.adicionarOuEditar("autoresLivros", false, dados);
};

async function editarAutorLivro(dados, id) {
    return await crud.adicionarOuEditar("autoresLivros", id, dados);
};

async function removerAutorLivro(id) {
    return await crud.remover("autoresLivros", id);
};


module.exports = {
    pesquisarAutoresLivros,
    pesquisarAutorLivro,
    criarAutorLivro,
    editarAutorLivro,
    removerAutorLivro
};