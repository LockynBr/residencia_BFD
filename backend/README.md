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

## Usuário de teste

```txt
Email: admin@email.com
Senha: 123456
```

---

## Observações

A autenticação atual foi implementada para validação da integração entre React, Django e SQLite.

Ainda não possui hash de senha, JWT ou mecanismos de segurança para produção.
