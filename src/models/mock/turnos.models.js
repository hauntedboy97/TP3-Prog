
const Turno = require('./entities/turnos.entity');


class TurnoModel {
  constructor() {
    this.data = [];
    this.data.push(
      new Turno(
        1,
        "4",
        "2025-01-01 12:00:00"
      )
    );
    this.id = 2;

  }

 // crear turno

  getTurnobyPaciente(idPaciente){
    return new Promise((resolve,reject)=>{
      try{
        const identificador = Number(idPaciente);
        const turnoEncontrado = this.data.find(turno=>turno.idPaciente === identificador)
        if(!turnoEncontrado){
          throw new Error("el id es incorrecto");
          }
        resolve(turnoEncontrado);
      }catch(error){
        reject(error)
      }
    })
  }
  list() {
    return new Promise((resolve, reject) => {
      resolve(this.data);
    });
  }
  delete(id) {
    return new Promise((resolve,reject)=>{
      try { //sacar trycatch mirar pacientes create
       const turnoEncontrado = this.data.find(turno => turno.id == id);
       if(!turnoEncontrado){
         throw new Error("No existe un turno con esa id");
       }
       const pos = this.data.indexOf(turnoEncontrado);
       this.data.splice(pos, 1);
       resolve(turnoEncontrado);
      } catch (error) {
       reject(error);
    }
    })
  }
}
module.exports = TurnoModel;