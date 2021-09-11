const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const db = require("../src/data/database");
const index = require("./routes/index");
const clausulas = require("./routes/clausulaRoutes");

db.connect();

app.use(express.json());
app.use(cors());

app.use("/", index);
app.use("/inicio", clausulas); 


module.exports = app;