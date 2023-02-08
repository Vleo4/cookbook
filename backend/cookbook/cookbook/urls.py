"""cookbook URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.http import HttpResponse
from django.views.static import serve
from rest_framework import urls
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from cookbook import settings
from meals.views import *

from django.conf.urls.static import static

def defaultresponse(request):
    return HttpResponse("API")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', defaultresponse),
    path('api/meallist/', MealListAPIView.as_view()),
    path('api/mealbycategorylist/<int:pk>/', MealFromCategoryAPIView.as_view()),
    path('api/meal/<int:pk>/', MealDetailAPIView.as_view()),
    path('api/mealcreate/', MealCreateAPIView.as_view()),
    path('api/ingridientlist/', IngridientListAPIView.as_view()),
    path('api/ingridientbycategory/<int:pk>/', IngridientByCategoryListAPIView.as_view()),
    path('api/ingridient/<int:pk>/', IngridientDetailAPIView.as_view()),
    path('api/mealbyuser/', UsersMealsListAPIView.as_view()),
    path('api/user/', UserProfileAPIView.as_view()),
    path('api/sortmealsbylow/', SortByDiffLowAPIView.as_view()),
    path('api/sortmealsbyhigh/', SortByDiffHighAPIView.as_view()),
    path('api/changeuseringridients/<int:pk>/', AddIngridientToUserAPIView.as_view()),
    path('api/categorys/', CategoryListAPIView.as_view()),
    path('api/ingridientcategorys/', IngridientCategoryListAPIView.as_view()),
    path('api/randommeal/', RandomMealAPIView.as_view()),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('api/register/', RegisterAPI.as_view()),
    path('api/search/', SearchAPIView.as_view()),
    path('api/csrf_cookie/', GetCSRFTokenAPIView.as_view()),
    path('api/craft/', TestCraft.as_view()),
    #path('api/auth/', include('djoser.urls')),
    #re_path(r'^auth/', include('djoser.urls.authtoken')),
]