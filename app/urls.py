from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('careers/', views.careers, name='careers'),
    path('contact/', views.contact, name='contact'),
    path('services/', views.services, name='services'),
    path('blogs/', views.blogs, name='blogs'),
    path('blogDetails/<blogs_id>', views.blogDetails, name='blogDetails'),
    path('comments/<blogs_id>', views.comments, name='comments'),
]