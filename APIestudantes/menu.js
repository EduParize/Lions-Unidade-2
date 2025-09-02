const express = require("express");
const app = express();
const port = 3000;
let proximoID = 0;
let estudantes = [];
app.use(express.json());

app.post("/estudantes", (req, res) => {
  const novoEstudante = {
    id: proximoID++,
    nome: req.body.nome,
    matricula: req.body.matricula,
    curso: req.body.curso,
    ano: req.body.ano,
  };
  estudantes.push(novoEstudante);
  res.status(201).json({ message: `Estudante ${req.body.nome} adicionado` });
});

app.get("/estudantes", (req, res) => {
  if (estudantes.length > 0) {
    res.status(200).json(estudantes);
  } else {
    res.status(200).json({ message: "Nenhum estudante cadastrado" });
  }
});

app.patch("/estudantes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = estudantes.findIndex((l) => l.id === id);
  if (index !== -1) {
    const estudanteAtulizado = {
      id: id,
      nome: req.body.nome,
      matricula: req.body.matricula,
      curso: req.body.curso,
      ano: req.body.ano,
    };
    res.status(200).json({
      message: `Nome do estudante ${estudantes[index].nome} atualizado para ${req.body.nome}`,
    });
    estudantes[index] = estudanteAtulizado;
  } else {
    res
      .status(404)
      .json({ message: "Estudante não encontrado para atualizar!" });
  }
});

app.delete("/estudantes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = estudantes.findIndex((l) => l.id === id);
  if (index !== -1) {
    res
      .status(200)
      .json({ message: `Estudante ${estudantes[index].nome} removido` });
    estudantes.splice(index, 1);
  } else {
    res.status(404).json({ message: "Estudante não encontrado para deletar" });
  }
});
app.get("/estudantes/busca", (req, res) => {
  const { nome, matricula, curso, ano } = req.query;
  let resultado = [...estudantes];
  if (nome) {
    resultado = resultado.filter((estudante) =>
      estudante.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }
  if (matricula) {
    resultado = resultado.filter((estudante) =>
      estudante.matricula.toLowerCase().includes(matricula.toLowerCase())
    );
  }
  if (curso) {
    resultado = resultado.filter((estudante) =>
      estudante.curso.toLowerCase().includes(curso.toLowerCase())
    );
  }
  if (ano) {
    resultado = resultado.filter((estudante) => estudante.ano == ano);
  }
  if (resultado.length == 0) {
    res
      .status(404)
      .json({ message: "Nenhum estudante encontrado com essa busca!" });
  }
  console.log(`Listando resultado filtrados:`);
  res.status(200).json(resultado);
});
app.listen(port, () => {
  console.log(`Servidor de livros rodando em http://localhost:${port}`);
});
