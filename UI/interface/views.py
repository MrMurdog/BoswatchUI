from django.shortcuts import render
from django.http import Http404, HttpRequest, HttpResponse, HttpResponseBadRequest
from django.template import loader

# Create your views here.

def dashboard(request):
    
    return render(request, 'dashboard.html')

def configServer(request):

    return render(request, 'config-server.html')