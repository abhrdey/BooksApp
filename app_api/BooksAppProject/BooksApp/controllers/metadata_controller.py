
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
        cache_id=data["id"],
        title=data["volumeInfo"]["title"],
        kind=data["kind"],
        snippet=data["volumeInfo"]["subtitle"] if "subtitle" in data["volumeInfo"] else data["volumeInfo"]["title"] ,
        display_link=data["volumeInfo"]["canonicalVolumeLink"],
        link=data["volumeInfo"]["previewLink"],
        image_link=data["volumeInfo"]["imageLinks"]["thumbnail"],
        thumbnail_link=data["volumeInfo"]["imageLinks"]["thumbnail"],
        formatted_url=data["selfLink"]
    )
    book.save()

def parse_request(request):
    metadata = request.data
    return metadata