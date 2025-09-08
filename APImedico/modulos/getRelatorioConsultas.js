import { consultas, medicos, pacientes } from "../data.js";

export function getRelatorioConsultas(req, res) {
  const id = parseInt(req.params.idMedico);
  const medico = medicos.find((m) => m.id === id);
  const consultasDoMedico = consultas.filter((l) => l.idMedico == id);

  if (!medico) {
    return res.status(400).send(`Nenhum medico encontrado com esse ID!`);
  }
  if (consultasDoMedico.length == 0) {
    return res.status(400).send(`Nenhuma consulta atribuida a esse medico!`);
  }
  const pacientesAtendidosIDs = new Set();
  consultasDoMedico.forEach((c) => {
    pacientesAtendidosIDs.add(c.idPaciente);
  });

  const pacientesAtendidos = Array.from(pacientesAtendidosIDs).map(
    (idPaciente) => {
      return pacientes.find((p) => p.id == idPaciente);
    }
  );

  const relatorio = {
    medico: {
      id: medico.id,
      nome: medico.nomeMedico,
      especialidade: medico.especialidade,
    },
    pacientesAtendidos: pacientesAtendidos,
  };

  return res.status(200).send(relatorio);
}
