from django.urls import path
from .views import *


urlpatterns = [
    path('', index, name='index'),
    path('table/', table, name='table'),
    path('chart/', chart, name='chart'),
    path('count_chart/', count_chart, name='count_chart'),
    path('confirm/', confirm, name='confirm'),
    path('filter/', filter, name='filter'),
    path('detail/', detail, name='detail'),
    path('detail_chart/', detail_chart, name='detail_chart'),
    path('detail_count/', detail_count, name='detail_count'),
    path('detail_filter/', detail_filter, name='detail_filter'),
    ]