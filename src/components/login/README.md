# Login Module

## Visão Geral

O módulo **Login** é responsável pela autenticação dos usuários no sistema Diag Helper.

Atualmente o fluxo está integrado com:

```text
React
   ↓
Django REST API
   ↓
SQLite
```

O módulo realiza:

* Captura de credenciais.
* Persistência opcional do usuário.
* Comunicação com o backend.
* Tratamento de autenticação.
* Redirecionamento para áreas protegidas.

---

# Estrutura

```text
Login/
├── LoginCard.jsx
├── LoginHeader.jsx
└── README.md
```

---

# Arquitetura

```text
LoginHeader
      ↓
LoginCard
      ↓
Input
Button
      ↓
API Django
      ↓
SQLite
```

---

# Componentes

## LoginCard.jsx

### Responsabilidade

Componente principal da autenticação.

Responsável por:

* Capturar usuário.
* Capturar senha.
* Controlar exibição da senha.
* Persistir usuário localmente.
* Enviar credenciais ao backend.
* Redirecionar após autenticação.

---

## Estados

### Email

```js
const [email, setEmail] = useState("");
```

Armazena o e-mail informado.

---

### Senha

```js
const [password, setPassword] = useState("");
```

Armazena a senha digitada.

---

### Lembrar Usuário

```js
const [rememberUser, setRememberUser] = useState(false);
```

Controla a persistência do usuário.

---

### Exibir Senha

```js
const [showPassword, setShowPassword] = useState(false);
```

Controla a visibilidade da senha.

---

# Hooks Utilizados

## useState

Utilizado para gerenciamento dos estados locais.

---

## useEffect

Responsável por recuperar usuários previamente salvos.

```js
useEffect(() => {
  const savedUser =
    localStorage.getItem("rememberedUser");

  if (savedUser) {
    setEmail(savedUser);
    setRememberUser(true);
  }
}, []);
```

---

## useNavigate

Utilizado para navegação após autenticação.

```js
navigate("/dashboard");
```

---

# Fluxo de Autenticação

## Fluxo Atual

```text
Usuário
    ↓
React Login
    ↓
Fetch
    ↓
API Django
    ↓
SQLite
    ↓
Resposta JSON
    ↓
Dashboard
```

---

## Processo

### 1 - Captura dos dados

O usuário informa:

* E-mail
* Senha

---

### 2 - Persistência opcional

Caso a opção "Lembrar usuário" esteja marcada:

```js
localStorage.setItem(
  "rememberedUser",
  email
);
```

---

### 3 - Requisição HTTP

O React envia uma requisição POST para:

```http
POST /api/login/
```

---

### Payload enviado

```json
{
  "email": "usuario@email.com",
  "senha": "123456"
}
```

---

### 4 - Processamento Backend

O Django:

1. Recebe os dados.
2. Consulta o banco SQLite.
3. Valida as credenciais.
4. Retorna uma resposta JSON.

---

### Exemplo de sucesso

```json
{
  "sucesso": true,
  "usuario": {
    "id": 1,
    "nome": "Administrador"
  }
}
```

---

### Exemplo de erro

```json
{
  "sucesso": false,
  "mensagem": "Credenciais inválidas"
}
```

---

### 5 - Navegação

Após autenticação:

```js
navigate("/dashboard");
```

---

# Tratamento de Erros

## Credenciais inválidas

```js
alert(dados.mensagem);
```

---

## Servidor indisponível

```js
catch (erro)
```

Exibe:

```text
Não foi possível conectar ao servidor.
```

---

# LoginHeader.jsx

## Responsabilidade

Componente responsável pela identidade visual da tela de autenticação.

---

## Elementos

### Logo

Área destinada à identidade visual do sistema.

---

### Nome do Sistema

```text
NomeSistema
```

---

### Subtítulo

```text
Diagnóstico
```

---

# Dependências

## React

* useState
* useEffect

---

## React Router DOM

* useNavigate

---

## Lucide React

Ícones utilizados:

* UserRound
* Lock
* Eye
* EyeOff

---

## UI Components

Dependências internas:

```text
Input
Button
```

---

# Evolução do Projeto

## Versão Inicial

Fluxo totalmente simulado.

```text
Login
   ↓
Dashboard
```

Não existia validação real.

---

## Versão Atual

Fluxo integrado ao backend.

```text
Login
   ↓
React
   ↓
Django
   ↓
SQLite
   ↓
Dashboard
```

Validação real de credenciais.

---

# Melhorias Futuras

## JWT Authentication

Substituir autenticação simples por:

```text
Access Token
Refresh Token
```

---

## Protected Routes

Proteção de rotas autenticadas.

---

## Recuperação de Senha

Implementar fluxo completo de recuperação.

---

## Controle de Sessão

Logout automático por expiração.

---

## Perfis de Acesso

* Admin
* Médico
* Recepção

---

# Status Atual

Implementado:

* Login funcional
* Integração React + Django
* Consulta SQLite
* Persistência de usuário
* Exibição/Ocultação de senha
* Tratamento de erros
* Redirecionamento pós-login

```
```
