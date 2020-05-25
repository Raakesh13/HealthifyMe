import React, { Component } from "react";
import Axios from "axios";
import Nav from "./naviagator";
import Image from "./images/image1.jpg";
class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      username: "",
      first_name: "",
      last_name: "",
      calorie_per_day: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    Axios.post(
      "http://127.0.0.1:5000/users",
      JSON.stringify({
        username: this.state.username,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        calories_per_day: this.state.calorie_per_day,
        password: this.state.password
      })
    ).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="FormCenter">
        <Nav />
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="FormField__Input"
              placeholder="Enter username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="first_name">
              First Name
            </label>
            <input
              type="text"
              id="frist_name"
              className="FormField__Input"
              placeholder="Enter your first name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="last_name">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="FormField__Input"
              placeholder="Enter your last name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="calorie_per_day">
              Calories Per Day
            </label>
            <input
              type="number"
              id="calorie_per_day"
              className="FormField__Input"
              placeholder="Enter Calories per day"
              name="calorie_per_day"
              value={this.state.calorie_per_day}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>{" "}
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
