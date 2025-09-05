import { medicos } from "../data.js";

export function getBuscarMedico(req, res){
    const {nomeMedico, especialidade}= req.query
    let resultados = [...medicos]
    if (nomeMedico) {
        resultados = resultados.filter((medico) =>
          medico.nomeMedico.toLowerCase().includes(nomeMedico.toLowerCase())
        );
      }
    
      if (especialidade) {
        resultados = resultados.filter((medico) =>
          medico.especialidade.toLowerCase().includes(especialidade.toLowerCase())
        );
      }
      if(resultados.length==0){
        res.status(400).send(`Nenhum medico com esses criterios, insira novamente!`)
      }
      res.status(200).send(resultados);
}