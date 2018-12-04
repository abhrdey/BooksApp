from django.db import models

class Books(models.Model):
    cache_id = models.CharField(max_length=20)
    title = models.TextField()
    kind = models.CharField(max_length=25)
    snippet = models.TextField()
    display_link = models.TextField()
    link = models.TextField()
    image_link = models.TextField()
    thumbnail_link = models.TextField()
    formatted_url = models.TextField()

