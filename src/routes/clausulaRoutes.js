const express = require("express")
const router = express.Router()
const controller = require("../controllers/clausulaController")

router.get("/", controller.getAll )
router.get("/:id", controller.getById )

router.post("/cadastrar", controller.create)

router.patch("/atualizar/:id", controller.updateClausula)

router.delete("/deletar/:id", controller.deleteClausula)

router.get("/oi", (req, resp)=>{
    resp.status(200).send({"mensagem":"funcionando no grau mami"})
})

module.exports = router