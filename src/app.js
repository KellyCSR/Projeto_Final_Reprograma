const express = require("express")
const cors = require("cors")
const db = require("./data/database")
const app = express()

const clausulas = require("./routes/clausulaRoutes")
const contratos = require("./routeS/contratoRoutes")

db.connect()

app.use("/clausulas", clausulas);
app.use("/contratos", contratos);

app.use(express.json())

module.exports = app