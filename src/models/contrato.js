const mongoose = require('mongoose')

const contratoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  clausula: {
    type: Array,
    required: true,
    ref: 'clausula'
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})

module.exports = mongoose.model('contrato', contratoSchema)