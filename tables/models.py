from django.db import models


class Objects(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    class Meta:
        verbose_name_plural = 'Objects'
        verbose_name = 'Object'

class Sensor(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)


class Obj1Cmn(models.Model):
    id_obj = models.ForeignKey(Objects, on_delete=models.CASCADE)
    amount = models.IntegerField()
    date = models.DateTimeField()
    mode = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai1 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai2 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai3 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai4 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai5 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai6 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai7 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai8 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai9 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai10 = models.DecimalField(max_digits=9, decimal_places=6, null=True)

class Obj1Ai(models.Model):
    id_obj = models.ForeignKey(Objects, on_delete=models.CASCADE)
    id_ai = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    datain = models.DateTimeField()
    mode = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    aimax = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    aimean = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    aimin = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    statmin = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    statmax = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    mlmin = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    mlmax = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    err = models.CharField(max_length=7, choices=(
            ('0', 'Система в норме'),
            ('1', 'Аварийная нижняя граница'),
            ('2', 'Предупредительная нижняя граница'),
            ('3', 'Предупредительная верхняя граница'),
            ('4', 'Аварийная верхняя граница'),)
    )
    sts = models.CharField(max_length=7, choices=(
           ('0', 'Система в норме'),
           ('1', 'Не подтвержден'),
           ('2', 'Подтвержден'))
    )
    dataout = models.DateTimeField()
    datacheck = models.DateTimeField()
    cmnt = models.CharField(max_length=50)

class Obj2Cmn(models.Model):
    id_obj = models.ForeignKey(Objects, on_delete=models.CASCADE)
    amount = models.IntegerField()
    date = models.DateTimeField()
    mode = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai1 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai2 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai3 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai4 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai5 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai6 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai7 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai8 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai9 = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    ai10 = models.DecimalField(max_digits=9, decimal_places=6, null=True)

class Obj2Ai(models.Model):
    id_obj = models.ForeignKey(Objects, on_delete=models.CASCADE)
    id_ai = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    datain = models.DateTimeField()
    mode = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    aimax = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    aimean = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    aimin = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    statmin = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    statmax = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    mlmin = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    mlmax = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    err = models.CharField(max_length=7, choices=(
            ('0', 'Система в норме'),
            ('1', 'Аварийная нижняя граница'),
            ('2', 'Предупредительная нижняя граница'),
            ('3', 'Предупредительная верхняя граница'),
            ('4', 'Аварийная верхняя граница'),)
    )
    sts = models.CharField(max_length=7, choices=(
           ('0', 'Система в норме'),
           ('1', 'Не подтвержден'),
           ('2', 'Подтвержден'))
    )
    dataout = models.DateTimeField()
    datacheck = models.DateTimeField()
    cmnt = models.CharField(max_length=50)