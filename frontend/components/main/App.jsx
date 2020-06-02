import React from "react";
import {Route} from 'react-router-dom'

import ProfilesContainer from "../profiles/profiles_container";
import SignupContainer from "../auth/signup_container";
import SigninContainer from "../auth/signin_container";
import { ROUTE_SPLASH, ROUTE_PROFILES, ROUTE_SIGNUP, ROUTE_SIGNIN, ProtectedRoute, AuthRoute } from "../../util/route_utils";
import Greeting from "../splash/greeting";


const App = () => (
  <div>
    <h1>FriendsFlix</h1>
    <AuthRoute exact path={ROUTE_SPLASH} component={Greeting}/> 
    <AuthRoute exact path={ROUTE_SIGNUP} component={SignupContainer}/> 
    <AuthRoute exact path={ROUTE_SIGNIN} component={SigninContainer}/>
    <ProtectedRoute exact  path={ROUTE_PROFILES} component={ProfilesContainer}/> 
  </div>
);

export default App;