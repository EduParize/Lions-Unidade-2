import { readData, writeData } from "./fileUtils.js";

export function putPaciente(req, res) {
  const id = parseInt(req.params.id);
  const database = readData();
  const index = database.pacientes.findIndex((l) => l.id === id);

  if (index !== -1) {
    const pacienteAtualizado = {
      id: id,
      nomePaciente: req.body.nomePaciente,
      dataNascimentoPaciente: req.body.dataNascimentoPaciente,
    };
    database.pacientes[index] = pacienteAtualizado;
    writeData(database);
    return res
      .status(200)
      .send(`Paciente atualizado para ${req.body.nomePaciente}`);
  } else {
    return res.status(404).send(`Paciente não encontrado para atualizar!`);
  }
}
