from django.db import models
from django.contrib.auth.models import User


class ActivityLog(models.Model):
    type = models.CharField(max_length=64)
    logged_user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    fromuser = models.ForeignKey(User, null=True, blank=True, related_name="activitylogs_withfromuser", on_delete=models.SET_NULL)
    jsondata = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return '%s / %s / %s' % (
            self.type,
            self.logged_user,
            self.created_at,
        )


class Computer(models.Model):
    marca = models.CharField(max_length=64)
    modelo = models.CharField(max_length=64)
    ram = models.IntegerField()
    disk = models.IntegerField()
    ssd = models.IntegerField()

    def to_dict_json(self):
        return {
            'id': self.id,
            'marca': self.marca,
            'ram': self.ram,
            'disk': self.disk,
            'ssd': self.ssd
        }

    def __str__(self):
        _str = self.marca + " " + self.modelo + " " + str(self.ram) + "gb RAM " + str(self.ssd) + "gb SSD " + str(self.disk) + "gb HD"
        return _str

    class Meta:
        verbose_name = "Computadore"

class Permission(models.Model):
    description = models.CharField(max_length=256)
    name = models.CharField(max_length=64)

    def to_dict_json(self):
        return {
            'id': self.id,
            'description': self.description,
            'name': self.name
        }
    
    def __str__(self):
        _str = self.name
        return _str

    class Meta:
        verbose_name = "Permissõe"

class Software(models.Model):
    name = models.CharField(max_length=64)
    version = models.CharField(max_length=6)
    
    def to_dict_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'version': self.version
        }
        
    def __str__(self):
        _str = self.name
        return _str

    class Meta:
        verbose_name = "Software"
    
class Group(models.Model):
    name = models.CharField(max_length=64)
    permissions = models.ManyToManyField(Permission)
    softwares = models.ManyToManyField(Software)

    def __str__(self):
        _str = self.name
        return _str

    class Meta:
        verbose_name = "Grupo"


class Employee(models.Model):
    name = models.CharField(max_length=64)
    slack = models.CharField(max_length=64)
    buser_email = models.CharField(max_length=64)
    softwares = models.ManyToManyField(Software)
    computer = models.OneToOneField(Computer, on_delete=models.CASCADE)
    group = models.ManyToManyField(Group)
    permissions = models.ManyToManyField(Permission)

    def __str__(self):
        _str = self.name
        return _str

    class Meta:
        verbose_name = "Empregado"


