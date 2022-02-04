from django.http import HttpResponse
from django.shortcuts import render
from django.core import serializers
import json
from .models import Popup



def index(request):
    data = serializers.serialize("json", Popup.objects.all())
    return HttpResponse(data)

def map(request):
    data = serializers.serialize("json", Popup.objects.all())
    data = json.loads(data)
    context = {"data": data[0]}
    return render(request, 'index.html', context)