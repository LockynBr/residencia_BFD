# pacientes/admin.py

from django.contrib import admin
from .models import Paciente


@admin.register(Paciente)
class PacienteAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "nome_completo",
        "cpf",
        "telefone",
        "cidade",
        "estado",
    )

    search_fields = (
        "nome_completo",
        "cpf",
    )

    list_filter = (
        "estado",
        "sexo_biologico",
    )