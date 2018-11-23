from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie
from .controllers import search_controller, metadata_controller

@api_view()
@ensure_csrf_cookie
def search_handler(request):
    results = search_controller.fetch_search_data(request)
    return Response(results["data"],results["status"])

@api_view(['POST'])
@ensure_csrf_cookie
def metadata_handler(request):
    metadata_controller.store_metadata(request)
    return Response(200)
