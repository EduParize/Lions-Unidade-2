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