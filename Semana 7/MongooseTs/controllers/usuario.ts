import { Request, Response } from 'express';
import { Usuario } from '../config/mongoose';

export var crearUsuario = (req: Request, res: Response) => {
    // forma 1
    let objUsuario = new Usuario(req.body);
    objUsuario.save((error, nuevoUsuario) => {
        if (error) {
            res.status(500).json({
                ok: false,
                content: error,
                message: 'Hubo un error al crear el usuario'
            })
        } else {
            res.status(201).json({
                ok: true,
                content: nuevoUsuario,
                message: "Se creo el usuario exitosamente"
            })
        }
    });
    // forma 2
    // Usuario.create(req.body, function (error: any, nuevoUsuario: any) {
    //     if (error) {
    //         res.status(500).json({
    //             ok: false,
    //             content: error,
    //             message: 'Hubo un error al crear el usuario'
    //         })
    //     } else {
    //         res.status(201).json({
    //             ok: true,
    //             content: nuevoUsuario,
    //             message: "Se creo el usuario exitosamente"
    //         })
    //     }
    // });
}