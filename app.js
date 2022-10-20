//Import express
import express from "express"; //iniciamos el servidor trayendo lo correspondiente
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/routes.js";
import AuthRouter from "./routes/auth.js";

// Init express
const app = express(); //traemos express 
// use express json
app.use(express.json()); //le decimos lo que vamos a usar json en nuestra api

// var corsOptions = 
//   origin: 'http://example.com',
// }

// use cors
app.use(cors()); //es una libreria que permite (es una capa de seguridad que nosotro sle aplicamos  ala app) (buscar Cross-origin resource)
 
//Testing database connection 
try {
    await db.authenticate(); //nos permite saber si esa autenticada
    console.log('Connection has been established successfully.'); //aca valida que este funcionando (te deberia mostrar en consola que esta ok)
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
// use router
app.use(Router); //se usa el router par que se integre todos los endpoint que creamos en controlers
app.use(AuthRouter); //importar las rutas de autorizacion
//listen on port
app.listen(4000, () => console.log("Server running at http://localhost:4000"));
// TERMINAR MOSTRANDO CON EL POSTMAN TODO