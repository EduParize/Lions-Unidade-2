import { readData, writeData } from "./fileUtils.js";


export function getProdutos(req, res) {
    const database = readData()
    const produtos = database.produtos
  if (produtos.length > 0) {
    res.status(200).send(produtos);
  } else {
    res.status(400).send("Nenhum produto cadastrado!");
  }
}