import { consultas, medicos } from "../data.js";

export function getRelatorioMedicos(req, res) {
  const id = req.params.idMedico;
  const index = medicos.findIndex((l) => l.id == id);

  let resultados = [...consultas]
  
  if(index !== -1){
    resultados = resultados.filter((consulta)=> consulta.idMedico.includes(id))
    if(resultados.length==0){
        res.status(400).send(`Nenhuma consulta marcada com o Dr.${medicos[index].nomeMedico}`)
    }
    res.status(200).send(resultados)
  }else{
    res.status(400).send(`ID incorreto, insira novamente!`)
  }
}
