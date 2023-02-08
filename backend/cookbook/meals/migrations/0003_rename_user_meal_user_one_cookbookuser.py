# Generated by Django 4.1.6 on 2023-02-03 23:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('meals', '0002_alter_ingridient_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='meal',
            old_name='user',
            new_name='user_one',
        ),
        migrations.CreateModel(
            name='CookBookUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ingridients', models.ManyToManyField(to='meals.ingridient')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
