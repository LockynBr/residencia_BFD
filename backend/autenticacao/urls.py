from django.urls import path
from .views import login_usuario, dashboard

urlpatterns = [
    path(
        'login/',
        login_usuario,
        name='login'
    ),

    path(
        'dashboard/',
        dashboard,
        name='dashboard'
    ),
]
