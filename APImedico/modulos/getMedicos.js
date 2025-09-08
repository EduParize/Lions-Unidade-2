import { readData } from "./fileUtils.js";

export function getMedicos(req, res) {
  const database = readData();
  const medicos = database.medicos;
  if (medicos.length > 0) {
    res.status(200).send(medicos);
  } else {
    res.status(400).send("Nenhum medico cadastrado!");
  }
}
