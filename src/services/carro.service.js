const { model } = require('mongoose')
const modelCarro = require('../models/carro.model')

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
    return modelCarro.model.find({}, 'id nome');
}

async function buscarCarroPorID(idCarro) {

    const carro = await modelCarro.model.findOne({ id: idCarro }, 'id nome');
    if (carro) {
        return carro
    } else {
        throw new Error(`Nenhum carro encontrado com o código ${idCarro}`)
    }

}

module.exports = { cadastrarCarro, listarCarros, buscarCarroPorID }