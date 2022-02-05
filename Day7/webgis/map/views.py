from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
import json, pygeoj
from .models import Popup
from .forms import ImportGeojsonfileForm
from osgeo import ogr

def index(request):
    db_data = serializers.serialize('json', Popup.objects.all())
    if request.method == "POST":
        form = ImportGeojsonfileForm(request.POST, request.FILES)
        if form.is_valid():
            geoJson = request.FILES['import_file']
            print(geoJson)
            driver = ogr.GetDriverByName('MEMORY')
            data = json.load(geoJson)
            a = pygeoj.load(None, data)
            ds = driver.Open(geoJson, 0)
            layer = ds.GetLayer()
            feature = layer.GetFeature(0)
            for feature in a:
                coord = feature.geometry.coordinates
                gtype = feature.geometry.type

    form = ImportGeojsonfileForm()
    data = json.loads(db_data)
    context = {'data': data[1], 'form': form}
    return render(request, 'index.html', context)
