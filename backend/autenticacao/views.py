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

    from django.http import JsonResponse

def dashboard(request):

    return JsonResponse({
        "cards": {
            "examesConcluidos": 120,
            "aguardandoAnalise": 75,
            "laudosGerados": 56
        },

        "statusExames": [
            {
                "name": "Processados Corretamente",
                "value": 45,
                "color": "#43a047"
            },
            {
                "name": "Aguardando Revisão",
                "value": 25,
                "color": "#fbc02d"
            },
            {
                "name": "Laudos Gerados",
                "value": 15,
                "color": "#64b5f6"
            },
            {
                "name": "Não Processados Corretamente",
                "value": 15,
                "color": "#ef5350"
            }
        ],

        "examesPorDia": [
            {"name": "Seg", "valor": 58, "color": "#43a047"},
            {"name": "Ter", "valor": 81, "color": "#43a047"},
            {"name": "Qua", "valor": 68, "color": "#fbc02d"},
            {"name": "Qui", "valor": 15, "color": "#ef5350"},
            {"name": "Sex", "valor": 62, "color": "#43a047"},
            {"name": "Sáb", "valor": 63, "color": "#43a047"},
            {"name": "Dom", "valor": 57, "color": "#43a047"}
        ],

        "tiposExames": [
            {"name": "Biópsia", "valor": 115, "color": "#43a047"},
            {"name": "Citopatologia", "valor": 198, "color": "#5c9ce6"},
            {"name": "Imuno-histoq.", "valor": 142, "color": "#fbc02d"},
            {"name": "Congelação", "valor": 75, "color": "#f57c00"},
            {"name": "Revisão de lâmina", "valor": 105, "color": "#a7f3d0"},
            {"name": "Peça cirúrgica", "valor": 125, "color": "#e07160"}
        ],

        "alertas": [
            {
                "id": 1,
                "text": "Exames não processados corretamente",
                "count": 12,
                "color": "red"
            },
            {
                "id": 2,
                "text": "Pacientes que não retiraram os exames",
                "count": 8,
                "color": "yellow"
            },
            {
                "id": 3,
                "text": "Aguardando análise IA e revisão médica",
                "count": 4,
                "color": "orange"
            },
            {
                "id": 4,
                "text": "Exames em processamento",
                "count": 15,
                "color": "blue"
            }
        ]
    })


#>>
#>> Este endpoint ainda é uma versão simples para estudo.
#>> A senha está sendo comparada diretamente apenas para validar o fluxo inicial.
#>> Em uma versão real, o correto seria usar hash de senha e autenticação segura.
