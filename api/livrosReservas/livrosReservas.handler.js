const crud = require("../../crud/index");


async function pesquisarLivrosReservas() {
    return await crud.pegar("livrosReservas");
};

async function pesquisarLivroReserva(id) {
    return await crud.pegarPeloId("livrosReservas", id);
};

async function criarLivroReserva(dados) {
    return await crud.adicionarOuEditar("livrosReservas", false, dados);
};

async function editarLivroReserva(dados, id) {
    return await crud.adicionarOuEditar("livrosReservas", id, dados);
};

async function removerLivroReserva(id) {
    return await crud.remover("livrosReservas", id);
};


module.exports = {
    pesquisarLivrosReservas,
    pesquisarLivroReserva,
    criarLivroReserva,
    editarLivroReserva,
    removerLivroReserva
};