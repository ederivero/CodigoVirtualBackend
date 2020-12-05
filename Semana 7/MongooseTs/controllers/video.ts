import { Request, Response } from 'express';
import { Video } from '../config/mongoose';
// ambas librerias son internas(nativas) de NodeJS y vienen instaladas por defecto en NodeJs
// fs => libreria para el manejo de archivos dentro del proyecto, sirve para insertar, editar o eliminar archivos de mi proyecto
import fs from 'fs';
// path => otra libreria para manejar las rutas de los archivos
import path from 'path';

export var crearVideo = (req: Request, res: Response) => {
    // si no deseo trabajar como una funcion de respuesta con error, se puede usar las promesas, pero si usas el function ya no usas la promesa y viceversa
    Video.create(req.body, function (error: any, videoCreado: any) {
        if (error) {
            res.status(500).json({
                ok: false,
                content: error,
                message: 'Hubo un error al guardar el video'
            })
        } else {
            res.status(201).json({
                ok: true,
                content: videoCreado,
                message: 'Video creado exitosamente, falta la miniatura'
            })
        }
    })
}

export var subirImagen = (req: any, res: Response) => {
    console.log(req.files.imagen);// {} | req.files['imagen']
    let { id } = req.params;
    // valido si en mi objeto de files esta la llave imagen(que es la que yo le mando desde el front-postman)
    if (req.files.imagen) {
        // si hay archivos multimedia
        let ruta = req.files.imagen.path;
        console.log(ruta);
        // separar la ruta y quitar la palabra multimedia\ y solamente quedase con el nombre del archivo.
        let nombreServidor = ruta.split("\\")[1]
        // let otraForma = ruta.substring(11,ruta.length);
        Video.findByIdAndUpdate(id, { vid_img: nombreServidor }, { new: true }, (error, videoActualizado) => {
            if (!error) {
                res.status(201).json({
                    ok: true,
                    content: videoActualizado,
                    message: 'Se modifico la miniatura del video'
                })
            } else {
                res.status(500).json({
                    ok: false,
                    content: error,
                    message: 'Hubo un error al actualizar la miniatura del video'
                })
            }
        })
    } else {
        // no hay archivos multimedia
        res.status(402).json({
            ok: false,
            message: 'Falta la miniatura del video'
        })
    }
}

export var devolverImagenPorNombre = (req:Request, res:Response)=>{
    let {nombre} = req.params;
    let ruta = `multimedia/${nombre}`
    let rutaDefault = 'multimedia/image.jpg'
    // verifica si existe ese archivo en mi proyecto, entonces retornará un True si existe o un False si no existe
    if(fs.existsSync(ruta)){
        // resolve sirve para mostrar un archivo
        // sendFile => sirve para mandar al front un archivo y nada mas que un archivo, no se puede mandar texto adicional
        return res.sendFile(path.resolve(ruta));
    }else{
        return res.sendFile(path.resolve(rutaDefault));
    }
}