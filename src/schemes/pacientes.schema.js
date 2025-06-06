const Joi = require("joi");

const pacienteSchema = {
    create: Joi.object({
        dni: Joi.string().pattern(/^\d+$/).required().min(8).max(8).messages({
            "string.pattern.base": "El DNI debe contener solo números y tener al menos 8 digitos"
        }),
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    }),
    update: Joi.object({
        dni: Joi.string().pattern(/^\d+$/).min(8).required(),
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    }),
    login: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    }),
    get: Joi.object({
        dni: Joi.string().pattern(/^\d+$/).min(8).required()
    }),
    delete: Joi.object({
        id: Joi.number().integer().required()
    })

}
module.exports = pacienteSchema