//bibliotecas 'requeridas'
require('dotenv').config()
const express = require('express')
require('./database')

const app = express()
app.use(express.json())

//rotas


//porta para o server rodar
let port = process.env.PORT || 3000
app.listen(port)


// Nao bulir
