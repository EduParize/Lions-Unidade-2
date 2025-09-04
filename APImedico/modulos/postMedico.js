import { medicos } from "../data.js";
 let proximoIDmedico = 0;
export function postMedico(req, res) {
  const {nomeMedico, especialidade } = req.body;
  if (!nomeMedico || !especialidade) {
    return res
      .status(400)
      .send("Informacoes imcompletas, por favor insira corretamente!");
  }
  const novoMedico = {
    id: proximoIDmedico++,
    nomeMedico: req.body.nomeMedico,
    especialidade: req.body.especialidade,
  };
  medicos.push(novoMedico);
  return res
    .status(201)
    .send(`Medico "${req.body.nomeMedico}" adicionado ao banco!`);
}
