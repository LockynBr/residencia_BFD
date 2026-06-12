# Módulo Dashboard

Interface central de monitoramento e análise de dados do sistema, projetada para fornecer uma visão operacional clara, em tempo real e de forma altamente modular.

## Funcionalidades

- Exibição de KPIs e métricas em tempo real.
- Monitoramento de alertas e pendências críticas operacionais.
- Análise estatística de produtividade (gráficos de barras e linhas).
- Distribuição de status de processamento (gráficos de rosca).
- Contextualização de dados através de filtros de período.
- Integração preparada para APIs em tempo real e WebSockets.

## Estrutura do Diretório

```text
Dashboard/
├── Dashboard.jsx       # Componente principal / Orquestrador
├── Cards.jsx           # Métricas de topo e controles de filtro
├── AlertsChart.jsx     # Painel de pendências e alertas
├── BarChart.jsx        # Produtividade por categoria
├── LineChart.jsx       # Volume temporal
├── StatusChart.jsx     # Distribuição percentual de status
└── README.md           # Documentação do módulo
```

## Arquitetura Visual

```text
Dashboard
│
├── Cards (Métricas de topo e controles)
│
├── AlertsChart (Painel de pendências)
│
└── Gráficos de Análise
    ├── BarChart (Produtividade por categoria)
    ├── LineChart (Volume temporal)
    └── StatusChart (Distribuição percentual)
```

## Componentes

### 1. Dashboard.jsx
Componente principal que orquestra a disposição dos widgets.
- **Responsabilidade:** Organização do layout geral em grid responsivo, centralização visual e controle de espaçamento global.

### 2. Cards.jsx
Exibição de indicadores principais (KPIs) e controles de filtragem.
- **Métricas:** Exames concluídos, Aguardando análise, Laudos gerados.
- **Funcionalidades:** Controle de filtros por período e atualização dinâmica.

### 3. AlertsChart.jsx
Painel de alertas operacionais e pendências críticas.
- **Funcionalidades:** Lista dinâmica baseada em estado, classificação por prioridade e destaque visual por cores/ícones.
- **Design:** Efeito de glassmorphism.

### 4. BarChart.jsx
Análise quantitativa por categoria de exames.
- **Tecnologia:** [Recharts](https://recharts.org)
- **Funcionalidades:** Cores dinâmicas por categoria e ajuste inteligente de labels longos no eixo X.

### 5. LineChart.jsx
Análise da evolução temporal do volume de exames.
- **Tecnologia:** [Recharts](https://recharts.org)
- **Funcionalidades:** Gráfico de linha suavizado, visualização de tendência e pontos customizados com indicação de status.

### 6. StatusChart.jsx
Distribuição percentual dos status de processamento.
- **Tecnologia:** [Recharts](https://recharts.org)
- **Funcionalidades:** Gráfico de rosca (Pie/Donut) segmentado em Processados, Aguardando, Laudos e Não processados, com legenda personalizada.

## Design System

O sistema visual utiliza um padrão consistente para manter a uniformidade:
- **Background:** bg-secondary-100/70
- **Efeito:** backdrop-blur-md
- **Interações:** Efeito de hover com elevação (hover:translate-y-[-4px]) e transições suaves.

## Tecnologias e Dependências

- [React](https://react.dev)
- [Recharts](https://recharts.org)
- [Lucide React](https://lucide.dev)
- [Tailwind CSS](https://tailwindcss.com)

## Fluxo de Dados

```text
API / Estado Global 
↓ 
Dashboard.jsx 
↓ 
Cards | Alerts | Charts 
↓ 
Renderização da Interface
```

## Arquitetura e Boas Práticas

Este módulo foi desenvolvido seguindo princípios de engenharia de software:
- **Component-Based Architecture**: Cada gráfico é um componente independente, facilitando a manutenção e reutilização.
- **Separation of Concerns**: Responsabilidades bem divididas entre orquestradores e visualizadores.
- **Interface Orientada a Dados**: Preparado para crescimento modular, filtros avançados e WebSockets para atualização contínua.
