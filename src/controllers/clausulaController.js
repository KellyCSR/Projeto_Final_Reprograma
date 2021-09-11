const mongoose = require("mongoose");
const Clausula = require("../models/clausulas.json")

const getAll = async(req, res) =>{
    const clausulas = await Clausula.find()
    res.status(200).json(clausulas)
}

const getById = async (req,res)=>{
    const clausulaId = req.params.id
    const clausulaById = await Clausula.findById(clausulaId)
    if(clausulaById == null){
        return res.status(404).json({message: "Clausula não encontrada 🤷‍♀️"})
    }
    Clausula.findOne({id:clausulaId},
        function(err){
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send(clausulaById)
            }
        })

}

const createClausula = async(req, res) =>{
    const clausula = new Clausula({
        _id: mongoose.Types.ObjectId(),
        nome: req.body.nome,
        contrato: req.body.contrato,
        descricao: req.body.descricao,
        criadaEm: req.body.criadaEm
        
    })
    const clausulaExist = await Clausula.findOne({nome: req.body.nome})
    if(clausulaExist){
        return res.status(409).json({err: 'Clausula já existe'})
    }

    try{
        const newClausula = await clausula.save()
        res.status(201).json(newClausula)
    }catch(err){
        res.status(400).json({message: err.message})
    }
}
const getId = async (req,res)=>{
    const clausulaId = req.params.id
    const clausulaById = await Clausula.findById(clausulaId)
    if(clausulaById == null){
        return res.status(404).json({message: "Clausula não encontrada 🤷‍♀️"})
    }
    Clausula.findOne({id:clausulaId},
        function(err){
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send(clausulaById)
            }
        })

}

const updateClausula = async (req, res) => {
    const clausulaId = req.params.id 
    const clausulaReq = req.body;
    const clausulaById = await Clausula.findById(clausulaId)
    if(clausulaById == null){
        return res.status(404).json({message: "Clausula não encontrada 🤷‍♀️"})
    }
    Skill.findByIdAndUpdate(clausulaId, clausulaReq, { new: true }, (err, clausulaUpdate) => {
        if (err) {
            return res.status(424).json(
                { message: err.message });
        } else if (!clausulaUpdate) {

            return res.status(404).json({message: "Registro não encontrado 🤷‍♀️"});
        } else { return res.status(200).json(clausulaUpdate) }
    });
   
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
  createClausula,
  getById,
  updateClausula,
  deleteClausula
}