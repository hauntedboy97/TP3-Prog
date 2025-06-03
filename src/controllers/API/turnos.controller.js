// TODO: crear para ver y borrar turnos
const turnosModel = require('../../models/mock/turnos.models');
const Turno = require('../../models/mock/entities/turnos.entity');



class TurnoController {
    async list(req, res) {
        res.status(200).json(await turnosModel.list());
    }
    async get(req, res) {
        const id = req.params.idPaciente;
        res.status(200).json(await turnosModel.getTurnobyPaciente(id));
    }
    delete(req, res) {
        const id = req.params.id;
        const turnoBorrado = turnosModel.delete(id);
        turnoBorrado.then(turno=>{
            res.status(200).json(turno);
        }).catch(
            error=>{
                res.status(404).json({message:`no existe el turno para el paciente con el id:${id}`,error})}
        );
      }
}

module.exports = new TurnoController();