from django.shortcuts import render
from django.views.generic import CreateView
from rest_framework import viewsets, permissions, generics
from rest_framework.generics import DestroyAPIView, ListCreateAPIView
from rest_framework.response import Response

from university.models import University
from university.serializers import UniversitySerializer


# Create your views here.
class UniversityViewSet(ListCreateAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

class UniversityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return Response({'detail': 'Method Not Allowed'})
