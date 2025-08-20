import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });
import { baralhos, flashcards } from "../data.js";
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
    console.clear();
    for(let i=(flashcards.length)-1;i>=0;i--){

      if(flashcards[i].idBaralho == deletarOpcao){
        flashcards.splice(i ,1)
      }}
    
    console.log(`"${baralhoDeletando.titulo}" e seus flashcards deletados!`);
    baralhos.splice(deletarID, 1);
    exibirMenu();
  } else {
    console.clear();
    exibirMenu();
  }
}
