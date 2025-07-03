from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.WelcomeScreen.as_view(), name='welcome_screen'),
    path('admin/', admin.site.urls),
    path('account/', include('account.urls')),
]