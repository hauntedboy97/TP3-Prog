const Identificador = require("./identificador.entity");

class Turno extends Identificador{
    constructor(idPaciente, fecha, hora, idTurno=0){
        super(id);
        this.id = idTurno;
        this.idPaciente = idPaciente;
        this.fecha = fecha;
        this.hora = hora;
    }
}
module.exports = Turno;