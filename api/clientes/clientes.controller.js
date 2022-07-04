const express = require('express');
const router = express.Router();
const clientesHandler = require('./clientes.handler');


router.get("/", async (req, res) => {
    res.json(await clientesHandler.pesquisarClientes())
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await clientesHandler.pesquisarCliente(id))
})

router.post("/", async (req, res) => {
    const data = req.body;
    res.json(await clientesHandler.criarCliente(data));
})

router.put("/:id", async  (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(await clientesHandler.editarCliente(data, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await clientesHandler.removerCliente(id));
})


module.exports = router;