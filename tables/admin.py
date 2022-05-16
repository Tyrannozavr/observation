from django.contrib import admin
from .models import *


@admin.register(Obj1Ai)
class Obj1AiAdmin(admin.ModelAdmin):
    list_filter = ['datain']
    ordering = ['-datain']

@admin.register(Obj2Ai)
class Obj2AiAdmin(admin.ModelAdmin):
    pass

@admin.register(Obj1Cmn)
class Obj1CmnAdmin(admin.ModelAdmin):
    pass

@admin.register(Obj2Cmn)
class Obj2CmnAdmin(admin.ModelAdmin):
    pass

@admin.register(Objects)
class ObjectAdmin(admin.ModelAdmin):
    pass

@admin.register(Sensor)
class SensorAdmin(admin.ModelAdmin):
    pass