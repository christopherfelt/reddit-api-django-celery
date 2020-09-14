from django.db import models


class Songs(models.Model):
    youtube_id = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    post_created_string = models.CharField(max_length=255)
    post_score = models.IntegerField()
    upvote_ratio = models.DecimalField(max_digits=3, decimal_places=2)