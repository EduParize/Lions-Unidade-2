import { readData } from "./fileUtils.js";

export function getConsultas(req, res) {
  const database = readData()
  const consultas = database.consultas;
  if (consultas.length > 0) {
    res.status(200).send(consultas);
  } else {
    res.status(400).send("Nenhuma consulta cadastrada!");
  }
}
