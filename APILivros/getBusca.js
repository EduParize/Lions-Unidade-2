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