const CarroService = require('../services/carro.service')

/**
 * @swagger
 * /carros:
 *  post:
 *    description: API para cadastrar novo carro
 *    parameters:
 *      - in: body
 *        name: carro
 *        description: cadastrar carro.
 *        schema:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *            idmarca:
 *              type: number 
 *            nome:
 *              type: string 
 *            preco:
 *              type: number 
 *             
 *    responses:
 *      '201':
 *         description: Carro cadastrado com sucesso  
 *      '400':
 *         description: Bad Request
 */
const criarCarro = (req, res) => {
    CarroService.cadastrarCarro(req.body)
        .then((carro) => {
            res.status(201).json(carro);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
}


module.exports = { criarCarro }