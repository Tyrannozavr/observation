from django.urls import path
from .views import index, table, chart


urlpatterns = [
    path('', index, name='index'),
    path('table/', table, name='table'),
    path('chart/', chart, name='chart'),
    ]