import { consultas, medicos, pacientes } from "../data.js";

export function getRelatorioConsultas(req, res) {
  const id = req.params.idMedico;
  const consultasDoMedico = consultas.filter((l) => l.idMedico == id);

  if (!id) {
    return res.status(400).send(`Nenhum medico encontrado com esse ID!`);
  }
  if (consultasDoMedico == 0) {
    return res.status(400).send(`Nenhuma consulta atribuida a esse medico!`);
  }


}
