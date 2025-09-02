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