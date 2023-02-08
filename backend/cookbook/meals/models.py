from django.contrib.auth.models import User
from django.db import models
from django.db.models import ForeignKey

# Create your models here.
class Meal(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(blank=True, null=True)
    recipe = models.TextField()
    is_published = models.BooleanField(default=False)
    category = ForeignKey('Category', on_delete=models.CASCADE, null=True)
    user = ForeignKey(User, verbose_name='User', on_delete= models.CASCADE)
    difficulty = ForeignKey('Difficulty', on_delete=models.PROTECT, null=True)
    ingridients = models.ManyToManyField('Ingridient')
    ico = models.CharField(max_length=500, blank=True, null=True)


class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name


class CategoryIngridients(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name


class Difficulty(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name


class Ingridient(models.Model):
    name = models.CharField(max_length=100, db_index=True)
    category = ForeignKey('CategoryIngridients', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name

class CookBookUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    ingridients = models.ManyToManyField('Ingridient')

