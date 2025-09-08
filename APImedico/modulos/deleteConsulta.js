import { readData, writeData } from "./fileUtils.js"

export function deleteConsulta(req, res){
    const id = parseInt(req.params.id)
    const database = readData();
    const index = database.consultas.findIndex((l)=>l.id===id)

    if(index!==-1){
      database.consultas.splice(index, 1)
      writeData(database)
      res.status(200).send("Consulta deletada com sucesso!")  
    }else{
        res.status(400).send("Consulta não encontrada!")
    }
}