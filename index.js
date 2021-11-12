const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const routes = require('./routes')
const database = require('./database')

const port = 3001
const mongoURI = 'mongodb://localhost:27017/carros'
const app = express()

database.connect(mongoURI)

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "FIPE",
            description: "CRUD de exemplo construído durante a disciplina de Programação IV do curso de Sistemas de Informação da Unoesc Chapecó!"
        },
        servers: [`http://localhost:${port}`]
    },
    apis: ['./src/controllers/*']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json())
routes(app);

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}. Acesse http://localhost:${port}/swagger-ui no seu navegador.`);
});