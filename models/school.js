// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes para asignarle los tipos a nuestra base de datos
const { DataTypes } = Sequelize;
 
// Define schema
const School = db.define('School', {
  // Define attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  createdOn: {
    type: DataTypes.DATE,
    field: 'created_on', //el nombre real de la base de datos
    defaultValue: Sequelize.NOW
  }
},{
  tableName: 'school' //es para definir la base de dato sino te la hace sequelize
});
 
// Export model School
export default School;