from django.shortcuts import render
from .models import Item
# Create your views here.

def item_list (req):
    context = {
        'items': Item.objects.all()
    }
    return render(req, "item_list.html", context)