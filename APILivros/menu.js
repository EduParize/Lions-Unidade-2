export const express = require("express");
export const app = express();
export const port = 3000;
export let proximoID = 0;
export let livros = [];
app.use(express.json());

app.post("/livros", (req, res) => {
  const novoLivro = {
    id: proximoID++,
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    genre: req.body.genre,
  };
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

app.get("/livros", (req, res) => {
  if (livros.length > 0) {
    res.status(200).json(livros);
  }else{
    res.status(200).json({ message: "Nenhum livros cadastrado" })
  }
});
app.get("/livros/busca", (req, res) => {
  const { title, author, year, genre } = req.query;

  let resultados = [...livros];
  if (title) {
    resultados = resultados.filter((livro) =>
      livro.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (author) {
    resultados = resultados.filter((livro) =>
      livro.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (year) {
    resultados = resultados.filter((livro) => livro.year == year);
  }

  if (genre) {
    resultados = resultados.filter((livro) =>
      livro.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }
  res.status(200).json(resultados);
});
app.get("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const livro = livros.find((l) => l.id === id);

  if (livro) {
    res.status(200).json(livro);
  } else {
    res.status(404).json({ message: "Livro nao encontrado. " });
  }
});
app.patch("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = livros.findIndex((l) => l.id === id);
  if (index !== -1) {
    const livroAtualizado = {
      id: id,
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
      genre: req.body.genre,
    };
    livros[index] = livroAtualizado;
    res.status(200).json(livroAtualizado);
  } else {
    res.status(404).json({ message: "Livros não encontrado para atualização" });
  }
});

app.delete("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const novaLista = livros.filter((l) => l.id !== id);

  if (livros.length > novaLista.length) {
    livros = novaLista;
    res.status(200).json({ message: "Livro deletado com sucesso. " });
  } else {
    res.status(404).json({ message: "Livro não encontrado para deletar" });
  }
});

app.listen(port, () => {
  console.log(`Servidor de livros rodando em http://localhost:${port}`);
});
