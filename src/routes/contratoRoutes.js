const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const controller = require("../controllers/contratoController");

router.get("/oi", (req, resp)=>{
    resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})
})

//READ & GET & FIND : listar todos os itens da dispensa
router.get("/", controller.getAll);

//READ & GET & FIND : listar itens da dispensa por categoria
router.get("/:id", controller.getByID);

//CREATE & POST & INSERT : criar um novo item da dispensa
router.post("/adicionar", controller.createContrato);


//UPDATE & PUT/patch & UPDATE (findById/save) : atualizar uma informacao especifica num item da dispensa
router.patch("/atualizar/:id", controller.updateContrato);

//DELETE & DELETE & REMOVE (findById): deletar um produto da dispensa
router.delete("/excluir/:id", controller.deleteContrato);


module.exports = router;