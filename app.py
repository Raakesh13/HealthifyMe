from flask import Flask, request, jsonify
from flask_restful import Api
from resources.User import Users, User, Login
from resources.Meal import Meals, Meal, AllMeals
# from resources.Authenticate import Login
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS




app = Flask(__name__)
CORS(app)
api = Api(app)
bcrypt = Bcrypt(app)

app.config['JWT_SECRET_KEY'] = 'jwt-secret-string'

jwt = JWTManager(app)

# @app.route('/')
# def home():
#     return jsonify({"message": "Home"})


api.add_resource(Users, "/users")
api.add_resource(User, "/user")
api.add_resource(Meals, "/meals")
api.add_resource(Meal, "/meal/<string:id>")
api.add_resource(AllMeals, "/allmeals")
api.add_resource(Login, "/login")

if __name__ == "__main__":
    app.run(debug=True)
