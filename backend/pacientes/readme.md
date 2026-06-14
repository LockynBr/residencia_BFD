Módulo Pacientes

Descrição

O módulo Pacientes é responsável pelo gerenciamento dos pacientes do sistema, permitindo o cadastro, consulta, atualização e exclusão de registros através de uma API REST desenvolvida com Django.

Este módulo implementa as operações básicas de CRUD (Create, Read, Update e Delete), servindo como base para o gerenciamento dos dados clínicos e cadastrais dos pacientes.

Página Inicial da API

Ao acessar a raiz da aplicação:

GET /

o sistema retorna uma resposta amigável indicando que a API está disponível e quais módulos estão expostos.

Exemplo:
{
    "projeto": "Residência BFD",
    "versao": "1.0",
    "status": "online",
    "endpoints": {
        "autenticacao": "/api/",
        "usuarios": "/api/usuarios/",
        "pacientes": "/api/pacientes/",
        "admin": "/admin/"
    }
}

Funcionalidades:
Cadastro de pacientes
Consulta de paciente por ID
Listagem de pacientes
Atualização de dados cadastrais
Exclusão de pacientes
Retorno de dados em formato JSON
Integração com frontend React
API RESTful
Arquitetura

Fluxo simplificado da aplicação:

Cliente (Frontend/Postman)
            ↓
          URLs
            ↓
          Views
            ↓
          Models
            ↓
      Banco de Dados
            ↓
       JsonResponse

Estrutura do Módulo
pacientes/
├── migrations/
├── __init__.py
├── admin.py
├── apps.py
├── models.py
├── urls.py
├── views.py
└── tests.py

Modelo de Dados:

Paciente
Campo	Tipo
nome_completo	CharField
cpf	CharField (Único)
data_nascimento	DateField
sexo_biologico	CharField
telefone	CharField
email	EmailField
logradouro	CharField
numero	CharField
complemento	CharField
cep	CharField
bairro	CharField
cidade	CharField
estado	CharField
hospital_clinica	CharField
medico_solicitante	CharField
crm	CharField
data_exame	DateField
tipo_exame	CharField
observacoes	TextField
alergias	TextField
criado_em	DateTimeField
atualizado_em	DateTimeField
Endpoints Disponíveis
Listar Pacientes
GET /api/pacientes/

Resposta
{
    "sucesso": true,
    "pacientes": []
}

Buscar Paciente por ID:

GET /api/pacientes/{id}/
Exemplo
GET /api/pacientes/1/
Cadastrar Paciente
POST /api/pacientes/

Exemplo de Body
{
  "nomeCompleto": "Maria Silva",
  "cpf": "12345678900",
  "dataNascimento": "1990-01-10",
  "sexoBiologico": "Feminino",
  "telefone": "81999999999",
  "email": "maria@email.com",
  "logradouro": "Rua A",
  "numero": "100",
  "complemento": "",
  "cep": "54700-000",
  "bairro": "Centro",
  "cidade": "Recife",
  "estado": "PE"
}

Atualizar Paciente:
PUT /api/pacientes/{id}/
Exemplo
{
  "telefone": "81888888888",
  "cidade": "Jaboatão dos Guararapes"
}

Excluir Paciente:
DELETE /api/pacientes/{id}/
Decisões de Implementação

Durante o desenvolvimento do módulo foram adotadas as seguintes decisões:

Serialização Centralizada

Foi criada a função:

paciente_to_dict()

para transformar objetos da model Paciente em dicionários JSON reutilizáveis.

Benefícios:

Evita repetição de código.
Facilita manutenção.
Mantém padronização das respostas.
CPF Único

O campo CPF foi definido com restrição de unicidade:

cpf = models.CharField(
    max_length=14,
    unique=True
)

Impedindo o cadastro de pacientes duplicados.

Respostas Padronizadas

Todas as respostas da API seguem o padrão:

Sucesso
{
    "sucesso": true
}
Erro
{
    "sucesso": false,
    "erro": "Mensagem de erro"
}
Operações CRUD
Operação	Método HTTP
Criar	POST
Listar	GET
Buscar	GET
Atualizar	PUT
Excluir	DELETE


Tecnologias Utilizadas
Python 3
Django
SQLite
JSON
Postman
Git
GitHub
Autor

Luciano Rodrigues

Projeto desenvolvido durante a Residência BFD com foco na construção de APIs REST utilizando Django e boas práticas de desenvolvimento backend.