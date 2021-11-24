const { model } = require('mongoose')
const modelCarro = require('../models/carro.model')
const modelMarca = require('../models/marca.model')

async function cadastrarCarro(carro) {
    var cont = 0;
    var flag = true;
    
    for (var i = 0; i < carro.length; i++) {
        var { id } = carro[i]
        cont++
        if (await modelCarro.model.findOne({ id })) {
            flag = false;
            break;
        }
    }

    if (flag) {
        modelCarro.model.create(carro)
        return `${cont} carro(s) criado(s)`
    } else {
        throw new Error(`Já existe um carro cadastrado com o id ${id}`)
    }

}

async function listarCarros() {
    const carros = await modelCarro.model.find({});
    for (var i = 0; i < carros.length; i++) {
        var { idmarca } = carros[i]
        const marca = await modelMarca.model.findOne({ idmarca }, 'nome');
        
        carros[i] = {
            id: carros[i].id,
            nome: carros[i].nome,
            marca: {
                idMarca: carros[i].idmarca,
                nomeMarca: marca.nome
            },
            preco: carros[i].preco
        }
    }
    return carros
}

async function buscarCarroPorID(idCarro) {

    const carro = await modelCarro.model.findOne({ id: idCarro });
    const marca = await modelMarca.model.findOne({ id: carro.idmarca }, 'id nome');
    if (carro) {
        const newCarro = {
            id: carro.id,
            nome: carro.nome,
            marca: {
                idMarca: marca.id,
                nomeMarca: marca.nome
            },
            preco: carro.preco
        }
        return newCarro
    } else {
        throw new Error(`Nenhum carro encontrado com o código ${idCarro}`)
    }

}

async function atualziarCarro(carro) {
    const newCarro = await modelCarro.model.findOneAndUpdate({ id: carro.id }, { nome: carro.nome, preco: carro.preco })
    if (newCarro) {
        return carro
    } else {
        throw new Error(`Nenhuma carro encontrado com o código ${carro.id}`)
    }
}

async function excluirCarro(idCarro) {

    const carro = await modelCarro.model.findOneAndRemove({ id: idCarro })
    if (!carro) {
        throw new Error(`Nenhuma marca encontrada com o código ${idCarro}`)
    }
}

module.exports = { cadastrarCarro, listarCarros, buscarCarroPorID, excluirCarro, atualziarCarro }