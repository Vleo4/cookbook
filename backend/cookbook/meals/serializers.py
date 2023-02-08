from rest_framework import serializers
from .models import *

class MealSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    difficulty = serializers.StringRelatedField()
    #ingridients = serializers.StringRelatedField()
    user = serializers.StringRelatedField()
    class Meta:
        model = Meal
        fields = "__all__"

class CreateMealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = "__all__"

class IngrigientSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    class Meta:
        model = Ingridient
        fields = "__all__"

class CookBookUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CookBookUser
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class IngridientCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryIngridients
        fields = "__all__"

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user
