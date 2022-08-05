const crud = require("../../crud/index");


async function pesquisarReservas() {
    return await crud.pegar("reservas");
};

async function pesquisaReserva() {
    return await crud.pegarPeloId("reservas", id);
};

async function criarReserva(dados) {
    return await crud.adicionarOuEditar("reservas", false, dados);
};

async function editarReserva(dados, id) {
    return await crud.adicionarOuEditar("reservas", id, dados);
};

async function removerReserva(id) {
    return await crud.remover("reservas", id);
};


module.exports = {
    pesquisarReservas,
    pesquisaReserva,
    criarReserva,
    editarReserva,
    removerReserva
};