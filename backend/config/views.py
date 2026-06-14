from django.http import JsonResponse


def home(request):

    return JsonResponse({
        "projeto": "Residência BFD",
        "versao": "1.0",
        "status": "online",
        "endpoints": {
            "autenticacao": "/api/",
            "usuarios": "/api/usuarios/",
            "pacientes": "/api/pacientes/",
            "admin": "/admin/"
        }
    })