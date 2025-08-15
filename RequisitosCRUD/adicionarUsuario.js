import {
  exibirMenu,
  usuarios,
  prompt,
  criarUsuario,
} from "./menu.js";

export function adicionarUsuario() {
    let telefonesDoUsuario = []
  console.log("Insira o nome do contato que deseja adicionar: ");
  let nomeUsuario = prompt("> ");

  adicionarTelefone(nomeUsuario, telefonesDoUsuario);
}

export function adicionarTelefone(nomeUsuario, telefonesDoUsuario) {
  console.log(
    `Insira o numero de telefone do contato ${nomeUsuario} que deseja cadastrar: (apenas numeros) `
  );
  let telefoneUsuario = prompt("> ");

  if (isNaN(telefoneUsuario) || telefoneUsuario.length != 11) {
    console.clear()
    console.log("Informacoes invalidas, insira novamente!");
    adicionarTelefone(nomeUsuario, telefonesDoUsuario)
  } else{
    console.clear()
  const telefoneFormatado = `(${telefoneUsuario.substring(
    0,
    2
  )})${telefoneUsuario.substring(2, 7)}-${telefoneUsuario.substring(7)}`;

  telefonesDoUsuario.push(telefoneFormatado);

  console.log(
    `Gostaria de adicionar outro telefone para o usuario ${nomeUsuario}?\n1-Sim\nOutro-Nao`
  );
  let escolhaAddTelefone = prompt("> ");
  if (escolhaAddTelefone == 1) {
    adicionarTelefone(nomeUsuario, telefonesDoUsuario);
  } else{
  console.log(
    `Insira o email do contato ${nomeUsuario} que deseja cadastrar: `
  );
  let emailUsuario = prompt("> ");

  usuarios.forEach(usuario=>{
    if (usuario.email.includes(emailUsuario)) {
        console.clear();
        console.log("Email ja cadastrado em outro usuario!");
        adicionarUsuario();
      }
  })
  
  console.clear();
    criarUsuario(nomeUsuario, emailUsuario, telefonesDoUsuario);

    exibirMenu();
  }
}
}