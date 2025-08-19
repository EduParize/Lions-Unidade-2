import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });
import { baralhos } from "../data.js";
import { exibirMenu } from "../menu.js";

export function atualizarBaralho() {
  baralhos.forEach((baralho) => {
    console.log(`${baralho.id}-${baralho.titulo}`);
  });
  console.log("Insira o qual baralho gostaria de atualizar: ");
  let atualizarOpcaoBaralho = prompt("> ");
  atualizarOpcaoBaralho = parseInt(atualizarOpcaoBaralho);

  const editarID = baralhos.findIndex(
    (baralho) => baralho.id === atualizarOpcaoBaralho
  );

  if (editarID === -1) {
    console.clear();
    console.log(
      "ID inválido! Nenhum baralho encontrado com este ID. Insira novamente!"
    );
    atualizarBaralho();
  }
  const baralhoEditando = baralhos[editarID];
  console.log(
    `Insira qual o novo nome para o baralho "${baralhoEditando.titulo}": `
  );
  let novoNome = prompt("> ");
  console.clear();
  console.log(
    `Atulizado nome do baralho ${baralhos[editarID].titulo} para ${novoNome}`
  );
  baralhos[editarID].titulo = novoNome;

  exibirMenu();
}
