from rest_framework import serializers
from .models import Multiplication

class MultiplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Multiplication
        fields = '__all__'
