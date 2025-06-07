const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js');
const rutaTurnos = Router();
const turnoSchema = require('../schemes/turnos.schema.js');
const {validate} = require('../middlewares/validate.js');

rutaTurnos.post('/', validate(turnoSchema.create), turnosController.create);
rutaTurnos.get('/:idPaciente', validate(turnoSchema.get , "params"),turnosController.get);
rutaTurnos.get('/',turnosController.getTurnos)
rutaTurnos.delete('/:id', validate(turnoSchema.delete, "params") ,turnosController.delete);


module.exports = rutaTurnos;