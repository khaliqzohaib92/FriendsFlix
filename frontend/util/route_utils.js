import {withRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import React from 'react';

import ProfilesContainer from "../components/profiles/profiles_container";


export const ROUTE_SPLASH = '/';
export const ROUTE_SIGNUP = '/signup';
export const ROUTE_SIGNIN = '/signin';
export const ROUTE_PROFILES = '/profiles';
export const ROUTE_PROFILES_FORM = '/profiles/add';
export const ROUTE_PROFILES_FORM_EDIT = '/profiles/:id/edit';
export const ROUTE_PROFILES_MANAGE = '/profiles/manage';
export const ROUTE_HOME = '/home';
export const ROUTE_MOVIES = '/home/movies';
export const ROUTE_TV_SHOWS = '/home/tvshows';
export const ROUTE_PLAY_VIDEO = "/play/:id"
export const ROUTE_SEARCH = "/home/search/:query"

export const editSearchRoute = (query)=>{
  return `/home/search/${query}`;
}

export const editVideoPlayRoute = (id)=>{
  return `/play/${id}`;
}

export const editProfileRoute = (profileId)=>{
  return `/profiles/${profileId}/edit`;
}

import {CURRENT_USER_ID, CURRENT_PROFILE_ID} from './constants'


const mapStateToProps = state => (
    {
      loggedIn: Boolean(state.session[CURRENT_USER_ID]),
      selectedProfile: Boolean(state.session[CURRENT_PROFILE_ID]),
    }
);


const Auth = ({ component: Component, path, loggedIn, exact, selectedProfile }) => {//user logged in
 return <Route path={path} exact={exact} render={(props) => {
   //rendering component if !logged in 
      return !loggedIn ? ( <Component {...props} />) : (
        //redirecting profile page if not set else rendering home
      !selectedProfile ? <Redirect to={ROUTE_PROFILES} /> : <Redirect to={ROUTE_HOME} />
      )
    }} />

};

const Protected = ({ component: Component, path, loggedIn, exact, selectedProfile }) => {//user not logged in
  return <Route path={path} exact={exact} render={(props) => {
    //redirecting splash if not logged in
     return !loggedIn ?  (<Redirect to={ROUTE_SPLASH} />) : (
       //render specified component if profile is selected 
       selectedProfile ? (<Component {...props}/>) : (
         //includes ./profiles in route render component spcified if not render profileContainer
         props.location.pathname.includes(ROUTE_PROFILES) ?  <Component {...props} /> : <Redirect to={ROUTE_PROFILES} {...props} />
       )
     ) 
    }} />
};


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
