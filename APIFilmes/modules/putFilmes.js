import { readData, writeData } from "./fileUtils.js";

export function putFilmes(req, res) {
  const database = readData();

  const id = parseInt(req.params.id, 10);
  let filmeIndex = database.filmes.findIndex((filme) => filme.id == id);
  if ((filmeIndex == -1)) {
    res.status(400).send(`Nenhum filme encontrado com esse ID`);
  }
  const {titulo, diretor, ano, genero } = req.body;
  if (!titulo || !diretor || !ano || !genero) {
    res
      .status(400)
      .send(`Informacoes incompletas, por favor insira novamente!`);
  }
  const filmeAtualizado={
    id:id,
    titulo:req.body.titulo,
    diretor:req.body.diretor,
    ano:req.body.ano,
    genero: req.body.genero
  }
  database.filmes[filmeIndex] = filmeAtualizado;
  writeData(database)
  res.status(200).send(`Produto atualizado para ${req.body.titulo}`);
}