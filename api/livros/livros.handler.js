const crud = require("../../crud/index");
const autoresLivrosHandler = require("../autoresLivros/autoresLivros.handler");


async function pesquisarLivros() {
    return await crud.pegar("livros");
};

async function pesquisarLivro(id) {
    return await crud.pegarPeloId("livros", id);
};

async function criarLivro(dados) {
    const infosCriar = {
        titulo: dados.titulo,
        quantidadePaginas: dados.quantidadePaginas,
        reservado: false
    };
    const autores = dados.autores;
    const livro = await crud.adicionarOuEditar("livros", null, infosCriar);

    for(idAutor of autores) {
        const autorLivro = {
            idAutor: idAutor,
            idLivro: livro.id
        };

        await autoresLivrosHandler.criarAutorLivro(autorLivro);
    };

    return livro; 
};

async function editarLivro(dados, id) {
    const infosEditar = {
        titulo: dados.titulo,
        quantidadePaginas: dados.quantidadePaginas,
        reservado: dados.reservado
    };
    const autoresInfosEditar = dados.autores;
    const autoresLivros = await autoresLivrosHandler.pesquisarAutoresLivros();

    for(let autorLivro of autoresLivros) {
        if(autorLivro.idLivro === id) {
            await autoresLivrosHandler.removerAutorLivro(autorLivro.id);
        };
    };

    for(let idAutorLivro of autoresInfosEditar) {
        const autorLivroId = {
            idAutorLivro: idAutorLivro,
            idLivro: livro.id
        };

        await autoresLivrosHandler.criarAutorLivro(autorLivroId);
    };

    return await crud.adicionarOuEditar("livros", id, infosEditar);
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