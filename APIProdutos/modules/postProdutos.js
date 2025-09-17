import { readData, writeData } from "./fileUtils.js";

export function postProdutos(req, res) {
  const {nome, categoria, preco, estoque } = req.body;
  if (!nome || !categoria || !preco || !estoque) {
    res
      .status(400)
      .send(`Informacoes incompletas, por favor insira novamente!`);
  }
  const database = readData();
  let idProximo = database.produtos.length > 0
  ? Math.max(...database.produtos.map((m) => m.id)) + 1
  : 0;
  const novoProduto={
    id:idProximo++,
    nome:req.body.nome,
    categoria:req.body.categoria,
    preco:req.body.preco,
    estoque: req.body.estoque
  }
  database.produtos.push(novoProduto)
  writeData(database)
  return res.status(200).send(`Produto ${req.body.nome} criado com sucesso!`)
}
