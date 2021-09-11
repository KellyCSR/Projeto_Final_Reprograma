const mongoose = require("mongoose");

const clausulasSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {type: String, require: true},
    contrato: {type: String, require: true},
    descricao: {type: String, require: true},
    criadaEm: {type: String, require: true}
}, {
    versionKey: false
});

const clausulas = mongoose.model('materias', clausulasSchema);

module.exports = clausulas;