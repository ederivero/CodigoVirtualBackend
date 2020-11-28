const { Docente } = require('../config/Sequelize');
const RegistrarUsuario = (req, res) => {
    // Que campo tengo que validar antes de hacer toda la gestion
    Docente.findOne({ where: { docEmail: req.body.docEmail } }).then((docenteEncontrado) => {
        if (docenteEncontrado) {
            // todo lo que suceda aca es porque ya hay un docente con ese correo
            res.status(400).json({
                ok: false,
                message: 'Ya existe un docente con ese correo',
                content: null
            })
        } else {
            // aqui significa que ese correo esta disponible
            let nuevoDocente = Docente.build(req.body);
            nuevoDocente.setSaltAndHash(req.body.password);
            nuevoDocente.save().then(docenteCreado => {
                res.status(201).json({
                    ok: true,
                    message: 'Docente creado exitosamente',
                    content: docenteCreado
                });
            }).catch(error => {
                res.status(500).json({
                    ok: false,
                    message: 'Hubo un error al guardar el docente',
                    content: error
                })
            })
        }
    })
}
const Login = (req, res) => {

}
module.exports = {
    RegistrarUsuario,
    Login
}