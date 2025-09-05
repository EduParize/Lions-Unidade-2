import { pacientes } from "../data.js";

export function getBuscarPaciente(req, res){
    const {nomePaciente, dataNascimentoPaciente}= req.query
    let resultados = [...pacientes]
    if (nomePaciente) {
        resultados = resultados.filter((paciente) =>
          paciente.nomePaciente.toLowerCase().includes(nomePaciente.toLowerCase())
        );
      }
    
      if (dataNascimentoPaciente) {
        resultados = resultados.filter((paciente) =>
          paciente.dataNascimentoPaciente.toLowerCase().includes(dataNascimentoPaciente.toLowerCase())
        );
      }
      if(resultados.length==0){
        res.status(400).send(`Nenhum paciente com esses criterios, insira novamente!`)
      }
      res.status(200).send(resultados);
}