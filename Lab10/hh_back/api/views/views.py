from django.shortcuts import get_object_or_404
from django.http import JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
from .models import Company, Vacancy
import json

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        try:
            companies = Company.objects.all()
            data = {'companies': list(companies.values())}
            return JsonResponse(data)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    elif request.method == 'POST':
        try:
            company_data = json.loads(request.body)
            Company.objects.create(
                name=company_data.get('name'),
                description=company_data.get('description'),
                city=company_data.get('city'),
                address=company_data.get('address')
            )
            return JsonResponse({'success': True, 'message': 'Company created successfully'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=400)

@csrf_exempt
def company_detail(request, id):
    if request.method == 'GET':
        try:
            company = get_object_or_404(Company, pk=id)
            data = {'company': {
                'name': company.name,
                'description': company.description,
                'city': company.city,
                'address': company.address
            }}
            return JsonResponse(data)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    elif request.method == 'PUT':
        try:
            company_data = json.loads(request.body)
            company = get_object_or_404(Company, pk=id)
            company.name = company_data.get('name')
            company.description = company_data.get('description')
            company.city = company_data.get('city')
            company.address = company_data.get('address')
            company.save()
            return JsonResponse({'success': True, 'message': 'Company updated successfully'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=400)
    elif request.method == 'DELETE':
        try:
            company = get_object_or_404(Company, pk=id)
            company.delete()
            return JsonResponse({'success': True, 'message': 'Company deleted successfully'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=400)
    else:
        return HttpResponseNotAllowed(['GET', 'PUT', 'DELETE'])

@csrf_exempt
def company_vacancies(request, id):
    if request.method == 'GET':
        try:
            company = get_object_or_404(Company, pk=id)
            vacancies = Vacancy.objects.filter(company=company)
            data = {'vacancies': list(vacancies.values())}
            return JsonResponse(data)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        data = {'vacancies': list(vacancies.values())}
        return JsonResponse(data)
    elif request.method == 'POST':
        try:
            vacancy_data = json.loads(request.body)
            company_id = vacancy_data.get('company_id')
            company = get_object_or_404(Company, pk=company_id)
            Vacancy.objects.create(
                name=vacancy_data.get('name'),
                description=vacancy_data.get('description'),
                salary=vacancy_data.get('salary'),
                company=company
            )
            return JsonResponse({'success': True, 'message': 'Vacancy created successfully'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)})

@csrf_exempt
def vacancy_detail(request, id):
    if request.method == 'GET':
        try:
            vacancy = get_object_or_404(Vacancy, pk=id)
            data = {'vacancy': {
                'name': vacancy.name,
                'description': vacancy.description,
                'salary': vacancy.salary,
                'company': vacancy.company.name
            }}
            return JsonResponse(data)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    elif request.method == 'PUT':
        try:
            vacancy_data = json.loads(request.body)
            vacancy = get_object_or_404(Vacancy, pk=id)
            company_id = vacancy_data.get('company_id')
            company = get_object_or_404(Company, pk=company_id)
            vacancy.name = vacancy_data.get('name')
            vacancy.description = vacancy_data.get('description')
            vacancy.salary = vacancy_data.get('salary')
            vacancy.company = company
            vacancy.save()
            return JsonResponse({'success': True, 'message': 'Vacancy updated successfully'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=400)
    elif request.method == 'DELETE':
        try:
            vacancy = get_object_or_404(Vacancy, pk=id)
            vacancy.delete()
            return JsonResponse({'success': True, 'message': 'Vacancy deleted successfully'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=400)
    else:
        return HttpResponseNotAllowed(['GET', 'PUT', 'DELETE'])


@csrf_exempt
def vacancy_top10(request):
    if request.method == 'GET':
        top_vacancies = Vacancy.objects.order_by('-salary')[:10]
        data = {'top_vacancies': list(top_vacancies.values())}
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
