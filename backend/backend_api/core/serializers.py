from rest_framework import serializers 
from django.contrib.auth.models import User
from .models import Issue, ImageCoord, Report, Profile

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

class profileSerializers(serializers.ModelSerializer):
	class Meta:
		model = Profile 
		fields = '__all__'
