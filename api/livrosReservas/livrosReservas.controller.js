const express = require('express');
const router = express.Router();
const livrosReservasHandler = require('./livrosReservas.handler');


router.get("/", async (req, res) => {
    res.json(await livrosReservasHandler.pesquisarLivrosReservas());
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await livrosReservasHandler.pesquisarLivroReserva(id));
});

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await livrosReservasHandler.criarLivroReserva(dados));
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await livrosReservasHandler.editarLivroReserva(dados, id));
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await livrosReservasHandler.removerLivroReserva(id));
});


module.exports = router;