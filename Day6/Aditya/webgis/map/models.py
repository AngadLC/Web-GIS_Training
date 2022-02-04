from django.db import models


class Popup(models.Model):
    name = models.CharField(max_length=200)
    age = models.IntegerField(default=0)

    def __str__(self):
        return self.name
