# Routes Module

## Visão Geral

O módulo **Routes** é responsável por definir todas as rotas da aplicação Diag Helper.

Utilizando React Router DOM, ele controla:

* Navegação entre páginas.
* Associação entre URLs e componentes.
* Aplicação de layouts compartilhados.
* Organização da estrutura de navegação.

---

# Estrutura

```text
routes/
├── AppRoutes.jsx
└── README.md
```

---

# Arquitetura

```text
App
 │
 ▼
AppRoutes
 │
 ├── Login
 │
 └── MainLayout
      │
      ├── Dashboard
      ├── Usuários
      ├── Pacientes
      ├── Diagnósticos
      ├── Relatórios
      ├── Sistema
      ├── IA
      └── Conta
```

---

# Fluxo de Navegação

```text
Usuário
    ↓
URL
    ↓
React Router
    ↓
AppRoutes
    ↓
Componente
    ↓
Renderização
```

---

# Rotas Públicas

Rotas acessíveis sem autenticação.

## Login

```http
/
```

Componente:

```jsx
<Login />
```

Objetivo:

* Autenticação do usuário.
* Entrada no sistema.

---

# Rotas Protegidas

Todas as rotas abaixo utilizam:

```jsx
<MainLayout />
```

como layout principal.

---

## Dashboard

```http
/dashboard
```

Componente:

```jsx
<Dashboard />
```

Objetivo:

* Página inicial do sistema.
* Indicadores e métricas.

---

## Usuários

### Listagem

```http
/usuarios
```

Componente:

```jsx
<Usuarios />
```

---

### Novo Usuário

```http
/usuarios/novo
```

Componente:

```jsx
<CreateUser />
```

---

## Pacientes

### Listagem

```http
/pacientes
```

Componente:

```jsx
<Pacientes />
```

---

### Cadastro

```http
/pacientes/cadastro
```

Componente:

```jsx
<CadastroPaciente />
```

---

## Diagnósticos

```http
/diagnosticos
```

Componente:

```jsx
<Diagnosticos />
```

---

## Relatórios

```http
/relatorios
```

Componente:

```jsx
<Relatorios />
```

---

## Sistema

```http
/sistema
```

Componente:

```jsx
<Sistema />
```

---

## IA

```http
/ia
```

Componente:

```jsx
<IA />
```

Objetivo futuro:

* Assistente inteligente.
* Apoio à tomada de decisão.
* Automação de diagnósticos.

---

## Conta

```http
/conta
```

Componente:

```jsx
<Conta />
```

Objetivo:

* Dados do usuário.
* Configurações pessoais.

---

# Organização Atual

```text
/
│
├── dashboard
│
├── usuarios
│   └── novo
│
├── pacientes
│   └── cadastro
│
├── diagnosticos
│
├── relatorios
│
├── sistema
│
├── ia
│
└── conta
```

---

# Integração com Layout

As rotas autenticadas são agrupadas sob:

```jsx
<Route element={<MainLayout />}>
```

Benefícios:

* Sidebar única.
* Estrutura compartilhada.
* Menor duplicação de código.
* Manutenção simplificada.

---

# Integração com Sidebar

As rotas possuem correspondência direta com:

```text
SidebarMainData
SidebarFooterData
```

Exemplo:

```text
Dashboard
   ↓
/dashboard

Usuários
   ↓
/usuarios

Conta
   ↓
/conta
```

---

# Escalabilidade

A estrutura atual permite expansão para:

```text
Admin
Médico
Recepção
```

sem necessidade de alteração significativa na arquitetura.

---

# Melhorias Futuras

## Protected Routes

Criar proteção de autenticação.

Exemplo:

```jsx
<PrivateRoute>
  <Dashboard />
</PrivateRoute>
```

---

## Controle por Perfil

Exibição automática baseada em permissões.

```jsx
roles={[
  "admin",
  "doctor"
]}
```

---

## Página 404

Adicionar rota para páginas inexistentes.

```http
*
```

---

## Lazy Loading

Carregamento sob demanda.

```jsx
React.lazy()
```

---

## Code Splitting

Divisão automática dos bundles.

---

# Status Atual

Implementado:

* Rotas públicas
* Rotas autenticadas
* Integração com MainLayout
* Estrutura hierárquica
* Navegação por React Router
* Preparação para autenticação e RBAC

```
```
