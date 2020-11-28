const {Router} = require('express')
const DocenteRutas = require('../controllers/Docente');
const docente_router = Router();

docente_router.post('/registro',DocenteRutas.RegistrarUsuario);

module.exports={
    docente_router
}
