from django.shortcuts import render
from time import time
time = time()


def index(request):
    return render(request, 'tables/index.html', {'now': time})
