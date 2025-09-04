import { consultas } from "../data.js";

export function putConsulta(req, res){
    const id = parseInt(req.params.id)
    const index = consultas.findIndex((l)=>l.id===id)

    if(index !== -1){
        const consultaAtualizada={
            id: id,
            dataConsulta: req.body.dataConsulta,
            idMedico: req.body.idMedico,
            idPaciente: req.body.idPaciente,
            descricao: req.body.descricao
        }
        consultas[index]=consultaAtualizada
        return res.status(200).send(`Consulta atualizada!`)
    }else{
        return res.status(404).send(`Consulta não encontrada para atualizar!`)
    }
}
