const {Producto, Venta, Cliente} = require('../config/Mongoose');
const mercadopago = require('../config/MercadoPago');
// crear la preferencia de mercado pago
let preferencias = {
    payment_methods : {
        installments: 6,
        // https://api.mercadopago.com/v1/payment_methods => tengo que mandar como header la token en Authorization
        excluded_payment_methods: [
            {
                id:"diners"
            }
        ],
        excluded_payment_types: [
            {
                id: "atm"
            }
        ]
    },
    // sirve para indicar que si el pago se realizó correctamente o hubo un error o esta pendiente de pago (hará una redirección automatica)
    back_urls:{
        success: 'http://ederivero-mp-ecommerce-nodejs.herokuapp.com/success',
        failure: 'http://ederivero-mp-ecommerce-nodejs.herokuapp.com/failure',
        pending: 'http://ederivero-mp-ecommerce-nodejs.herokuapp.com/pending'
    },
    // sirve para que mercado pago nos mande actualizaciones de nuestro pago online, solamente funciona con dominios publicos (no funciona con localhost o 127.0.0.1)
    notification_urls: 'http://pasarela'
}
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
        let payer = {
            name: cliente.cliNom,
            surname: cliente.cliApe,
            email: "test_user_46542185@testuser.com", // necesitamos este correo porque es el unico que funciona con la token de prueba, una vez que tengamos otra token habilitada normal podremos usar el correo que quisieramos
            phone: {
                number: cliente.cliFono[0].fono_numero,
                area_code: cliente.cliFono[0].fono_area
            },
            identification:{
                type:"dni",
                number:cliente.cliDni
            },
            address:{
                zip_code:cliente.cliAddres.zip_code,
                street_name : cliente.cliAddres.street_name,
                street_number: cliente.cliAddres.street_number
            }
        }
        // si el cliente existe

    } catch (error) {
        console.log(error)
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