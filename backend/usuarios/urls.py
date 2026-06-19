from django.urls import path

from .views import usuarios_view, usuario_detalhe_view


urlpatterns = [
    path(
        "",
        usuarios_view,
        name="usuarios"
    ),
    path(
        "<uuid:usuario_id>/",
        usuario_detalhe_view,
        name="usuario_detalhe"
    ),
]
# ==========================================================
# Módulo de gerenciamento de usuários
#
# Este endpoint centraliza as operações relacionadas ao
# cadastro de usuários da plataforma.

# Integração esperada:
# Front-end (React) >> API Django >> Banco SQLite

# Evoluções previstas:
# - Listagem de usuários
# - Atualização de cadastro
# - Controle de permissões por perfil
# - Regras específicas para médicos (CRM)
# ==========================================================