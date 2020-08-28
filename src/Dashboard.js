import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Addmeal from "./meals/Addmeal";
// import Meal from "./meal/Meal"
import Meals from "./meals/Meals";
import Navbar from "./Navbar";
import { Card, CardBody, CardText, Button, CardTitle } from "reactstrap";
import Signin from "./SignIn";
import Cookies from "js-cookie";
import HealthifyMe from './HealthifyMe'

// import Allmeal from "./meals/Allmeal";
class Dashboard extends Component {
  constructor() {
    super();
  }

  Display() {
    if (!Cookies.get("Authorization")) {
      return (
        <div>
          <Signin />
        </div>
      );
    } else {
      return (
        <div>
          <HealthifyMe />
          <br />
          <Link to={`/Addmeal`}>
            <Button>Add meal</Button>
          </Link>
          <br />
          {/* <Link to={`/meals`}>
            <Button>View meals</Button>
          </Link>
          <br /> */}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <this.Display />
        
      </div>
    );
  }
}
export default Dashboard;
