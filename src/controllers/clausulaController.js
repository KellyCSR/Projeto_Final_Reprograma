const mongoose = require('mongoose')
const Clausula = require('../models/clausula')

const getAll = async (req, res) => {
  const clausulas = await Clausula.find()
  res.json(clausulas)
}

const createClausula = async (req, res) => {
  const clausula = new Clausula({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    criadoEm: req.body.criadoEm,
  })
  const clausulaJaExiste = await Clausula.findOne({nome: req.body.nome})
  if (clausulaJaExiste) {
    return res.status(409).json({error: 'Clausula ja cadastrada.'})
  }
  try{
    const novaClausula = await clausula.save()
    res.status(201).json(novaClausula)
  } catch(err) {
    res.status(400).json({ message: err.message})
  }
}

const updateOne = async(req, res) => {
  
  try {
    //Tenta encontrar uma clausula pelo id
    const clausula = await Clausula.findById(req.params.id)
    //Se você não encontrar me retorne o erro
    if (clausula == null) {
      return res.status(404).json({message: "clausula não encontrada"})
    }
    //No corpo da requisição tem algo digitado, considere o que tiver digitado como minha alteração
    if (req.body.nome != null) {
      clausula.nome = req.body.nome
    }
    //Já salvou?
    const clausulaAtualizada = await clausula.save()
    //Retornando o documento atualizado com o código de sucesso
    res.status(200).json(clausulaAtualizada)

  } catch (err) {
    //Se houve qulquer erro acima, mostre qual erro foi esse 
    res.status(500).json({message: err.message})
  }
}

module.exports = {
  getAll
}