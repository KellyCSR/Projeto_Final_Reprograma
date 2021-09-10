const express = require('express')
const router = express.Router()
const controller = require('../controllers/clausulaController')

router.get("/oi", (req, resp)=>{
        resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})
    })

//listar todas as clausulas/get/find
router.get('/', controller.getAll)

//criar uma nova clausula/post/save
router.post('/', controller.createClausula)

//listar uma clausula/get/findById
router.get('/:id', controller.findByIdClausula)

//atualizar uma informacao especifica numa clausula/patch/findById/save
router.patch('/:id', controller.updateOne)

//deletar uma clausula/delete/findById/remove
router.delete('/:id', controller.removeOneClausula)

module.exports = router

// const express = require('express')
// const router = express.Router()
// const controller = require('../controllers/clausulaController')

// router.get("/oi", (req, resp)=>{
//     resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})
// })

// //listar todas as clausulas/get/find
// router.get('/', controller.getAll)

// //listar uma clausula/get/findById
// router.get('/:id', controller.getById)

// //criar um nova clausula/post/save
// router.post('/', controller.create)

// //atualizar uma informacao especifica numa clausula/patch/findById/save
// router.patch('/:id', controller.updateClausula)

// //deletar uma clausula/delete/findById/remove
// router.delete("/deletar/:id", controller.deleteClausula)

// module.exports = router






// const express = require("express")
// const router = express.Router()
// const controller = require("../controllers/clausulaController")

// router.get("/oi", (req, resp)=>{
//     resp.status(200).send({"mensagem":"oi to aqui ta funcionando"})
// })

// router.get("/", controller.getAll )
// router.get("/:id", controller.getById )

// router.post("/cadastrar", controller.create)

// router.patch("/atualizar/:id", controller.updateClausula)

// router.delete("/deletar/:id", controller.deleteClausula)

// module.exports = router