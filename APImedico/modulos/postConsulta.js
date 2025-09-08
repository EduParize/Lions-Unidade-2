import { readData, writeData } from "./fileUtils.js";

export function postConsultas(req, res) {
  const { dataConsulta, descricao, idMedico, idPaciente } = req.body;

  if (
    !dataConsulta ||
    idMedico === undefined ||
    idPaciente === undefined ||
    !descricao
  ) {
    return res
      .status(400)
      .send(
        "Informações incompletas. 'dataConsulta', 'idMedico', 'idPaciente' e 'descricao' são obrigatórios."
      );
  }

  const database = readData();

  const medicoEncontrado = database.medicos.find((m) => m.id == idMedico);
  if (!medicoEncontrado) {
    return res
      .status(404)
      .send("Não existe médico cadastrado com o ID fornecido.");
  }

  const pacienteEncontrado = database.pacientes.find((p) => p.id == idPaciente);
  if (!pacienteEncontrado) {
    return res
      .status(404)
      .send("Não existe paciente cadastrado com o ID fornecido.");
  }

  const proximoIDconsulta =
    database.consultas.length > 0
      ? Math.max(...database.consultas.map((c) => c.id)) + 1
      : 0;

  const novaConsulta = {
    id: proximoIDconsulta,
    dataConsulta: dataConsulta,
    idMedico: idMedico,
    nomeMedico: medicoEncontrado.nomeMedico,
    idPaciente: idPaciente,
    nomePaciente: pacienteEncontrado.nomePaciente,
    descricao: descricao,
  };

  database.consultas.push(novaConsulta);
  writeData(database);

  return res
    .status(201)
    .send(
      `Consulta do paciente "${pacienteEncontrado.nomePaciente}" com o médico "${medicoEncontrado.nomeMedico}" adicionada ao banco!`
    );
}
