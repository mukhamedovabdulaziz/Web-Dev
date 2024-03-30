from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()
    data = [{'name': product.name, 'price': product.price, 'description': product.description,
             'count': product.count, 'is_active': product.is_active} for product in products]
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    product = Product.objects.get(id=id)
    data = {'name': product.name, 'price': product.price, 'description': product.description,
            'count': product.count, 'is_active': product.is_active}
    return JsonResponse(data)

def category_list(request):
    categories = Category.objects.all()
    data = [{'name': category.name} for category in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    category = Category.objects.get(id=id)
    data = {'name': category.name}
    return JsonResponse(data)

def category_products(request, id):
    category = Category.objects.get(id=id)
    products = Product.objects.filter(category=category)
    data = [{'name': product.name, 'price': product.price, 'description': product.description,
             'count': product.count, 'is_active': product.is_active} for product in products]
    return JsonResponse(data, safe=False)

