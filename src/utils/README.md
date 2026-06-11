# Utils Module

## Visão Geral

O módulo **Utils** concentra funções auxiliares reutilizáveis utilizadas em toda a aplicação.

Seu objetivo é:

* Evitar duplicação de código.
* Centralizar regras de formatação.
* Centralizar validações.
* Facilitar manutenção.

---

# Estrutura

```text
utils/
├── formatters.js
├── validators.js
└── README.md
```

---

# Arquitetura

```text
Pages
   ↓
Components
   ↓
Utils
```

Exemplo:

```text
UserForm
   ↓
formatCPF()

UserForm
   ↓
formatPhone()

Login
   ↓
isValidEmail()
```

---

# Formatters

Funções responsáveis por transformar valores para exibição.

---

## formatCPF()

### Responsabilidade

Aplicar máscara de CPF em tempo real.

---

### Entrada

```text
12345678901
```

---

### Saída

```text
123.456.789-01
```

---

### Implementação

```js
formatCPF(value)
```

---

### Utilização

```js
onChange={(e) =>
  handleChange(
    "cpf",
    formatCPF(e.target.value)
  )
}
```

---

### Regras

* Remove caracteres não numéricos.
* Aplica separadores automaticamente.
* Limita a 11 dígitos.

---

# formatPhone()

## Responsabilidade

Aplicar máscara de telefone celular.

---

### Entrada

```text
81999998888
```

---

### Saída

```text
(81) 9 9999-8888
```

---

### Implementação

```js
formatPhone(value)
```

---

### Utilização

```js
onChange={(e) =>
  handleChange(
    "phone",
    formatPhone(e.target.value)
  )
}
```

---

### Regras

* Remove caracteres inválidos.
* Adiciona DDD.
* Adiciona separadores.
* Limita tamanho máximo.

---

# Validators

Funções responsáveis por validação de dados.

---

## isValidEmail()

### Responsabilidade

Validar estrutura básica de e-mail.

---

### Implementação

```js
isValidEmail(email)
```

---

### Expressão Regular

```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

---

### Exemplos Válidos

```text
usuario@email.com

nome.sobrenome@email.com.br

admin@empresa.org
```

---

### Exemplos Inválidos

```text
usuario

usuario@

@email.com

usuario@email
```

---

### Retorno

```js
true
```

ou

```js
false
```

---

# Fluxo de Utilização

```text
Input
   ↓
Formatter
   ↓
State
   ↓
Validator
   ↓
Submit
```

---

# Dependências

Nenhuma.

As funções são puras e independentes.

---

# Benefícios

## Reutilização

Mesma regra utilizada em múltiplos módulos.

---

## Manutenção

Alteração realizada em um único local.

---

## Padronização

Todos os formulários seguem o mesmo comportamento.

---

## Testabilidade

Funções podem ser facilmente testadas de forma isolada.

---

# Melhorias Futuras

## validateCPF()

Validação oficial do CPF.

```js
validateCPF(cpf)
```

---

## validatePhone()

Validação de telefone.

```js
validatePhone(phone)
```

---

## validatePassword()

Validação de senha forte.

```js
validatePassword(password)
```

---

## formatCRM()

Formatação automática de CRM.

```js
formatCRM(crm)
```

---

## validateCRM()

Validação de registro médico.

```js
validateCRM(crm)
```

---

# Status Atual

Implementado:

* formatCPF()
* formatPhone()
* isValidEmail()

Estrutura preparada para expansão das regras de negócio e validação do sistema.

```
```
