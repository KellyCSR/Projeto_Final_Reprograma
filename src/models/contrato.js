const mongoose = require('mongoose')

const contratoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  contrato: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  clausula: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'clausula'
  },
  criadaEm: {
    type: Date,
    required: true,
    default: new Date
  }
})

module.exports = mongoose.model('contrato', contratoSchema)