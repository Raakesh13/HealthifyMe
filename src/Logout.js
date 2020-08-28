import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import {Button} from "reactstrap"
import Cookies from "js-cookie"


class Logout extends Component{
    state={
        navigate: false
    }

    logout = () => {
        Cookies.remove("Authorization")
        this.setState({navigation:true})
    }

    render(){
        const {navigate} = this.state

        if(navigate){
            return <Redirect to="/" push={true} />

        }

        return <Button onClick={this.logout}>Logout</Button>
    }
}

export default Logout