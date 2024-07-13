from django.http import JsonResponse
from django.shortcuts import render

def index(request):
    return render(request, 'calculator/index.html')

def calculate_emi(request):
    if request.method == 'GET':
        principal = float(request.GET.get('principal'))
        rate = float(request.GET.get('rate'))
        time = int(request.GET.get('time'))

        monthly_rate = rate / (12 * 100)
        emi = (principal * monthly_rate * (1 + monthly_rate)**time) / ((1 + monthly_rate)**time - 1)

        return JsonResponse({'emi': emi})
