const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
const {pacienteSchema} = require('../schemes/pacientes.schema.js');
const rutaPacientes = Router();
rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.list);
rutaPacientes.post('/login',pacientesController.login)
rutaPacientes.post('/',verifyTokenMiddleware,pacienteSchema.create,pacientesController.create);
rutaPacientes.put('/:id',verifyTokenMiddleware,pacientesController.update);
rutaPacientes.delete('/:id',verifyTokenMiddleware,pacientesController.delete);

//TODO: Otras rutas CRUD


module.exports = rutaPacientes;