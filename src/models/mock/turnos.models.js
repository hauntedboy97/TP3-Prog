// TODO: crear el model
//modelo del turno
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
}

module.exports = TurnoModel;