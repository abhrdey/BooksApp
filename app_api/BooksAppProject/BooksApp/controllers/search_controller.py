
from ..common import utils
from ..models import Books
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
    update_books_db(search_results["items"])
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

def fetch_search_prefix(request):
    query_params = request.query_params
    prefix = query_params["data"]
    return prefix