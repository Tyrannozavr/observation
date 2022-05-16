from django.shortcuts import render, redirect
from time import time
from .models import Obj1Cmn, Obj1Ai
from django.http import JsonResponse
time = time()

def count_error(ai, model=Obj1Ai):
    return model.objects.filter(id_ai=ai, err__gt=0, sts=1).count()

def count_error_double(request):
    ai = request.GET.get('ai', False)
    errors = int(count_error(ai))
    # print(errors)
    return JsonResponse({'errors': errors})

def index(request):
    model = Obj1Ai
    sensors =set(model.objects.values_list('id_ai', flat=True))
    errors = (count_error(ai, model) for ai in sensors)
    sensors_errors = list(zip(sensors, errors))
    return render(request, 'tables/index.html', {'now': time, 'sensors_errors': sensors_errors})

def table(request):
    model = Obj1Ai
    data = model.objects.filter(err__gt=0, sts=1).order_by('-datain')[:20]
    return render(request, 'tables/table.html', {'data': data})


def chart(request):
    model = Obj1Cmn
    limit = 240
    if request.session.get('filter', False):
        limit = request.session['filter']
    values = model.objects.values_list('date', flat=True)[:limit]
    values = [i.strftime('%d %B %H:%M') for i in values]
    data = {
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
    return JsonResponse(data)

def confirm(request):
    model = Obj1Ai
    id = request.GET.get('id')
    obj = model.objects.get(id=id)
    obj.sts = 2
    obj.save()
    return redirect('/')

def filter(request):
    request.session['ai'] = request.GET.get('ai')
    return redirect('/')

def count_chart(request):
    request.session['filter'] = int(request.GET.get('count', None))
    return redirect('/')


def detail(request, ai):
    now = time
    model = Obj1Ai
    filters =set(model.objects.values_list('id_ai', flat=True))
    # sensor = request.session.get('detail_filter', 'udefinded')
    sensors =set(model.objects.values_list('id_ai', flat=True))
    errors = (count_error(ai, model) for ai in sensors)
    sensors_errors = list(zip(sensors, errors))
    return render(request, 'tables/detail.html', {'now': now, 'filters': filters, 'sensors_errors': sensors_errors})


def detail_chart(request, ai):
    model = Obj1Ai
    limit = 240
    if request.session.get('detail_count', False):
        limit = request.session['detail_count']
    # ai = request.session.get('detail_filter', False)
    values = model.objects.filter(id_ai=ai).values_list('datain', flat=True)[:limit]
    values = [i.strftime('%d %B %H:%M') for i in values]
    data = {
     'values': values,
        'mode': list(model.objects.filter(id_ai=ai).values_list('mode', flat=True)[:limit]),
        'aimean': list(model.objects.filter(id_ai=ai).values_list('aimean', flat=True)[:limit]),
        'statmin': list(model.objects.filter(id_ai=ai).values_list('statmin', flat=True)[:limit]),
        'statmax': list(model.objects.filter(id_ai=ai).values_list('statmax', flat=True)[:limit]),
        'mlmin': list(model.objects.filter(id_ai=ai).values_list('mlmin', flat=True)[:limit]),
        'mlmax': list(model.objects.filter(id_ai=ai).values_list('mlmax', flat=True)[:limit]),
        'err': list(model.objects.filter(id_ai=ai).values_list('err', flat=True)[:limit]),
    }
    return JsonResponse(data)

def detail_count(request):
    request.session['detail_count'] = int(request.GET.get('detail_count'))
    return redirect('/')

def detail_filter(request):
    request.session['detail_filter'] = int(request.GET.get('ai'))
    return redirect('/')

def detail_table(request, ai):
    model = Obj1Ai
    # ai = request.session.get('ai', False)
    if ai and ai != 'None':
        data = model.objects.filter(err__gt=0, sts=1, id_ai=ai).order_by('-datain')[:20]
    else:
        data = model.objects.filter(err__gt=0, sts=1).order_by('-datain')[:20]
    return render(request, 'tables/table.html', {'data': data})

