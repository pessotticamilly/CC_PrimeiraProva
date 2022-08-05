const express = require('express');
const router = express.Router();
const reservasHandler = require('./reservas.handler');


router.get("/", async (req, res) => {
    res.json(await reservasHandler.pesquisarReservas());
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await reservasHandler.pesquisaReserva(id));
});

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await reservasHandler.criarReserva(dados));
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await reservasHandler.editarReserva(dados, id));
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await reservasHandler.removerReserva(id));
});


module.exports = router;