import { consultas } from "../data.js";

export function getRelatorioMes(req, res) {
  const mes = parseInt(req.params.mes);
  const ano = parseInt(req.params.ano);

  if (isNaN(mes) || mes < 1 || mes > 12) {
    return res.status(400).send("Mês inválido. Por favor, insira um valor entre 1 e 12.");
  }

  if (isNaN(ano) || ano.toString().length !== 4) {
    return res.status(400).send("Ano inválido. Por favor, insira um ano com 4 dígitos.");
  }

  const consultasNoPeriodo = consultas.filter(consulta => {
  
    const partesData = consulta.dataConsulta.split('-'); 
    const dia = partesData[0];
    const mesDaConsulta = partesData[1];
    const anoDaConsulta = partesData[2];


    return parseInt(mesDaConsulta) === mes && parseInt(anoDaConsulta) === ano;

  });

  if (consultasNoPeriodo.length === 0) {
    return res.status(404).send(`Nenhuma consulta encontrada para ${mes}/${ano}.`);
  }

  return res.status(200).json(consultasNoPeriodo);
}