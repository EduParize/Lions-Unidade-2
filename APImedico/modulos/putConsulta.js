import { readData, writeData } from "./fileUtils.js";

export function putConsulta(req, res) {
  const id = parseInt(req.params.id);
  const database = readData();
  const index = database.consultas.findIndex((l) => l.id === id);
  const { idPaciente, idMedico } = req.body;

  const pacienteEncontrado = database.pacientes.find((p) => p.id == idPaciente);
  if (!pacienteEncontrado) {
    return res
      .status(404)
      .send("Não existe paciente cadastrado com o ID fornecido.");
  }
  const medicoEncontrado = database.medicos.find((m) => m.id == idMedico);
  if (!medicoEncontrado) {
    return res
      .status(404)
      .send("Não existe médico cadastrado com o ID fornecido.");
  }
  if (index !== -1) {
    const consultaAtualizada = {
      id: id,
      dataConsulta: req.body.dataConsulta,
      idMedico: req.body.idMedico,
      nomeMedico: medicoEncontrado.nomeMedico,
      idPaciente: req.body.idPaciente,
      nomePaciente: pacienteEncontrado.nomePaciente,
      descricao: req.body.descricao,
    };
    database.consultas[index] = consultaAtualizada;
    writeData(database);
    return res.status(200).send(`Consulta atualizada!`);
  } else {
    return res.status(404).send(`Consulta não encontrada para atualizar!`);
  }
}
