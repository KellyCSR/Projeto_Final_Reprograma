const express = require("express")
const router = express.Router()
const controller = require("../controllers/clausulaController")

router.get("/oi", (req, resp)=>{
    resp.status(200).send({"mensagem":"oi to aqui ta funcionando"})
})

router.get("/", controller.getAll )
router.get("/:id", controller.getById )

router.post("/cadastrar", controller.create)

router.patch("/atualizar/:id", controller.updateClausula)

router.delete("/deletar/:id", controller.deleteClausula)

module.exports = router