from django.shortcuts import render
from django.views.generic import CreateView
from rest_framework import viewsets, permissions

from university.models import University
from university.serializers import UniversitySerializer


# Create your views here.
class UniversityViewSet(viewsets.ModelViewSet):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
