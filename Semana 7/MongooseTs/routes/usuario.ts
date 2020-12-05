import { Router } from 'express';
import { crearUsuario } from '../controllers/usuario';
export var usuario_router = Router();

usuario_router.post('/registro', crearUsuario);