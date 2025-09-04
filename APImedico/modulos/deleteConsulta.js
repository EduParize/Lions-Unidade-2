import { consultas } from "../data.js";

export function deleteConsulta(req, res){
    const id = parseInt(req.params.id)
    const index = consultas.findIndex((l)=>l.id===id)

    if(index!==-1){
      consultas.splice(index, 1)
      res.status(200).send("Consulta deletada com sucesso!")  
    }else{
        res.status(400).send("Consulta não encontrada!")
    }
}