from django.db import models

from department.models import Department


# Create your models here.
class Lesson(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.department.name} - {self.code} - {self.name}"