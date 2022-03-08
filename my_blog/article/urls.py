from django.urls import path
from . import views

# namespace
app_name = 'article'

urlpatterns = [
    path('article-list/', views.article_list, name='article_list'),
    path('article-detail/<str:id>/', views.article_detail, name='article_detail'),
]
