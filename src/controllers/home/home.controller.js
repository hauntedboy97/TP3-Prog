
// controladores
const home = async (req, res) => {
    res.render('index', { 
        title: 'Carga pacientes',
        message: 'Hola, ¿Decea ingresar un paciente?' ,
        showFeatures: true,
        features: [
            'Descripción de la característica 1' ,
            'Descripción de la característica 2',
            'Descripción de la característica 3'

        ]
    });
}

const pacientes = async (req,res) => {
    res.render('pacientes', {
        arraypaciente = await 
        

    })

}
module.exports = {home}



