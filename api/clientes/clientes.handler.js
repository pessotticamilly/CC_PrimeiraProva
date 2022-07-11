const crud = require("../../crud/index");


async function pesquisarClientes() {
    return await crud.pegar("clientes");
};

async function pesquisarCliente(id) {
    return await crud.pegarPeloId("clientes", id);
};

async function criarCliente(dados) {
    return await crud.adicionarOuEditar("clientes", false, dados);
};

async function editarCliente(dados, id) {
    return await crud.adicionarOuEditar("clientes", id, dados);
};

async function removerCliente(id) {
    return await crud.remover("clientes", id);
};


module.exports = {
    pesquisarClientes,
    pesquisarCliente,
    criarCliente,
    editarCliente,
    removerCliente
};