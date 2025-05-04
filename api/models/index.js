import dbConfig from '../database/db.config.js';
import { Sequelize } from 'sequelize';
import User from './User.js';
import pg from "pg";

let sequelize;

if (dbConfig.url) {
  sequelize = new Sequelize(dbConfig.url, {
    dialect: dbConfig.dialect,
    dialectModule: pg,
    dialectOptions: dbConfig.dialectOptions,
    pool: dbConfig.pool,
  });
} else {
  sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
      host: dbConfig.host,
      dialect: dbConfig.dialect,
      port: dbConfig.port,
      dialectModule: pg,
      dialectOptions: dbConfig.dialectOptions,
      pool: dbConfig.pool,
    }
  );
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = User(sequelize, Sequelize);

export default db;