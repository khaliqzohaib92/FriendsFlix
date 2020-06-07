import React from "react";
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import SplashHeader from "./splash_header";
import { ROUTE_SPLASH, ROUTE_HOME, ROUTE_PROFILES } from "../../util/route_utils";
import HomeHeader from "./home_header";
import ProfileHeader from "./profile_header";
import { CURRENT_USER_ID, CURRENT_PROFILE_ID } from "../../util/constants";

const mapStateToProps = state => {
   return {
       loggedIn: Boolean(state.session[CURRENT_USER_ID]),
       profileSelected: Boolean(state.session[CURRENT_PROFILE_ID]),
    };
};

const Header = (props) => {
    //TODO optimise it
    //reset background to black color when user logged in
    if(props.loggedIn){
        document.body.classList.remove("splash-background");
        document.body.classList.add("home-backgorund");
    } else {
        document.body.classList.add("splash-background");
        document.body.classList.remove("home-backgorund");
    }
    const path = props.location.pathname;
debugger
 return(
    <>
        <Route path={ROUTE_SPLASH}  render={
            ()=>{
                debugger
                return !props.loggedIn ? <SplashHeader/> : (props.profileSelected && !path.includes(ROUTE_PROFILES)) ? <HomeHeader/> : <ProfileHeader/>
            }
        }/> 
    </>
 );
}

export default withRouter(connect(mapStateToProps)(Header));