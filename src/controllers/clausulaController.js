const mongoose = require('mongoose')
const Clausula = require('../models/clausula')

const getAll = async (req, res) => {
  const clausulas = await Clausula.find()
  res.status(200).json(clausulas)
}

const findByIdClausula = async (req, res) => {
  try{

    const  idRequerido = req.params.id

    const clausula = await Clausula.findById(idRequerido)
    if (clausula == null){
      return res.status(404).json({message: "Clausula  não encontrada"})
    }
    res.status(200).json({clausula})
}catch (err){
  res.status(400).json({ message: err.message})
}
}


const createClausula = async (req, res) => {
  const clausula = new Clausula({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    contrato: req.body.contrato,
    criadaEm: req.body.criadaEm,
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

const updateOne = async (req, res) => {
  try{
    const clausula = await Clausula.findById(req.params.id)
    if (clausula == null){
      return res.status(404).json({message: "A clausula não foi encontrada"})
    }

    if (req.body.nome != null){
      clausula.nome = req.body.nome
    }

    const clausulaAtualizada = await clausula.save()
    res.status(200).json({clausulaAtualizada})

  }catch (err){
    res.status(500).json({message: err.message})
  }
}

const removeOneClausula = async (req, res) => {
  try{
    const clausula = await Clausula.findById(req.params.id)
    if (clausula == null){
      return res.status(404).json({message: "A clausula não foi encontrada"})
    }
    clausula.remove()
    res.status(200).json({"mensagem":"Clausula removida"})

  }catch (err){
    res.status(500).json({message: err.message})
  }
}



module.exports = {
  getAll,
  findByIdClausula,
  createClausula,
  removeOneClausula,
  updateOne
}

// const mongoose = require('mongoose')
// const Clausula = require('../models/clausula')
// const clausulaSchema = require('../models/clausula');
// const contrato = require('../models/contrato');

// const home = (request, response) => {
//     response.status(200).send(
//         {
//             "message": "Olá pessoa, seja bem vinde ao clausulado {reprograma}"
//         }
//     )
// };

// const getAll = async (req, res) => {
//     const clausula = await movieSchema.find().populate('clausula')
//     res.json(clausulas)
// }

// const create =  async (req,res) => {
//     const clausula = new clausulaSchema({
//         _id: new mongoose.Types.ObjectId(),
//         nome: req.body.nome,
//         contrato: req.body.contrato,
//         descricao: req.body.descricao,
//         criadaEm: req.body.criadaEm
//     })
//     try { 
//         const novaClausula = await clausulas.save()
//         res.status(201).json(novaClausula)
//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// }

// const getById = async (req, res) => {
//     try {
//         const  clausulas = await clausulaSchema.findById(req.params.id)
//         if(clausula == null) {
//             return res.status(404).json({message: 'clausula nao encontrada'})
//         }
//         res.json(clausula)
//     } catch (error) {
//         res.status(500).json({ message: error.message })

//     }
// }

// const updateClausula = async (req, res) => {
//     try {
//         const clausula = await clausulaSchema.findById(req.params.id)
//         if(clausula == null) {
//             return res.status(404).json({message: 'clausula nao encontrada'})
//         }
        
//         if (req.body.nome != null) {
//             clausula.nome = req.body.nome
//         }
//         if (req.body.contrato != null) {
//             clausula.contrato = req.body.contrato
//         }
//         if (req.body.descricao != null) {
//             clausula.descricao = req.body.descricao
//         }
//         if (req.body.criadaEm != null) {
//             clausula.criadaEm = req.body.criadaEm
//         }
        
//         const clausulaAtualizada = await clausula.save()
//         res.json(clausulaAtualizada)

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

// const deleteClausula = async (req, res) => {
//     try{    
//         const clausula = await clausulaSchema.findById(req.params.id)
//         if(clausula == null) {
//             return res.status(404).json({message: 'clausula nao encontrada'})
//         }

//         await clausula.remove()
//         res.json({ message: 'clausula deletada com sucesso!'})
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

// module.exports = {
//     getAll,
//     create,
//     getById,
//     updateClausula,
//     deleteClausula,
    
// }