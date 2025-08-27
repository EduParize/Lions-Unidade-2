const express = require("express");
const app = express();
const port = 3000;
// let num1 = 12;
// let num2 = 32;

app.use(express.json())
app.get("/soma", (req, res) => {
  res.send(`${num1} + ${num2} = ${num1 + num2}`);
});

app.get("/somas", (req, res) => {
  const { num1, num2 } = req.body;
  res.send(`${num1} + ${num2} = ${num1 + num2}`);
});

app.get("/subs", (req, res) => {
  res.send(`${num1} - ${num2} = ${num1 - num2}`);
});

app.get("/mult", (req, res) => {
  res.send(`${num1} * ${num2} = ${num1 * num2}`);
});
app.get("/divisao", (req, res) => {
  res.send(`${num1} / ${num2} = ${num1 / num2}`);
});

app.listen(port, () => {
  console.log(`Example app listeninh on port ${port}`);
});
