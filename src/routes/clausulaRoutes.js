const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const controller = require("../controllers/clausulaController");

//READ & GET & FIND : listar todas as clausula
router.get("/clausulas", controller.getAll);

//READ & GET & FIND : listar uma clausula/get/findById
router.get("/filtrar/:id", controller.getById);

//CREATE & POST & INSERT : criar uma nova clausula
router.post("/cadastrar", controller.createClausula);

//UPDATE & PUT/patch & UPDATE (findById/save) : atualizar uma informacao especifica numa clausula
router.patch("/atualizar/:id", controller.updateClausula);

//DELETE & DELETE & REMOVE (findById): deletar uma clausula
router.delete("/excluir/:id", controller.deleteClausula);

module.exports = router;