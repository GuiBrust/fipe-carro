module.exports = app => {
    const carroController = require('./src/controllers/carro.controller')
    const marcaController = require('./src/controllers/marca.controller')

    app.route('/carros')
    .post(carroController.criarCarro)

    app.route('/marcas')
    .post(marcaController.criarMarca)
}