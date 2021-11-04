from django.contrib import admin
from django.urls import path
from mlsetapp.views import home

urlpatterns = [
    path('', home.as_view()),
]