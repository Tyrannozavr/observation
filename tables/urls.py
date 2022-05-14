from django.urls import path
from .views import *


urlpatterns = [
    path('', index, name='index'),
    path('table/', table, name='table'),
    path('chart/', chart, name='chart'),
    path('set_table/', set_table, name='set_table'),
    ]