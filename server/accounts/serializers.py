from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

    def validate(self, data):

        if data['first_name']:
            for n in data['first_name']:
                if n.isdigit():
                    raise serializers.ValidationError({'error' : "firstname cannot contain numeric"})
        
        if data['last_name']:
            for n in data['last_name']:
                if n.isdigit():
                    raise serializers.ValidationError({'error' : "lastname cannot contain numeric"})
                     
        return data

    def create(self, validated_data):
        user = User.objects.create(username = validated_data['username'],email = validated_data['email'],first_name = validated_data['first_name'],last_name = validated_data['last_name'])
        user.set_password(validated_data['password'])
        user.save()
        return user