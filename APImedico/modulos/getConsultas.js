import { consultas,  } from "../data.js";

export function getConsultas(req, res) {
  if (consultas.length > 0) {
    res.status(200).send(consultas);
  } else {
    res.status(400).send("Nenhuma consulta cadastrada!");
  }
}
