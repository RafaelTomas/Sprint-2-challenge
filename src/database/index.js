const Sequelize = require('sequelize')
const dbconfig = require('../Config/database')


const instance = new Sequelize(dbconfig)

module.exports = instance
