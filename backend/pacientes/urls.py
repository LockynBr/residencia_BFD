from django.urls import path
from .views import pacientes, paciente_detalhe

urlpatterns = [
    path('', pacientes, name='pacientes'),
    path('<int:id>/', paciente_detalhe, name='paciente_detalhe'),
]