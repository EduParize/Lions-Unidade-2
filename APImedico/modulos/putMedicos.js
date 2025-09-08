import { readData, writeData } from "./fileUtils.js";

export function putMedico(req, res) {
  const id = parseInt(req.params.id);
  const database = readData();
  const index = database.medicos.findIndex((l) => l.id === id);

  if (index !== -1) {
    const medicoAtualizado = {
      id: id,
      nomeMedico: req.body.nomeMedico,
      especialidade: req.body.especialidade,
    };
    database.medicos[index] = medicoAtualizado;
    writeData(database);
    return res
      .status(200)
      .send(`Medico atualizado para ${req.body.nomeMedico}`);
  } else {
    return res.status(404).send(`Medico não encontrado para atualizar!`);
  }
}
