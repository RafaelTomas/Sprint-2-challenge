'use strict';
const {
  Model , DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notes extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};