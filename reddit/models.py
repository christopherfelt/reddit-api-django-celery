from django.db import models
from datetime import datetime

class Songs(models.Model):
    youtube_id = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    post_created_string = models.CharField(max_length=255)
    post_score = models.IntegerField()
    upvote_ratio = models.DecimalField(max_digits=3, decimal_places=2)
    update_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name + " (" + self.update_on.strftime("%H:%M:%S") + ")" 