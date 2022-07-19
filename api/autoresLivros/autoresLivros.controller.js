const express = require('express');
const router = express.Router();
const autoresLivrosHandler = require('./autoresLivros.handler');

router.get("/", async (req, res) => {
    res.json(await autoresLivrosHandler.pesquisarAutoresLivros());
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await autoresLivrosHandler.pesquisarAutorLivro(id));
});

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await autoresLivrosHandler.criarAutorLivro(dados));
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await autoresLivrosHandler.editarAutorLivro(dados, id));
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await autoresLivrosHandler.removerAutorLivro(id));
});


module.exports = router;