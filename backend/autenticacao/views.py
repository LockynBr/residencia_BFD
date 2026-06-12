import json

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

    email = dados.get("email")
    senha = dados.get("senha")

    usuario = Usuario.objects.filter(
        email=email,
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
            "tipo_usuario": usuario.tipo_usuario,
            "crm": usuario.crm
        }
    })


#>>
#>> Este endpoint ainda é uma versão simples para estudo.
#>> A senha está sendo comparada diretamente apenas para validar o fluxo inicial.
#>> Em uma versão real, o correto seria usar hash de senha e autenticação segura.