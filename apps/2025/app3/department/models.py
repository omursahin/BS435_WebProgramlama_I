from django.db import models

from faculty.models import Faculty


# Create your models here.
class Department(models.Model):
    name = models.CharField(max_length=100)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "Bölüm"
        verbose_name_plural = "Bölümler"