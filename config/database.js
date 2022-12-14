import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, {
  host: "localhost", 
  dialect: 'postgres', //dialecto
  logging: false,
  port: 5432, 
  define: {
    timestamps: false
  }
});

export default db;

