# UI Module

## Visão Geral

A pasta **UI** concentra os componentes reutilizáveis da interface do sistema Diag Helper.

Seu objetivo é garantir:

* Consistência visual.
* Reutilização de código.
* Padronização da experiência do usuário.
* Facilidade de manutenção.
* Escalabilidade da interface.

---

# Estrutura

```text
ui/
├── Button.jsx
├── Checkbox.jsx
├── Input.jsx
├── LinkButton.jsx
├── Select.jsx
└── README.md
```

---

# Arquitetura

```text
Pages
   ↓
Features
   ↓
UI Components
```

Exemplos:

```text
Login
   ↓
Input
Button

Users
   ↓
Input
Select
Button

Patients
   ↓
Input
Button
```

---

# Princípios

## Reutilização

Componentes devem ser utilizados em qualquer módulo do sistema.

---

## Responsabilidade Única

Cada componente possui uma responsabilidade específica.

---

## Configuração por Props

Comportamentos e estilos são controlados através de propriedades.

---

## Consistência Visual

Todos os componentes utilizam a paleta definida em:

```css
:root
```

Utilizando:

```css
--color-green-500
--color-green-700
--color-green-800
--color-neutral-100
```

---

# Button.jsx

## Responsabilidade

Renderizar botões padronizados da aplicação.

---

## Props

| Prop      | Tipo     | Descrição           |
| --------- | -------- | ------------------- |
| children  | node     | Conteúdo do botão   |
| type      | string   | Tipo HTML           |
| variant   | string   | Variante visual     |
| disabled  | boolean  | Estado desabilitado |
| onClick   | function | Evento de clique    |
| className | string   | Classes adicionais  |

---

## Variantes

### Primary

```text
Ação principal
```

Exemplo:

```jsx
<Button>
  Salvar
</Button>
```

---

### Secondary

```text
Ação secundária
```

Exemplo:

```jsx
<Button variant="secondary">
  Voltar
</Button>
```

---

### Danger

```text
Ação destrutiva
```

Exemplo:

```jsx
<Button variant="danger">
  Excluir
</Button>
```

---

## Recursos

* Hover states.
* Disabled state.
* Customização via className.

---

# Checkbox.jsx

## Responsabilidade

Renderizar campos de seleção binária.

---

## Props

| Prop     | Tipo     |
| -------- | -------- |
| id       | string   |
| label    | string   |
| checked  | boolean  |
| onChange | function |

---

## Exemplo

```jsx
<Checkbox
  id="remember"
  label="Lembrar usuário"
  checked={remember}
  onChange={handleChange}
/>
```

---

# Input.jsx

## Responsabilidade

Campo de entrada reutilizável.

---

## Funcionalidades

* Labels.
* Placeholders.
* Ícones à esquerda.
* Ícones à direita.
* Suporte para senha.
* Suporte para alternar visibilidade.

---

## Props

| Prop             | Tipo      |
| ---------------- | --------- |
| label            | string    |
| type             | string    |
| placeholder      | string    |
| value            | string    |
| onChange         | function  |
| icon             | Component |
| rightIcon        | Component |
| onRightIconClick | function  |

---

## Exemplo Simples

```jsx
<Input
  label="Nome"
  value={name}
  onChange={handleChange}
/>
```

---

## Exemplo com Ícone

```jsx
<Input
  icon={UserRound}
  label="Usuário"
/>
```

---

## Exemplo com Senha

```jsx
<Input
  type="password"
  rightIcon={Eye}
  onRightIconClick={togglePassword}
/>
```

---

## Recursos

### LeftIcon

Exibe ícone à esquerda.

### RightIcon

Exibe ícone interativo à direita.

### Accessibility

Possui:

```html
aria-label
```

para interação com leitores de tela.

---

# LinkButton.jsx

## Responsabilidade

Renderizar ações visuais semelhantes a links.

---

## Uso Recomendado

* Esqueceu a senha.
* Reenviar código.
* Ações secundárias.

---

## Exemplo

```jsx
<LinkButton
  onClick={handleForgotPassword}
>
  Esqueceu a senha?
</LinkButton>
```

---

# Select.jsx

## Responsabilidade

Renderizar listas suspensas reutilizáveis.

---

## Props

| Prop     | Tipo     |
| -------- | -------- |
| label    | string   |
| value    | string   |
| onChange | function |
| children | options  |

---

## Exemplo

```jsx
<Select
  label="Perfil"
  value={role}
  onChange={handleChange}
>
  <option value="admin">
    Administrador
  </option>
</Select>
```

---

## Recursos

* Estilo consistente.
* Estados de foco.
* Integração com formulários.

---

# Dependências

## React

Componentes funcionais.

---

## TailwindCSS

Responsável pela estilização.

---

## CSS Variables

Paleta centralizada.

Exemplos:

```css
--color-green-500
--color-green-700
--color-green-800
```

---

# Convenções

## Componentes Presentacionais

Os componentes da pasta UI não devem conter regras de negócio.

Exemplo correto:

```jsx
<Input
  value={name}
  onChange={handleChange}
/>
```

---

Exemplo incorreto:

```jsx
<Input
  onChange={() => salvarUsuario()}
 />
```

---

## Independência

Componentes devem funcionar em qualquer módulo.

---

## Reutilização

Evitar duplicação de elementos visuais.

---

# Melhorias Futuras

## Loading Button

Adicionar estado visual de carregamento.

```jsx
<Button loading>
  Salvando...
</Button>
```

---

## Input Mask

Suporte nativo para máscaras.

---

## Validation States

Estados visuais:

* Success
* Warning
* Error

---

## TextArea

Novo componente.

---

## Modal

Sistema de modais reutilizável.

---

## Toast

Sistema global de notificações.

---

## DataTable

Tabela reutilizável.

---

# Status Atual

Implementado:

* Button
* Checkbox
* Input
* LinkButton
* Select

Estrutura pronta para evoluir para um Design System completo.

```
```
