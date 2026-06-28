from django.db import models
import uuid  # Importamos a ferramenta nativa do Python para gerar códigos aleatórios
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.utils import timezone
from django.utils.timezone import localtime

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
    
class Auditoria(models.Model): #Log de Auditoria
    ACOES = (
        ('CRIAR', 'Criar'),
        ('ATUALIZAR', 'Atualizar'),
        ('EXCLUIR', 'Excluir'),
    )
    
    usuario = models.ForeignKey('Usuario', on_delete=models.SET_NULL, null=True, blank=True)
    acao = models.CharField(max_length=15, choices=ACOES)
    tabela_afetada = models.CharField(max_length=50)
    descricao = models.TextField()
    data_hora = models.DateTimeField(default=timezone.now)

    def __str__(self):
        hora_local = localtime(self.data_hora)
        return f"[{self.acao}] {self.descricao} - em {hora_local.strftime('%d/%m/%Y %H:%M')}"



#SISTEMA DE AUDITORIA AUTOMÁTICO

@receiver(post_save, sender=Usuario)
def vigia_salvar(sender, instance, created, **kwargs):
    """
    Esta função é chamada automaticamente quando um usuário é CRIADO ou ATUALIZADO.
    - created = True quando é uma criação
    - created = False quando é uma atualização
    """
    acao_realizada = 'CRIAR' if created else 'ATUALIZAR'
    detalhes = f"O registro do usuário {instance.nome} ({instance.email}) sofreu alteração."
    
    
    usuario_logado = None
    try:
        
        import sys
        frame = sys._getframe(1)
        request = frame.f_locals.get('request')
        if request and hasattr(request, 'user') and request.user.is_authenticated:
           
            if hasattr(request.user, 'usuario'):
                usuario_logado = request.user.usuario
            else:
              
                usuario_logado = request.user
    except:
        pass
    
    # Cria o registro de auditoria
    Auditoria.objects.create(
        usuario=usuario_logado,  # Pode ser None se não conseguir pegar
        acao=acao_realizada,
        tabela_afetada='Usuario',
        descricao=detalhes
    )


@receiver(post_delete, sender=Usuario)
def vigia_excluir(sender, instance, **kwargs):
    """
    Esta função é chamada automaticamente quando um usuário é EXCLUÍDO.
    """
    detalhes = f"O registro do usuário {instance.nome} ({instance.email}) foi apagado do sistema."
    
    # Tenta pegar o usuário que está fazendo a ação (se disponível)
    usuario_logado = None
    try:
        import sys
        frame = sys._getframe(1)
        request = frame.f_locals.get('request')
        if request and hasattr(request, 'user') and request.user.is_authenticated:
            if hasattr(request.user, 'usuario'):
                usuario_logado = request.user.usuario
            else:
                usuario_logado = request.user
    except:
        pass
    
    # Cria o registro de auditoria
    Auditoria.objects.create(
        usuario=usuario_logado,  # Pode ser None se não conseguir pegar
        acao='EXCLUIR',
        tabela_afetada='Usuario',
        descricao=detalhes
    )