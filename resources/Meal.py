from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt
from flask_restful import Resource
from flask import jsonify, request, Response, make_response
from models.Meal import Meal as M
from models.Meal import MealPUT as MPUT
from mongoengine import connect
from flask_bcrypt import Bcrypt
from datetime import datetime

from .utils import get_calories

connect('healthifyMe1')


class Meals(Resource):
    @jwt_required
    def post(self):
        body = request.get_json(force=True)
        mealObject = M(
            username = get_jwt_identity(),
            foodname=body['foodname'],
            description=body['description'],
            calories=body['calories'],
            is_in_day_limit=body['is_in_day_limit'],
            datetime=datetime.utcnow()
        )
        if not mealObject.calories:
            mealObject.calories = get_calories(mealObject.foodname)

        id = str(mealObject.save().id)
        return "meal added, id:{}".format(id)

    @jwt_required
    def get(self):
        meals = M.objects(username=get_jwt_identity())
        if not meals:
            return "No meal object."
        else:
            res = {}
            for meal in meals:
                res[str(meal.id)] = [meal.foodname,
                                    meal.calories, meal.description]
            return jsonify(res)


class Meal(Resource):
    @jwt_refresh_token_required
    def get(self, id):
        meal = M.objects(id=id, username=get_jwt_identity()).get()
        if not meal:
            return jsonify({"message":"{} does not exists".format(id)})
        else:
            res = {}
            res[str(meal.id)] = [meal.foodname, meal.calories, meal.description]
            return jsonify(res)

    @jwt_required
    def delete(self, id):
    #     if username != get_jwt_identity():
    #         return jsonify({"message":"Cannot update another user's meal"})
        meal = M.objects(id=id, username=get_jwt_identity()).get()
        print(meal.foodname)
        if not meal:
            return jsonify({"message":"{} does not exists".format(id)})
        else:
            meal.delete()
            return jsonify({'message': '{} deleted'.format(id)})
            
    @jwt_refresh_token_required
    def put(self, id):
        body = request.get_json(force=True)
        meal = M.objects(id=id).get()
        print(meal.foodname)
        mealObject = MPUT(
            foodname=body['foodname'],
            description=body['description'],
            calories=body['calories'],
            is_in_day_limit=body['is_in_day_limit'],
            datetime=datetime.utcnow()
        )
        # D = {}
        # for i in mealObject:
        #     # print(mealObject[i])
        #     if mealObject[i]:
        #         D[i] = mealObject[i]
                
        # for i,j in D.items():
        #     meal.update(i=j)
        if mealObject.foodname:
            meal.update(foodname=mealObject.foodname)
            if mealObject.calories:
                meal.update(calories=mealObject.calories)
            else:
                meal.update(calories=get_calories(mealObject.foodname))
        if mealObject.description:
            meal.update(description=mealObject.description)
        if mealObject.is_in_day_limit:
            meal.update(is_in_day_limit=mealObject.is_in_day_limit)

        return jsonify({"message":"Meal updated"})

class AllMeals(Resource):
    @jwt_required
    def get(self):
        meals = M.objects()
        res = {}
        for meal in meals:
            res[str(meal.id)] = [meal.foodname, meal.description, meal.calories]
        return jsonify(res)