# Sidebar Module

## Visão Geral

O módulo **Sidebar** é responsável pela navegação principal do sistema.

Sua implementação foi desenvolvida para suportar:

* Sidebar expansível e recolhível.
* Navegação baseada em rotas.
* Submenus hierárquicos.
* Estrutura escalável para múltiplos perfis de acesso.
* Separação entre menus principais e menus secundários.

---

# Estrutura

```text
Sidebar/
├── Sidebar.jsx
├── SidebarHeader.jsx
├── SidebarMenu.jsx
├── SidebarItem.jsx
├── SidebarSubmenu.jsx
├── SidebarMainData.js
├── SidebarFooterData.js
└── README.md
```

---

# Arquitetura

```text
Sidebar
│
├── SidebarHeader
│
├── SidebarMenu (Main)
│   ├── SidebarItem
│   └── SidebarSubmenu
│
└── SidebarMenu (Footer)
    └── SidebarItem
```

---

# Componentes

## Sidebar.jsx

### Responsabilidade

Componente principal responsável por controlar o estado global da barra lateral.

### Estados

| Estado    | Tipo          | Descrição                          |
| --------- | ------------- | ---------------------------------- |
| collapsed | boolean       | Define se a sidebar está recolhida |
| openMenu  | string | null | Controla qual submenu está aberto  |

### Hooks Utilizados

#### useState

Controle dos estados:

```js
const [collapsed, setCollapsed] = useState(false);
const [openMenu, setOpenMenu] = useState(null);
```

#### useRef

Referência para detectar cliques externos.

```js
const sidebarRef = useRef(null);
```

#### useEffect

Fecha automaticamente a sidebar quando ocorre clique fora do componente.

---

### Responsabilidades

* Renderizar estrutura geral.
* Controlar expansão/recolhimento.
* Gerenciar submenus ativos.
* Organizar menus principais e footer.

---

## SidebarHeader.jsx

### Responsabilidade

Exibir identidade visual do sistema.

### Elementos

* Avatar/Icone do sistema.
* Nome do sistema.
* Subtítulo.

### Comportamento

Quando a sidebar é recolhida:

* Oculta textos.
* Mantém apenas o ícone visível.

---

## SidebarMenu.jsx

### Responsabilidade

Renderizar dinamicamente os itens do menu.

### Funcionamento

Percorre a lista recebida via props:

```js
items.map(...)
```

E decide automaticamente:

* SidebarItem
* SidebarSubmenu

Conforme a estrutura dos dados.

---

## SidebarItem.jsx

### Responsabilidade

Renderizar links simples.

### Dependências

* React Router DOM
* NavLink

### Funcionalidades

* Navegação.
* Destaque automático da rota ativa.
* Suporte ao estado recolhido.

### Exemplo de item

```js
{
  title: "Dashboard",
  icon: LayoutDashboard,
  path: "/dashboard"
}
```

---

## SidebarSubmenu.jsx

### Responsabilidade

Renderizar menus expansíveis.

### Funcionalidades

* Detectar rota ativa.
* Abrir e fechar submenu.
* Expandir sidebar automaticamente quando recolhida.
* Animação do indicador Chevron.

### Fluxo

1. Usuário clica no menu pai.
2. Sidebar expande (caso esteja recolhida).
3. Submenu é aberto.
4. Links filhos são exibidos.

### Verificação de rota ativa

```js
const hasActiveChild = item.children.some(
  (child) => child.path === location.pathname
);
```

---

# Estrutura dos Dados

## SidebarMainData.js

Responsável pelos menus principais.

### Menus atuais

* Dashboard
* Usuários
* Pacientes
* Diagnósticos
* Relatórios
* Sistema

### Exemplo

```js
{
  title: "Usuários",
  icon: Users,
  children: [...]
}
```

---

## SidebarFooterData.js

Responsável pelos menus secundários.

### Menus atuais

* IA
* Conta

### Objetivo

Separar funcionalidades auxiliares da navegação principal.

---

# Fluxo de Navegação

```text
Usuário
    ↓
Sidebar
    ↓
SidebarMenu
    ↓
Item ou Submenu
    ↓
React Router
    ↓
Página
```

---

# Decisões Arquiteturais

## Separação dos Dados

Os menus são definidos em arquivos próprios:

* SidebarMainData.js
* SidebarFooterData.js

Isso evita hardcode dentro dos componentes.

---

## Escalabilidade

A estrutura atual permite implementar facilmente:

* Admin
* Médico
* Recepção

Bastando filtrar os menus antes da renderização.

Exemplo:

```js
const filteredMenus = menus.filter(
  item => item.roles.includes(user.role)
);
```

---

# Melhorias Futuras

## Persistência

Salvar estado da sidebar.

```js
localStorage
```

---

## Controle por Perfil

Exibir menus de acordo com o usuário autenticado.

---

## Tooltip

Exibir descrição dos itens quando recolhida.

---

## Animações

Adicionar animações mais refinadas para abertura dos submenus.

---

## Integração com Backend

Receber permissões dinamicamente via API.

---

# Dependências

* React
* React Router DOM
* Lucide React
* Tailwind CSS

---

# Status

Versão atual implementada:

* Sidebar recolhível
* Submenus funcionais
* Rotas ativas
* Separação Main/Footer
* Estrutura preparada para RBAC (Role Based Access Control)

```
```
