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

Instale as dependências (incluindo as de segurança):

```bash
pip install django django-cors-headers python-dotenv
```

### Configuração de Segurança Local (.env)
Antes de rodar o banco de dados, você precisa configurar o seu cofre local:

1. Copie o arquivo `.env.example` e renomeie a cópia para `.env`.

2. Preencha as variáveis dentro dele com as chaves fornecidas pela equipe:
   ```env
   SECRET_KEY=cole_a_chave_aqui
   DEBUG=True
   ```

Execute as migrações para gerar o banco de dados blindado (com UUIDs):

```bash
python manage.py makemigrations
python manage.py migrate
```

### Criação do Usuário de Teste (Hash Seguro)
Como o banco de dados agora utiliza senhas criptografadas, crie o usuário de testes inicial rodando o console interativo:
```bash
python manage.py shell
```
Dentro do console, cole o código abaixo e aperte Enter:
```python
from usuarios.models import Usuario
from django.contrib.auth.hashers import make_password
Usuario.objects.create(nome="Admin Teste", email="admin@email.com", senha=make_password("123456"), username="admin")
exit()
```

Inicie o servidor:

```bash
python manage.py runserver
```

O back-end estará disponível em:

```txt
[http://127.0.0.1:8000](http://127.0.0.1:8000)
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

Validar a integração entre Front-end (React), Back-end (Django) e banco de dados SQLite através de uma arquitetura modular extremamente segura, permitindo a evolução independente dos módulos de autenticação e gerenciamento de usuários.

---

## Observações

A implementação atual possui caráter acadêmico e de prova de conceito. 

**Recursos de segurança já implementados no Back-end:**
* Ocultação de credenciais via Variáveis de Ambiente (`.env`);
* IDs de usuários blindados utilizando UUID (Prevenção de ataques IDOR);
* Criptografia irreversível de senhas com Hash (PBKDF2).

Neste momento ainda não estão implementados:
* JWT;
* Refresh Token;
* Recuperação de senha;
* Controle avançado de permissões;
* Perfis de acesso;
* Auditoria de usuários.

Essas funcionalidades poderão ser adicionadas em etapas futuras conforme a evolução do projeto.