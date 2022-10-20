# Autentificación con express

https://blog.openreplay.com/jwt-authentication-best-practices/

Desfio de hoy:

 Leer este codigo y aplicarlo al suyo
 crar la tabla de usuario, crear los endpoint de register y login y crear un middleware y usar ese middleware en algun otro endpoint para ver que creamos una ruta que requiere autenticacion.
 ver con postman como se almacenan los token.. y hacerles captura de pantalla y ponerlo en el README

Para recordar:

¿Qué es un middleware? ver el grafico de esta pagina
https://www.turing.com/kb/building-middleware-for-node-js

La manera de funcionar de express es la siguiente: cada vez que llega una solicitud pasa por "cada circulo verde" que son middleware, ciertos endpoint van a usar ciertos midleware, (ejemplo cors) cuando llega una solicitud pasa por todos los middleware hasta el final y se pasa la pelota con next.. 
para este ejercicio hacemos un middleware para ver si esta autenticado.. si no hay autentificacion no puede seguir adelante y retorna un 403 diciendo que no tienes para entrar..
si existe el token, podemos seguir.

Páginas para ver:
https://blog.openreplay.com/jwt-authentication-best-practices/
https://jwt.io/
https://www.notion.so/larnu/Autentificaci-n-con-express-299a72dafd994081b013c42d47a01a9b
https://www.npmjs.com/package/bcryptjs