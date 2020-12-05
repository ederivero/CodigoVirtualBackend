import {Router} from 'express';
import {subirImagen, crearVideo} from '../controllers/video';
export var video_router = Router();
// import multiparty from 'connect-multiparty';
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty({uploadDir:'./multimedia'})

video_router.post('/subirImg', multipartyMiddleware, subirImagen);
video_router.post('/video', crearVideo);