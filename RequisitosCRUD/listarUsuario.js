import { usuarios, prompt, exibirMenu} from "./menu.js";

export function listarUsuario() {
  if (usuarios.length <= 0) {
    console.log("Nenhum contato registrado!");
    exibirMenu();
  }

  usuarios.forEach((usuario) => {
    console.log(
      `ID: ${usuario.id}\nNome: ${usuario.nome}\nEmail: ${usuario.email}\nTelefones: ${usuario.telefone}`
    );
    console.log("--------------------------");
  });
  exibirMenu();
}
