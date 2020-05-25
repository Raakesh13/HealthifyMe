import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SignUpForm from "./SignUp";
import SignInForm from "./SignIn";
import AllUsers from "./Users";
// import Image from "./images/image1.jpg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${Image})` }}>
        <Router basename="/">
          <div>
            <div className="App__Form">
              <div className="PageSwitcher"></div>

              <div className="FormTitle"></div>

              <Route exact path="/" component={SignUpForm}></Route>
              <Route path="/sign-in" component={SignInForm}></Route>
              <Route path="/users" component={AllUsers}></Route>
            </div>
          </div>
          {/* </div> */}
        </Router>
      </div>
    );
  }
}

export default App;
