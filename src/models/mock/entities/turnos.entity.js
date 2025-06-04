class Turno {
    constructor(idPaciente, fecha, idTurno=0){
        this.id = idTurno;
        this.idPaciente = idPaciente;
        this.fecha = fecha;
    } // id turno va a lo ultimo porque primero tiene que leer id paciente
}

module.exports = Turno;