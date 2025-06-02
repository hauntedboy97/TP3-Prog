// TODO: crear para ver y borrar turnos
const turnosModel = require('../../models/mock/turnos.models');


class TurnoController {
    async list(req, res) {
        res.status(200).json(await turnosModel.list());
    } 

    eliminarTurno(req, res) {
        const id = req.params.idTurno
        ;
        const turnoBorrado = turnosModel.delete(id);
        turnoBorrado.then(turno => {
            res.status(200).json(turno);
        }).catch(error => {
            res.status(404).json({ message: `No existe el turno con el id: ${id}`, error });
        });
    }

}

module.exports = new TurnoController();