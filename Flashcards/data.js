let idBaralho = 0;
let idFlashcard = 0;

export let baralhos = [];

let flashcards = [];
// let flashcard = {
//   id: idFlashcard,
//   pergunta: pergunta,
//   responta: resposta,
//   idBaralho: idBaralho,
// };

export function gerarBaralho(nomeBaralho){
    let baralho = {
        id: idBaralho,
        titulo: nomeBaralho,
        flashcards: flashcards,
      };
      baralhos.push(baralho)
      
}