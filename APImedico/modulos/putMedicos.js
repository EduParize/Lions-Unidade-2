import { medicos } from "../data.js";

export function putMedico(req, res){
    const id = parseInt(req.params.id)
    const index = medicos.findIndex((l)=>l.id===id)

    if(index !== -1){
        const medicoAtualizado={
            id: id,
            nomeMedico: req.body.nomeMedico,
            especialidade: req.body.especialidade,
        }
        medicos[index]=medicoAtualizado
        return res.status(200).send(`Medico atualizado para ${req.body.nomeMedico}`)
    }else{
        return res.status(404).send(`Medico não encontrado para atualizar!`)
    }
}
