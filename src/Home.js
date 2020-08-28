import React, {Component} from "react"
import {connect} from 

class Home extends Component {
   
}
const mapStateToProps = (state, ownProps) => {
    return ({
        state: state,
        cookies: ownProps.cookies,
    });
};
export const HomeContainer = connect(
    mapStateToProps,
    null
)(Home);
export default HomeContainer;