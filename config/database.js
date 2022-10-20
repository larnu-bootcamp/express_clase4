import { Sequelize } from "sequelize";
// esta es una arquitectura para un microservicio
// create connection 
//esto es para crear la coneccion el primer desafio es levantar una base de dato y tener la credenciales
const db = new Sequelize(
  "larnu_demo",  //el nombre de la base de datos que creamos la semana pasada
  "larnu", //usuario
  "larnuisgold",  {  //paswore
  host: "localhost", //direccion (si quiero hacer un servicio y mandarlo a la nbe seria por variable de entorno) no es la forma como lo vamos a hacer en el futuro
  dialect: 'postgres', //dialecto
  logging: false, //por default es true, cada solicitud l back end se va a mostrar todo. es util cuando aprendemos..
  port: 5432, //es el puerto por defecto, si tenemos otro tenemos que ponerlo, sino dejamos este
  define: {
    timestamps: false //tiene el uso de dos campos createup y updatecreate, nosotros aca ledesimos que no haga eso
  }
});

export default db;

//aca estamos creando microservicios, servicios pequeños que hacen una sola funcionalidad (2 endopoint que hace algo y modifica algo, pero si es mas grande esta forma no es muy util..) por eso vamos a ir cambiando esta estructura a lo largo de la semana, si le ponemos muchasa cosas al servicios se hace complejo de leer.. a nivel de carpeta y de archivo.