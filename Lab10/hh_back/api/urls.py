from django.urls import path
# from api.views import cbv
from api.views import fbv

urlpatterns = [
    path('companies/', fbv.company_list),
    path('companies/<int:id>/', fbv.company_detail),
    path('companies/<int:id>/vacancies/', fbv.company_vacancies),
    path('vacancies/', fbv.vacancy_list),
    path('vacancies/<int:id>/', fbv.vacancy_detail),
    path('vacancies/top_ten/', fbv.vacancy_top10),
]

# urlpatterns = [
#     path('companies/', cbv.CompanyListView.as_view()),
#     path('companies/<int:pk>/', cbv.CompanyDetailView.as_view()),
#     path('companies/<int:pk>/vacancies/', cbv.CompanyVacanciesView.as_view()),
#     path('vacancies/', cbv.VacancyListView.as_view()),
#     path('vacancies/<int:pk>/', cbv.VacancyDetailView.as_view()),
#     path('vacancies/top_ten/', cbv.VacancyTop10View.as_view()),
# ]