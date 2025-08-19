import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });
import { baralhos, flashcards } from "../data.js";
import { exibirMenu } from "../menu.js";

export function listarFlashcards() {
  flashcards.forEach((flashcard) => {
    console.log(`ID: ${flashcard.id}\nPergunta: "${flashcard.pergunta}"\nID do baralho: ${flashcard.idBaralho}`);
    console.log("-------------------------------")
  });


  exibirMenu();
}
