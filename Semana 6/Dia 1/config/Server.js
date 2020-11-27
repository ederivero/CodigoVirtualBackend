const express = require('express');
const bodyParser = require('body-parser');
class Server {
    constructor(){
        this.app = express();
        this.puerto = process.env.PORT || 5000;
        this.habilitarCORS();
        this.configurarBodyParser();
        this.rutas();
    }
    habilitarCORS(){
        this.app.use((req, res, next)=>{
            // Access-Control-Allow-Origin = indica que dominio o dominios pueden acceder a mi API, si uso * significa que todos los dominios pueden acceder sin problemas
            res.header('Access-Control-Allow-Origin','*');
            // Sirve para indicar que tipos de cabeceras me puede mandar el cliente, si no la declaro puede que sea rechazada
            // https://developer.mozilla.org/es/docs/Web/HTTP/Headers
            res.header('Access-Control-Allow-Headers','Authorization, Content-Type, Access-Content-Type, Accept');
            // Indica que tipos de metodos pueden ser solicitados a mi API
            res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
            // next() => es para indicar que todo fue exitoso y puede continuar con la peticion correspondiente
            next();
        });
    }
    configurarBodyParser(){
        this.app.use(bodyParser.json());
    }
    rutas(){
        this.app.get('/', (req,res)=>{
            res.send('EL servidor funciona!!!! ');
        });
    }
    iniciarServidor(){
        this.app.listen(this.puerto, ()=>{
            console.log('Servidor corriendo exitosamente en el puerto '+this.puerto);
        });
    }
}
module.exports = Server