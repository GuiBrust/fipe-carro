const { model } = require('mongoose')
const modelMarca = require('../models/marca.model')


async function cadastrarMarca(marca) {
    var cont = 0;
    for (var i = 0; i < marca.length; i++) {
        var { id } = marca[i]

        if (await modelMarca.model.findOne({ id })) {
            throw new Error(`Já existe uma marca cadastrada com o id ${id}`)
        }
        else {
            cont++
            modelMarca.model.create(marca[i])
                .then((marcaBD) => {

                })
                .catch((err) => {
                    throw err
                })
        }
    }

    return `${cont} marca(s) criada(s)`
}

async function listarMarcas() {
    return modelMarca.model.find({}, 'id nome');
}

async function buscarMarcaPorID(idMarca) {

    const marca = await modelMarca.model.findOne({ id: idMarca }, 'id nome');
    console.log(marca);
    if (marca) {
        return marca
    } else {
        throw new Error(`Nenhum produto encontrado com o código ${idMarca}`)
    }

}

module.exports = { cadastrarMarca, listarMarcas, buscarMarcaPorID }