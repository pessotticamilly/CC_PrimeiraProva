const express = require('express');
const router = express.Router();
const locacoesHandler = require('./locacoes.handler');


router.get("/", async (req, res) => {
    res.json(await locacoesHandler.pesquisarLocacoes());
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await locacoesHandler.pesquisarLocacao(id));
});

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await locacoesHandler.criarLocacao(dados));
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await locacoesHandler.editarLocacao(dados, id));
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await locacoesHandler.removerLocacao(id));
});


module.exports = router;