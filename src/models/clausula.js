const mongoose = require('mongoose')

const clausulaSchema = new mongoose.Schema({ // instanciar o schema dentro do mongoose
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  contrato: {
    type: Array,
    required: true
  },
  criadaEm: {
    type: Date,
    required: true,
    default: new Date
  }
})

module.exports = mongoose.model('clausula', clausulaSchema)