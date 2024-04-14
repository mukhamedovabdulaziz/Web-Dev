from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from api.models import Company, Vacancy
import json

class CompanyListView(View):
    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        try:
            companies = Company.objects.all()
            data = {'companies': list(companies.values())}
            return JsonResponse(data)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    def post(self, request):
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

class CompanyDetailView(View):
    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request, id):
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

    def put(self, request, id):
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

    def delete(self, request, id):
        try:
            company = get_object_or_404(Company, pk=id)
            company.delete()
            return JsonResponse({'success': True, 'message': 'Company deleted successfully'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=400)

class CompanyVacanciesView(View):
    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request, id):
        try:
            company = get_object_or_404(Company, pk=id)
            vacancies = Vacancy.objects.filter(company=company)
            data = {'vacancies': list(vacancies.values())}
            return JsonResponse(data)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

class VacancyListView(View):
    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        vacancies = Vacancy.objects.all()
        data = {'vacancies': list(vacancies.values())}
        return JsonResponse(data)

    def post(self, request):
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

class VacancyDetailView(View):
    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request, id):
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

    def put(self, request, id):
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

    def delete(self, request, id):
        try:
            vacancy = get_object_or_404(Vacancy, pk=id)
            vacancy.delete()
            return JsonResponse({'success': True, 'message': 'Vacancy deleted successfully'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=400)

class VacancyTop10View(View):
    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        top_vacancies = Vacancy.objects.order_by('-salary')[:10]
        data = {'top_vacancies': list(top_vacancies.values())}
        return JsonResponse(data)
