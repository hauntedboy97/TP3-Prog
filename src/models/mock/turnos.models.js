
const Turno = require('./entities/turnos.entity');


class TurnoModel {
  constructor() {
    this.data = [];
    this.data.push(
      new Turno(
        0,
        "1",
        "2025-01-01",
        "12:00:00",
        
      )
    );
    this.id = 1;

  }

 // crear turno
   create(turno) {
    return new Promise((resolve, reject) => {
      turno.id = this.id;
      const turnoEncontrado = this.data.find(t => t.fecha == turno.fecha && t.hora == turno.hora)
      if (!turnoEncontrado) {
        this.data.push(turno);
        this.id++;
      } else {
        reject( new Error("el turno ya esta ocupado"))
      }
      resolve(turno);
    });
  }
  

  getTurnobyPaciente(idPaciente){
    return new Promise((resolve,reject)=>{
        
        const turnoEncontrado = this.data.find(turno => turno.idPaciente === idPaciente);
        console.log(turnoEncontrado)
        if(turnoEncontrado === undefined){
          reject( new Error("el id es incorrecto"));
          }
          else resolve(turnoEncontrado);
    })
  }


  delete(id) {
    return new Promise((resolve,reject)=>{
       const turnoEncontrado = this.data.find(turno => turno.id == id);
       if(!turnoEncontrado){
         reject( new Error("No existe un turno con esa id"));
       }else
       {
       const pos = this.data.indexOf(turnoEncontrado);
       this.data.splice(pos, 1);
       resolve(turnoEncontrado);
       }
    })
  }


  list() {
    return new Promise((resolve, reject) => {
      resolve(this.data);
    });
  }
}
module.exports = new TurnoModel();