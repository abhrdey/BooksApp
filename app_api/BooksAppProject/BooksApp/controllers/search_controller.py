
from ..common import utils
from ..models import Books
import requests, json

def fetch_search_data(request):
    query_params = fetch_query_params(request)
    prefix = fetch_search_prefix(query_params)
    index = fetch_pagination_index(query_params)
    url = utils.fetch_custom_search_url(prefix,index)
    headers = {
        "Content-Type": "application/json",
        "accept": "application/json"
    }
    response = requests.get(url, headers=headers)
    search_results = json.loads(response.content.decode('utf-8'))
    # searched results should not be updated in db directly; instead selected 
    # searched results should be updated, which is handled in metadata_controller file
    #update_books_db(search_results["items"])
    return search_results["items"]

# The below method (update_books_db) is temporary and should be replaced by an async call to update the db 
#     with searched results
def update_books_db(results):
    for book_info in results:
        book = Books(
            cache_id=book_info["cacheId"],
            title=book_info["title"],
            kind=book_info["kind"],
            snippet=book_info["snippet"],
            display_link=book_info["displayLink"],
            link=book_info["link"],
            image_link=book_info["pagemap"]["cse_image"][0]["src"],
            thumbnail_link=book_info["pagemap"]["cse_thumbnail"][0]["src"],
            formatted_url=book_info["formattedUrl"]
        )
        book.save()

def fetch_query_params(request):
    query_params = request.query_params
    return query_params

def fetch_search_prefix(query_params):
    # query_params = request.query_params
    prefix = query_params["data"]
    return prefix

def fetch_pagination_index(query_params):
    index = query_params["start"]
    return index