from django.shortcuts import render
from time import time
from .models import Obj1Cmn, Obj1Ai
from django.http import JsonResponse
time = time()


def index(request):
    return render(request, 'tables/index.html', {'now': time})

def table(request):
    model = Obj1Ai
    data = model.objects.all()
    list = Obj1Cmn.objects.values_list('ai1', flat=True)
    return render(request, 'tables/table.html', {'data': data, 'list': list})


def chart(request):
    model = Obj1Cmn

    values = model.objects.values_list('date', flat=True)
    values = [i.strftime('%d %B %H:%M') for i in values]
    data = {
     # 'values': list(model.objects.values_list('date', flat=True)),
     'values': values,
        'ai1': list(model.objects.values_list('ai1', flat=True)),
        'ai2': list(model.objects.values_list('ai2', flat=True)),
        'ai3': list(model.objects.values_list('ai3', flat=True)),
        'ai4': list(model.objects.values_list('ai4', flat=True)),
        'ai5': list(model.objects.values_list('ai5', flat=True)),
        'ai6': list(model.objects.values_list('ai6', flat=True)),
        'ai7': list(model.objects.values_list('ai7', flat=True)),
        'ai8': list(model.objects.values_list('ai8', flat=True)),
        'ai9': list(model.objects.values_list('ai9', flat=True)),
        'ai10': list(model.objects.values_list('ai10', flat=True)),
    }
    # return render(request, 'tables/chart.html', {'data': data})
    return JsonResponse(data)

