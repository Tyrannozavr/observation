from django.urls import path
from .views import *


urlpatterns = [
    path('', index, name='index'),
    path('authenticate/', auth_user, name='authenticate'),
    path('table/', table, name='table'),
    path('chart/', chart, name='chart'),
    path('count_chart/', count_chart, name='count_chart'),
    path('confirm/', confirm, name='confirm'),
    path('filter/', filter, name='filter'),
    path('detail/<int:ai>/', detail, name='detail'),
    path('detail/<int:ai>/chart/', detail_chart, name='detail_chart'),
    path('detail/<int:ai>/table/', detail_table, name='detail_table'),
    path('detail_count/', detail_count, name='detail_count'),
    path('detail_filter/', detail_filter, name='detail_filter'),
    path('count_error/', count_error_double, name='count_error'),
    path('archive/', archive, name='archive'),
    ]