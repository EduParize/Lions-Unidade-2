import { readData, writeData } from "./fileUtils.js"

export function deleteMedicos(req, res){
    const id = parseInt(req.params.id)
    const database = readData();
    const index = database.medicos.findIndex((l)=>l.id===id)

    if(index!==-1){
      database.medicos.splice(index, 1)
      writeData(database)
      res.status(200).send("Medico deletado com sucesso!")  
    }else{
        res.status(400).send("Medico não encontrado!")
    }
}