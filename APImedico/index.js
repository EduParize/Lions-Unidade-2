import express from "express";
const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { postMedico } from "./modulos/postMedico.js";
import { getMedicos } from "./modulos/getMedicos.js";
import { getPacientes } from "./modulos/getPaciente.js";
import { postPaciente } from "./modulos/postPaciente.js";
import { postConsultas } from "./modulos/postConsulta.js";
import { getConsultas } from "./modulos/getConsultas.js";
import { putMedico } from "./modulos/putMedicos.js";
import { putConsulta } from "./modulos/putConsulta.js";
import { putPaciente } from "./modulos/putPaciente.js";
import { deleteConsulta } from "./modulos/deleteConsulta.js";
import { deleteMedicos } from "./modulos/deleteMedico.js";
import { deletePaciente } from "./modulos/deletePaciente.js";
import { getBuscarConsultas } from "./modulos/getBuscarConsulta.js";
import { getBuscarMedico } from "./modulos/getBuscarMedico.js";
import { getBuscarPaciente } from "./modulos/getBuscarPaciente.js";

router.post("/medicos", postMedico);
router.get("/medicos", getMedicos);
router.get("/pacientes", getPacientes);
router.post("/pacientes", postPaciente);
router.post("/consultas", postConsultas);
router.get("/consultas", getConsultas);
router.put("/medicos/:id", putMedico);
router.put("/pacientes/:id", putPaciente);
router.put("/consultas/:id", putConsulta);
router.delete("/consultas/:id", deleteConsulta);
router.delete("/medicos/:id", deleteMedicos);
router.delete("/pacientes/:id", deletePaciente);
router.get("/medicos/buscar", getBuscarMedico);
router.get("/pacientes/buscar", getBuscarPaciente);
router.get("/consultas/buscar", getBuscarConsultas);

router.get("/", (req, res) => {
  res.send("API funcionando!");
});
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
