
from ..constants import urls, constants
import json

def fetch_custom_search_url(prefix):
    base_url = urls.CUSTOM_SEARCH_URL
    query_params = fetch_custom_search_query_params()
    api_key = query_params["api_key"]
    search_engine_id = query_params["search_engine_id"]
    return create_custom_search_url(base_url, api_key, search_engine_id, prefix)

def create_custom_search_url(base_url, api_key, search_engine_id, search_prefix):
    return "{}?key={}&cx={}&q={}".format(base_url,api_key,search_engine_id,search_prefix)


def fetch_custom_search_query_params():
    with open('{}/client_secret.json'.format(constants.APP_NAME)) as json_file:
        json_data = json.load(json_file)
        return json_data