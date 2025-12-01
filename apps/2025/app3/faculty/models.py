from django.db import models


# Create your models here.
class Faculty(models.Model):
    name = models.CharField(max_length=100)
    university = models.ForeignKey('university.University', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "Fakülte"
        verbose_name_plural = "Fakülteler"