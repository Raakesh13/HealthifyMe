import React from 'react'
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Meal = props => (
  <Card body outline color="secondary">
        <CardBody >
          <CardTitle>{props.food_name}</CardTitle>
          <CardSubtitle>{props.description}</CardSubtitle>
          <CardText>{props.calories}</CardText>
          <Button onClick={e => {
            props.handleDelete(props.mealid)
          }}>Delete</Button>
        </CardBody>
      </Card>

)

export default Meal
