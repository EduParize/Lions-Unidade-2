import { readData, writeData } from "./fileUtils.js";

export function deleteFilmes(req, res) {
  const database = readData();
  const filmes = database.filmes;
  const id = parseInt(req.params.id, 10);
  let filmeIndex = database.filmes.findIndex(
    (filme) => filme.id == id
  );
  if (filmeIndex == -1) {
    res.status(400).send(`Nenhum filme encontrado com esse ID`);
  }

  filmes.splice(id, 1);
  writeData(database);
  res.status(200).send(`Filme deletado!`);
}
