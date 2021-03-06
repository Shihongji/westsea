from django.shortcuts import render
from .models import ArticlePost
import markdown
# Create your views here.
def article_list(request):
    articles = ArticlePost.objects.all()
    context = {'articles': articles}
    return render(request, 'article/list.html', context)

def article_detail(request, id):
    article = ArticlePost.objects.get(id=id)
    article.body = markdown.markdown(article.body,
    extensions=[
        'markdown.extensions.extra', 
        'markdown.extensions.codehilite',
        'markdown.extensions.fenced_code',
        # 'markdown.extensions.tables',
        ])
    context = {'article':article}
    return render(request,'article/detail.html', context)