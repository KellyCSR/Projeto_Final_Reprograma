const express = require("express")
const cors = require("cors")
const db = require("./data/database")
const routes = require("./routes/clausulaRoutes")

const clausulas = require("./routes/clausulaRoutes")
const contratos = require("./routes/contratoRoutes")

db.connect()

const app = express()

app.use(cors())
app.use(express.json())


app.use("/clausulas", clausulas)
app.use("/contravos", contratos)

module.exports = app