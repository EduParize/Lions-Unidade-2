import { consultas } from "../data.js";

export function getBuscarConsultas(req, res) {
  const { dataConsulta, descricao, idMedico, idPaciente } = req.query;
  let resultados = [...consultas];
  if (descricao) {
    resultados = resultados.filter((consulta) =>
      consulta.descricao.toLowerCase().includes(descricao.toLowerCase())
    );
  }

  if (dataConsulta) {
    resultados = resultados.filter((consulta) =>
        consulta.dataConsulta.includes(dataConsulta)
    );
  }
  if (idMedico) {
    resultados = resultados.filter((consulta) =>
      consulta.idMedico.includes(idMedico)
    );
  }
  if (idPaciente) {
    resultados = resultados.filter((consulta) =>
      consulta.idPaciente.includes(idPaciente)
    );
  }
  if(resultados.length==0){
    res.status(400).send(`Nenhuma consulta com esses criterios, insira novamente!`)
  }
  res.status(200).send(resultados);
}
