from django.shortcuts import render

# Create your views here.
def test(request):
    return render(request, 'form.html')
def score(request):
    return render(request, 'score.html')