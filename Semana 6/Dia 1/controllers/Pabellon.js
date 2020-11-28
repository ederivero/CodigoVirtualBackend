const {Pabellon} = require('../config/Sequelize');

const crearPabellon = (req, res)=>{
    // console.log(req.body);
    let cuerpo = req.body;
    // pabellonNom
    // Forma 1, Creando primero la instancia de un Pabellon para guardarlo en la bd posteriormente (sirve para hacer una validacion manual previa)
    let objPabellon = Pabellon.build(cuerpo);
    // OJO todavia acá no se ha insertado en la BD
    objPabellon.save().then((pabellonCreado)=>{
        return res.status(201).json({
            ok:true,
            content: pabellonCreado,
            message: 'Se creo exitosamente el pabellon'
        })
    }).catch((error)=>{
        return res.status(500).json({
            ok:false,
            content: error,
            message: 'Hubo un error al crear el pabellon'
        });
    })
}
const devolverPabellones = async (req, res)=>{
    try {
        let resultado = await Pabellon.findAll();
        // si no indico que estado quiero devolver, por defecto devolvera el estado 200
        return res.json({
            ok:true,
            content:resultado,
            message:null
        });
    } catch (error) {
        return res.status(500).json({
            ok:false,
            content: error,
            message:'Hubo un error al devolver los pabellones'
        });
    }
}

// Crear un controlador y su ruta para buscar un pabellon segun su PK (use el metodo findByPk(ID))
// https://sequelize.org/master/manual/model-querying-finders.html
// si es que no hubiese el pabellon con ese ID que lo indique, puede usar .then o async-await
const encontrarPabellonPorId = (req, res)=>{
    let {id} = req.params;

}
module.exports = {
    crearPabellon,
    devolverPabellones,
    encontrarPabellonPorId
}