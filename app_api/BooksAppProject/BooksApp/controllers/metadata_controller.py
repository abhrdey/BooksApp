
# import json
from ..models import Books

def store_metadata(request):
    metadata = parse_request(request)
    # print("metadata response : ", metadata)
    payload = metadata["payload"]
    try:
        for data in payload:
            update_books_db(data)
    except Exception as ex:
        print("Exception thrown when updating books in db : {}".format(ex))
    return

def update_books_db(data):
    book = Books(
        cache_id=data["cacheId"],
        title=data["title"],
        kind=data["kind"],
        snippet=data["snippet"],
        display_link=data["displayLink"],
        link=data["link"],
        image_link=data["pagemap"]["cse_image"][0]["src"],
        thumbnail_link=data["pagemap"]["cse_thumbnail"][0]["src"],
        formatted_url=data["formattedUrl"]
    )
    book.save()

def parse_request(request):
    metadata = request.data
    return metadata