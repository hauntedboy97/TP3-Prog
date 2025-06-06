const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
const pacienteSchema = require('../schemes/pacientes.schema.js');
const {validate} = require('../middlewares/validate.js')
const rutaPacientes = Router();


rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.list);
rutaPacientes.post('/login', validate(pacienteSchema.login) ,pacientesController.login)
rutaPacientes.post('/' ,validate(pacienteSchema.create) ,pacientesController.create);
rutaPacientes.put('/:id',verifyTokenMiddleware, validate(pacienteSchema.update) ,pacientesController.update);
rutaPacientes.delete('/:id',verifyTokenMiddleware, validate(pacienteSchema.delete) ,pacientesController.delete);

//TODO: Otras rutas CRUD


module.exports = rutaPacientes;