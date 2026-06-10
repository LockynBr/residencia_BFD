# Sistema de Diagnóstico Médico

Aplicação web desenvolvida com React e Vite para gerenciamento e acompanhamento de informações clínicas, oferecendo uma interface moderna, responsiva e intuitiva para diferentes perfis de usuários, como Médicos, Recepção e Administradores.

## Objetivo

O projeto tem como objetivo centralizar informações e processos relacionados ao ambiente clínico, proporcionando uma experiência eficiente para:

- Gestão de pacientes
- Visualização de indicadores e dashboards
- Controle de acessos por perfil
- Gerenciamento de atendimentos
- Consulta de informações clínicas
- Evolução futura para integração com APIs e serviços externos

---

## Tecnologias Utilizadas

### Frontend

- React
- Vite
- React Router DOM
- Tailwind CSS v4
- Lucide React

### Ferramentas

- VS Code
- Git
- GitHub

---

## Design System

### Paleta de Cores

| Cor | Hexadecimal |
|-------|-------|
| Verde Escuro | #1B5E3A |
| Verde Médio | #2E7D4F |
| Verde Principal | #43A46B |
| Verde Claro | #66C48A |
| Verde Suave | #A8E6C1 |
| Cinza Claro | #F2F2F2 |
| Vermelho | #E74C3C |
| Areia | #D9CAB3 |

### Tipografia

#### Manrope

Utilizada para:

- Títulos
- Indicadores
- Cabeçalhos

#### Inter

Utilizada para:

- Formulários
- Botões
- Conteúdo geral
- Sidebar

---

# Como executar o projeto

## Pré-requisitos

Instale:

- Node.js 20+
- Python 3.11+
- Git
- VS Code

Verifique as versões:

```bash
node -v
npm -v
python --version
git --version
```

---

## Clonar o repositório

```bash
git clone https://github.com/LevisgtonEustaquio/residencia_BFD.git
```

Entrar na pasta do projeto:

```bash
cd residencia_BFD
```

---

# Executando o Front-end (React + Vite)

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

O Front-end estará disponível em:

```txt
http://localhost:5173
```

---

# Executando o Back-end (Django)

Abra um novo terminal e acesse a pasta do back-end:

```bash
cd backend
```

## Criar ambiente virtual

```bash
python -m venv venv
```

## Ativar ambiente virtual

### Windows

```bash
.\venv\Scripts\activate
```

### Linux / MacOS

```bash
source venv/bin/activate
```

---

## Instalar dependências

```bash
pip install django django-cors-headers
```

---

## Executar migrações

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## Iniciar servidor Django

```bash
python manage.py runserver
```

O Back-end estará disponível em:

```txt
http://127.0.0.1:8000
```

---

# Usuário de teste

```txt
Email: admin@email.com
Senha: 123456
```

---

# Como abrir o projeto no VS Code

Abra um terminal na pasta principal do projeto e execute:

```bash
code .
```

Caso o comando não funcione:

1. Abra o VS Code
2. Pressione `Ctrl + Shift + P`
3. Digite:

```txt
Shell Command: Install 'code' command in PATH
```

4. Reinicie o terminal

Depois execute:

```bash
code .
```

---

# Scripts Disponíveis

### Front-end

Executar ambiente de desenvolvimento:

```bash
npm run dev
```

Gerar build de produção:

```bash
npm run build
```

Visualizar build localmente:

```bash
npm run preview
```

---

### Back-end

Criar migrações:

```bash
python manage.py makemigrations
```

Aplicar migrações:

```bash
python manage.py migrate
```

Executar servidor Django:

```bash
python manage.py runserver
```

---

# Observações

- A autenticação atual foi implementada para validação da integração entre React, Django e SQLite.
- O banco de dados utilizado atualmente é o SQLite.
- Ainda não foram implementados mecanismos de segurança para ambiente de produção, como:
  - Hash seguro de senhas
  - JWT Authentication
  - Refresh Tokens
  - Controle avançado de permissões
  - Rate Limiting
- O sistema encontra-se em fase de desenvolvimento e evolução contínua.
