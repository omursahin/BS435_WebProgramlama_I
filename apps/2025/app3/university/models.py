from django.db import models

# Create your models here.
class University(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "Üniversite"
        verbose_name_plural = "Üniversiteler"