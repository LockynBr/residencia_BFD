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
        # Se a senha existir, ela vira um código irreversível.
        # ==================================================================
        senha_pura = dados.get("password")
        senha_criptografada = make_password(senha_pura) if senha_pura else None

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