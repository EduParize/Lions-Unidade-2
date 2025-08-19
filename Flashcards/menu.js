import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });
import { gerarBaralho } from "./data.js";
import { criarBaralho } from "./Baralho/criarBaralho.js";
import { listarBaralhos } from "./Baralho/listarBaralho.js";
import { atualizarBaralho } from "./Baralho/atualizarBaralho.js";
import { deletarBaralho } from "./Baralho/deletarBaralho.js";
import { criarFlashcard } from "./flashcard/criarFlashcard.js";
import { listarFlashcards } from "./flashcard/listarFlashcards.js";
import { listarFlashcardsPorBaralhoId } from "./flashcard/listarFlashcardsPorBaralhoId.js";
import { atualizarFlashcard } from "./flashcard/atualizarFlashcard.js";
import { deletarFlashcard } from "./flashcard/deletarFlashcard.js";
export function exibirMenu() {
  console.log(
    "=========MENU=========\n1-Baralho\n2-Flashcard\n0-Sair do programa"
  );

  console.log("Insira em qual area deseja entrar:");
  let opcaoArea = prompt("> ");
  opcaoArea = parseInt(opcaoArea, 10);
  switch (opcaoArea) {
    case 1:
      console.clear();
      menuBaralho();
      break;
    case 2:
      console.clear();
      menuFlashcard();
      break;
    case 0:
      process.exit();
    default:
      console.log("Insira uma opção válida!\n");
      exibirMenu();
  }
}

function menuBaralho() {
  console.log(
    "=========MENU=========\n1-Criar Baralho\n2-Listar Baralhos\n3-Atualizar Baralho\n4-Deletar Baralho\n0-Voltar"
  );

  console.log("Insira a o opcao que deseja:");
  let opcaoBaralho = prompt("> ");
  opcaoBaralho = parseInt(opcaoBaralho, 10);
  switch (opcaoBaralho) {
    case 1:
      console.clear();
      criarBaralho();
      break;
    case 2:
      console.clear();
      listarBaralhos();
      break;
    case 3:
      console.clear();
      atualizarBaralho();
    case 4:
      console.clear();
      deletarBaralho();
    case 0:
      console.clear();
      exibirMenu();
    default:
      console.log("Insira uma opção válida!\n");
      exibirMenu();
  }
}

function menuFlashcard() {
  console.log(
    "=========MENU=========\n1-Criar Flashcard\n2-Listar Flashcards\n3-Listar Flashcards por Baralho\n4-Atualizar Flashcard\n5-Deletar Flashcard\n6-Buscar Flashcard por Pergunta\n7-Buscar Flashcards Por ID\n0-Voltar"
  );

  console.log("Insira a o opcao que deseja:");
  let opcaoFlashcard = prompt("> ");
  opcaoFlashcard = parseInt(opcaoFlashcard, 10);
  switch (opcaoFlashcard) {
    case 1:
      console.clear();
      criarFlashcard();
      break;
    case 2:
      console.clear();
      listarFlashcards();
      break;
    case 3:
      console.clear();
      listarFlashcardsPorBaralhoId();
    case 4:
      console.clear;
      atualizarFlashcard();
      break;
    case 5:
      console.clear();
      deletarFlashcard();
    case 0:
      console.clear();
      exibirMenu();
    default:
      console.log("Insira uma opção válida!\n");
      exibirMenu();
  }
}
exibirMenu();
