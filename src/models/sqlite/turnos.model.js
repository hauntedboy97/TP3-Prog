const pacientes = require("./paciente.model");
const {Turno} = require("../mock/entities/turnos.entity");

  const getTurnosModel =  ()=>{
    const turnos = Turno.findAll();
    return turnos;
  }

  // TODO: agregar operaciones CRUD