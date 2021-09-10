const mongoose = require('mongoose');
const contrato = require('../models/contrato');
const Contrato = require('../models/contrato')
const contratoSchema = require('../models/contrato')

const home = (request, response) => {
    response.status(200).send(
        {
            "message": "Olá pessoa, seja bem vinde ao minutário {reprograma}"
        }
    )
};

const getAll = async (req, res) => {
    const contrato = await movieSchema.find().populate('contrato')
    res.json(contratos)
}

const create =  async (req,res) => {
    const contrato = new contratoSchema({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        contrato: req.body.contrato,
        descricao: req.body.descricao,
        clausulas: req.body.clausulas,
        criadoEm: req.body.criadoEm
    })
    try { 
        const novoContrato = await contratos.save()
        res.status(201).json(novoContrato)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getById = async (req, res) => {
    try {
        const contratos = await contratoSchema.findById(req.params.id)
        if(contrato == null) {
            return res.status(404).json({message: 'contrato nao encontrado'})
        }
        res.json(contrato)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

const updateContrato = async (req, res) => {
    try {
        const contrato = await contratoSchema.findById(req.params.id)
        if(contrato == null) {
            return res.status(404).json({message: 'contrato nao encontrado'})
        }
        
        if (req.body.nome != null) {
            contrato.nome = req.body.nome
        }
        if (req.body.descricao != null) {
            contrato.descricao = req.body.descricao
        }
        if (req.body.clausulas != null) {
            contrato.clausulas = req.body.clausulas
        }
        if (req.body.criadoEm != null) {
            contrato.criadoEm = req.body.criadoEm
        }
        
        const contratoAtualizado = await contrato.save()
        res.json(contratoAtualizado)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteContrato = async (req, res) => {
    try{    
        const contrato = await contratoSchema.findById(req.params.id)
        if(contrato == null) {
            return res.status(404).json({message: 'contrato nao encontrado'})
        }

        await contrato.remove()
        res.json({ message: 'contrato deletado com sucesso!'})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAll,
    create,
    getById,
    updateContrato,
    deleteContrato,    
}