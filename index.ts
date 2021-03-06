import Server from './calsess/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';



 const server = new Server();

 // BodyParser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

//Cors
server.app.use( cors({ origin: true, credentials: true }) );

// Rutas de servicios
server.app.use('/', router);


server.start( () => {
    console.log(`MI servidor es corriendo en el puerto ${ server.port }`)
});
