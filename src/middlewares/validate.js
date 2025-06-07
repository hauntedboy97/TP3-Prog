const validate = (schema, property = 'body') => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property]);
        if (error) {
            return res.status(400).json({
                success: false,
                error: error.details[0].message
            });
        }
        next();
    }
};

//TODO : validaciones, que no explote todo cuando mandas un dato erroneo 
//frontend en ejs

module.exports = {validate};