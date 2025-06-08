const {Paciente} = require('../sqlite/entities/paciente.entity.js');

  const getPacientesModel =  ()=>{
    const users = Paciente.findAll();
    return users;
  }

  module.exports = {
    getPacientesModel
  }
