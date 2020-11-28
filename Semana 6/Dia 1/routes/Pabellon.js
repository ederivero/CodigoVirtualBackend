// otro metodo es importar toda la funcionalidad del archivo y ingresar a cada uno de sus funciones mediante el punto
const PabellonesRutas = require('../controllers/Pabellon');
const {Router} = require('express');
const pabellon_router = Router();

pabellon_router.post('/pabellon', PabellonesRutas.crearPabellon);
pabellon_router.get('/pabellones', PabellonesRutas.devolverPabellones);
pabellon_router.get('/pabellon/:id',PabellonesRutas.encontrarPabellonPorId)
module.exports = {
    pabellon_router: pabellon_router
    // pabellon_router
}