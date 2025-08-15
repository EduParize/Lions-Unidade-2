import PromptSync from "prompt-sync";
import { adicionarUsuario } from "./adicionarUsuario.js";
import { listarUsuario } from "./listarUsuario.js"
import { removerUsuario } from "./removerUsuario.js";
import { atualizarUsuario } from "./atualizarUsuario.js";
export const prompt = PromptSync({ sigint: true });

export let usuarios = [];

export function criarUsuario(nome, email, telefones) {
  const usuario = {
    id: Math.floor(Date.now()/6000),
    nome: nome,
    email: email,
    telefone: telefones,
  };
  usuarios.push(usuario);

  console.log(`Usuario "${nome}" adicionado com sucesso!`);
}

export function exibirMenu() {
  console.log(
    "=========MENU=========\n1-Adicionar Usuario\n2-Listar Usuarios\n3-Atualizar Usuarios\n4-Deletar Usuario\n0-Sair do programa" // SAÍDA DE DADOS:
  );

  console.log("Insira a opção desejada.");
  let opcaoMenu = prompt("> ");
  opcaoMenu = parseInt(opcaoMenu, 10);
  switch (opcaoMenu) {
    case 1:
      console.clear();
      adicionarUsuario();
      break;
    case 2:
      console.clear();
      listarUsuario();
      break;
    case 3:
      console.clear();
      atualizarUsuario();
      break;
    case 4:
      console.clear();
      removerUsuario();
      break;
    case 0:
      process.exit();
    default:
      console.log("Insira uma opção válida!\n");
      exibirMenu();
  }
}
exibirMenu()