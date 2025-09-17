import { readData, writeData } from "./fileUtils.js";

export function putProdutos(req, res) {
  const database = readData();

  const id = parseInt(req.params.id, 10);
  let produtosIndex = database.produtos.findIndex((aluno) => aluno.id == id);
  if ((produtosIndex == -1)) {
    res.status(400).send(`Nenhum produto encontrado com esse ID`);
  }
  const {nome, categoria, preco, estoque } = req.body;
  if (!nome || !categoria || !preco || !estoque) {
    res
      .status(400)
      .send(`Informacoes incompletas, por favor insira novamente!`);
  }
  const produtoAtualizado={
    id:id,
    nome:req.body.nome,
    categoria:req.body.categoria,
    preco:req.body.preco,
    estoque: req.body.estoque
  }
  database.produtos[produtosIndex] = produtoAtualizado;
  writeData(database)
  res.status(200).send(`Produto atualizado para ${req.body.nome}`);
}