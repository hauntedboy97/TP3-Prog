// TODO: crear para ver y borrar turnos
const TurnoModel = require('../../models/mock/turnos.models');
const Turno = require('../../models/mock/entities/turnos.entity');



class TurnoController {
    async list(req, res) {
        res.status(200).json(await TurnoModel.list());
    }
    async create(req, res) {

        const { idPaciente, fecha, hora } = req.body;


        const nuevoTurno = new Turno(0, fecha, hora, idPaciente);
        const info = await TurnoModel.create(nuevoTurno);
        res.status(200).json(info);
    }
    async get(req, res) {
        const idPaciente = req.params.idPaciente;
        res.status(200).json(await TurnoModel.getTurnobyPaciente(idPaciente));
    }

    async getTurnos(req,res){
        res.status(200).json(await TurnoModel.list())

    }
    delete(req, res) {
        const id = req.params.id;
        const turnoBorrado = TurnoModel.delete(id);
        turnoBorrado.then(turno => {
            res.status(200).json(turno);
        }).catch(
            error => {
                res.status(404).json({ message: `no existe el turno para el paciente con el id:${id}`, error })
            }
        );
    }
}

module.exports = new TurnoController();