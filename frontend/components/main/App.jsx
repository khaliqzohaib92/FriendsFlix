import React from "react";
import {Route, Switch} from 'react-router-dom'


import ProfilesContainer from "../profiles/profiles_container";
import SignupContainer from "../auth/signup_container";
import SigninContainer from "../auth/signin_container";
import { 
  ROUTE_SPLASH, 
  ROUTE_PROFILES, 
  ROUTE_SIGNUP, 
  ROUTE_SIGNIN, 
  ROUTE_PROFILES_FORM_EDIT, 
  ROUTE_PROFILES_FORM, 
  ROUTE_PROFILES_MANAGE, 
  ProtectedRoute, AuthRoute, ROUTE_HOME, ROUTE_PLAY_VIDEO
} from "../../util/route_utils";

import GreetingContainer from "../splash/greeting_container";
import Header from "../header/header";
import Footer from "../footer/footer";
import ProfileFormContainer from "../profiles/profile_form_container";
import ProfileManage from "../profiles/manage/profile_manage";
import HomeContainer from "../home/home_container";
import VideoPlayer from '../home/play/video_player'


const App = () => (
  <main className="main-app">
    <Header/>
    <section className="main-content ">
      <Switch>
        <AuthRoute exact path={ROUTE_SPLASH} component={GreetingContainer}/> 
        <AuthRoute  path={ROUTE_SIGNUP} component={SignupContainer}/> 
        <AuthRoute  path={ROUTE_SIGNIN} component={SigninContainer}/>
        <ProtectedRoute exact  path={ROUTE_PROFILES} component={ProfilesContainer}/> 
        <ProtectedRoute exact  path={ROUTE_PROFILES_FORM} component={ProfileFormContainer}/> 
        <ProtectedRoute   path={ROUTE_PROFILES_FORM_EDIT} component={ProfileFormContainer}/> 
        <ProtectedRoute   path={ROUTE_PROFILES_MANAGE} component={ProfileManage}/> 
        <ProtectedRoute   path={ROUTE_HOME} component={HomeContainer}/> 
        <ProtectedRoute   path={ROUTE_PLAY_VIDEO} component={VideoPlayer}/> 
      </Switch>
    </section>
    <Footer/>
  </main>
);

export default App;