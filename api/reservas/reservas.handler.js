const crud = require("../../crud/index");
const livrosHandler = require("../livros/livros.handler");
const autoresLivrosHandler = require("../autoresLivros/autoresLivros.handler");
const livrosReservasHandler = require("../livrosReservas/livrosReservas.handler");


async function pesquisarReservas() {
    return await crud.pegar("reservas");
};

async function pesquisarReserva(id) {
    return await crud.pegarPeloId("reservas", id);
};

async function criarReserva(dados) {
    const reservas = await pesquisarReservas();

    for (let idCLienteReserva of reservas) {
        if (idCliente === idCLienteReserva) {
            alert("Esse cliente já possui uma reserva em andamento!");
            return;
        };
    };

    const livros = await livrosHandler.pesquisarLivros();
    const listaLivros = dados.listaLivros;

    for (let livro of livros) {
        for (let idLivro of listaLivros) {
            if (livro.id === idLivro) {
                if (livro.reservado == true) {
                    alert("Esse livro não está disponível no momento!");
                    return;
                };

                const todosAutores = await autoresLivrosHandler.pesquisarAutoresLivros();
                let autorLivro = [];

                for (let autor of todosAutores) {
                    if (idLivro === autor.idLivro) {
                        autorLivro.push(autor.idAutor);
                    };
                };

                const livroNovo = {
                    titulo: titulo,
                    quantidadePaginas: quantidadePaginas,
                    reservado: true,
                    autores: autorLivro
                };

                await livrosHandler.editarLivro(idLivro, livroNovo);
            };
        };
    };

    const reserva = await crud.adicionarOuEditar("reservas", null, { idCliente: idCliente });

    for (let idLivro of listaLivros) {
        const livroReservado = {
            idLivro: idLivro,
            idReserva: reserva.id
        };

        await livrosReservasHandler.criarLivroReserva(livroReservado);
    };

    return reserva;
};

async function editarReserva(dados, id) {
    return await crud.adicionarOuEditar("reservas", id, dados);
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