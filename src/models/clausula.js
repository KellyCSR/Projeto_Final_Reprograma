const mongoose = require('mongoose')

const clausulaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome:{type: String, required: true,},
    contrato:{type: String,required: true,},
    descricao:{type: Number,required: true,}
});


module.exports = mongoose.model('clausula', clausulaSchema);