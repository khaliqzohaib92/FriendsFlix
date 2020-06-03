import React from "react";
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import SplashHeader from "./splash_header";
import { ROUTE_SPLASH, ROUTE_HOME } from "../../util/route_utils";


const mapStateToProps = state => (
    {loggedIn: Boolean(state.session.id)}
);

const Header = ({loggedIn, exact}) => {
 return(
    <>
        <Route path={loggedIn ? ROUTE_HOME :  ROUTE_SPLASH} exact={exact} render={
            (props)=>{
                return !loggedIn ? <SplashHeader/> : <h1>Here comes the logged in header</h1>
            }
        }/> 
    </>
 );
}

export default connect(mapStateToProps)(Header);