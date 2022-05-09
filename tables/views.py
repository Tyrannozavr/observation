from django.shortcuts import render
from time import time



def index(request):
    return render(request, 'tables/index.html', {'time': time})
