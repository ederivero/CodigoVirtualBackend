from django.urls import path
from .views import TipoCanchasView, TipoCanchaView, CanchasView

urlpatterns = [
    path('tipoCancha',TipoCanchasView.as_view(), name="TipoCanchas"),
    path('tipoCancha/<int:tipoCanchaId>', TipoCanchaView.as_view()),
    path('cancha', CanchasView.as_view()),
]