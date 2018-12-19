from django.db import models
from datetime import datetime

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
    updated_time = models.DateTimeField(default=datetime.now())

class Account(models.Model):
    account_id = models.CharField(max_length=50)
    account_name = models.CharField(max_length=20)
    account_key = models.TextField()
    account_secret = models.TextField()
    account_token = models.TextField()
    
class UserProfile(models.Model):
    user_first_name = models.CharField(max_length=10)
    user_last_name = models.CharField(max_length=10)
    user_email = models.TextField()
    user_full_name = models.CharField(max_length=20)
    user_account = models.ForeignKey(Account, on_delete=models.CASCADE)
    