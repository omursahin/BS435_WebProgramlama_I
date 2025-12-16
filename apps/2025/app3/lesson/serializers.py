from rest_framework import serializers

from lesson.models import Lesson
from university.models import University


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'
