import { readData, writeData } from "./fileUtils.js";

export function getBuscarFilmes(req, res) {
  const { titulo, diretor, ano, genero } = req.query;
  const database = readData();
  const filmes = database.filmes;
  let resultado = [...filmes];
  if (titulo) {
    resultado = resultado.filter((filme) =>
      filme.titulo.toLowerCase().includes(titulo.toLowerCase())
    );
  }
  if (diretor) {
    resultado = resultado.filter((filme) =>
      filme.diretor.toLowerCase().includes(diretor.toLowerCase())
    );
  }
  if (ano) {
    resultado = resultado.filter((filme) => filme.ano == ano);
  }
  if (genero) {
    resultado = resultado.filter((filme) =>
      filme.genero.toLowerCase().includes(genero.toLowerCase())
    );
  }
  if (resultado.length == 0) {
    res
      .status(404)
      .json({ message: "Nenhum filme encontrado com essa busca!" });
  }
  res.status(200).send(resultado);
}
