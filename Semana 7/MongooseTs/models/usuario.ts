// npm i mongoose
import mongoose from 'mongoose';
var Schema = mongoose.Schema;
// https://mongoosejs.com/docs/schematypes.html
export var usuarioSchema = new Schema({
    usu_nom: String,
    usu_ape: String,
    usu_mail: String,
    usu_fecnac: {
        type: String,
        default: '2020-01-01'
    },
    usu_hash: String,
    usu_salt: String,
    usu_fonos: [
        {
            fono_numero: String,
            fono_operador: String
        }
    ]
})