import { readData, writeData } from "./fileUtils.js";

export function postFilmes(req, res) {
  const {titulo, diretor, ano, genero } = req.body;
  if (!titulo || !diretor || !ano || !genero) {
    res
      .status(400)
      .send(`Informacoes incompletas, por favor insira novamente!`);
  }
  const database = readData();
  let idProximo = database.filmes.length > 0
  ? Math.max(...database.filmes.map((m) => m.id)) + 1
  : 0;
  const novoFilme={
    id:idProximo++,
    titulo:req.body.titulo,
    diretor:req.body.diretor,
    ano:req.body.ano,
    genero: req.body.genero
  }
  database.filmes.push(novoFilme)
  writeData(database)
  return res.status(200).send(`Filme ${req.body.titulo} criado com sucesso!`)
}
