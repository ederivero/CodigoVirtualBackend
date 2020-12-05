import {Router} from 'express';
import {subirImagen, crearVideo, devolverImagenPorNombre} from '../controllers/video';
export var video_router = Router();
// import multiparty from 'connect-multiparty';
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty({uploadDir:'./multimedia'})

video_router.post('/subirImg/:id', multipartyMiddleware, subirImagen);
video_router.post('/video', crearVideo);
video_router.get('/devolverImagen/:nombre', devolverImagenPorNombre);