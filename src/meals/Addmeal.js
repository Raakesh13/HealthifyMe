import React, { Component } from "react";
import Axios from "axios";
import Cookies from "js-cookie"


class Addmeal extends Component {
  constructor() {
    super();

    this.state = {
      foodname: "",
      calories: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(
      "http://127.0.0.1:5000/meals",
      JSON.stringify({
        foodname: this.state.foodname,
        calories: this.state.calories,
        description: this.state.description,
        is_in_day_limit: true
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("Authorization")
        }
      }
    ).then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ color: "black" }}>
          <label className="" htmlFor="foodname">
            Food name
          </label>
          <br />
          <input
            type="text"
            className=""
            id="foodname"
            name="foodname"
            onChange={this.handleChange}
          ></input>
          <br />
          <label className="" htmlFor="calories">
            Calories
          </label>
          <br />
          <input
            type="number"
            className=""
            id="calories"
            name="calories"
            onChange={this.handleChange}
          ></input>
          <br />
          <label className="" htmlFor="description">
            Description
          </label>
          <br />
          <input
            type="text"
            className=""
            id="description"
            name="description"
            onChange={this.handleChange}
          ></input>
          <br />
          <button>Add</button>{" "}
        </form>
      </div>
    );
  }
}

export default Addmeal;
