const express = require('express')
const cors = require('cors')
const app = express()

//TODO:
//conectar o db
const db = require('./src/data/database')
db.connect()

const contratos = require("./src/routes/contratoRoutes")
const clausulas = require("./src/routes/clausulaRoutes")

//usar as rotas
app.use(cors());
app.use(express.json());

app.use("/clausulas", clausulas);
app.use("/contratos", contratos);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta ${PORT}`);
});

module.exports = app
