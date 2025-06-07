const Joi = require("joi");
const { id } = require("../models/mock/turnos.models");

const turnoSchema = {
    create: Joi.object({
        idPaciente : Joi.number().required(),

        fecha: Joi.date().iso().required().messages({
            "date.base": "La fecha debe ser válida y en formato ISO",
        }),
        hora: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required().messages({
            "string.pattern.base": "La hora debe estar en formato HH:mm (24 horas)",
        })
    }),

    update: Joi.object({
        fecha: Joi.date().iso().optional(),
        hora: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).optional()
    }),

    get: Joi.object({
        idPaciente: Joi.string().pattern(/^\d+$/).required()
    }),

    delete: Joi.object({
        id: Joi.string().required().messages({
            "string.base": "El ID del turno es obligatorio"
        })
    })
};

module.exports = turnoSchema;