import React from "react";
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import SplashHeader from "./splash_header";
import { ROUTE_SPLASH, ROUTE_HOME } from "../../util/route_utils";
import HomeHeader from "./home_header";
import { CURRENT_USER_ID } from "../../util/constants";


const mapStateToProps = state => {
   return {loggedIn: Boolean(state.session[CURRENT_USER_ID])};
};

const Header = ({loggedIn}) => {
    //TODO optimise it
    //reset background to black color when user logged in
    if(loggedIn){
        document.body.classList.remove("splash-background");
        document.body.classList.add("home-backgorund");
    } else {
        document.body.classList.add("splash-background");
        document.body.classList.remove("home-backgorund");
    }

 return(
    <>
        <Route path={ROUTE_SPLASH}  render={
            (props)=>{
                return !loggedIn ? <SplashHeader/> : <HomeHeader/>
            }
        }/> 
    </>
 );
}

export default connect(mapStateToProps)(Header);