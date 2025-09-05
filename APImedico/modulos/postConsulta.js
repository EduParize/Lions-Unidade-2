import { consultas, medicos, pacientes } from "../data.js";
let proximoIDconsulta = 0
export function postConsultas(req, res){
    const {dataConsulta, descricao, idMedico, idPaciente} = req.body
    const novaConsulta={
        id: proximoIDconsulta++,
        dataConsulta: req.body.dataConsulta,
        idMedico: req.body.idMedico,
        idPaciente: req.body.idPaciente,
        descricao: req.body.descricao
    }
    if(req.body.idMedico>medicos.length-1 ){
        return res.status(400).send("Medico não cadastrado com esse ID")
    }
    if( req.body.idPaciente>pacientes.length-1){
        return res.status(400).send("Paciente não cadastrado com esse ID")
    }
    if(!dataConsulta || !idMedico || !idPaciente || !descricao){
        return res.status(400).send("Informacoes imcompletas ou incorretas, por favor insira corretamente!");
    }
   
    consultas.push(novaConsulta)
    return res.status(201).send(`Consulta do paciente "${pacientes[req.body.idPaciente].nomePaciente}" com o medico "${medicos[req.body.idMedico].nomeMedico}" adicionada ao banco!`)
    
}