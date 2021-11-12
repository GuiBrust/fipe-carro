const { model } = require('mongoose')
const modelCarro = require('../models/marca.model')


async function cadastrarMarca(marca) {

        modelCarro.model.create(marca)
            .then((carroBD) => {

            })
            .catch((err) => {
                throw err
            })
}

module.exports = { cadastrarMarca }