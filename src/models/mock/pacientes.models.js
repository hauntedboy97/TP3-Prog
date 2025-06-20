const Paciente = require("./../mock/entities/paciente.entity.js");
const Config = require("./../../config/config.js");
const jwt = require("jsonwebtoken");
class PacientesModel {
  constructor() {
    this.data = [];
    this.data.push(
      new Paciente(
        "123456787",
        "Sebastian",
        "Fernandez",
        "email@gmail.com",
        "12345678",
      )
    );
    this.id = 1;
  }

  findByEmail(email, password) {
    return new Promise((resolve, reject) => {

      const paciente = this.data.find((p) => p.email === email && p.password === password);
      console.log(paciente)
      if (!paciente) {
        reject(new Error("el paciente no existe"));
      } else
        resolve(paciente);
    });
  }
  validate(email, password) {
    return new Promise(async (resolve, reject) => {
      const userFound = await this.findByEmail(email, password);
      console.log(userFound)
      if (!userFound || userFound.password == null) {
        reject(new Error("wrong email or password"));
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
      paciente.id = this.id;

      const pacienteEncontrado = this.data.find(p => p.email === paciente.email)
      if (!pacienteEncontrado) {
        this.data.push(paciente);
        this.id++;
      } else {
        reject(new Error("el paciente ya existe"))
      }
      resolve(paciente);
    });
  }

  // actualiza los datos del cliente con id = id
  update(id, paciente) {
    return new Promise((resolve, reject) => {
      const pacienteEncontrado = this.data.find((p) => p.id == id);
      if (!pacienteEncontrado) {
        reject(new Error("No se encuntra el paciente"));
      }
      pacienteEncontrado.dni = paciente.dni;
      pacienteEncontrado.email = paciente.email;
      pacienteEncontrado.nombre = paciente.nombre;
      pacienteEncontrado.apellido = paciente.apellido;
      resolve(pacienteEncontrado);
    })
  }

  // elimina el cliente con id = id
  delete(id) {
    return new Promise((resolve, reject) => {
      const pacienteEncontrado = this.data.find((p) => p.id == id);
      console.log(pacienteEncontrado)
      if (pacienteEncontrado === undefined) {
        reject(new Error("No se encuntra el paciente"));
      }
      else {
        const pos = this.data.indexOf(pacienteEncontrado);
        this.data.splice(pos, 1);

        resolve(pacienteEncontrado); // elimina el elemento de la posición pos del arreglo
      }
    })
  }
  // devuelve la lista completa en un arreglo de strings
  list() {
    return new Promise((resolve, reject) => {
      console.log(this.data)
      resolve(this.data);
    });
  }
  getPacienteById(id) {
    return new Promise((resolve, reject) => {
      const identificador = Number(id);
      const pacienteEncontrado = this.data.find(paciente => paciente.id === identificador)
      if (!pacienteEncontrado) {
        reject(new Error("el id es incorrecto"));
      }
      resolve(pacienteEncontrado);
    })
  }
}

module.exports = new PacientesModel();
