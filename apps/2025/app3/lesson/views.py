from django.shortcuts import render
from django.views.generic import CreateView
from rest_framework import viewsets, permissions, generics
from rest_framework.generics import DestroyAPIView, ListCreateAPIView
from rest_framework.response import Response

from lesson.models import Lesson
from lesson.serializers import LessonSerializer
from university.models import University
from university.serializers import UniversitySerializer


# Create your views here.
class LessonViewSet(ListCreateAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

class LessonDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return Response({'detail': 'Method Not Allowed'})
