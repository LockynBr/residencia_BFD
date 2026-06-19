# """
# ==============================================================================
# Módulo de Usuários - Views
# ==============================================================================

# Este arquivo concentra as regras de negócio relacionadas exclusivamente
# ao módulo de usuários do sistema.

# Responsabilidades:
# - Receber dados de cadastro enviados pelo frontend;
# - Validar informações básicas do usuário;
# - Criar novos usuários no banco de dados;
# - Consultar usuários cadastrados;
# - Retornar respostas em formato JSON para consumo do frontend.

# Observação:
# A comunicação entre frontend e backend referente ao módulo de usuários
# deve ser centralizada neste arquivo. Funcionalidades pertencentes a
# outros módulos devem permanecer em seus respectivos arquivos, mantendo
# a organização do projeto e a separação de responsabilidades.

# """

# import json

# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt

# # Importamos a ferramenta nativa do Django que funciona como um "triturador de senhas"
# from django.contrib.auth.hashers import make_password

# from .models import Usuario


# @csrf_exempt
# def usuarios_view(request):

#     if request.method == "GET":
#         usuarios = Usuario.objects.all().values(
#             "id",
#             "nome",
#             "cpf",
#             "telefone",
#             "email",
#             "username",
#             "tipo_usuario",
#             "status",
#             "crm",
#             "crm_uf",
#             "criado_em",
#         )

#         return JsonResponse({
#             "sucesso": True,
#             "usuarios": list(usuarios)
#         })

#     if request.method == "POST":
#         dados = json.loads(request.body)

#         # ==================================================================
#         # BLINDAGEM DE SENHA (FASE 3)
#         # Pegamos a senha "limpa" que veio do frontend e passamos pelo triturador.
#         # Se a senha existir, ela vira um código irreversível.
#         # ==================================================================
#         senha_pura = dados.get("password")
#         senha_criptografada = make_password(senha_pura) if senha_pura else None

#         usuario = Usuario.objects.create(
#             nome=dados.get("fullName"),
#             cpf=dados.get("cpf"),
#             telefone=dados.get("phone"),
#             email=dados.get("email"),
#             username=dados.get("username"),
#             senha=senha_criptografada,  # <- Aqui salvamos a senha blindada no banco!
#             tipo_usuario=dados.get("role"),
#             status=dados.get("status"),
#             crm=dados.get("crm"),
#             crm_uf=dados.get("crmUf"),
#         )

#         return JsonResponse({
#             "sucesso": True,
#             "mensagem": "Usuário cadastrado com sucesso.",
#             "usuario": {
#                 "id": usuario.id,
#                 "nome": usuario.nome,
#                 "email": usuario.email,
#                 "username": usuario.username,
#                 "tipo_usuario": usuario.tipo_usuario,
#                 "status": usuario.status,
#             }
#         })

#     return JsonResponse(
#         {"sucesso": False, "mensagem": "Método não permitido."},
#         status=405
#     )

# @csrf_exempt
# def usuario_detalhe_view(request, usuario_id):

#     try:
#         usuario = Usuario.objects.get(id=usuario_id)
#     except Usuario.DoesNotExist:
#         return JsonResponse({
#             "sucesso": False,
#             "mensagem": "Usuário não encontrado."
#         }, status=404)

#     if request.method == "GET":
#         return JsonResponse({
#             "sucesso": True,
#             "usuario": {
#                 "id": usuario.id,
#                 "nome": usuario.nome,
#                 "cpf": usuario.cpf,
#                 "telefone": usuario.telefone,
#                 "email": usuario.email,
#                 "username": usuario.username,
#                 "tipo_usuario": usuario.tipo_usuario,
#                 "status": usuario.status,
#                 "crm": usuario.crm,
#                 "crm_uf": usuario.crm_uf,
#             }
#         })

#     if request.method == "PUT":
#         dados = json.loads(request.body)

#         usuario.nome = dados.get("fullName", usuario.nome)
#         usuario.cpf = dados.get("cpf", usuario.cpf)
#         usuario.telefone = dados.get("phone", usuario.telefone)
#         usuario.email = dados.get("email", usuario.email)
#         usuario.username = dados.get("username", usuario.username)
#         usuario.tipo_usuario = dados.get("role", usuario.tipo_usuario)
#         usuario.status = dados.get("status", usuario.status)
#         usuario.crm = dados.get("crm", usuario.crm)
#         usuario.crm_uf = dados.get("crmUf", usuario.crm_uf)

#         senha_pura = dados.get("password")
#         if senha_pura:
#             usuario.senha = make_password(senha_pura)

#         usuario.save()

#         return JsonResponse({
#             "sucesso": True,
#             "mensagem": "Usuário atualizado com sucesso.",
#             "usuario": {
#                 "id": usuario.id,
#                 "nome": usuario.nome,
#                 "email": usuario.email,
#                 "username": usuario.username,
#                 "tipo_usuario": usuario.tipo_usuario,
#                 "status": usuario.status,
#             }
#         })

#     if request.method == "DELETE":
#         usuario.delete()

#         return JsonResponse({
#             "sucesso": True,
#             "mensagem": "Usuário excluído com sucesso."
#         })

#     return JsonResponse({
#         "sucesso": False,
#         "mensagem": "Método não permitido."
#     }, status=405)

"""
==============================================================================
Módulo de Usuários - Views
==============================================================================

Este arquivo concentra as regras de negócio relacionadas exclusivamente
ao módulo de usuários do sistema.

Responsabilidades:
- Receber dados de cadastro enviados pelo frontend;
- Validar informações básicas do usuário;
- Criar novos usuários no banco de dados;
- Consultar usuários cadastrados;
- Retornar respostas em formato JSON para consumo do frontend.

Observação:
A comunicação entre frontend e backend referente ao módulo de usuários
deve ser centralizada neste arquivo. Funcionalidades pertencentes a
outros módulos devem permanecer em seus respectivos arquivos, mantendo
a organização do projeto e a separação de responsabilidades.

"""

import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Importamos a ferramenta nativa do Django que funciona como um "triturador de senhas"
from django.contrib.auth.hashers import make_password

from .models import Usuario


@csrf_exempt
def usuarios_view(request):

    if request.method == "GET":
        usuarios = Usuario.objects.all().values(
            "id",
            "nome",
            "cpf",
            "telefone",
            "email",
            "username",
            "tipo_usuario",
            "status",
            "crm",
            "crm_uf",
            "criado_em",
        )

        return JsonResponse({
            "sucesso": True,
            "usuarios": list(usuarios)
        })

    if request.method == "POST":
        dados = json.loads(request.body)

        # ==================================================================
        # BLINDAGEM DE SENHA (FASE 3)
        # Pegamos a senha "limpa" que veio do frontend e passamos pelo triturador.
        # A senha é obrigatória no cadastro e nunca deve ser salva sem criptografia.
        # ==================================================================
        senha_pura = dados.get("password")

        if not senha_pura:
            return JsonResponse({
                "sucesso": False,
                "mensagem": "A senha é obrigatória para cadastrar usuário."
            }, status=400)

        senha_criptografada = make_password(senha_pura)

        usuario = Usuario.objects.create(
            nome=dados.get("fullName"),
            cpf=dados.get("cpf"),
            telefone=dados.get("phone"),
            email=dados.get("email"),
            username=dados.get("username"),
            senha=senha_criptografada,  # <- Aqui salvamos a senha blindada no banco!
            tipo_usuario=dados.get("role"),
            status=dados.get("status"),
            crm=dados.get("crm"),
            crm_uf=dados.get("crmUf"),
        )

        return JsonResponse({
            "sucesso": True,
            "mensagem": "Usuário cadastrado com sucesso.",
            "usuario": {
                "id": usuario.id,
                "nome": usuario.nome,
                "email": usuario.email,
                "username": usuario.username,
                "tipo_usuario": usuario.tipo_usuario,
                "status": usuario.status,
            }
        })

    return JsonResponse(
        {"sucesso": False, "mensagem": "Método não permitido."},
        status=405
    )


@csrf_exempt
def usuario_detalhe_view(request, usuario_id):

    try:
        usuario = Usuario.objects.get(id=usuario_id)
    except Usuario.DoesNotExist:
        return JsonResponse({
            "sucesso": False,
            "mensagem": "Usuário não encontrado."
        }, status=404)

    if request.method == "GET":
        return JsonResponse({
            "sucesso": True,
            "usuario": {
                "id": usuario.id,
                "nome": usuario.nome,
                "cpf": usuario.cpf,
                "telefone": usuario.telefone,
                "email": usuario.email,
                "username": usuario.username,
                "tipo_usuario": usuario.tipo_usuario,
                "status": usuario.status,
                "crm": usuario.crm,
                "crm_uf": usuario.crm_uf,
            }
        })

    if request.method == "PUT":
        dados = json.loads(request.body)

        usuario.nome = dados.get("fullName", usuario.nome)
        usuario.cpf = dados.get("cpf", usuario.cpf)
        usuario.telefone = dados.get("phone", usuario.telefone)
        usuario.email = dados.get("email", usuario.email)
        usuario.username = dados.get("username", usuario.username)
        usuario.tipo_usuario = dados.get("role", usuario.tipo_usuario)
        usuario.status = dados.get("status", usuario.status)
        usuario.crm = dados.get("crm", usuario.crm)
        usuario.crm_uf = dados.get("crmUf", usuario.crm_uf)

        senha_pura = dados.get("password")
        if senha_pura:
            usuario.senha = make_password(senha_pura)

        usuario.save()

        return JsonResponse({
            "sucesso": True,
            "mensagem": "Usuário atualizado com sucesso.",
            "usuario": {
                "id": usuario.id,
                "nome": usuario.nome,
                "email": usuario.email,
                "username": usuario.username,
                "tipo_usuario": usuario.tipo_usuario,
                "status": usuario.status,
            }
        })

    if request.method == "DELETE":
        usuario.delete()

        return JsonResponse({
            "sucesso": True,
            "mensagem": "Usuário excluído com sucesso."
        })

    return JsonResponse({
        "sucesso": False,
        "mensagem": "Método não permitido."
    }, status=405)