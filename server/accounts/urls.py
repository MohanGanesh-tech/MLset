from django.contrib import admin
from django.urls import path
from accounts.views import user_api, user_signup

urlpatterns = [
    path('user/', user_api.as_view()),
    path('user/<email>', user_api.as_view()),
    path('user_signup/', user_signup.as_view()),
]