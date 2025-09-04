import { medicos } from "../data.js";

export function getMedicos(req, res) {
  if (medicos.length > 0) {
    res.status(200).send(medicos);
  } else {
    res.status(400).send("Nenhum medico cadastrado!");
  }
}
