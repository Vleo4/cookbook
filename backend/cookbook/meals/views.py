from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from rest_framework import generics, status, filters
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.response import Response
from rest_framework.authentication import BasicAuthentication
from random import randrange, randint

from rest_framework.views import APIView

from .models import *
from .serializers import *

class MealListAPIView(generics.ListAPIView):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = (IsAuthenticated, )

class MealFromCategoryAPIView(generics.ListAPIView):
    serializer_class = MealSerializer

    def get_queryset(self):
        return Meal.objects.filter(category=self.kwargs['pk']).exclude(is_published=False)

class MealDetailAPIView(generics.RetrieveAPIView):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer

class MealCreateAPIView(generics.CreateAPIView):
    serializer_class = CreateMealSerializer
    #permission_classes = (IsAuthenticated, )
    queryset = Meal.objects.all()

class IngridientListAPIView(generics.ListAPIView):
    serializer_class = IngrigientSerializer
    queryset = Ingridient.objects.all()

class IngridientByCategoryListAPIView(generics.ListAPIView):
    serializer_class = IngrigientSerializer

    def get_queryset(self):
        return Ingridient.objects.filter(category = self.kwargs['pk'])

class IngridientDetailAPIView(generics.RetrieveAPIView):
    serializer_class = IngrigientSerializer
    queryset = Ingridient.objects.all()


class UsersMealsListAPIView(generics.ListAPIView):
    serializer_class = MealSerializer

    def get_queryset(self):
        return Meal.objects.filter(user=self.request.user.id)

class UsersIngridientsListAPIView(generics.ListAPIView):
    serializer_class = CookBookUserSerializer

    def get_queryset(self):
        return CookBookUser.objects.filter(user_id=self.request.user.id)

class CategoryListAPIView(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class CategoryAPIView(generics.RetrieveAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class IngridientCategoryListAPIView(generics.ListAPIView):
    serializer_class = IngridientCategorySerializer
    queryset = CategoryIngridients.objects.all()

class UserProfileAPIView(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)

class SortByDiffLowAPIView(generics.ListAPIView):
    serializer_class = MealSerializer

    def get_queryset(self):
        return Meal.objects.all().order_by('difficulty').exclude(is_published=False)

class SortByDiffHighAPIView(generics.ListAPIView):
    serializer_class = MealSerializer

    def get_queryset(self):
        return Meal.objects.all().order_by('-difficulty').exclude(is_published=False)


#class CraftWithUsersIngridientsListAPIView(generics.ListAPIView):
#    serializer_class = MealSerializer
#    #permission_classes = (IsAuthenticated, )
#
#    def get_queryset(self):
#        user_ingredients = CookBookUser.objects.get(user=self.request.user).ingridients.all()
#        print(user_ingredients)
#        return Meal.objects.filter(ingridients__in=user_ingredients)


class AddIngridientToUserAPIView(generics.UpdateAPIView):
    serializer_class = CookBookUserSerializer
    #permission_classes = (IsAuthenticated, )
    queryset = CookBookUser.objects.all()

class RandomMealAPIView(generics.ListAPIView):
    serializer_class = MealSerializer
    #count_meals = Meal.objects.filter(is_published=True).count()
    def get_queryset(self):
        count_meals = Meal.objects.all().count()
        return Meal.objects.filter(id = randint(1, count_meals+1))


class SearchAPIView(generics.ListCreateAPIView):
    search_fields = ['name', 'description', 'recipe']
    filter_backends = (filters.SearchFilter,)
    queryset = Meal.objects.all()
    serializer_class = MealSerializer

class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data
        })

class TestCraft(APIView):
    def post(self, request):
        ingridients_tmp = request.data['ingredients']
        ingrid = Ingridient.objects.filter(id__in=ingridients_tmp)
        queryset = Meal.objects.filter(ingridients__id__in=ingrid).distinct()
        serializer = MealSerializer(queryset, many=True)
        return Response(serializer.data)


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFTokenAPIView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, format= None):
        return Response({'success':'CSRF cookie set'})