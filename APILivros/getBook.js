app.get("/livros", (req, res) => {
    if (livros.length > 0) {
      res.status(200).json(livros);
    } else {
      res.status(200).json({ message: "Nenhum livros cadastrado" });
    }
  });