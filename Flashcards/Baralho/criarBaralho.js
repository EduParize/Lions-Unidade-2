import PromptSync from "prompt-sync";
import { gerarBaralho } from "../data.js";
import { exibirMenu } from "../menu.js";
export const prompt = PromptSync({ sigint: true });

export function criarBaralho() {
  console.log("Insira o titulo do Baralho:");
  let nomeBaralho = prompt("> ");

  gerarBaralho(nomeBaralho)
  console.clear()
  console.log(`Baralho "${nomeBaralho}" criado\n`)
  exibirMenu()
}
