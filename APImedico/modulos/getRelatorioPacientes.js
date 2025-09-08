import { consultas, medicos, pacientes } from "../data.js";

export function getRelatorioPacientes(req, res) {
  const id = parseInt(req.params.idPaciente);
  const paciente = pacientes.find((m) => m.id === id);
  const medicosDoPaciente = consultas.filter((l) => l.idPaciente == id);

  if (!paciente) {
    return res.status(400).send(`Nenhum paciente encontrado com esse ID!`);
  }
  if (medicosDoPaciente.length == 0) {
    return res.status(400).send(`Nenhum medico atribuido a esse paciente!`);
  }
  const IDmedicosEncontrados = new Set();
  medicosDoPaciente.forEach((c) => {
    IDmedicosEncontrados.add(c.idMedico);
  });

  const medicosEncontrados = Array.from(IDmedicosEncontrados).map(
    (idMedico) => {
      return medicos.find((p) => p.id == idMedico);
    }
  );

  const relatorio = {
    paciente: {
      id: paciente.id,
      nome: paciente.nomePaciente,
      dataNascimentoPaciente: paciente.dataNascimentoPaciente,
    },
    medicosEncontrados: medicosEncontrados,
  };

  return res.status(200).send(relatorio);
}
