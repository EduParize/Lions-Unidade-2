import { readData, writeData } from "./fileUtils.js";


export function getFilmes(req, res) {
    const database = readData()
    const filmes = database.filmes
  if (filmes.length > 0) {
    res.status(200).send(filmes);
  } else {
    res.status(400).send("Nenhum filme cadastrado!");
  }
}