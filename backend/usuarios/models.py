from django.db import models
import uuid  # Importamos a ferramenta nativa do Python para gerar códigos aleatórios

class Usuario(models.Model):
    
    # BLINDAGEM DE ID
    # Substitui o ID sequencial (1, 2, 3) por um código criptográfico.
    # primary_key=True: Diz que este é o identificador principal no banco.
    # default=uuid.uuid4: Gera o código aleatório automaticamente.
    # editable=False: Impede que qualquer pessoa altere esse ID depois de criado.
   
    id = models.UUIDField(
        primary_key=True, 
        default=uuid.uuid4, 
        editable=False
    )

 
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