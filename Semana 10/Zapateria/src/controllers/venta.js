const {Producto, Venta, Cliente} = require('../config/Mongoose');
const mercadopago = require('../config/MercadoPago');
// crear la preferencia de mercado pago
const preferenciaMercadoPago = async(req, res)=>{
    // tengo que ver los productos id's y buscarlos en la colecion de producto
    let {productos, clienteId} = req.body;
    let items = [];
    // buscar el cliente y rellenar con los datos de ese cliente el payer y si no existe el cliente indicar que no existe
    // si quiero esperar una promesa con el await lo mas recomanble es trabajar con un try-catch puesto que al no recibir el catch y si hay algun error, no sabremos como tratarlo
    console.log(clienteId);
    try {
        let cliente = await Cliente.findById(clienteId);
        console.log(cliente);
        if(!cliente){
            return res.status(404).json({
                ok:false,
                content:null,
                message:'Cliente no encontrado'
            })
        }
        // si el cliente existe
        
    } catch (error) {
        console.log(error)
    }
    let payer = {
        name:"Lalo",
        surname: "Landa",
        email:"test_user_46542185@testuser.com", // el email tiene que ser este
        phone:{
            number:5549737300,
            area_code:"52"
        },
        identification:{
            type:"dni",
            number:"22334445"
        },
        address:{
            zip_code : "03940",
            street_name:"Insurgentes Sur",
            street_number:1602,
        }
      }
    for (const key in productos) {
        // console.log(productos[key]);
        try {
            let producto = await Producto.findById(productos[key].productoId);
            let item = {
                id: producto._id,
                title: producto.productoTitulo,
                description: producto.productoDescripcion,
                picture_url: producto.productoImagen,
                quantity: productos[key].cantidad,
                currency_id: producto.productoMoneda,
                unit_price: producto.productoPrecio
            }
            items.push(item);
            // console.log(producto)
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(items);
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