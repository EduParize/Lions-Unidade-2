#Requisitos
----------------------------------------------------------------------------
Cadastro de usuário:
    
    - Deve ser adicionado o nome, email e uma lista de
    telefones do usuário, o qual terá um ID gerado por meio do Timestamp

    - Ao adicionar um novo numero de telefone ao usuario, o numero deverá 
    ser inserido apenas por numeros e ter um total de 11 digitos 

    - Exibir mensagem de erro em caso de numero de telefone com quantidade 
    diferente de 11 digitos ou algum caracter que nao seja numero.

    - Não permitir o cadastro de usuário com e-mail duplicado.

    - Exibir mensagem de erro em caso de e-mail duplicado.
----------------------------------------------------------------------------
Listagem de usuários:
    - Exibir mensagem de erro caso não exista nenhum usuario cadastrado ainda.

    - O sistema deve listar todos os usuários com suas informações.

    - Telefones devem ser exibidos como uma lista associada.
----------------------------------------------------------------------------
Atualização de usuário:
    - Exibir mensagem de erro caso não exista nenhum usuario cadastrado ainda.

    - O usuário pode atualizar o nome, o e-mail ou adicionar ou
    remover um telefone associado.

    - O usuário a ser atualizado deve ser selecionado pelo ID.

    - Caso nao exista ninguem cadastrado com o ID inserido, mostrar mensagem de erro.

    - Exibir mensagem de erro em caso de numero de telefone com quantidade 
    diferente de 11 digitos ou algum caracter que nao seja numero.

    - Alterando um numero ja cadastrado em um usuario, esse numero que sera substituido deverá
     ser inserido com todas as "pontuações" (paranteses, travessão e espaços).

    - Ao atualizar o e-mail, deve garantir o novo não está em uso.

    - Exibir mensagem de erro se o novo e-mail já estiver em uso.

    - Mostrar qual informacao do usuario acabou de ser atualizada.
----------------------------------------------------------------------------
Remoção de contato

    - Exibir mensagem de erro caso não exista nenhum usuario cadastrado ainda.

    - Permitir a remoção de um contato especificando um ID

    - Solicitar mensagem de confirmação antes de proceder