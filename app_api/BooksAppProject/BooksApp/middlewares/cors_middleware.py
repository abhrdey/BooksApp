
def cors_middleware(get_response):
    def middleware(request):
        print("cors middleware request")
        response = get_response(request)
        print("cors middleware response")
        return response
    return middleware
