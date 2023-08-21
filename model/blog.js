const Sequelize = require('sequelize');


module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define(
    "blog",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      title: { type: Sequelize.STRING, allowNull: false },
      content: { type: Sequelize.TEXT,allowNull: false },
      authorId:{type:Sequelize.INTEGER, allowNull:false},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    },
   
  );
 
  return Blog;
};