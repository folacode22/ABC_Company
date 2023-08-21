const config = require("../config/db")
const pg = require('pg');
 const Sequelize = require('sequelize');


const sequelize = new Sequelize(config.URI, {logging:false});

 const db = {};
 db.Sequelize = Sequelize;
 db.sequelize = sequelize;

 db.user = require('./user')(sequelize, Sequelize);
 db.blog = require('./blog')(sequelize, Sequelize);

 module.exports = db;