const {Cliente} = require('../config/Mongoose');

// controlador para crear cliente
const crearCliente = (req, res)=>{
    Cliente.create(req.body,(error, clienteCreado)=>{
        if(!error){
            return res.status(201).json({
                ok: true,
                content: clienteCreado,
                message: 'Se creo el cliente exitosamente'
            })
        }else{
            return res.status(500).json({
                ok: false,
                content: error,
                message: 'hubo un error al crear el cliente'
            })
        }
    })
}
// controlador para mostrar un cliente segun su dni


module.exports = {
    crearCliente
}