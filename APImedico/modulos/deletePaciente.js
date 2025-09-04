import { pacientes } from "../data.js";

export function deletePaciente(req, res){
    const id = parseInt(req.params.id)
    const index = pacientes.findIndex((l)=>l.id===id)

    if(index!==-1){
      pacientes.splice(index, 1)
      res.status(200).send("Paciente deletado com sucesso!")  
    }else{
        res.status(400).send("Paciente não encontrado!")
    }
}