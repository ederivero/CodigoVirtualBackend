import {Request, Response} from 'express';
import {Video} from '../config/mongoose';
// ambas librerias son internas(nativas) de NodeJS y vienen instaladas por defecto en NodeJs
// fs => libreria para el manejo de archivos dentro del proyecto, sirve para insertar, editar o eliminar archivos de mi proyecto
import fs from 'fs';
// path => otra libreria para manejar las rutas de los archivos
import path from 'path';

export var crearVideo = (req:Request, res:Response)=>{
    // si no deseo trabajar como una funcion de respuesta con error, se puede usar las promesas, pero si usas el function ya no usas la promesa y viceversa
    Video.create(req.body,function(error:any, videoCreado:any){
        if(error){
            res.status(500).json({
                ok:false,
                content: error,
                message:'Hubo un error al guardar el video'
            })
        }else{
            res.status(201).json({
                ok:true,
                content: videoCreado,
                message:'Video creado exitosamente, falta la miniatura'
            })
        }
    })
}

export var subirImagen = (req:Request, res:Response)=>{
    console.log(req.files);
    res.json({
        ok:true
    })
}