import { prompt, usuarios, criarUsuario, exibirMenu } from "./menu.js";

export function atualizarUsuario() {
  if (usuarios.length == 0) {
    console.log("Nenhum usuario para editar");
    exibirMenu();
  }

  usuarios.forEach((usuarios) => {
    console.log(`ID: ${usuarios.id} - ${usuarios.nome}`);
  });
  console.log(
    "Insira a o ID do usuario que deseja atualizar ou '0' para sair: \n"
  );
  let editarOpcao = prompt("> ");
  editarOpcao = parseInt(editarOpcao);
  if (editarOpcao == 0) {
    console.clear();
    exibirMenu();
  }
  const editarID = usuarios.findIndex((usuario) => usuario.id === editarOpcao);
  
  if (editarID === -1) {
    console.clear();
    console.log(
      "ID inválido! Nenhum usuário encontrado com este ID. Insira novamente!"
    );
    atualizarUsuario();
    return
  }
  const usuarioEditando = usuarios[editarID];
  console.clear();
  console.log(
    `Insira qual area do '${usuarioEditando.nome}' gostaria de atualizar:\n1-Nome\n2-Email\n3-Telefones\n0-Voltar ao menu`
  );

  let editarCaracteristica = prompt("> ");
  editarCaracteristica = parseInt(editarCaracteristica);
  switch (editarCaracteristica) {
    case 1:
      editarNome(usuarioEditando);
      break;
    case 2:
      editarEmail(usuarioEditando);
      break;
    case 3:
      editarTelefone(usuarioEditando);
      break;
    case 0:
      console.clear();
      exibirMenu();
    default:
      console.log("Insira uma opcao valida!");
      atualizarUsuario();
  }
}
function editarNome(usuarioEditando) {
  console.log(
    `Insira o novo nome que deseja passar ao usuario ${usuarioEditando.nome}`
  );
  let novoNome = prompt("> ");
  console.log(
    `Alterando nome do usuario ${usuarioEditando.nome} para ${novoNome}`
  );
  usuarioEditando.nome = novoNome;
  exibirMenu();
}

function editarEmail(usuarioEditando) {
  console.log(
    `Insira o novo email que deseja passar ao usuario ${usuarioEditando.nome}`
  );
  let novoEmail = prompt("> ");

  
  const emailJaExiste = usuarios.some(
    (usuario) => usuario.email === novoEmail && usuario.id !== usuarioEditando.id
  );

  if (emailJaExiste) {
    console.clear();
    console.log("Email ja cadastrado em outro usuario!");
    editarEmail(usuarioEditando); 
    return; 
  }
  console.log(
    `Alterando email do usuario ${usuarioEditando.nome} para ${novoEmail}`
  );
  usuarioEditando.email = novoEmail;
  exibirMenu();
}

function editarTelefone(usuarioEditando) {
  console.clear();
  console.log(
    `Deseja adicionar, alterar ou remover um numero do usuario ${usuarioEditando.nome}\n1-Adicionar\n2-Alterar\n3-Remover\n0-Voltar`
  );
  let opcaoTelefone = prompt("> ");
  opcaoTelefone = parseInt(opcaoTelefone);
  switch (opcaoTelefone) {
    case 1:
      console.clear()
      adicionarNumero(usuarioEditando);
      break;
    case 2:
      console.clear()
      alterarNumero(usuarioEditando);
      break;
    case 3:
      console.clear()
      removerNumero(usuarioEditando);
      break;
    case 0:
      console.clear();
      console.log("Voltando!");
      atualizarUsuario();
  }
}

function adicionarNumero(usuarioEditando) {
  console.log(
    `Insira no numero que deseja adicionar ao usuario ${usuarioEditando.nome}`
  );
  let novoTelefoneADD = prompt("> ");
  console.clear();
  if (isNaN(novoTelefoneADD) || novoTelefoneADD.length != 11) {
    console.log("Informacoes invalidas, insira novamente!");
    adicionarNumero(usuarioEditando);
  } else {
    const novoTelefoneFormatadoADD = `(${novoTelefoneADD.substring(
      0,
      2
    )})${novoTelefoneADD.substring(2, 7)}-${novoTelefoneADD.substring(7)}`;
    console.clear();
    usuarioEditando.telefone.push(novoTelefoneFormatadoADD);
    console.log(
      `Numero ${novoTelefoneFormatadoADD} adicionado ao usuario ${usuarioEditando.nome}`
    );
    exibirMenu();
  }
}

function alterarNumero(usuarioEditando) {
  console.log(`Telefones do Usuario ${usuarioEditando.nome}`)
  usuarioEditando.telefone.forEach((telefone) => {
    console.log(`-${telefone}`);
  });
  console.log("Insira qual numero vc gostaria de alterar: ");
  let telefoneAlterar = prompt("> ");
  const telefoneID = usuarioEditando.telefone.findIndex(
    (telefone) => telefone === telefoneAlterar
  );
  const telefoneAlterando = usuarioEditando.telefone[telefoneID];
  if (telefoneID === -1) {
    console.clear();
    console.log(
      `Telefone inválido! O usuario ${usuarioEditando.nome} não possuiu nenhum telefone ${telefoneAlterar} Insira novamente!`
    );
    alterarNumero(usuarioEditando);
  }
  console.log(
    `Insira qual o novo numero que deseja adicionar no lugar de ${telefoneAlterando}:`
  );
  let novoTelefone = prompt("> ");
  if (isNaN(novoTelefone) || novoTelefone.length != 11) {
    console.log("Numero invalido, insira novamente!");
    alterarNumero(usuarioEditando);
  } else{
  const novoTelefoneFormatado = `(${novoTelefone.substring(
    0,
    2
  )})${novoTelefone.substring(2, 7)}-${novoTelefone.substring(7)}`;
  console.clear()
  console.log(`Alterado telefone do usuario "${usuarioEditando.nome}" ${telefoneAlterando} para ${novoTelefoneFormatado}`)
  usuarioEditando.telefone[telefoneID] = novoTelefoneFormatado;
  exibirMenu()
  
}
}

function removerNumero(usuarioEditando){
  console.log(`Numeros de telefones do Usuario ${usuarioEditando.nome}`)
  usuarioEditando.telefone.forEach((telefone)=>{
    console.log(`-${telefone}`)
  })
  console.log("Insira qual o numero que deseja remover:")
  let telefoneRemover = prompt("> ")
  const telefoneIDRemover = usuarioEditando.telefone.findIndex(
    (telefone) => telefone === telefoneRemover
  );
  const telefoneRemovendo = usuarioEditando.telefone[telefoneIDRemover];
  if (telefoneIDRemover === -1) {
    console.clear();
    console.log(
      `Telefone inválido! O usuario ${usuarioEditando.nome} não possuiu nenhum telefone ${telefoneRemover} Insira novamente!`
    );
    removerNumero(usuarioEditando);
  }
  console.clear()
  console.log(`O numero ${telefoneRemover} foi removido do Usuario ${usuarioEditando.nome}`)
  usuarioEditando.telefone.splice(telefoneIDRemover, 1)

  exibirMenu()
}