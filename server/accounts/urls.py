from django.urls import path
from accounts.views import user_api, user_auth

urlpatterns = [
    path('user_auth/', user_auth.as_view()),
    # path('user_auth/<email>', user_auth.as_view()),
    path('user/', user_api.as_view()),
    # path('user/<email>', user_api.as_view()),
]
