from rest_framework import serializers 
from django.contrib.auth.models import User
from .models import Issue, ImageCoord, Report

class userSerializers(serializers.ModelSerializer): 
	class Meta: 
		model = User 
		fields = '__all__'

class issueSerializers(serializers.ModelSerializer):
	class Meta:
		model = Issue
		fields = '__all__'

class coordSerializers(serializers.ModelSerializer):
	class Meta:
		model = ImageCoord
		fields = '__all__'

class reportSerializers(serializers.ModelSerializer):
	class Meta:
		model = Report
		fields = '__all__'