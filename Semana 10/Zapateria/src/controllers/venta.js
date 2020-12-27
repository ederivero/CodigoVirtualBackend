const {Producto, Venta, Cliente} = require('../config/Mongoose');
const mercadopago = require('../config/MercadoPago');
// crear la preferencia de mercado pago
const preferenciaMercadoPago = async(req, res)=>{
    console.log(req.body);
    // tengo que ver los productos id's y buscarlos en la colecion de producto
    let {productos} = req.body;
    for (const key in productos) {
        console.log(productos[key]);
        try {
            let producto = await Producto.findById(productos[key].productoId);
            console.log(producto)
        } catch (error) {
            console.log(error)
        }
    }
    // tengo que ver el cliente id y buscarlo
    // OPCIONALMENTE: restringir algunos metodos de pago, cuotas de pago, formas de pago, etc...
    // configurar las url's de respuesta (back_urls)
    // configurar la url para recibir las notificaciones de mercado pago


    res.send('ok')
}
// crear venta

// mostrar venta segun dni del cliente

// notificaciones de mercado pago de una venta en especifico

module.exports = {
    preferenciaMercadoPago
}