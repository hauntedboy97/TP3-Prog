class Turno {
    constructor(idTurno=0, idPaciente, fecha){
        this.id = idTurno;
        this.idPaciente = idPaciente;
        this.fecha = fecha;
    }
}

module.exports = Turno;