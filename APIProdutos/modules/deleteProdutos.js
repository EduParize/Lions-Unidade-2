import { readData, writeData } from "./fileUtils.js";

export function deleteProdutos(req, res) {
  const database = readData();
  const produtos = database.produtos;
  const id = parseInt(req.params.id, 10);
  let produtosIndex = database.produtos.findIndex(
    (produto) => produto.id == id
  );
  if (produtosIndex == -1) {
    res.status(400).send(`Nenhum produto encontrado com esse ID`);
  }

  produtos.splice(id, 1);
  writeData(database);
  res.status(200).send(`Produto deletado!`);
}
