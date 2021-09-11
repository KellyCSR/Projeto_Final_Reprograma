const mongoose = require('mongoose')

const clausulaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: {type: Number,required: true,},
    nome:{type: String, required: true,},
    contrato:{type: Array,required: true,},
    descricao:{type: String,required: true,},
    criadaEm: {type: Date,required: true}
});


module.exports = mongoose.model('clausula', clausulaSchema);