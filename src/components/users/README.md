# Users Module

## Visão Geral

O módulo **Users** é responsável pelo cadastro e gerenciamento de usuários do sistema Diag Helper.

Sua arquitetura foi construída utilizando composição de componentes, permitindo escalabilidade, reutilização e manutenção simplificada.

---

# Estrutura

```text
Users/
├── UserForm.jsx
├── UserPersonalSection.jsx
├── UserAccessSection.jsx
├── UserRoleSection.jsx
├── UserMedicalSection.jsx
├── UserActions.jsx
└── README.md
```

---

# Arquitetura

```text
UserForm
│
├── UserPersonalSection
│
├── UserAccessSection
│
├── UserRoleSection
│
├── UserMedicalSection
│
└── UserActions
```

---

# Objetivo

Centralizar todo o fluxo de cadastro de usuários através de um formulário único e modular.

---

# UserForm.jsx

## Responsabilidade

Componente principal responsável por:

* Gerenciar estado do formulário.
* Validar informações.
* Coordenar componentes filhos.
* Submeter dados para camada superior.

---

## Estado Inicial

```js
const initialState = {
  fullName: "",
  cpf: "",
  phone: "",

  email: "",
  confirmEmail: "",

  username: "",
  password: "",
  confirmPassword: "",

  role: "",
  status: "active",

  crm: "",
  crmUf: "",
};
```

---

## Gerenciamento de Estado

O formulário utiliza um único objeto centralizado.

```js
const [formData, setFormData] =
  useState(initialState);
```

---

## Atualização de Campos

```js
handleChange(field, value)
```

Responsável por atualizar qualquer propriedade do formulário.

---

## Validações Implementadas

### Validação de E-mail

```js
isValidEmail(formData.email)
```

---

### Confirmação de E-mail

```js
formData.email ===
formData.confirmEmail
```

---

## Fluxo de Submissão

```text
Usuário
    ↓
UserForm
    ↓
Validações
    ↓
onSubmit()
    ↓
API
```

---

# UserPersonalSection.jsx

## Responsabilidade

Gerenciar informações pessoais do usuário.

---

## Campos

### Nome Completo

```text
Nome Completo
```

---

### CPF

Utiliza máscara automática.

```js
formatCPF()
```

Formato:

```text
000.000.000-00
```

---

### Telefone

Utiliza máscara automática.

```js
formatPhone()
```

Formato:

```text
(00) 0 0000-0000
```

---

### E-mail

Campo principal.

---

### Confirmar E-mail

Campo de confirmação.

---

## Feedback Visual

Caso os e-mails sejam diferentes:

```text
Os e-mails não coincidem.
```

---

# UserAccessSection.jsx

## Responsabilidade

Gerenciar credenciais de acesso.

---

## Campos

### Usuário

Login utilizado para autenticação.

---

### Senha

Campo protegido.

```html
type="password"
```

---

### Confirmar Senha

Confirmação da senha informada.

---

# UserRoleSection.jsx

## Responsabilidade

Gerenciar permissões do usuário.

---

## Perfil

Perfis atualmente suportados:

### Administrador

```text
admin
```

Permissões totais do sistema.

---

### Médico

```text
doctor
```

Permissões clínicas.

---

### Recepção

```text
reception
```

Permissões operacionais.

---

## Status

### Ativo

```text
active
```

Usuário habilitado.

---

### Inativo

```text
inactive
```

Usuário bloqueado.

---

# UserMedicalSection.jsx

## Responsabilidade

Gerenciar dados profissionais.

---

## Renderização Condicional

A seção é exibida somente para médicos.

```js
if (formData.role !== "doctor") {
  return null;
}
```

---

## Campos

### CRM

Registro profissional.

---

### Conselho / UF

Estado do conselho médico.

Exemplos:

```text
PE
SP
RJ
MG
```

---

## Objetivo

Evitar exibição de informações irrelevantes para outros perfis.

---

# UserActions.jsx

## Responsabilidade

Executar ações do formulário.

---

## Botão Cancelar

Retorna para:

```text
/usuarios
```

---

## Botão Salvar

Submete o formulário.

```html
type="submit"
```

---

## Estado de Loading

Preparado para integração com API.

```js
disabled={loading}
```

---

# Dependências Internas

## UI Components

```text
Input
Select
Button
```

---

## Utils

### Validators

```js
isValidEmail()
```

---

### Formatters

```js
formatCPF()
formatPhone()
```

---

# Fluxo de Cadastro

```text
Preenchimento
       ↓
Dados Pessoais
       ↓
Dados de Acesso
       ↓
Permissões
       ↓
Dados Médicos (Opcional)
       ↓
Validação
       ↓
onSubmit()
       ↓
Backend
```

---

# Regras de Negócio

## Regra 01

E-mail deve ser válido.

---

## Regra 02

E-mail e confirmação devem coincidir.

---

## Regra 03

Dados médicos somente para perfil Médico.

---

## Regra 04

Todo usuário deve possuir perfil.

---

## Regra 05

Todo usuário deve possuir status.

---

# Preparação para RBAC

A estrutura atual suporta expansão para:

```text
Administrador
Médico
Recepção
```

Com possibilidade futura de:

```text
Supervisor
Auditor
Financeiro
TI
```

---

# Melhorias Futuras

## Validação de Senha

* Tamanho mínimo
* Complexidade
* Caracteres especiais

---

## Validação de CPF

Integração com algoritmo oficial.

---

## Validação de CRM

Consulta automática.

---

## Integração Backend

Persistência em banco de dados.

---

## Upload de Foto

Imagem de perfil do usuário.

---

## Edição de Usuário

Reutilização do mesmo formulário para atualização.

---

# Status Atual

Implementado:

* Cadastro modularizado
* Validação de e-mail
* Máscaras de CPF e telefone
* Controle de perfis
* Dados médicos condicionais
* Estrutura preparada para integração backend
* Arquitetura escalável e reutilizável

```
```
