import { pacientes } from "../data.js";

export function getPacientes(req, res) {
  if (pacientes.length > 0) {
    res.status(200).send(pacientes);
  } else {
    res.status(400).send("Nenhum paciente cadastrado!");
  }
}
