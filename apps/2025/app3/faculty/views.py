from rest_framework import viewsets, permissions
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from faculty.models import Faculty
from faculty.serializers import FacultySerializer


# Create your views here.
class FacultyViewSet(ListCreateAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

class FacultyDetail(RetrieveUpdateDestroyAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )