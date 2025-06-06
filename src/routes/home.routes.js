const {Router} = require('express');
const {home} = require('../controllers/home/home.controller.js')
const rutaHome = Router();
rutaHome.get('/', home);
//Esto no se si esta bien ... verificar con alguien que sepa :)

rutaHome.get('/', home);


module.exports = rutaHome;






