
from ..models import Books
from datetime import datetime

def fetch_recent_books(request):
    books = Books.objects.all()[:3]
    print(books)
    books_list = []
    for book in books:
        book_dict = {}
        book_dict["id"] = book.cache_id
        book_dict["title"] = book.title
        book_dict["kind"] = book.kind
        book_dict["snippet"] = book.snippet
        book_dict["display_link"] = book.display_link
        book_dict["link"] = book.link
        book_dict["image_link"] = book.image_link
        book_dict["thumbnail_link"] = book.thumbnail_link
        book_dict["formatted_url"] = book.formatted_url

        books_list.append(book_dict)
    
    return books_list

