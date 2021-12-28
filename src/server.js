const express = require('express')
require('./database')
const router = require('./router')
const NotFound = require('./erro/NotFound')
const invalidField = require('./erro/invalidfield')
const dataNotProvided = require('./erro/dataNotProvided')
const valueNotSpported = require('./erro/valueNotSupported')

const app = express()
app.use(express.json())

//erros
app.use((erro, req, res, next) => {
    let status = 500
    
    if (erro instanceof NotFound){
        status = 404
    }
    if (erro instanceof invalidField || erro instanceof dataNotProvided){
        status = 400
    }

    if (erro instanceof valueNotSpported){
        status = 406
    }
    

    res.status(status)
    res.send(
        JSON.stringify({
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})


//rotas
app.use('/api/project', router)

//porta para o server rodar
let port = process.env.PORT || 3000
app.listen(port)


