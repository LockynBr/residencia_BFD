from django.db import models


class Usuario(models.Model):
    nome = models.CharField(max_length=100)

    cpf = models.CharField(
        max_length=14,
        unique=True,
        blank=True,
        null=True
    )

    telefone = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )

    email = models.EmailField(unique=True)

    username = models.CharField(
        max_length=50,
        unique=True,
        blank=True,
        null=True
    )

    senha = models.CharField(max_length=255)

    tipo_usuario = models.CharField(
        max_length=20,
        default="reception"
    )

    status = models.CharField(
        max_length=20,
        default="active"
    )

    crm = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )

    crm_uf = models.CharField(
        max_length=2,
        blank=True,
        null=True
    )

    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome