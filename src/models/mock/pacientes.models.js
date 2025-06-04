const Persona = require("./../mock/entities/paciente.entity.js");
const Config = require("./../../config/config.js");
const jwt = require("jsonwebtoken");
class PacientesModel {
  constructor() {
    this.data = [];
    this.data.push(
      new Persona(
        "123456787",
        "Sergio",
        "Antozzi",
        "email@gmail.com",
        "12345",
        1
      )
    );
    this.id = 2;
  }

  findByEmail(email, password) {  // asi tenemos que hacer todos las promesas 
    return new Promise((resolve, reject) => {
        const paciente = this.data.find(
          (p) => p.email === email && p.password === password
        );
        if (paciente === undefined) {
          reject (new Error("el paciente no existe"));
        }else
        resolve(paciente);
    });
  }
  validate(email, password) {
    return new Promise(async (resolve, reject) => {
        const userFound = await this.findByEmail(email, password);

        if (!userFound || userFound.password == null) {
          reject ( new Error("wrong email or password"));
        }
        else {
        //payload, secreto, tiempo de expiracion
        const payload = {
          userId: userFound._id,
          userEmail: userFound.email,
        
        };
        console.log("palabra secreta, pacientes model:", Config.secreteWord);

        const token = jwt.sign(payload, Config.secreteWord, {
          expiresIn: Config.expiresIn,
        });
        resolve(token);
      }
    });
  }

  // crea un dato nuevo (alta de cliente)
  create(paciente) {
    //return persona;
    return new Promise((resolve, reject) => {
      try{  // cambiar el trycatch para solucionar lo del reject error 
        paciente.id = this.id;
        this.id++;
        const pacienteEncontrado = this.data.find(p=>p.email===paciente.email)
        if(pacienteEncontrado===null){
          this.data.push(paciente);
        }else{
          throw new Error("el paciente ya existe")
        }
            

        resolve(paciente);
      }catch(error){
        reject(error);
      }
 
    });
  }
  // actualiza los datos del cliente con id = id
  update(id, paciente) {
    return new Promise((resolve,reject)=>{
      try { // aca lo mismo, cambiar el trycatch, ver video de sergio 

         const pacienteEncontrado = this.data.find((p) => p.id == id);
      if (pacienteEncontrado===null) {
        throw new Error("No se encuntra el paciente");
      }
      pacienteEncontrado.dni = paciente.dni;
      pacienteEncontrado.email = paciente.email;
      pacienteEncontrado.nombre = paciente.nombre;
      pacienteEncontrado.apellido = paciente.apellido;
      resolve(pacienteEncontrado);
    } catch (error) {
      reject(error);
    }
    })
    
  }
  // elimina el cliente con id = id
  delete(id) {
    new Promise((resolve,reject)=>{
      try {
       const pacienteEncontrado = this.data.find((p) => p.id == id);
       if(!pacienteEncontrado){
         throw new Error("el id no es válido");
       }
       const pos = this.data.indexOf(pacienteEncontrado);
       this.data.splice(pos, 1);
       resolve(pacienteEncontrado); // elimina el elemento de la posición pos del arreglo
      } catch (error) {
       reject(error);
    }
    })

   
  }
  // devuelve la lista completa en un arreglo de strings
  list() {
    return new Promise((resolve, reject) => {
      resolve(this.data);
    });
  }
  getPacienteById(id){
     return new Promise((resolve,reject)=>{
       try{
         const identificador = Number(id);
         const pacienteEncontrado = this.data.find(paciente=>paciente.id === identificador)
       if(!pacienteEncontrado){
           throw new Error("el id es incorrecto");
       }
        resolve(pacienteEncontrado);
       }catch(error){
         reject(error)
       }
      
     })
  }
}

// TODO:  Hacer los crud de nuevo

module.exports = new PacientesModel();
