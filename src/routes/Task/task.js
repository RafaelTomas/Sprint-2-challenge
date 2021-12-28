const Sequelize = require('sequelize')
const instance = require('../../database/index')

const columns = {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  taskRelevance: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
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
  tableName: 'task',
  timestamps: true
}

const task = instance.define('task', columns, settings)

module.exports = task