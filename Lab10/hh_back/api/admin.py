from django.contrib import admin
from .models import Vacancy, Company

class VacancyAdmin(admin.ModelAdmin):
    list_display = ('id', 'description', 'salary', 'company')
    search_fields = ('name', 'company',)

class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'city', 'address')
    search_fields = ('name', 'city',)

admin.site.register(Vacancy, VacancyAdmin)
admin.site.register(Company, CompanyAdmin)
