const Schema = require('mongoose').Schema;

var productoSchema = new Schema({
    productoPrecio: {
        type: Number,
        min: 0
    },
    productoTitulo:{
        type: String,
        unique: true
    },
    productoCantidad: {
        type: Number
    },
    productoMoneda: {
        type: String,
        maxlength: 3
    },
    productoImagen : {
        type: String
    },
    productoDescripcion: {
        type: String,
        maxlength: 100,
        minlength: 30
    }
}, { timestamps: true });

module.exports = {
    productoSchema
}