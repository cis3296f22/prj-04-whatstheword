from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # ex: /polls/5/
    path('<int:question_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:question_id>/results/', views.results, name='results'),
    # ex: /polls/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),

    path('<_username>/<_password>/sign_in/', views.sign_in, name='sign_in'),
    path('<_username>/<_password>/create_account/', views.create, name='create'),

    path('<_username>/get_score/', views.get_score, name='get_score'),
    path('<_username>/<_score>/set_score/', views.set_score, name='set_score'),
]
