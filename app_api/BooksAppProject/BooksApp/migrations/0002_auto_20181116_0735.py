# Generated by Django 2.1.3 on 2018-11-16 07:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BooksApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='books',
            name='title',
            field=models.TextField(),
        ),
    ]
