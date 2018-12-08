
from ..constants import constants, urls
import json, requests

def oauth_request(request):
    payload = fetch_dbx_client_secret()
    return construct_authorization_url(payload)

def oauth_callback(request):
    print("request received {}".format(request))
    query_params = request.query_params
    try:
        code = query_params['code']
        state = query_params['state']
        print(state)            
    except Exception as ex:
        print("Exception occured while fetching auth_code and auth_state {}".format(ex))
        return 401
    if not compare_dbx_state(state):
        print("Initial state and Final state after authorization are not same")
        return 401
    payload = fetch_dbx_client_secret()
    client_id = payload["token"]
    headers = {
        "Content-Type": "application/json",
        "accept": "application/json"
    }
    payload = {
        "code": code,
        "grant_type": "authorization_code",
        "redirect_uri": urls.DBX_OAUTH_CALLBACK_URL,
        "client_id": client_id,
        "client_secret": state
    }
    response = requests.post(urls.DBX_TOKEN_ENDPOINT, params=payload, headers=headers)
    try:
        query_params = json.loads(response.text)
        access_token = query_params["access_token"]
        account_id = query_params["account_id"]
    except Exception as ex:
        print("Exception thrown while fetching access_token from access_code {}".format(ex))
        return 401
    return 200    


def compare_dbx_state(final_state):
    with open('{}/client_secret.json'.format(constants.APP_NAME)) as json_file:
        json_data = json.load(json_file)
        initial_state = json_data["dbx_secret"]
        if final_state == initial_state:
            return True
        else:
            return False
    

def construct_authorization_url(payload):
    token = payload["token"]
    secret = payload["secret"]
    authorization_url = urls.DBX_AUTHORIZATION_URL
    redirect_uri = urls.DBX_OAUTH_CALLBACK_URL
    return "{}?client_id={}&response_type={}&redirect_uri={}&state={}".format(authorization_url,token,
        "code",redirect_uri,secret)
    

def fetch_dbx_client_secret():
    with open("{}/client_secret.json".format(constants.APP_NAME)) as json_file:
        json_data = json.load(json_file)
        payload = {}
        payload["token"] = json_data["dbx_key"]
        payload["secret"] = json_data["dbx_secret"]
        return payload