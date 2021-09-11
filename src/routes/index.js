const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "Clausulado",
        "version": "1.0.0",
        "mensagem": "Para otimizar as demandas de departamentos jurídicos e escritório de advocacia"
    })
})
module.exports = router