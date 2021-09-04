const express = require('express')
const router = express.Router()
const controller = require('../controllers/clausulaController')

//listar todos as clausulas/get/find
router.get('/', controller.getAll)

// //criar um novo clausula/post/save
// router.post('/', controller.createClausula)

// //listar uma clausula/get/findById

// //atualizar uma informacao especifica numa clausula/patch/findById/save
// router.patch('/:id', controller.updateOne)

// //deletar uma clausula/delete/findById/remove

module.exports = router