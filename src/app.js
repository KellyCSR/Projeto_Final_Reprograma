const express = require("express")
const cors = require("cors")
const db = require("./data/database")

const clausulas = require("./routes/clausulaRoutes")
const contratos = require("./routes/contratoRoutes")

db.connect()

const app = express()

app.use("/clausulas", clausulas);
app.use("/contratos", contratos);

module.exports = app