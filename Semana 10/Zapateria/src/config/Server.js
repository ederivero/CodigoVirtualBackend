const express = require('express');
const bodyParser = require('body-parser');
class Server {
    constructor(){
        this.app = express();
        this.puerto = process.env.PORT || 5000;
        this.habilitarCORS();
        this.configurarBodyParser();
        this.definirRutas();
    }
    habilitarCORS(){
        this.app.use((req, res, next)=>{
            res.header('Access-Control-Allow-Origin','*');
            res.header('Access-Control-Allow-Headers','Authorization, Content-Type');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            next();
        });
    }

    configurarBodyParser(){
        this.app.use(bodyParser.json());
    }
    definirRutas(){
        this.app.get('/',(req, res)=>{
            res.status(200).json({
                ok:true,
                message:'La API Funciona! 😊🎃😎🎉'
            });
        });
    }
    
    start(){
        this.app.listen(this.puerto,()=>{
            console.log("Servidor corriendo exitosamente");
        })
    }
}

module.exports = Server // export default class Server {....}