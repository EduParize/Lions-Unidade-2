import { readData } from "./fileUtils.js";

export function getPacientes(req, res) {
  const database = readData();
  const pacientes = database.pacientes;
  if (pacientes.length > 0) {
    res.status(200).send(pacientes);
  } else {
    res.status(400).send("Nenhum paciente cadastrado!");
  }
}
