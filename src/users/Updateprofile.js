import React, { Component } from "react";
import Axios from "axios";

class Updateprofile extends Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      calories_per_day: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    Axios.put(
      "http://127.0.0.1:5000/user",
      JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        calories_per_day: this.state.calories_per_day,
        password: this.state.password
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTA2NTAzNDYsIm5iZiI6MTU5MDY1MDM0NiwianRpIjoiZjc2NmY5YTgtYmNmMy00ZGJiLTgxODgtYTEwOTJjMDFkNjMxIiwiZXhwIjoxNTkzMjQyMzQ2LCJpZGVudGl0eSI6IlJhamVzaCIsInR5cGUiOiJyZWZyZXNoIn0.MsRSDbH-7vVqR2_tWo1tRclAMXEF71Ik6mlZbgE2GIQ"
        }
      }
    ).then(console.log("user updated"));
  }
  render() {
    return (
      <div style={{ color: "black", padding: "50px" }}>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="first_name">First Name</label>
            <br />
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="last_name">Last Name</label>
            <br />
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
            />
          </p>
          <p>
            {" "}
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            {" "}
            <label htmlFor="calories_per_day">Calories per day</label>
            <br />
            <input
              type="number"
              id="calories_per_day"
              name="calories_per_day"
              value={this.state.calories_per_day}
              onChange={this.handleChange}
            />
          </p>
          <p>
            {" "}
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default Updateprofile;
