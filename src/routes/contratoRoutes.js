const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    response.status(200).json({
        "clausula": "API de clausulas",
        "version": "1.0.0",
        "mensagem": "Banco de clausulas"
    })
})
module.exports = router