from django.contrib import admin
from django.urls import path, include

from .views import home


urlpatterns = [

    path(
        '',
        home
    ),

    path(
        'admin/',
        admin.site.urls
    ),

    path(
        'api/',
        include('autenticacao.urls')
    ),

    path(
        'api/usuarios/',
        include('usuarios.urls')
    ),

    path(
        'api/pacientes/',
        include('pacientes.urls')
    ),

    path(
        'api/dashboard/',
        include('dashboard.urls')
    )

]
