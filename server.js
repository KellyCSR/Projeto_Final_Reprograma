const express = require('express')
const cors = require('cors')
const app = express()

//TODO:
//conectar o db
const db = require('./src/data/database')
db.connect()

app.use(cors());
app.use(express.json());

const clausulas = require("./src/routes/clausulaRoutes")
app.use("/clausulas", clausulas);

const index = require("./src/routes/index")
app.use("/", index)

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta ${PORT}`);
});

module.exports = app
