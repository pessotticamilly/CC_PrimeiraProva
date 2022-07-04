const crud = require("../../crud/index");


async function pesquisarClientes() {
    return await crud.pegar("clientes");
}

async function pesquisarCliente(id) {
    return await crud.pegarPeloId("clientes", id);
}

async function criarCliente(data) {
   return await crud.adicionarEEditar("clientes", false, data);
}

async function editarCliente(data, id){
    return await crud.adicionarEEditar("clientes", id, data);
}

async function removerCliente(id){
    return await crud.remover("clientes", id);
}


module.exports = {
    pesquisarClientes, pesquisarCliente, criarCliente, editarCliente, removerCliente
};