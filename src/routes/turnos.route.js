const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js');
const rutaTurnos = Router();
const turnoSchema = require('../schemes/turnos.schema.js');
const {validate} = require('../middlewares/validate.js');

rutaTurnos.post('/', validate(turnoSchema.create), turnosController.create);
rutaTurnos.get('/:idPaciente', validate(turnoSchema.get) ,turnosController.get);
rutaTurnos.delete('/:idTurno', validate(turnoSchema.delete) ,turnosController.delete);


module.exports = rutaTurnos;