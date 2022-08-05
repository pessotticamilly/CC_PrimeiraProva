const express = require("express");
const router = express.Router();

const autores = require("./api/autores/autores.controller");
const autoresLivros = require("./api/autoresLivros/autoresLivros.controller");
const clientes = require("./api/clientes/clientes.controller");
const editoras = require("./api/editoras/editoras.controller");
const funcionarios = require("./api/funcionarios/funcionarios.controller");
const livros = require("./api/livros/livros.controller");
const livrosReservas = require("./api/livrosReservas/livrosReservas.controller");
const reservas = require("./api/reservas/reservas.controller");


router.use("/autores", autores);
router.use("/autoresLivros", autoresLivros);
router.use("/clientes", clientes);
router.use("/editoras", editoras);
router.use("/funcionarios", funcionarios);
router.use("/livros", livros);
router.use("/livrosReservas", livrosReservas);
router.use("/reservas", reservas);


module.exports = router;