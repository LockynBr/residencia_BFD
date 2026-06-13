

"""
==============================================================================
Módulo de Usuários - Views
==============================================================================

Este arquivo concentra as regras de negócio relacionadas exclusivamente
ao módulo de usuários do sistema.
"""

import json

from django.db.models import Q
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Importamos a ferramenta nativa do Django que "desfaz" o hash para comparar as senhas
from django.contrib.auth.hashers import check_password

from usuarios.models import Usuario


@csrf_exempt
def login_usuario(request):
    
    if request.method != "POST":
        return JsonResponse({
            "sucesso": False,
            "mensagem": "Este endpoint aceita apenas POST."
        }, status=405)

    dados = json.loads(request.body)

    login = dados.get("email")
    senha_pura = dados.get("senha")  # A senha que o usuário digitou no frontend

    # ==================================================================
    # VERIFICAÇÃO BLINDADA (FASE 3)
    # Passo 1: Buscamos o usuário apenas pelo email ou username.
    # ==================================================================
    usuario = Usuario.objects.filter(
        Q(email=login) | Q(username=login)
    ).first()

    # ==================================================================
    # Passo 2: Se o usuário não existir, ou se a senha digitada não 
    # bater com o "hash" salvo no banco, nós bloqueamos a entrada.
    # O "check_password" faz a matemática pesada com total segurança.
    # ==================================================================
    if not usuario or not check_password(senha_pura, usuario.senha):
        return JsonResponse({
            "sucesso": False,
            "mensagem": "Usuário ou senha inválidos."
        }, status=401)

    # Se passou pela barreira acima, o login é válido!
    return JsonResponse({
        "sucesso": True,
        "mensagem": "Login realizado com sucesso.",
        "usuario": {
            "nome": usuario.nome,
            "email": usuario.email,
            "username": usuario.username,
            "tipo_usuario": usuario.tipo_usuario,
            "crm": usuario.crm
        }
    })

