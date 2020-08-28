import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SignUpForm from "./SignUp";
import SignInForm from "./SignIn";
import AllUsers from "./Users";
import Meals from "./meals/Meals";
import Meal from "./meals/Meal";
import Addmeal from "./meals/Addmeal";
import Dashboard from "./Dashboard";
import Updatemeal from "./meals/Updatemeal";
import Deletemeal from "./meals/Deletemeal";
import Profile from "./users/Profile";
import Updateprofile from "./users/Updateprofile";
import Deleteprofile from "./users/Deleteprofile";
import Navbar from "./Navbar";
import Logout from "./Logout";
import HealthifyMe from "./HealthifyMe";

// import Image from "./images/image1.jpg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router basename="/">
          <Navbar />

          <div>
            <Route exact path="/signin" component={SignInForm}></Route>
            <Route exact path="/HealthifyMe" component={HealthifyMe}></Route>
            <Route path="/signup" component={SignUpForm}></Route>
            <Route path="/users" component={AllUsers}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/updateprofile" component={Updateprofile}></Route>
            <Route path="/deleteprofile" component={Deleteprofile}></Route>
            <Route path="/meals" component={Meals}></Route>
            <Route path="/meal/:handle" component={Meal}></Route>
            <Route path="/Addmeal" component={Addmeal}></Route>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/updatemeal/:handle" component={Updatemeal}></Route>
            <Route path="/deletemeal/:handle" component={Deletemeal}></Route>
            <Route path="/logout" component={Logout}></Route>
          </div>
        </Router>{" "}
      </div>
    );
  }
}

export default App;
