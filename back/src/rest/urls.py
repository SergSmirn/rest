from django.contrib import admin
from django.urls import path, include
from cats import views as cats_views
from accounts import views as accounts_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cats/', cats_views.cats_list),
    path('cats/<int:pk>/', cats_views.cats_detail),
    path('signup/', accounts_views.create_user),
    path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    path('test/', accounts_views.test),
]
