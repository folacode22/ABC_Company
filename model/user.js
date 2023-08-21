const Sequelize = require('sequelize');


module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      username: { type: Sequelize.STRING, allowNull: false, unique:true },
      password: { type: Sequelize.STRING, allowNull:false},

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    },
    
  );
 
  return User;
};