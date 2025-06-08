const {Router} = require('express');
const {home, turnos, pacientes} = require('../controllers/home/home.controller.js')
const rutaHome = Router();
rutaHome.get('/', home);
rutaHome.get('/turnos', turnos);
rutaHome.get('/pacientes', pacientes);


module.exports = rutaHome;






