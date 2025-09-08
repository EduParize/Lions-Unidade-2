import { readData, writeData } from "./fileUtils.js";

export function deletePaciente(req, res) {
  const id = parseInt(req.params.id);
  const database = readData();
  const index = database.pacientes.findIndex((l) => l.id === id);

  if (index !== -1) {
    database.pacientes.splice(index, 1);
    writeData(database)
    res.status(200).send("Paciente deletado com sucesso!");
  } else {
    res.status(400).send("Paciente não encontrado!");
  }
}
