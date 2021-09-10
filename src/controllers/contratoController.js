const mongoose = require('mongoose')
const Contrato = require('../models/contrato')

const getAll = async (req, res) => {
  const contratos = await Contrato.find().populate('clausula')
  res.status(200).json(contratos)
}

const findByIdContrato = async (req, res) => {
  try{

    const  idRequerido = req.params.id

    const contrato = await Contrato.findById(idRequerido)
    
    if (contrato == null){
      return res.status(404).json({message: "contrato  não encontrado"})
    }
    res.status(200).json({contrato})
}catch (err){
  res.status(400).json({ message: err.message})
}
}
///titulos/marvel"** Deverá retornar todos os títulos com o estudio Marvel
const getAllLocacao = async (req, res) => {
  const contratos = await Contrato.find().populate('clausula')
  const contratosFiltrados = contratos.filter(contrato => contrato.clausula.nome = "Locacao")
  res.json(contratosFiltrados)
}

////titulos/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
const getAllLGPD = async (req, res) => {
  const contratos = await Contrato.find().populate('clausula')
  const contratosFiltrados = contratos.filter(contrato => contrato.clausula.nome = "LGPD")
  res.json(contratosFiltrados)
}

 ///titulos/pixar"** Deverá retornar todos os títulos com o estudio Pixar
const getAllPreço = async (req, res) =>{
  const contratos = await Contrato.find().populate('clausula')
  const contratosFiltrados = contratos.filter(contrato => contrato.clausula.nome == "Preço")
  res.json(contratosFiltrados)
  }

const createContrato = async (req, res) => {
  const contrato = new Contrato({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    descricao: req.body.descricao,
    clausula: req.body.clausula,
    criadoEm: req.body.criadoEm
  })
  //TODO : criar validação se filme já existe
  const contratoJaExiste = await Contrato.findOne({nome: req.body.nome})
  if (contratoJaExiste) {
    return res.status(409).json({error: 'Contrato ja cadastrado.'})
  }
  try {
    const novoContrato = await contrato.save()
    res.status(201).json(novoContrato)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}

const updateOneContrato = async (req, res) => {
  try{
    const contrato = await Contrato.findById(req.params.id)
    if (contrato == null){
      return res.status(404).json({message: "Contrato  não encontrado"})
    }

    if (req.body.descricao != null){
      contrato.descricao = req.body.descricao
    }

    const contratoAtualizado = await contrato.save()
    res.status(200).json({contratoAtualizado})

  }catch (err){
    res.status(500).json({message: err.message})
  }
}

const updateAnythingContrato = async (req, res) => {
  try{
    const contrato = await Contrato.findById(req.params.id)
    if (contrato == null){
      return res.status(404).json({message: "Contrato não encontrado"})
    }
    const updatedContrato = req.body

    if (updatedContrato != null){

      let keyList = Object.keys(updatedContrato)
      keyList.forEach((conteudo) => {
        console.log('chave', conteudo);
        contrato[conteudo] = updatedContrato[conteudo];
    });
    
    }
    const contratoAtualizado = await contrato.save()
    res.status(200).json({contratoAtualizado})


  }
  catch (err){
    res.status(500).json({message: err.message})
  }
}

const removeOneContrato = async (req, res) => {
  try{
    const contrato = await Contrato.findById(req.params.id)
    if (contrato == null){
      return res.status(404).json({message: "Contrato  não encontrado"})
    }
    contrato.remove()
    res.status(200).json({"mensagem":"Contrato removido com sucesso"})

  }catch (err){
    res.status(500).json({message: err.message})
  }
}



module.exports = {  getAll,  getAllLocacao,  getAllLGPD,  getAllPreço,  updateOneContrato,  updateAnythingContrato,  removeOneContrato,
  findByIdContrato,
  createContrato

}

// const mongoose = require('mongoose');
// const contrato = require('../models/contrato');
// const Contrato = require('../models/contrato')
// const contratoSchema = require('../models/contrato')

// const home = (request, response) => {
//     response.status(200).send(
//         {
//             "message": "Olá pessoa, seja bem vinde ao minutário {reprograma}"
//         }
//     )
// };

// const getAll = async (req, res) => {
//     const contrato = await movieSchema.find().populate('contrato')
//     res.json(contratos)
// }

// const create =  async (req,res) => {
//     const contrato = new contratoSchema({
//         _id: new mongoose.Types.ObjectId(),
//         nome: req.body.nome,
//         contrato: req.body.contrato,
//         descricao: req.body.descricao,
//         clausulas: req.body.clausulas,
//         criadoEm: req.body.criadoEm
//     })
//     try { 
//         const novoContrato = await contratos.save()
//         res.status(201).json(novoContrato)
//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// }

// const getById = async (req, res) => {
//     try {
//         const contratos = await contratoSchema.findById(req.params.id)
//         if(contrato == null) {
//             return res.status(404).json({message: 'contrato nao encontrado'})
//         }
//         res.json(contrato)
//     } catch (error) {
//         res.status(500).json({ message: error.message })

//     }
// }

// const updateContrato = async (req, res) => {
//     try {
//         const contrato = await contratoSchema.findById(req.params.id)
//         if(contrato == null) {
//             return res.status(404).json({message: 'contrato nao encontrado'})
//         }
        
//         if (req.body.nome != null) {
//             contrato.nome = req.body.nome
//         }
//         if (req.body.descricao != null) {
//             contrato.descricao = req.body.descricao
//         }
//         if (req.body.clausulas != null) {
//             contrato.clausulas = req.body.clausulas
//         }
//         if (req.body.criadoEm != null) {
//             contrato.criadoEm = req.body.criadoEm
//         }
        
//         const contratoAtualizado = await contrato.save()
//         res.json(contratoAtualizado)

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

// const deleteContrato = async (req, res) => {
//     try{    
//         const contrato = await contratoSchema.findById(req.params.id)
//         if(contrato == null) {
//             return res.status(404).json({message: 'contrato nao encontrado'})
//         }

//         await contrato.remove()
//         res.json({ message: 'contrato deletado com sucesso!'})
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

// module.exports = {
//     getAll,
//     create,
//     getById,
//     updateContrato,
//     deleteContrato,    
// }


// const home = (request, response) => {
//     response.status(200).send(
//         {
//             "message": "Olá pessoa, seja bem vinde ao minutário {reprograma}"
//         }
//     )
// };

// const getAll = async (req, res) => {
//     const contrato = await movieSchema.find().populate('contrato')
//     res.json(contratos)
// }

// const create =  async (req,res) => {
//     const contrato = new contratoSchema({
//         _id: new mongoose.Types.ObjectId(),
//         nome: req.body.nome,
//         contrato: req.body.contrato,
//         descricao: req.body.descricao,
//         clausulas: req.body.clausulas,
//         criadoEm: req.body.criadoEm
//     })
//     try { 
//         const novoContrato = await contratos.save()
//         res.status(201).json(novoContrato)
//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// }

// const getById = async (req, res) => {
//     try {
//         const contratos = await contratoSchema.findById(req.params.id)
//         if(contrato == null) {
//             return res.status(404).json({message: 'contrato nao encontrado'})
//         }
//         res.json(contrato)
//     } catch (error) {
//         res.status(500).json({ message: error.message })

//     }
// }

// const updateContrato = async (req, res) => {
//     try {
//         const contrato = await contratoSchema.findById(req.params.id)
//         if(contrato == null) {
//             return res.status(404).json({message: 'contrato nao encontrado'})
//         }
        
//         if (req.body.nome != null) {
//             contrato.nome = req.body.nome
//         }
//         if (req.body.descricao != null) {
//             contrato.descricao = req.body.descricao
//         }
//         if (req.body.clausulas != null) {
//             contrato.clausulas = req.body.clausulas
//         }
//         if (req.body.criadoEm != null) {
//             contrato.criadoEm = req.body.criadoEm
//         }
        
//         const contratoAtualizado = await contrato.save()
//         res.json(contratoAtualizado)

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

// const deleteContrato = async (req, res) => {
//     try{    
//         const contrato = await contratoSchema.findById(req.params.id)
//         if(contrato == null) {
//             return res.status(404).json({message: 'contrato nao encontrado'})
//         }

//         await contrato.remove()
//         res.json({ message: 'contrato deletado com sucesso!'})
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

// module.exports = {
//     getAll,
//     create,
//     getById,
//     updateContrato,
//     deleteContrato,    
// }