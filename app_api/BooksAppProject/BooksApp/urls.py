from django.urls import path
from . import views

urlpatterns = [
    path('search', views.booksSearch),
    path('process', views.processSearchPayload)
] 