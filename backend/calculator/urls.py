from django.urls import path
from .views import multiplication_api

# URL patterns for the API
urlpatterns = [
    path('multiplications/', multiplication_api, name='multiplication_api'),
]
