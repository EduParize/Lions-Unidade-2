import { pacientes } from "../data.js";
import { readData,writeData } from "./fileUtils.js";
let proximoIDpaciente = 0;
export function postPaciente(req, res) {
  const { nomePaciente, dataNascimentoPaciente } = req.body;
  if (!nomePaciente || !dataNascimentoPaciente) {
    return res
      .status(400)
      .send(
        "Informacoes imcompletas ou incorretas, por favor insira corretamente!"
      );
  }
  const database = readData();
  const proximoIDmedico =
    database.medicos.length > 0
      ? Math.max(...database.medicos.map((m) => m.id)) + 1
      : 0;
  const novoPaciente = {
    id: proximoIDpaciente++,
    nomePaciente: req.body.nomePaciente,
    dataNascimentoPaciente: req.body.dataNascimentoPaciente,
  };
  database.pacientes.push(novoPaciente);
  writeData(database);
  return res
    .status(201)
    .send(`Paciente "${req.body.nomePaciente}" adicionado ao banco!`);
}
