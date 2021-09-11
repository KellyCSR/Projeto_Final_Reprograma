const mongoose = require('mongoose');
const Contrato = require('../models/contrato');


//READ & GET & FIND : listar todos os itens da dispensa
const getAll = async (req, res) => {
    const contrato = await Contrato.find().populate("descricao")
    res.status(200).json(contrato)
};

//READ & GET & FIND : listar itens do contrato de acordo com a clausula
const getByID = async (req, res) => {
    const clausulaSolicitada = req.query.descricao
    const contrato = await Contrato.find().populate("clausula")
    const ContratoFiltrado = contrato.filter(itemContrato => itemContrato.clausula.clausula == clausulaSolicitada)
    res.json(ContratoFiltrado)
}

//CREATE & POST & INSERT : criar um novo item da dispensa
const createContrato = async (req, res) => {
    const contrato = new Contrato({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        descricao: req.body.descricao,
        clausula: req.body.clausula,
        criadoEm: req.body.criadoEm
    })
    const ContratoJaExiste = await Contrato.findOne({ nome: req.body.nome })
    if (ContratoJaExiste) {
        return res.status(409).json({ error: "Contrato já cadastrado." })
    }
    try {
        const novoContrato = await contrato.save()
        res.status(201).json(novoContrato)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

//UPDATE & PUT/patch & UPDATE (findById/save) : atualizar uma informacao especifica num item da dispensa
const updateContrato = async (req, res) => {
    try {
        const contrato = await Contrato.findById(req.params.id)
        if(contrato == null) {
            return res.status(404).json({message: "Contrato não encontrado"})
        }
        
        if (req.body.nome != null) {
            contrato.nome = req.body.nome
        }
        if (req.body.descricao != null) {
            contrato.descricao = req.body.descricao
        }  
        if (req.body.clausula != null) {
            contrato.clausula = req.body.clausula
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

//DELETE & DELETE & REMOVE (findById): deletar um produto da dispensa
const deleteContrato = async (req, res) => {
    try {
        const contrato = await Contrato.findById(req.params.id)
        if (contrato == null) {
            return res.status(404).json({ message: "Contrato não encontrado" })
        }
        await contrato.remove()
        res.json({ message: "Contrato deletado com sucesso" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAll,
    getByID,
    createContrato,
    updateContrato,
    deleteContrato
};