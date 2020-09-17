from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse, Http404

from .models import Songs
from .serializers import SongSerializer

class SongList(APIView):

    def get(self, request, format=None):
        songs = Songs.objects.all()
        serializer = SongSerializer(songs, many=True)
        return Response(serializer.data)


