const crud = require("../../crud/index");
const autoresLivrosHandler = require('../autoresLivros/autoresLivros.handler')


async function pesquisarReservas() {
    return await crud.pegar("reservas");
};

async function pesquisarReserva(id) {
    return await crud.pegarPeloId("reservas", id);
};

async function criarReserva(dados) {
    return await crud.adicionarOuEditar("reservas", false, dados);
};

async function editarReserva(dados, id) {
    return await crud.adicionarOuEditar("autores", id, dados);
};

async function removerReserva(id) {
    return await crud.remover("reservas", id);
};


module.exports = {
    pesquisarReservas,
    pesquisarReserva,
    criarReserva,
    editarReserva,
    removerReserva
};