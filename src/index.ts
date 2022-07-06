import express from 'express'
import { MongoConnection } from './database/MongoConnection'
import { URLController } from './controller/URLController'

const api = express()
// Configurações da Aplicação
api.use(express.json())

// Conexão com o Banco de Dados
const database = new MongoConnection()
database.connect()

// Configurações de Rotas
const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)


// Inicialização do servidor
api.listen(5000, () => {
  console.log('Express listening on port 5000')
})
