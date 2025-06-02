// TODO: crear todo
const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js');
const rutaTurnos = Router();

rutaTurnos.get('/', turnosController.list);
rutaTurnos.get('/:idPaciente', turnosController.get);
rutaTurnos.delete('/:idTurno', turnosController.delete);


module.exports = rutaTurnos;