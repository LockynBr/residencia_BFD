# Layouts Module

## Visão Geral

O módulo **Layouts** é responsável por definir a estrutura visual global da aplicação.

Seu objetivo é garantir consistência entre todas as páginas autenticadas do sistema.

---

# Estrutura

```text
layouts/
└── MainLayout.jsx
```

---

# MainLayout.jsx

## Responsabilidade

Componente responsável por compor a estrutura principal da aplicação após a autenticação do usuário.

Ele centraliza:

* Sidebar global.
* Área de conteúdo.
* Layout responsivo.
* Estilização base das páginas.

---

# Arquitetura

```text
MainLayout
│
├── Sidebar
│
└── Main Content
    │
    └── Outlet
        │
        ├── Dashboard
        ├── Usuários
        ├── Pacientes
        ├── Diagnósticos
        ├── Relatórios
        └── Sistema
```

---

# Fluxo de Renderização

```text
React Router
      ↓
MainLayout
      ↓
Sidebar
      ↓
Outlet
      ↓
Página Atual
```

---

# Funcionamento

O componente utiliza:

```jsx
<Outlet />
```

para renderizar dinamicamente a página correspondente à rota ativa.

---

# Estrutura Visual

```text
┌──────────────────────┬─────────────────────────────┐
│                      │                             │
│                      │                             │
│      Sidebar         │       Conteúdo Atual        │
│                      │                             │
│                      │                             │
└──────────────────────┴─────────────────────────────┘
```

---

# Componentes Utilizados

## Sidebar

Responsável pela navegação principal.

```jsx
<Sidebar />
```

---

## Outlet

Responsável por renderizar rotas filhas.

```jsx
<Outlet />
```

---

# Estilização

## Container Principal

```jsx
<div className="flex min-h-screen">
```

Características:

* Layout horizontal.
* Altura mínima da viewport.
* Estrutura flexível.

---

## Background

Gradiente global do sistema.

```css
from(--color-green-200)
via(--color-green-200)
to(--color-neutral-100)
```

Objetivo:

* Identidade visual.
* Profundidade visual.
* Consistência entre telas.

---

## Área de Conteúdo

```jsx
<main className="flex-1 p-8 overflow-auto">
```

Características:

### flex-1

Ocupa todo espaço restante após a Sidebar.

### p-8

Espaçamento padrão interno.

### overflow-auto

Permite rolagem independente do conteúdo.

---

# Integração com React Router

Exemplo:

```jsx
<Route element={<MainLayout />}>
  <Route
    path="/dashboard"
    element={<Dashboard />}
  />

  <Route
    path="/usuarios"
    element={<Users />}
  />
</Route>
```

---

# Benefícios da Arquitetura

## Reutilização

Sidebar é renderizada apenas uma vez.

---

## Escalabilidade

Novas páginas herdam automaticamente o layout.

---

## Manutenção

Alterações estruturais são feitas em um único local.

---

## Consistência

Todas as páginas seguem o mesmo padrão visual.

---

# Melhorias Futuras

## Header Global

Adicionar barra superior.

```text
Header
Sidebar
Content
```

---

## Breadcrumb

Navegação contextual.

Exemplo:

```text
Dashboard > Usuários > Novo Usuário
```

---

## Controle de Permissões

Exibição dinâmica por perfil.

* Admin
* Médico
* Recepção

---

## Tema Escuro

Suporte Dark Mode.

---

# Status Atual

Implementado:

* Sidebar global
* Área dinâmica via Outlet
* Layout responsivo
* Scroll independente
* Gradiente institucional
* Estrutura preparada para múltiplos módulos

```
```
