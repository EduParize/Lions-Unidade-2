import { pacientes } from "../data.js";

export function putPaciente(req, res){
    const id = parseInt(req.params.id)
    const index = pacientes.findIndex((l)=>l.id===id)

    if(index !== -1){
        const pacienteAtualizado={
            id: id,
            nomePaciente: req.body.nomePaciente,
            dataNascimentoPaciente: req.body.dataNascimentoPaciente,
        }
        pacientes[index]=pacienteAtualizado
        return res.status(200).send(`Paciente atualizado para ${req.body.nomePaciente}`)
    }else{
        return res.status(404).send(`Paciente não encontrado para atualizar!`)
    }
}
