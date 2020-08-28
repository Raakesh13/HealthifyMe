import React from 'react'
import Meal from './Meal'
import { CardGroup, CardDeck, CardColumns } from 'reactstrap'

const Meals = props => (
  <CardColumns>
  
  {props.meals.length === 0 && <p>Please add meals</p>}
  {
    props.meals.map((meal) => (
      <Meal key={meal[0]} mealid={meal[0]} food_name={meal[1]} description={meal[3]} calories={meal[2]} handleDelete={props.handleDelete}/> 
    ))
  }
    
  </CardColumns>
)

export default Meals
