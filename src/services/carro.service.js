const { model } = require('mongoose')
const modelCarro = require('../models/carro.model')
//produtos deve ser alterado para 
function verificaCodigo(produto) {
    for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].codigo === produto.codigo) {
            return false;
        }
    }
    return true
}

function verificaCarro(b) {
    for (var i = 0; i < produtos.length; i++) {
        if (JSON.stringify(produtos[i]) === JSON.stringify(b)) {
            return false;
        }
    }
    return true;
}

async function cadastrarCarro(carro) {
    //if (verificaCarro(carro)) {
        modelCarro.model.create(carro)
            .then((carroBD) => {

            })
            .catch((err) => {
                throw err
            })
    //}
    //throw new Error(`Carro já existe`)
}

module.exports = { cadastrarCarro }