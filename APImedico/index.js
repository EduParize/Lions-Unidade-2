import express from "express";
const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { postMedico } from "./postMedico.js";
import { getMedicos } from "./getMedicos.js";

router.post("/medicos", postMedico);
router.get("/medicos", getMedicos);

router.get("/", (req, res) => {
  res.send("API funcionando!");
});
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
