const express = require("express")
const app = require("./src/app");
const PORT = process.env.PORT || 3000;

const db = require("./src/data/database")

app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta ${PORT}`);
});