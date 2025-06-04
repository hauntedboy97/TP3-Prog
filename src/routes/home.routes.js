const {Router} = require('express');
const {home} = require('../controllers/home/home.controller.js')
const rutaHome = Router();
rutaHome.get('/', home);
//Esto no se si esta bien ... verificar con alguien que sepa :)

rutaHome.get('/', verifyTokenMiddleware, home.list);
rutaHome.post('/login',home.login)
rutaHome.post('/',verifyTokenMiddleware,pacienteSchema.create,home.create);
rutaHome.put('/:id',verifyTokenMiddleware,home.update);
rutaHome.delete('/:id',verifyTokenMiddleware,home.delete);


module.exports = rutaHome;






