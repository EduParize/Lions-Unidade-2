import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });
import { baralhos } from "../data.js";
import { exibirMenu } from "../menu.js";

export function deletarBaralho() {
  baralhos.forEach((baralho) => {
    console.log(`${baralho.id}-${baralho.titulo}`);
  });
  console.log("Insira o qual baralho gostaria de deletar: ");
  let deletarOpcao = prompt("> ");
  deletarOpcao = parseInt(deletarOpcao);

  const deletarID = baralhos.findIndex(
    (baralho) => baralho.id === deletarOpcao
  );

  if (deletarID === -1) {
    console.clear();
    console.log(
      "ID inválido! Nenhum baralho encontrado com este ID. Insira novamente!"
    );
    deletarBaralho();
  }
  const baralhoDeletando = baralhos[deletarID];
  console.log(
    `Tem certeza que gostaria de deletar o baralho "${baralhoDeletando.titulo}"?\n1-Sim\n2-Nao`
  );
  let confirmarDelete = prompt("> ");
  if (confirmarDelete == 1) {
    console.clear()
    console.log(`"${baralhoDeletando.titulo}" deletado!`);
    baralhos.splice(deletarID, 1);
    exibirMenu();
  } else {
    console.clear();
    exibirMenu();
  }
}
