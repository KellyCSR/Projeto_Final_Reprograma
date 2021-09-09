const express = require('express')
const router = express.Router()
const controller = require('../controllers/contratoController')

router.get("/oi", (req, resp)=>{
    resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})
})

//listar todos os conlausulas/get/find
router.get('/', controller.getAll)

//listar um contrato/get/findById
router.get('/:id', controller.getById)

//criar um novo contrato/post/save
router.post('/', controller.create)

//atualizar uma informacao especifica em um contrato/patch/findById/save
router.patch('/:id', controller.updateContrato)

//deletar uma clausula/delete/findById/remove
router.delete('/:id', controller.deleteContrato)

module.exports = router