const express = require('express');

const router = express.Router();

const clienteHandler = require('./clientes.handler');

router.get("/", async (req, res) => {
    res.json(await clienteHandler.pesquisarClientes())
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await clienteHandler.pesquisarCliente(id))
})

router.post("/", async (req, res) => {
    const data = req.body;
    res.json(await clienteHandler.criarCliente(data));
})

router.put("/:id", async  (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(await clienteHandler.editarCliente(data, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await clienteHandler.removerCliente(id));
})

module.exports = router;