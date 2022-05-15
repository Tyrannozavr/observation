from django.shortcuts import render, redirect
from time import time
from .models import Obj1Cmn, Obj1Ai
from django.http import JsonResponse
time = time()


def index(request):
    model = Obj1Ai
    filters =set(model.objects.values_list('id_ai', flat=True))
    return render(request, 'tables/index.html', {'now': time, 'filters': filters})

def table(request):
    model = Obj1Ai
    ai = request.session.get('ai', False)
    if ai and ai != 'None':
        data = model.objects.filter(err__gt=0, sts=1, id_ai=ai)[:20]
    else:
        data = model.objects.filter(err__gt=0, sts=1)[:20]
    return render(request, 'tables/table.html', {'data': data})


def chart(request):
    model = Obj1Cmn
    limit = 240
    if request.session.get('filter', False):
        limit = request.session['filter']
    values = model.objects.values_list('date', flat=True)[:limit]
    values = [i.strftime('%d %B %H:%M') for i in values]
    data = {
     # 'values': list(model.objects.values_list('date', flat=True)),
     'values': values,
        'ai1': list(model.objects.values_list('ai1', flat=True)[:limit]),
        'ai2': list(model.objects.values_list('ai2', flat=True)[:limit]),
        'ai3': list(model.objects.values_list('ai3', flat=True)[:limit]),
        'ai4': list(model.objects.values_list('ai4', flat=True)[:limit]),
        'ai5': list(model.objects.values_list('ai5', flat=True)[:limit]),
        'ai6': list(model.objects.values_list('ai6', flat=True)[:limit]),
        'ai7': list(model.objects.values_list('ai7', flat=True)[:limit]),
        'ai8': list(model.objects.values_list('ai8', flat=True)[:limit]),
        'ai9': list(model.objects.values_list('ai9', flat=True)[:limit]),
        'ai10': list(model.objects.values_list('ai10', flat=True)[:limit]),
    }
    # return render(request, 'tables/chart.html', {'data': data})
    return JsonResponse(data)

def set_table(request):
    request.session['filter'] = int(request.GET.get('count', None))
    return redirect('/')

def confirm(request):
    model = Obj1Ai
    id = request.GET.get('id')
    obj = model.objects.get(id=id)
    obj.sts = 2
    obj.save()
    print(obj.sts)
    return redirect('/')

def filter(request):
    request.session['ai'] = request.GET.get('ai')
    return redirect('/')
