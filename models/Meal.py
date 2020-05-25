from mongoengine import *


class Meal(Document):
    username = StringField(required=True)
    foodname = StringField(required=True)
    description = StringField()
    calories = FloatField(required=True)
    datetime = DateTimeField(required=True)
    is_in_day_limit = BooleanField()


class MealPUT(Document):
    foodname = StringField()
    description = StringField()
    calories = FloatField()
    datetime = DateTimeField()
    is_in_day_limit = BooleanField()
