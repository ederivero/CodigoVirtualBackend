// npm i express
// npm i body-parser
const express = require('express');
const bodyParser = require('body-parser');
class Server {
    constructor(){
        this.app = express();
        this.puerto = process.env.PORT || 8000;
    }
    iniciarServidor(){
        this.app.listen(this.puerto, ()=>{
            console.log(`El servidor se ha levantado exitosamente en el puerto ${this.puerto}`);
        })
    }
}
module.exports = Server