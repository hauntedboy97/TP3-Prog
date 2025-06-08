
const pacientesModel = require('../../models/mock/pacientes.models.js');
const turnosModel = require('../../models/mock/turnos.models.js');

const home = async (req, res) => {
    res.render('index')
}


const turnos = async (req,res) => {
    try {
        const turnos = await turnosModel.list();
        res.render('turnos', {
        title: "Turnos",
        message: "turno registrado",
        turno: turnos,
        error: null
    })
    }catch (error) {
        res.render('turnos', {
            title: "Lista de turnos",
            message: '',
            turno: [],
            error: error.message
        })
    }
}

const pacientes = async (req,res) => {
    try {
        const pacientes = await pacientesModel.list();
        res.render('pacientes', {
        title: "Paciente",
        message: "paciente registrado",
        paciente: pacientes,
        error: null
    })
    }catch (error) {
        res.render('pacientes', {
            title: "Lista de pacientes",
            message: '',
            paciente: [],
            error: error.message
        })
    }
}
module.exports = {
    home,
    pacientes,
    turnos
}



