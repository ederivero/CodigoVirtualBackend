const productoSchema = require('../models/producto');
const clienteSchema = require('../models/cliente');
const ventaSchema = require('../models/venta');

const {model} = require('mongoose');

const Producto = model('productoCollection', productoSchema);
const Cliente = model('clienteCollection', clienteSchema);
const Venta = model('ventaCollection', ventaSchema);

module.exports= {
    Producto,
    Cliente,
    Venta
}