const mongoose = require('mongoose')

const clausulaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome:{type: String, required: true,},
    contrato:{type: Array,required: true,},
    descricao:{type: Number,required: true,},
    criadaEm: {type: Date,required: true}
});


module.exports = mongoose.model('clausula', clausulaSchema);