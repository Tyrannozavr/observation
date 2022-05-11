from django.urls import path
from .views import index
from django.shortcuts import render

def test(request):
    return render(request, 'test.html')

def double(request):
    return render(request, 'double.html')

urlpatterns = [
    path('', index, name='index'),
    path('test/', test, name='test'),
    path('double/', double, name='double'),
]