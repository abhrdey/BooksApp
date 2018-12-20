from django.urls import path
from . import views

urlpatterns = [
    path('search', views.search_handler),
    path('metadata', views.metadata_handler),
    path('getBooks', views.books_handler),
    path('oauth/login', views.dbx_oauth_login_handler),
    path('oauth/callback', views.dbx_oauth_callback_handler)
] 