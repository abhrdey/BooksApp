
from ..common import utils
import requests, json

def fetch_search_data(request):
    prefix = fetch_search_prefix(request)
    url = utils.fetch_custom_search_url(prefix)
    headers = {
        "Content-Type": "application/json",
        "accept": "application/json"
    }
    response = requests.get(url, headers=headers)
    search_results = json.loads(response.content.decode('utf-8'))
    return search_results["items"]

def fetch_search_prefix(request):
    query_params = request.query_params
    prefix = query_params["data"]
    return prefix