# pacientes/views.py

import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Paciente


def paciente_to_dict(paciente): ## O objetico dessa função é converter o objeto Paciente em um dicionário para evitar repetição de código
    return {
        "id": paciente.id,
        "nomeCompleto": paciente.nome_completo,
        "cpf": paciente.cpf,
        "dataNascimento": str(paciente.data_nascimento) if paciente.data_nascimento else None,
        "sexoBiologico": paciente.sexo_biologico,
        "telefone": paciente.telefone,
        "email": paciente.email,
        "logradouro": paciente.logradouro,
        "numero": paciente.numero,
        "complemento": paciente.complemento,
        "cep": paciente.cep,
        "bairro": paciente.bairro,
        "cidade": paciente.cidade,
        "estado": paciente.estado,
        "hospitalClinica": paciente.hospital_clinica,
        "medicoSolicitante": paciente.medico_solicitante,
        "crm": paciente.crm,
        "dataExame": str(paciente.data_exame) if paciente.data_exame else None,
        "tipoExame": paciente.tipo_exame,
        "observacoes": paciente.observacoes,
        "alergias": paciente.alergias,
        "criadoEm": paciente.criado_em.isoformat() if paciente.criado_em else None,
        "atualizadoEm": paciente.atualizado_em.isoformat() if paciente.atualizado_em else None,
    }


@csrf_exempt
def pacientes(request):

    if request.method == "GET":

        lista = [
            paciente_to_dict(paciente)
            for paciente in Paciente.objects.all()
        ]

        return JsonResponse({
            "sucesso": True,
            "pacientes": lista
        })

    elif request.method == "POST":

        try:

            body = json.loads(request.body)

            paciente = Paciente.objects.create(
                nome_completo=body.get("nomeCompleto"),
                cpf=body.get("cpf"),
                data_nascimento=body.get("dataNascimento"),
                sexo_biologico=body.get("sexoBiologico"),
                telefone=body.get("telefone"),
                email=body.get("email"),

                logradouro=body.get("logradouro"),
                numero=body.get("numero"),
                complemento=body.get("complemento"),
                cep=body.get("cep"),
                bairro=body.get("bairro"),
                cidade=body.get("cidade"),
                estado=body.get("estado"),

                hospital_clinica=body.get("hospitalClinica"),
                medico_solicitante=body.get("medicoSolicitante"),
                crm=body.get("crm"),
                data_exame=body.get("dataExame"),
                tipo_exame=body.get("tipoExame"),
                observacoes=body.get("observacoes"),
                alergias=body.get("alergias"),
            )

            return JsonResponse({
                "sucesso": True,
                "mensagem": "Paciente cadastrado com sucesso",
                "paciente": paciente_to_dict(paciente)
            })

        except Exception as e:

            return JsonResponse({
                "sucesso": False,
                "erro": str(e)
            }, status=400)

    return JsonResponse({
        "sucesso": False,
        "erro": "Método não permitido"
    }, status=405)


@csrf_exempt
def paciente_detalhe(request, id):

    try:
        paciente = Paciente.objects.get(id=id)

    except Paciente.DoesNotExist:

        return JsonResponse({
            "sucesso": False,
            "erro": "Paciente não encontrado"
        }, status=404)

    if request.method == "GET":

        return JsonResponse({
            "sucesso": True,
            "paciente": paciente_to_dict(paciente)
        })

    elif request.method == "PUT":

        try:

            body = json.loads(request.body)

            paciente.nome_completo = body.get(
                "nomeCompleto",
                paciente.nome_completo
            )

            paciente.cpf = body.get(
                "cpf",
                paciente.cpf
            )

            paciente.data_nascimento = body.get(
                "dataNascimento",
                paciente.data_nascimento
            )

            paciente.sexo_biologico = body.get(
                "sexoBiologico",
                paciente.sexo_biologico
            )

            paciente.telefone = body.get(
                "telefone",
                paciente.telefone
            )

            paciente.email = body.get(
                "email",
                paciente.email
            )

            paciente.logradouro = body.get(
                "logradouro",
                paciente.logradouro
            )

            paciente.numero = body.get(
                "numero",
                paciente.numero
            )

            paciente.complemento = body.get(
                "complemento",
                paciente.complemento
            )

            paciente.cep = body.get(
                "cep",
                paciente.cep
            )

            paciente.bairro = body.get(
                "bairro",
                paciente.bairro
            )

            paciente.cidade = body.get(
                "cidade",
                paciente.cidade
            )

            paciente.estado = body.get(
                "estado",
                paciente.estado
            )

            paciente.hospital_clinica = body.get(
                "hospitalClinica",
                paciente.hospital_clinica
            )

            paciente.medico_solicitante = body.get(
                "medicoSolicitante",
                paciente.medico_solicitante
            )

            paciente.crm = body.get(
                "crm",
                paciente.crm
            )

            paciente.data_exame = body.get(
                "dataExame",
                paciente.data_exame
            )

            paciente.tipo_exame = body.get(
                "tipoExame",
                paciente.tipo_exame
            )

            paciente.observacoes = body.get(
                "observacoes",
                paciente.observacoes
            )

            paciente.alergias = body.get(
                "alergias",
                paciente.alergias
            )

            paciente.save()

            return JsonResponse({
                "sucesso": True,
                "mensagem": "Paciente atualizado com sucesso",
                "paciente": paciente_to_dict(paciente)
            })

        except Exception as e:

            return JsonResponse({
                "sucesso": False,
                "erro": str(e)
            }, status=400)

    elif request.method == "DELETE":

        paciente.delete()

        return JsonResponse({
            "sucesso": True,
            "mensagem": "Paciente excluído com sucesso"
        })

    return JsonResponse({
        "sucesso": False,
        "erro": "Método não permitido"
    }, status=405)