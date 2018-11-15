from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .controllers import search_controller

@api_view()
def search_handler(request):
    results = search_controller.fetch_search_data(request)
    return Response(results)
