# Como executar o projeto

## Front-end (React)

Abra um terminal na pasta principal do projeto:

```bash
npm install
npm run dev
```

O sistema estará disponível em:

```txt
http://localhost:5173
```

---

## Back-end (Django)

Abra outro terminal e acesse:

```bash
cd backend
```

Crie e ative o ambiente virtual:

```bash
python -m venv venv
```

Windows:

```bash
.\venv\Scripts\activate
```

Instale as dependências:

```bash
pip install django django-cors-headers
```

Execute as migrações:

```bash
python manage.py makemigrations
python manage.py migrate
```

Inicie o servidor:

```bash
python manage.py runserver
```

O back-end estará disponível em:

```txt
http://127.0.0.1:8000
```

---

## Organização do Back-end

Atualmente o projeto possui os seguintes apps:

```txt
backend/
├── autenticacao/
├── usuarios/
└── config/
```

### autenticação

Responsável pelas funcionalidades relacionadas ao processo de login do sistema.

Atualmente disponibiliza o endpoint:

```txt
/api/login/
```

### usuários

Responsável pelas funcionalidades relacionadas ao gerenciamento de usuários do sistema.

As funcionalidades de cadastro, listagem e demais operações de usuários serão implementadas neste módulo.

### config

Responsável pelas configurações gerais do projeto Django, registro de aplicativos instalados e roteamento principal da API.

---

## Usuário de teste

```txt
Email: admin@email.com
Senha: 123456
```

---

## Objetivo atual

Validar a integração entre Front-end (React), Back-end (Django) e banco de dados SQLite através de uma arquitetura modular, permitindo a evolução independente dos módulos de autenticação e gerenciamento de usuários.

---

## Observações

A implementação atual possui caráter acadêmico e de prova de conceito.

Neste momento ainda não estão implementados:

* Hash de senha;
* JWT;
* Refresh Token;
* Recuperação de senha;
* Controle avançado de permissões;
* Perfis de acesso;
* Auditoria de usuários.

Essas funcionalidades poderão ser adicionadas em etapas futuras conforme a evolução do projeto.
