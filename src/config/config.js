const  dotenv = require('dotenv');
dotenv.config()
class Config {
    constructor(){
        if(process.env.SECRETE_WORD == undefined || process.env.SECRETE_WORD == null || process.env.SECRETE_WORD == "") 
            throw new Error("palabra secreta no encontrada");
        if(process.env.EXPIRES_IN == undefined || process.env.EXPIRES_IN == null || process.env.EXPIRES_IN == "") 
            throw new Error("tiempo de expiracion no definido");
        this.secreteWord= process.env.SECRETE_WORD;
        this.expiresIn = process.env.EXPIRES_IN;
    }
}
module.exports = new Config();