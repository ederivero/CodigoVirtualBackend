const Schema = require('mongoose').Schema;

const ventaSchema = new Schema({
    ventaFecha: {
        type: Date,
        required: true
    },
    ventaImporteTotal: {
        type: Number,
        required: true
    },
    ventaProductoId: {
        type: String,
        required: true
    },
    ventaClienteId: {
        type: String,
        required: true
    },
    ventaImpuesto: {
        type: Number,
        required: true
    },
    ventaDataId: {
        type: String,
        required: true
    },
    ventaTipo: {
        type: String,
        required: true
    }
},{timestamps:true});

module.exports= {ventaSchema}