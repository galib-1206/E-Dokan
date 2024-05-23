from rest_framework import serializers 
from core.models import Item

class ItemSerializer (serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = (
            'id',
            'title',
            'price',
            'discount_price',
            'category',
            'label',
            'slug',
            'description',
            'image'
        )
