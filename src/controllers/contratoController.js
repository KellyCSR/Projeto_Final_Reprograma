const mongoose = require('mongoose')
const contratoSchema = require('../models/contrato')

const getAll = async (req, res) => {
    const contratos = await contratoSchema.find().populate('contract') //eager loading
    res.json(contratos)
}

const create =  async (req,res) => {
    const contrato = new contratoSchema({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        descricao: req.body.descricao,
        clausula: req.body.clausula,
        criadoEm: req.body.criadoEm
    })
    try { 
        const novoContrato = await contrato.save()
        res.status(201).json(novoContrato)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getById = async (req, res) => {
    try {
        const contrato = await contratoSchema.findById(req.params.id)
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
        if (req.body.clausula != null) {
            contrato.clausula = req.body.clausula
        }
        if (req.body.descricao != null) {
            contrato.descricao = req.body.descricao
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