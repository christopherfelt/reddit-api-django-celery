from rest_framework import serializers
from .models import Songs


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = ('id', 'youtube_id', 'name', 'post_created_string', 'post_score', 'upvote_ratio', 'update_on')
