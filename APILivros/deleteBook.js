
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