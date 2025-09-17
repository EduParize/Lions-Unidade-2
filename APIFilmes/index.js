import express from "express";
const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import { postFilmes } from "./modules/postFilmes.js";
import { getFilmes } from "./modules/getFilmes.js";
import { putFilmes } from "./modules/putFilmes.js";
import { deleteFilmes } from "./modules/deleteFilmes.js";
import { getBuscarFilmes } from "./modules/getBuscarFilmes.js";

router.post("/filmes", postFilmes);
router.get("/filmes", getFilmes);
router.put("/filmes/:id", putFilmes);
router.delete("/filmes/:id", deleteFilmes);
router.get("/filmes/buscar", getBuscarFilmes);

router.get("/", (req, res) => {
  res.send("API funcionando!");
});
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
