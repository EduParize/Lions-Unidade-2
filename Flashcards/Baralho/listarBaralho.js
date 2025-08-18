import { baralhos } from "../data.js";
import { exibirMenu } from "../menu.js";


export function listarBaralhos() {
  baralhos.forEach((baralho) => {
    console.log(baralho);
  });
  exibirMenu()
}
