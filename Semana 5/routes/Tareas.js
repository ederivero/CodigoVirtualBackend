// Dos formas de importar, la primera es utilizar todo el documento y la segunda es entre llaves indicar que parte de la funcionalidad usaremos
const express = require('express');
// const {Router} = require('express');

// const tareas = require('../controllers/Tareas')
// Paso de valor por referencia (destructuracion)
const {getTareas, crearTarea, getTareaById} = require('../controllers/Tareas');

const tareas_router = express.Router();
tareas_router.get('/tareas', getTareas );
tareas_router.post('/tareas', crearTarea);
tareas_router.get('/tarea/:id_tarea', getTareaById);

module.exports = {
    tareas_router
}