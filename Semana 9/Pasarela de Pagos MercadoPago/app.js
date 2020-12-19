var express = require('express');
var exphbs  = require('express-handlebars');
var port = process.env.PORT || 3000
const mercadopago = require("mercadopago");

var app = express();
// access_token: esta token se genera por cada estableciemiento que use una pasarela de pagos y se crea en la misma plataforma de mercado pago 
// integrator_id: es el identificador de cada desarrollador certificado por mercadopago
mercadopago.configure({
    access_token: "APP_USR-8208253118659647-112521-dd670f3fd6aa9147df51117701a2082e-677408439" ,
    integrator_id: "dev_2e4ad5dd362f11eb809d0242ac130004"
})
// me deberia ahora el usuario (front) mandar toda la informacion del cliente ya registrado (nombres, correo, email, dni, direccion)
let comprador = {
    name: "Lalo",
    surname: "Landa",
    email: "test_user_46542185@testuser.com",
    phone: {
        area_code:"52",
        number: 5549737300
    },
    identification:{
        type:"DNI",
        number:"22334445"
    },
    address:{
        zip_code:"03940",
        street_name:"Insurgentes Sur",
        street_number:1602
    }
}
let metodos_pago = {
    installments: 6,
    exclude_payment_methods: [
        {
            id: "diner"
        }
    ],
    exclude_payment_types: [
        {
            id: "atm"
        }
    ]
}
let back_urls = {}
let preference = {
    items: [],
    back_urls: back_urls,
    payment_methods: metodos_pago,
    payer: comprador,
    auto_return: "approved",
    external_reference: "ederiveroman@gmail.com",
    notification_url: ""
}

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('assets'));
 
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/detail', function (req, res) {
    res.render('detail', req.query);
});

app.listen(port);