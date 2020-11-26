from django.contrib import admin
from .models import Profile, Issue, ImageCoord, Report

# Register your models here.
admin.site.register(Profile)
admin.site.register(Issue)
admin.site.register(ImageCoord)
admin.site.register(Report)