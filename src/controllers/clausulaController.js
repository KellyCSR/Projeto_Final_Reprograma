const mongoose = require("mongoose");
const clausulaSchema = require("../models/clausula")

const getAll = async (req, res) => {
  const clausulas = await clausulaSchema.find()
  res.json(clausulas)
}

const create =  async (req,res) => {
  const clausula = new clausulaSchema({
     // _id: new mongoose.Types.ObjectId(),
      nome: req.body.alimento,
      contrato: req.body.contrato,
      descricao: req.body.descricao,
      criadaEm: req.body.criadaEm
      

  })
  const clausulaJaExiste = await clausulaSchema.findOne({nome: req.body.nome})
    if (clausulaJaExiste) {
      return res.status(409).json({error: 'Clausula ja cadastrada.'})
    }else{
    try {
      const newClausula = await clausula.save()
      res.status(201).json(newClausula)
    } catch (err) {
      res.status(400).json({ message: err.message})
    }
}
}

const getById = async (req, res) => {
  try {
      const clausula = await clausulaSchema.findById(req.params.id)
      if(clausula == null) {
          return res.status(404).json({message: 'Clausula nao encontrada'})
      }
      res.json(clausula)
  } catch (error) {
      res.status(500).json({ message: error.message })

  }
}

const updateClausula = async (req, res) => {
  try {
      const clausula = await clausulaSchema.findById(req.params.id)
      if(clausula == null) {
          return res.status(404).json({message: 'Clausula nao encontrada'})
      }
      if (req.body.id != null) {
        clausula.id = req.body.id
    }
      if (req.body.nome != null) {
          clausula.nome = req.body.nome
      }
      if (req.body.contrato != null) {
          clausula.contrato = req.body.contrato
      }
      if (req.body.descricao != null) {
          clausula.descricao = req.body.descricao
      }
      if (req.body.criadaEm != null) {
        clausula.criadaEm = req.body.criadaEm
    }
      
      const ClausulaAtualizada = await clausula.save()
      res.json(ClausulaAtualizada)

  } catch (error) {
      res.status(500).json({ message: error.message })
  }
}

const deleteClausula = async (req, res) => {
  try{
    const clausula = await clausulaSchema.findById(req.params.id)
    if(clausula == null){
      return res.status(404).json({message: 'Clausula não encontrada'})
    }
    await clausula.remove()
    res.json({message: 'Clausula deletada com sucesso'})
  } catch(error){
    res.status(500).json({message: 'error.message'})
  }
}



module.exports = {
  getAll,
  create,
  getById,
  updateClausula,
  deleteClausula
}