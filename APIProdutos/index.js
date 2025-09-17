import express from "express";
const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import { postProdutos } from "./modules/postProdutos.js";
import { getProdutos } from "./modules/getProdutos.js";
import { putProdutos } from "./modules/putProdutos.js";
import { deleteProdutos } from "./modules/deleteProdutos.js";
import { getBuscarProdutos } from "./modules/getBuscarProdutos.js";

router.post("/produtos", postProdutos);
router.get("/produtos", getProdutos);
router.put("/produtos/:id", putProdutos);
router.delete("/produtos/:id", deleteProdutos);
router.get("/produtos/buscar", getBuscarProdutos);

router.get("/", (req, res) => {
  res.send("API funcionando!");
});
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
