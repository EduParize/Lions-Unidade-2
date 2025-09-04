import { medicos } from "../data.js";

export function deleteMedicos(req, res){
    const id = parseInt(req.params.id)
    const index = medicos.findIndex((l)=>l.id===id)

    if(index!==-1){
      medicos.splice(index, 1)
      res.status(200).send("Medico deletado com sucesso!")  
    }else{
        res.status(400).send("Medico não encontrado!")
    }
}