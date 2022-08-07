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

    for (let reserva of reservas) {
        if (dados.idCliente === reserva.idCliente) {
            return {erro: "Esse cliente já possui uma reserva em andamento!"};
        };
    };

    const livros = await livrosHandler.pesquisarLivros();
    const listaLivrosAReservar = dados.listaLivros;

    for (let livro of livros) {
        for (let idLivro of listaLivrosAReservar) {
            if (livro.id === idLivro) {
                if (livro.reservado == true) {
                    return {erro: "Esse livro não está disponível no momento!"};
                };

                const todosAutores = await autoresLivrosHandler.pesquisarAutoresLivros();
                let autorLivro = [];

                for (let autor of todosAutores) {
                    if (idLivro === autor.idLivro) {
                        autorLivro.push(autor.idAutor);
                    };
                };

                const livroNovo = {
                    titulo: livro.titulo,
                    quantidadePaginas: livro.quantidadePaginas,
                    reservado: true,
                    autores: autorLivro
                };

                await livrosHandler.editarLivro(livroNovo, idLivro);
            };
        };
    };

    const reserva = await crud.adicionarOuEditar("reservas", null, { idCliente: dados.idCliente });

    for (let idLivro of listaLivrosAReservar) {
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