const Joi = require("joi");

const turnoSchema = {
    create: Joi.object({
        pacienteDni: Joi.string().pattern(/^\d+$/).required().min(8).max(8).messages({
            "string.pattern.base": "El DNI del paciente debe contener solo números y tener exactamente 8 dígitos",
        }),
        fecha: Joi.date().iso().required().messages({
            "date.base": "La fecha debe ser válida y en formato ISO",
        }),
        hora: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required().messages({
            "string.pattern.base": "La hora debe estar en formato HH:mm (24 horas)",
        }),
        especialista: Joi.string().required().messages({
            "string.base": "El nombre del especialista es obligatorio",
        })
    }),

    update: Joi.object({
        fecha: Joi.date().iso().optional(),
        hora: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).optional(),
        especialista: Joi.string().optional()
    }),

    get: Joi.object({
        pacienteDni: Joi.string().pattern(/^\d+$/).required().min(8).max(8)
    }),

    delete: Joi.object({
        turnoId: Joi.string().required().messages({
            "string.base": "El ID del turno es obligatorio"
        })
    })
};

module.exports = turnoSchema;