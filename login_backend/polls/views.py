from django.http import HttpResponse
from .models import Question, User


def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    output = ', '.join([q.question_text for q in latest_question_list])
    return HttpResponse(output)


# Leave the rest of the views (detail, results, vote) unchanged

def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)


def create(request, _username, _password):
    response = "User created"

    user_list = User.objects.all()
    for user in user_list:
        if user.username == _username:
            response = "Username is already taken"

    if response == "User created":
        q = User(username=_username, password=_password, score=0)
        q.save()

    return HttpResponse(response)


def sign_in(request, _username, _password):
    response = "Incorrect username/password"

    user_list = User.objects.all()
    for user in user_list:
        if user.username == _username:
            if user.password == _password:
                response = "Sign in successful"

    return HttpResponse(response + ' ' + f'{_username}')


def get_score(request, _username):
    user_list = User.objects.all()
    score = 0
    for user in user_list:
        if user.username == _username:
            score = user.score

    return HttpResponse(score)


def set_score(request, _username, _score):
    user_list = User.objects.all()
    score = 0
    for user in user_list:
        if user.username == _username:
            user.score += int(_score)
            user.save()
            score = user.score

    return HttpResponse(score)
