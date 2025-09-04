import { pacientes } from "../data.js";
let proximoIDpaciente = 0
export function postPaciente(req, res){
    const {nomePaciente, dataNascimentoPaciente} = req.body
    if (!nomePaciente ||!dataNascimentoPaciente) {
        return res
          .status(400)
          .send("Informacoes imcompletas ou incorretas, por favor insira corretamente!");
      }
      const novoPaciente = {
        id: proximoIDpaciente++,
        nomePaciente: req.body.nomePaciente,
        dataNascimentoPaciente: req.body.dataNascimentoPaciente,
      };
      pacientes.push(novoPaciente)
      return res.status(201).send(`Paciente "${req.body.nomePaciente}" adicionado ao banco!`)
}