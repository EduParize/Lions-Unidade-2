app.get("/livros/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const livro = livros.find((l) => l.id === id);
  
    if (livro) {
      res.status(200).json(livro);
    } else {
      res.status(404).json({ message: "Livro nao encontrado. " });
    }
  });