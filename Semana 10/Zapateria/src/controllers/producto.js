const {Producto} = require('../config/Mongoose');

const crearProducto = (req, res)=>{
    // la primera forma era crear una instancia de la clase
    /*
    let objProducto = new Producto(req.body);
    objProducto.save({},(error,productoCreado)=>{
        // iba la logica de la creacion del producto
    })
    */

    // la segunda forma es mas directa, la primera forma se usa por si tenemos funciones dentro del mismo modelo para ser usadas
    Producto.create(req.body,(error,productoCreado)=>{
        if(!error){
            return res.status(201).json({
                ok: true,
                content: productoCreado,
                message: 'Se creo el producto exitosamente'
            });
        }else{
            return res.status(500).json({
                ok: false,
                content: error,
                message: 'Hubo un error al crear el producto'
            });
        }
    })
}
// hacer un controlador y su ruta para devolver todos los productos ingresados

module.exports = {
    crearProducto: crearProducto
}