# Generated by Django 3.0.6 on 2020-05-31 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_issue_thumbnail'),
    ]

    operations = [
        migrations.AlterField(
            model_name='issue',
            name='thumbnail',
            field=models.ImageField(default='thumbnail_images/default.jpg', upload_to='thumbnail_images'),
        ),
    ]
