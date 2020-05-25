from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt
from flask_restful import Resource, reqparse
from flask import jsonify, request, Response, make_response
from models.User import User as U
from models.User import UserPUT as UPUT
from mongoengine import connect
from flask_bcrypt import Bcrypt
from datetime import datetime


connect('healthifyMe1')

bcrypt = Bcrypt()


class Users(Resource):

    def post(self):
        body = request.get_json(force=True)
        print(body)
        userObject = U(
            username=body['username'],
            calories_per_day=body['calories_per_day'],
            email=body['email'],
            first_name=body['first_name'],
            last_name=body['last_name'],
            password=bcrypt.generate_password_hash(
                body['password']).decode('UTF-8'),
            datetime=datetime.utcnow
        )

        userObject.save()
        return make_response("Added")
        
    #@jwt_refresh_token_required
    def get(self):
        users = U.objects()
        if not users:
            return jsonify({"message":"No users"})
        else:
            res = []
            for user in users:
                res.append([user.username,user.first_name+" "+
                                    user.last_name, user.calories_per_day])
            return jsonify(res)


class User(Resource):

    @jwt_refresh_token_required
    def get(self):
        user = U.objects(username=get_jwt_identity()).get()
        # if not user:
        #     return "{} does not exists".format(username)
        # else:
        #     # for i in user:
        #     #     print(i)
        user = {
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'calories_per_day': user.calories_per_day
        }

        return jsonify(user)

    @jwt_refresh_token_required
    def put(self):
        body = request.get_json(force=True)
        user = U.objects(username=get_jwt_identity()).get()
        print(user.username)
        userObject = UPUT(
            calories_per_day=body['calories_per_day'],
            email=body['email'],
            first_name=body['first_name'],
            last_name=body['last_name'],
            password=body['password']
        )
        if userObject.calories_per_day:
            user.update(calories_per_day=userObject.calories_per_day)
        if userObject.email:
            user.update(email=userObject.email)
        if userObject.first_name:
            user.update(first_name=userObject.first_name)
        if userObject.last_name:
            user.update(last_name=userObject.last_name)
        if userObject.password:
            user.update(password=userObject.password)
        
        return jsonify({"message":"User updated"})

    @jwt_required
    def delete(self):
        user = U.objects(username=get_jwt_identity()).get()
        # if not user:
        #     return "{} does not exists".format(username)
        # else:    
        user.delete()
        return "Account deleted"


parser = reqparse.RequestParser()
parser.add_argument('username', help = 'This field cannot be blank', required = True)
parser.add_argument('password', help = 'This field cannot be blank', required = True)

class Login(Resource):
    def post(self):
        data = parser.parse_args()
        user = U.objects(username=data['username']).get()
        if not user:
            return jsonify({"message":"User does not exist"})
        if user and bcrypt.check_password_hash(user.password, data['password']):
            access_token = create_access_token(identity=data['username'])
            refresh_token = create_refresh_token(identity=data['username'])
            return jsonify({"message":"Logged in as {}".format(user.username),
                    "access_token":access_token,
                    "refresh_token":refresh_token})
        else:
            return jsonify({"message":"Wrong credentials"})
