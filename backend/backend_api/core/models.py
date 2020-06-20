from django.db import models

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from django.contrib.auth.models import User

# Ajout des coins pour chaque profile
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    coin = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.user.username} Profile'


# Ajout automatique des tokens lors de la génération d'un compte
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

class Issue(models.Model):
    title = models.CharField(max_length=100)
    instruction = models.CharField(max_length=300)
    image_height = models.IntegerField()
    image_width = models.IntegerField()
    thumbnail = models.ImageField(upload_to="thumbnail_images", default="thumbnail_images/default.jpg" ,height_field='image_height', width_field='image_width')

    def __str__(self):
        return f'{self.title} Issue'

class ImageCoord(models.Model):
    issue = models.ForeignKey(Issue, on_delete=models.CASCADE)
    x_coord = models.IntegerField()
    y_coord = models.IntegerField()
    width = models.IntegerField()
    height = models.IntegerField()

    def __str__(self):
        return f'x:{self.x_coord} y:{self.y_coord}'

class Report(models.Model):
    issue = models.ForeignKey(Issue, on_delete=models.CASCADE)
    reportMsg = models.CharField(max_length=300)

    def __str__(self):
        return f'{self.issue.title} report message'
