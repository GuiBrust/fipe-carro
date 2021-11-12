const CarroService = require('../services/marca.service')

/**
 * @swagger
 * /marcas:
 *  post:
 *    description: API para cadastrar nova marca
 *    parameters:
 *      - in: body
 *        name: marca
 *        description: cadastrar marca.
 *        schema:
 *          type: object
 *          properties:
 *            id:
 *              type: string
 *            nome:
 *              type: string 
 *             
 *    responses:
 *      '201':
 *         description: Marca cadastrada com sucesso  
 *      '400':
 *         description: Bad Request
 */
const criarMarca = (req, res) => {
    CarroService.cadastrarMarca(req.body)
        .then((marca) => {
            res.status(201).json(marca);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
}


module.exports = { criarMarca }