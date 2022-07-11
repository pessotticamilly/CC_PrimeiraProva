const express = require('express');
const router = express.Router();
const funcionariosHandler = require('./funcionarios.handler');


router.get("/", async (res) => {
    res.json(await funcionariosHandler.pesquisarFuncionarios());
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await funcionariosHandler.pesquisarFuncionario(id));
});

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await funcionariosHandler.criarFuncionario(dados));
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await funcionariosHandler.editarFuncionario(dados, id));
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await funcionariosHandler.removerFuncionario(id));
});


module.exports = router;