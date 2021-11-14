const { model } = require('mongoose')
const modelCarro = require('../models/carro.model')

async function cadastrarCarro(carro) {
    var cont=0;
    for (var i = 0; i < carro.length; i++) {
        var { id } = carro[i]

        if (await modelCarro.model.findOne({ id })) {
            throw new Error(`Já existe um carro cadastrado com o id ${id}`)
        } else {
            cont++
            modelCarro.model.create(carro[i])
                .then((carroBD) => {
                    
                })
                .catch((err) => {
                    throw err
                })
        }
    }
    return `${cont} carros criados`
}

module.exports = { cadastrarCarro }