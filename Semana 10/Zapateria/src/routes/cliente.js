const {Router} = require('express');
const clienteController = require('../controllers/cliente');

var cliente_router = Router();
cliente_router.post('/cliente', clienteController.crearCliente);

module.exports = cliente_router