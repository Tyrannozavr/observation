from django.shortcuts import render, redirect
from time import time
from .models import *
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
time = time()



def available_model(request, Cmn=True):
    if Cmn:
        models = {'Cmn001': Obj1Cmn,
         'Cmn002': Obj2Cmn}
    else:
        models = {'Cmn001': Obj1Ai,
                  'Cmn002': Obj2Ai}

    if request.user.is_staff:
        user = request.session.get('user', 'Cmn001')
    else:
        user = request.user.username
    # print(models[user])
    return models[user]

def count_error(ai, model=Obj1Ai):
    return model.objects.filter(id_ai=ai, err__gt=0, sts=1).count()

@login_required(login_url='authenticate/')
def count_error_double(request):
    ai = request.GET.get('ai', False)
    errors = int(count_error(ai))
    return JsonResponse({'errors': errors})

@login_required(login_url='authenticate/')
def index(request):
    if request.POST:
        if bool(request.POST.get('logout', False)):
            logout(request)
            return redirect('authenticate/')
        if request.user.is_staff and request.POST.get('user', False):
            request.session['user'] = request.POST.get('user')
    check_user = request.session.get('user', None)
    users = User.objects.filter(is_staff=False)
    available_model(request)
    model = Obj1Ai
    sensors =set(model.objects.values_list('id_ai', flat=True))
    errors = (count_error(ai, model) for ai in sensors)
    sensors_errors = list(zip(sensors, errors))
    return render(request, 'tables/index.html', {'now': time, 'sensors_errors': sensors_errors, 'users': users, 'check_user': check_user})

def auth_user(request):
    if request.POST:
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')
    return render(request, 'authenticate/auth-signin.html')


@login_required(login_url='authenticate/')
def table(request):
    sorted = bool(request.GET.get('sorted', True))
    model = Obj1Ai
    if sorted:
        data = model.objects.filter(err__gt=0, sts=1).order_by('-datain')[:20]
    else:
        data = model.objects.filter(err__gt=0).order_by('-datain')[:20]
    return render(request, 'tables/table.html', {'data': data})


@login_required(login_url='authenticate/')
def chart(request):
    model = Obj1Cmn
    limit = 240
    if request.session.get('filter', False):
        limit = request.session['filter']
    # limit = 10
    values = model.objects.order_by('-date').values_list('date', flat=True)[:limit]
    values = [i.strftime('%d %B %H:%M') for i in values]
    titles = [field.verbose_name for field in model._meta.get_fields()][5:]
    data = {
        'values': values,
    }
    for field in model._meta.get_fields()[5:]:
        data[field.verbose_name] = list(model.objects.order_by('-date').values_list(field.verbose_name, flat=True)[:limit])
    data['count'] = len(titles)
    data['titles'] = titles
    return JsonResponse(data)

@login_required(login_url='authenticate/')
def confirm(request):
    model = Obj1Ai
    id = request.GET.get('id')
    obj = model.objects.get(id=id)
    obj.sts = 2
    obj.save()
    return redirect('/')


@login_required(login_url='authenticate/')
def filter(request):
    request.session['ai'] = request.GET.get('ai')
    return redirect('/')


@login_required(login_url='authenticate/')
def count_chart(request):
    request.session['filter'] = int(request.GET.get('count', None))
    return redirect('/')


@login_required(login_url='authenticate/')
def detail(request, ai):
    now = time
    model = Obj1Ai
    filters =set(model.objects.values_list('id_ai', flat=True))
    sensors =set(model.objects.values_list('id_ai', flat=True))
    errors = (count_error(ai, model) for ai in sensors)
    sensors_errors = list(zip(sensors, errors))
    return render(request, 'tables/detail.html', {'now': now, 'filters': filters, 'sensors_errors': sensors_errors})


@login_required(login_url='authenticate/')
def detail_chart(request, ai):
    model = Obj1Ai
    limit = 240
    if request.session.get('detail_count', False):
        limit = request.session['detail_count']
    values = model.objects.filter(id_ai=ai).order_by('-datain').values_list('datain', flat=True)[:limit]
    values = [i.strftime('%d %B %H:%M') for i in values]
    data = {
     'values': values,
        'mode': list(model.objects.filter(id_ai=ai).order_by('datain').values_list('mode', flat=True)[:limit]),
        'aimean': list(model.objects.filter(id_ai=ai).order_by('datain').values_list('aimean', flat=True)[:limit]),
        'statmin': list(model.objects.filter(id_ai=ai).order_by('datain').values_list('statmin', flat=True)[:limit]),
        'statmax': list(model.objects.filter(id_ai=ai).order_by('datain').values_list('statmax', flat=True)[:limit]),
        'mlmin': list(model.objects.filter(id_ai=ai).order_by('datain').values_list('mlmin', flat=True)[:limit]),
        'mlmax': list(model.objects.filter(id_ai=ai).order_by('datain').values_list('mlmax', flat=True)[:limit]),
        'err': list(model.objects.filter(id_ai=ai).order_by('datain').values_list('err', flat=True)[:limit]),
    }
    return JsonResponse(data)

@login_required(login_url='authenticate/')
def detail_count(request):
    request.session['detail_count'] = int(request.GET.get('detail_count'))
    return redirect('/')


@login_required(login_url='authenticate/')
def detail_filter(request):
    request.session['detail_filter'] = int(request.GET.get('ai'))
    return redirect('/')

@login_required(login_url='authenticate/')
def detail_table(request, ai):
    model = Obj1Ai
    if ai and ai != 'None':
        data = model.objects.filter(err__gt=0, sts=1, id_ai=ai).order_by('-datain')[:20]
    else:
        data = model.objects.filter(err__gt=0, sts=1).order_by('-datain')[:20]
    return render(request, 'tables/table.html', {'data': data})

@login_required(login_url='authenticate/')
def archive(request):
    now = time
    model = Obj1Ai
    sensors =set(model.objects.values_list('id_ai', flat=True))
    errors = (count_error(ai, model) for ai in sensors)
    sensors_errors = list(zip(sensors, errors))
    return render(request, 'tables/archive.html', {'now': now, 'sensors_errors': sensors_errors})
