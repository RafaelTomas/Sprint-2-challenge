const Sequelize = require('sequelize')
const instance = require('../database/index')
const taskModel = require('./task')

const columns = {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
   
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
}

const settings = {
  freezeTablename: true,
  tableName: 'notes',
  timestamps: true
}

const notes = instance.define('notes', columns, settings)


notes.hasMany(taskModel)


module.exports = notes

//feito