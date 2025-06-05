class Turno {
    constructor(idPaciente, fecha, hora, idTurno=0){
        this.id = idTurno;
        this.idPaciente = idPaciente;
        this.fecha = fecha;
        this.hora = hora;
    }
}
module.exports = Turno;