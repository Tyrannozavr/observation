# Generated by Django 4.0.4 on 2022-05-10 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tables', '0005_alter_obj1ai_err_alter_obj1ai_sts_alter_obj2ai_err_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='obj1ai',
            name='err',
            field=models.CharField(choices=[('0', 'Система в норме'), ('1', 'Аварийная нижняя граница'), ('2', 'Предупредительная нижняя граница'), ('3', 'Предупредительная верхняя граница'), ('4', 'Аварийная верхняя граница')], max_length=7),
        ),
    ]
