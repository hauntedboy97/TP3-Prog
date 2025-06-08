
const TurnoModel = require('../../models/mock/turnos.models');
const Turno = require('../../models/mock/entities/turnos.entity');



class TurnoController {
    async list(req, res) {
        res.status(200).json(await TurnoModel.list());
    }
    async create(req, res) {

        const { idPaciente, fecha, hora } = req.body;

        try {
            const nuevoTurno = new Turno(0, fecha, hora, idPaciente);
            const info = await TurnoModel.create(nuevoTurno);
            res.status(200).json(info);
        }catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async get(req, res) {
       try {
        const idPaciente = req.params.idPaciente;
        res.status(200).json(await TurnoModel.getTurnobyPaciente(idPaciente));
       }catch (error){
        res.status(404).json({message: error.message})
       }
    }

    async getTurnos(req, res) {
        res.status(200).json(await TurnoModel.list())

    }
    async delete(req, res) {
        const id = req.params.id;
        try {
            const turnoBorrado = await TurnoModel.delete(id);
            res.status(200).json(turnoBorrado);
        }catch(error) {
            res.status(404).json({message: error.message})
        }
    }
}

module.exports = new TurnoController();