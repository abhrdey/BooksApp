from django.urls import path
from . import views

urlpatterns = [
    path('search', views.search_handler),
    path('metadata', views.metadata_handler)
] 