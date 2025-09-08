
import { readData, writeData } from "./fileUtils.js";
export function postMedico(req, res) {
  const { nomeMedico, especialidade } = req.body;
  if (!nomeMedico || !especialidade) {
    return res
      .status(400)
      .send("Informacoes imcompletas, por favor insira corretamente!");
  }
  const database = readData();
  let proximoIDmedico =
    database.medicos.length > 0
      ? Math.max(...database.medicos.map((m) => m.id)) + 1
      : 0;
  const novoMedico = {
    id: proximoIDmedico++,
    nomeMedico: req.body.nomeMedico,
    especialidade: req.body.especialidade,
  };
  database.medicos.push(novoMedico);
  writeData(database);
  return res
    .status(201)
    .send(`Medico "${req.body.nomeMedico}" adicionado ao banco!`);
}
