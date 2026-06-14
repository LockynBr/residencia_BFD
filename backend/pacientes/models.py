# pacientes/models.py

from django.db import models


class Paciente(models.Model):
    nome_completo = models.CharField(max_length=150)

    cpf = models.CharField(
        max_length=14,
        unique=True
    )

    data_nascimento = models.DateField()

    sexo_biologico = models.CharField(
        max_length=20
    )

    telefone = models.CharField(max_length=20)

    email = models.EmailField()

    logradouro = models.CharField(max_length=150)

    numero = models.CharField(max_length=20)

    complemento = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    cep = models.CharField(max_length=10)

    bairro = models.CharField(max_length=100)

    cidade = models.CharField(max_length=100)

    estado = models.CharField(max_length=2)

    hospital_clinica = models.CharField(
        max_length=150,
        blank=True,
        null=True
    )

    medico_solicitante = models.CharField(
        max_length=150,
        blank=True,
        null=True
    )

    crm = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )

    data_exame = models.DateField(
        blank=True,
        null=True
    )

    tipo_exame = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    observacoes = models.TextField(
        blank=True,
        null=True
    )

    alergias = models.TextField(
        blank=True,
        null=True
    )

    criado_em = models.DateTimeField(
        auto_now_add=True
    )

    atualizado_em = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.nome_completo