


#>> Endpoint responsável pela autenticação dos usuários do módulo de usuários.

#>> O login pode ser realizado utilizando e-mail ou nome de usuário
#>> (username), desde que a senha informada esteja correta.
#>>
#>> Esta implementação foi criada para validar a integração entre
#>> frontend (React) e backend (Django) durante o desenvolvimento
#>> do sistema.

#>> Em ambiente de produção, o ideal é utilizar autenticação segura
#>> com hash de senhas, tokens e controle adequado de sessões.



import json

from django.db.models import Q
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from usuarios.models import Usuario


@csrf_exempt
def login_usuario(request):
    #>> endpoint simples de autenticação para testar integração React >> Django

    if request.method != "POST":

        return JsonResponse({
            "sucesso": False,
            "mensagem": "Este endpoint aceita apenas POST."
        }, status=405)

    dados = json.loads(request.body)

    login = dados.get("email")
    senha = dados.get("senha")

    usuario = Usuario.objects.filter(
        Q(email=login) | Q(username=login),
        senha=senha
    ).first()

    if not usuario:

        return JsonResponse({
            "sucesso": False,
            "mensagem": "Usuário ou senha inválidos."
        }, status=401)

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


