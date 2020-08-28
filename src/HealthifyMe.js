import React, { Component } from "react";
import Axios from 'axios'
import Meals from "./meals/Meals"
import Cookies from 'js-cookie'

class HealthifyMe extends Component {
  state = {
    meals: []
  };

  handleAddMeal = e => {
    e.preventDefault();
  };


  handleDelete = (mealid) => {

    this.setState((prevState) => ({
      meals: prevState.meals.filter(meal => mealid !== meal[0])
    })
    )

    Axios.delete(`http://127.0.0.1:5000/meal/${mealid}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("Authorization")
      }
    })


  }

  handleUpdate = () => {};

  componentDidMount() {
    try{

      Axios.get("http://127.0.0.1:5000/meals", {
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("Authorization")
        }
      }).then((res) => {
        if (res.data) {
          this.setState(() => ({ meals: res.data }))
          console.log(this.state.meals[0])

        }
        // console.log(this.state.meals)

      })
  } catch(e){
    //do nothing
  }
  }

  // componentDidUpdate(prevProps, prevState){
  //   if (prevState.meals.length !== this.state.meals.length){

  //   }
  // }


  render() {
    return (<div>
    <Meals meals={this.state.meals}
      handleDelete={this.handleDelete}
    />
    </div>);
  }
}

export default HealthifyMe;
