import React, { Component } from "react";
import Axios from "axios";

class Updatemeal extends Component {
  constructor() {
    super();

    this.state = {
      foodname: "",
      calories: "",
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { handle } = this.props.match.params;
    Axios.put(
      `http://127.0.0.1:5000/meal/${handle}`,
      JSON.stringify({
        foodname: this.state.foodname,
        calories: this.state.calories,
        description: this.state.description,
        is_in_day_limit: true
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTA2NTAzNDYsIm5iZiI6MTU5MDY1MDM0NiwianRpIjoiZjc2NmY5YTgtYmNmMy00ZGJiLTgxODgtYTEwOTJjMDFkNjMxIiwiZXhwIjoxNTkzMjQyMzQ2LCJpZGVudGl0eSI6IlJhamVzaCIsInR5cGUiOiJyZWZyZXNoIn0.MsRSDbH-7vVqR2_tWo1tRclAMXEF71Ik6mlZbgE2GIQ"
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
          <button>Update</button>{" "}
        </form>
      </div>
    );
  }
}

export default Updatemeal;
