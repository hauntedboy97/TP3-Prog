
const Turno = require('./entities/turnos.entity');


class TurnoModel {
  constructor() {
    this.data = [];
    this.data.push(
      new Turno(
        "2025-01-01",
        "12:00:00",
        1
      )
    );
    this.id = 2;

  }

 // crear turno
   create(turno) {
    return new Promise((resolve, reject) => {
      turno.id = this.id;
      this.id++;
      const turnoEncontrado = this.data.find(t => t.fecha == turno.fecha && t.hora == turno.hora)
      if (!turnoEncontrado) {
        this.data.push(turno);
      } else {
        reject( new Error("el turno ya esta ocupado"))
      }
      resolve(turno);
    });
  }

  getTurnobyPaciente(idPaciente){
    return new Promise((resolve,reject)=>{
        const identificador = Number(idPaciente);
        const turnoEncontrado = this.data.find(turno=>turno.idPaciente === identificador)
        if(!turnoEncontrado){
          reject( new Error("el id es incorrecto"));
          }
        resolve(turnoEncontrado);
    })
  }
  delete(id) {
    return new Promise((resolve,reject)=>{
       const turnoEncontrado = this.data.find(turno => turno.id == id);
       if(!turnoEncontrado){
         reject( new Error("No existe un turno con esa id"));
       }
       const pos = this.data.indexOf(turnoEncontrado);
       this.data.splice(pos, 1);
       resolve(turnoEncontrado);
    })
  }
}
module.exports = TurnoModel;