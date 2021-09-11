
const mongoose = require('mongoose');
const Clausula = require('../models/clausula');

//READ & GET & FIND : listar todas as categorias
const getAll = async (req, res) => {
    const clausula = await Clausula.find()
    res.status(200).json(clausula)
};

//READ & GET & FIND : listar um produto/get/findById
const getById = async (req, res) => {
    try {
        const clausula = await Clausula.findById(req.params.id)
        if(clausula == null) {
            return res.status(404).json({message: "clausula não encontrada"})
        }
        res.json(clausula)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

//CREATE & POST & INSERT : criar uma nova categoria para os items da dispensa
const createClausula = async (req, res) => {
    const clausula = new Clausula({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        contrato: req.body.contrato,
        criadaEm: req.body.criadaEm
    })
    const ClausulaJaExiste = await Clausula.findOne({ nome: req.body.nome })
    if (ClausulaJaExiste) {
        return res.status(409).json({ error: "Clausula já cadastrada." })
    }
    try {
        const novaClausula = await clausula.save()
        res.status(201).json(novaClausula)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

//UPDATE & PUT/patch & UPDATE (findById/save) : atualizar uma informacao especifica numa categoria
const updateClausula = async (req, res) => {
    try {
        const clausula = await Clausula.findById(req.params.id)
        if(clausula == null) {
            return res.status(404).json({message: "Clausula não encontrada"})
        }
        
        if (req.body.nome != null) {
            categoria.nome = req.body.nome
        }   

        if (req.body.contrato != null) {
            clausual.contrato = req.body.contrato
        }  
        if (req.body.criadaEm != null) {
            clausual.criadaEm = req.body.criadaEm
        }  
        
        const clausulaAtualizada = await clausula.save()
        res.json(clausulaAtualizada)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//DELETE & DELETE & REMOVE (findById): deletar um produto da dispensa
const deleteClausula = async (req, res) => {
    try {
        const clausula = await Clausula.findById(req.params.id)
        if (clausula == null) {
            return res.status(404).json({ message: "Clausula não encontrada" })
        }
        await clausula.remove()
        res.json({ message: "Clausula deletada com sucesso" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAll,
    getById,
    createClausula,
    updateClausula,
    deleteClausula
};