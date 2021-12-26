require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.json())

app.listen('port', process.env.PORT || 3000)