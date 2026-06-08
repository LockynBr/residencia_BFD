from django.urls import path

from .views import login_usuario


urlpatterns = [

    #>> R1
    #>> autenticação de usuário

    path(
        'login/',
        login_usuario,
        name='login'
    ),

]