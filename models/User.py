from mongoengine import *


class User(Document):
    username = StringField(required=True, unique=True)
    first_name = StringField(required=True)
    last_name = StringField(required=True)
    email = EmailField(required=True)
    password = StringField(required=True)
    datetime = DateTimeField(required=True)
    calories_per_day = IntField(required=True)
    userrole = ListField()


class UserPUT(Document):
    first_name = StringField()
    last_name = StringField()
    email = EmailField()
    password = StringField()
    calories_per_day = IntField()
