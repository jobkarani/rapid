from django.shortcuts import render,redirect
from app.forms import CommentForm,ReplyForm
from .models import *
# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def careers(request):
    return render(request, 'careers.html')

def contact(request):
    return render(request, 'contact.html')

def services(request):
    return render(request, 'services.html')

def quote(request):
    return render(request, 'quote.html')

def blogs(request):
    posts = Blogs.objects.all()
    form = ReplyForm()
    if request.method == 'POST':  
        form = ReplyForm(request.POST, request.FILES)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.save()
            return redirect('blogs')
    print(posts)
    ctx= {
        "posts":posts,
        "form":form,
    }
    return render (request, 'blogs.html', ctx )

def blogDetails(request,blogs_id):
    posts = Blogs.objects.all()
    form = ReplyForm()
    blog = Blogs.objects.filter(pk = blogs_id)
    if request.method == 'POST':  
        form = ReplyForm(request.POST, request.FILES)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.save()
            return redirect('blogs')
    print(posts)
    ctx= {
        "posts":posts,
        "form":form,
        "blog":blog,
    }
    return render (request, 'blogdetails.html', ctx)

def blogDetails(request, blogs_id):
    posts = Blogs.objects.all()
    form = ReplyForm()
    blog = Blogs.objects.filter(pk = blogs_id)
    if request.method == 'POST':  
        form = ReplyForm(request.POST, request.FILES)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.save()
            return redirect('blogs')
    print(posts)
    ctx= {
        "posts":posts,
        "form":form,
        "blog":blog,
    }
    return render (request, 'blogdetails.html', ctx)

def comments(request, blogs_id):
  form = ReplyForm()
  post = Blogs.objects.filter(pk = blogs_id).first()
  if request.method == 'POST':
    form = ReplyForm(request.POST)
    if form.is_valid():
      comment = form.save(commit = False)
      comment.blog = post
      comment.save() 
  return redirect('blogDetails', blogs_id=blogs_id) 