from django.db import models


class Usuario(models.Model):

    #>> informações básicas do usuário

    nome = models.CharField(max_length=100)

    email = models.EmailField(unique=True)

    senha = models.CharField(max_length=255)

    tipo_usuario = models.CharField(
        max_length=20,
        default="usuario"
    )

    crm = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )

    criado_em = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return self.nome