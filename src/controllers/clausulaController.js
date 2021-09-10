const mongoose = require('mongoose')
const Clausula = require('../models/clausula')
const clausulaSchema = require('../models/clausula');
const contrato = require('../models/contrato');

const home = (request, response) => {
    response.status(200).send(
        {
            "message": "Olá pessoa, seja bem vinde ao clausulado {reprograma}"
        }
    )
};

const getAll = async (req, res) => {
    const clausula = await movieSchema.find().populate('clausula')
    res.json(clausulas)
}

const create =  async (req,res) => {
    const clausula = new clausulaSchema({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        contrato: req.body.contrato,
        descricao: req.body.descricao,
        criadaEm: req.body.criadaEm
    })
    try { 
        const novaClausula = await clausulas.save()
        res.status(201).json(novaClausula)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getById = async (req, res) => {
    try {
        const  clausulas = await clausulaSchema.findById(req.params.id)
        if(clausula == null) {
            return res.status(404).json({message: 'clausula nao encontrada'})
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
            return res.status(404).json({message: 'clausula nao encontrada'})
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
        
        const clausulaAtualizada = await clausula.save()
        res.json(clausulaAtualizada)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteClausula = async (req, res) => {
    try{    
        const clausula = await clausulaSchema.findById(req.params.id)
        if(clausula == null) {
            return res.status(404).json({message: 'clausula nao encontrada'})
        }

        await clausula.remove()
        res.json({ message: 'clausula deletada com sucesso!'})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAll,
    create,
    getById,
    updateClausula,
    deleteClausula,
    
}