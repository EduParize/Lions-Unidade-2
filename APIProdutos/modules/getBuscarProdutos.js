import { readData, writeData } from "./fileUtils.js";

export function getBuscarProdutos(req, res) {
  const { nome, categoria, preco, estoque } = req.query;
  const database = readData();
  const produtos = database.produtos;
  let resultado = [...produtos];
  if (nome) {
    resultado = resultado.filter((produto) =>
      produto.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }
  if (categoria) {
    resultado = resultado.filter((produto) =>
      produto.categoria.toLowerCase().includes(categoria.toLowerCase())
    );
  }
  if (preco) {
    resultado = resultado.filter((produto) => produto.preco == preco);
  }
  if (estoque) {
    resultado = resultado.filter((produto) => produto.estoque == estoque);
  }
  if (resultado.length == 0) {
    res
      .status(404)
      .json({ message: "Nenhum produto encontrado com essa busca!" });
  }
  res.status(200).send(resultado);
}
