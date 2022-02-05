from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
import json
from .models import Popup

def index(request):
    data = serializers.serialize('json', Popup.objects.all())
    data = json.loads(data)
    context = {'data': data[1]}
    return render(request, 'index.html', context)
