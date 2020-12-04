// npm i mongoose
import mongoose from 'mongoose';
var Schema = mongoose.Schema;
// https://mongoosejs.com/docs/schematypes.html

var telefonoSchema = new Schema({
    fono_numero: {
        type: Number,
        minlength: 6, //si el string ingresado es menor que el valor no va a permitir su registro
        maxlength: 15,
        required: true, // no va a permitir que el valor quede en null
    },
    fono_operador: {
        type: String,
        required: true
    }
});


export var usuarioSchema = new Schema({
    usu_nom: String,
    usu_ape: String,
    usu_mail: String,
    usu_fecnac: {
        type: String,
        min: '1990-01-01',
        max: '2002-12-31'
    },
    usu_hash: String,
    usu_salt: String,
    usu_fonos: [
        telefonoSchema
    ]
}, {
    timestamps: {
        createdAt: 'fecha_creacion', 
        updatedAt: 'fecha_actualizacion'
    }
})