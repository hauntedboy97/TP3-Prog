const Identificador = require("./identificador.entity");

class Turno extends Identificador{
    constructor( id=0 , fecha, hora,  idPaciente){
        super(id);
        this.fecha = fecha;
        this.hora = hora;
        this.idPaciente = idPaciente;

    }
}
module.exports = Turno;