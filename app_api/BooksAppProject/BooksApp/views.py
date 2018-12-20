from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie
from .controllers import search_controller, metadata_controller, dbx_oauth_controller, books_controller

@api_view()
@ensure_csrf_cookie
def search_handler(request):
    results = search_controller.fetch_search_data(request)
    return Response(results["data"],results["status"])

@api_view()
@ensure_csrf_cookie
def books_handler(request):
    books_list = books_controller.fetch_recent_books(request)
    return Response(books_list,200)

@api_view(['POST'])
@ensure_csrf_cookie
def metadata_handler(request):
    metadata_controller.store_metadata(request)
    return Response(200)

@api_view()
@ensure_csrf_cookie
def dbx_oauth_login_handler(request):
    url = dbx_oauth_controller.oauth_request(request)
    return Response(url)

@api_view()
def dbx_oauth_callback_handler(request):
    code = dbx_oauth_controller.oauth_callback(request)
    return Response(code)

