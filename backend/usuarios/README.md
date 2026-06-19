# Módulo de Usuários

Este módulo é responsável pelo gerenciamento de usuários do sistema.

## Responsabilidades

* Listar usuários cadastrados.
* Cadastrar novos usuários.
* Buscar dados de um usuário específico ( a implementar futuramente )
* Atualizar dados cadastrais de usuários.
* Excluir usuários.
* Retornar respostas em JSON para consumo pelo frontend React.

## Endpoints

### Listar usuários

```http
GET /api/usuarios/
```

Retorna a lista de usuários cadastrados.

### Cadastrar usuário

```http
POST /api/usuarios/
```

Cria um novo usuário no banco de dados.

A senha é obrigatória no cadastro e é salva de forma criptografada utilizando `make_password`.

### Buscar usuário por ID (A implementar futuramente)

```http
GET /api/usuarios/<id>/
```

Busca os dados de um usuário específico.

O campo `id` utiliza UUID, evitando identificadores sequenciais simples.

### Atualizar usuário

```http
PUT /api/usuarios/<id>/
```

Atualiza os dados cadastrais de um usuário.

Na edição, a senha não é retornada nem exibida, pois fica armazenada em formato criptografado/hash. Caso uma nova senha seja enviada futuramente pelo frontend, ela deve continuar passando por `make_password` antes de ser salva.

### Excluir usuário

```http
DELETE /api/usuarios/<id>/
```

Remove o usuário do banco de dados.

## Segurança

* O ID do usuário utiliza UUID.
* A senha não é salva em texto puro.
* A senha é processada com `make_password` antes de ser persistida no banco.
* O backend impede tentativa de cadastro sem senha.
* O campo de senha não é retornado nas respostas da API.

## Observações sobre senha

A senha não aparece na tela de edição porque não é possível recuperar a senha original a partir do hash armazenado.

Caso seja necessário alterar senha futuramente, o ideal é criar um fluxo específico de alteração ou redefinição de senha.

## Funcionalidades implementadas

* Cadastro de usuários.
* Listagem de usuários.
* Edição de usuários.
* Exclusão de usuários.
* Integração com frontend React.
* Tratamento para impedir cadastro sem senha.
* Preservação da criptografia de senha já implementada no projeto.

## Pontos futuros

* Implementar busca por usuário
* Avaliar fluxo próprio para alteração ou redefinição de senha.
