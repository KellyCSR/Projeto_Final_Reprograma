const express = require('express')
const app = express()

//TODO:
//conectar o db
const db = require('./src/data/database')
db.connect()
//usar as rotas
app.use(express.json())

const clausulas = require("./src/routes/clausulaRoutes")
app.use("/clausulas", clausulas);

const contratos = require("./src/routes/contratoRoutes")
app.use("/contratos", contratos);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta ${PORT}`);
});


module.exports = app