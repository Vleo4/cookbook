from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Meal)
admin.site.register(Ingridient)
admin.site.register(Difficulty)
admin.site.register(Category)
admin.site.register(CategoryIngridients)
admin.site.register(CookBookUser)
