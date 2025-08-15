import { prompt, usuarios, exibirMenu } from "./menu.js";

export function removerUsuario() {
  if (usuarios.length == 0) {
    console.log("Nenhum usuario para remover");
    exibirMenu();
  }

  usuarios.forEach((usuarios) => {
    console.log(`ID: ${usuarios.id} - ${usuarios.nome}`);
  });
  console.log(
    "Insira a o ID do usuario que deseja remover ou '0' para sair: \n"
  );
  let removerOpcao = prompt("> ");
  removerOpcao = parseInt(removerOpcao);
  if (removerOpcao == 0) {
    console.clear();
    exibirMenu();
  }
  const removerID = usuarios.findIndex(
    (usuario) => usuario.id === removerOpcao
  );

  if (removerID === -1) {
    console.clear();
    console.log(
      "ID inválido! Nenhum usuário encontrado com este ID. Insira novamente!"
    );
    removerUsuario();
  } else {
    const usuarioRemovido = usuarios[removerID].nome;
    console.log(
      `Tem certeza que deseja remover o Usuario ${usuarioRemovido}\n1-Sim\n2-Outro`
    );
    let confirmarRemocao = prompt("> ");
    if (confirmarRemocao == 1) {
      usuarios.splice(removerID, 1);

      console.clear();
      console.log(`Usuário "${usuarioRemovido}" removido com sucesso!`);
      exibirMenu();
    }
    else{
      console.clear()
      console.log(`Cancelando remocao do Usuario ${usuarioRemovido}`)
      removerUsuario()
    }
  }
}
