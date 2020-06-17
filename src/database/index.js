const Sequelize = require('sequelize');


const User = require('../app/models/UserModel');

const databaseConfig = require('../config/database');

const models = [User];

class Database {
  constructor(){

  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model=>model.init(this.connection));
  }

}

module.exports = new Database();
