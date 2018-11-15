from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import json

@api_view()
def booksSearch(request):
    query_params = request.query_params
    data = query_params['data']
    print(data)
    #Process the fetched data
    headers = {
        "Content-Type": "application/json",
        "accept": "application/json"
    }
    payload = {
        "data": data
    }
    #response = requests.post("http://localhost:8000/booksApp/process", data=payload, headers=headers)
    response = requests.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyA5Aww2skiRhibwtTf_4kuTMSFUQllvW1I&cx=017714800442706151557:rwda5h6xs80&q={}".format(data), headers=headers)
    response_content = json.loads(response.content.decode('utf-8'))
    print(response_content)
    return Response(response_content['items'])

@api_view(['GET', 'POST'])
def processSearchPayload(request):
    data = request.data
    print("Post request data: {}".format(data))
    return Response(data)
