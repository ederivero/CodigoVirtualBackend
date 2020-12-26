const mongoose = require('mongoose');

var fonoClienteSchema = new mongoose.Schema({
    fono_area: String,
    fono_numero: {
        type: String,
        maxlength: 15,
        minlength: 6
    }
});
var clienteSchema = new mongoose.Schema({
    cliNom: String,
    cliApe: {
        type: String,
    },
    cliEmail: {
        type: String,
        unique: true
    },
    cliFono: [
        fonoClienteSchema
    ],
    cliDni: {
        type : String,
        maxlength: 10,
        minlength: 8
    }
},{
    timestamps: true, // esto va a crear los timestamps por defecto osea el createdAt y el updatedAt pero si quisiese modificar esos nombres seria asi
    /*timestamps: {
        createdAt:'fecha_creacion',
        updatedAt:'fecha_actualizacion'
    }*/
});

module.exports = {
    clienteSchema: clienteSchema
}