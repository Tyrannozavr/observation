from django.shortcuts import render
from time import time
from .models import Obj1Cmn, Obj1Ai
from django.http import JsonResponse
time = time()


def index(request):
    return render(request, 'tables/index.html', {'now': time})


'id_obj 	id_ai 	datain 	mode 	aimax 	aimean 	aimin 	statmin 	statmax 	mlmin 	mlmax 	error 	confirm'
def table(request):
    model = Obj1Ai
    data = model.objects.all()[:20]
    return render(request, 'tables/table.html', {'data': data})


def chart(request):
    model = Obj1Cmn
    limited = 10

    values = model.objects.values_list('date', flat=True)[:limited]
    values = [i.strftime('%d %B %H:%M') for i in values]
    data = {
     # 'values': list(model.objects.values_list('date', flat=True)),
     'values': values,
        'ai1': list(model.objects.values_list('ai1', flat=True)[:limited]),
        'ai2': list(model.objects.values_list('ai2', flat=True)[:limited]),
        'ai3': list(model.objects.values_list('ai3', flat=True)[:limited]),
        'ai4': list(model.objects.values_list('ai4', flat=True)[:limited]),
        'ai5': list(model.objects.values_list('ai5', flat=True)[:limited]),
        'ai6': list(model.objects.values_list('ai6', flat=True)[:limited]),
        'ai7': list(model.objects.values_list('ai7', flat=True)[:limited]),
        'ai8': list(model.objects.values_list('ai8', flat=True)[:limited]),
        'ai9': list(model.objects.values_list('ai9', flat=True)[:limited]),
        'ai10': list(model.objects.values_list('ai10', flat=True)[:limited]),
    }
    # return render(request, 'tables/chart.html', {'data': data})
    return JsonResponse(data)

