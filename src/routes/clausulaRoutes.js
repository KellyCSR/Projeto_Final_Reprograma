const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Models = require("../models/clausula")

router.get('/', async(req, res) => {
    const models = await Models.find()
    res.json(models)
})

router.post('/create', async (req, res) => {
    const models = new Models({
        id: req.body.id,
        nome:req.body.nome,
        contrato:req.body.contrato,
        descricao:req.body.descricao,
        criadaEm: req.body.criadoEm
    })
    const modelExistente = await Models.findOne()
        
        try {
            const novoModels = await models.save()
        } catch (error) {
            res.status(400).json({message: err.message})
        }
})

const controller = require("../controllers/clausulaController");

router.get("/", controller.getAll )
router.get("/:id", controller.getById )

router.post("/cadastrar", controller.createClausula)

router.patch("/atualizar", controller.updateClausula)

router.delete("/remover/:id", controller.deleteClausula)

module.exports = router