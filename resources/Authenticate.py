# from flask_restful import Resource, reqparse
# from flask import request
# from mongoengine import connect
# from models.User import User as U

# connect('healthifyMe1')
# parser = reqparse.RequestParser()
# parser.add_argument('username', help = 'This field cannot be blank', required = True)
# parser.add_argument('password', help = 'This field cannot be blank', required = True)

# class Login(Resource):
#     def post(self):
#         data = parser.parse_args()
#         user = U.objects(username=data['username']).get()
#         return user.first_name