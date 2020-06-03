import {withRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import React from 'react';

export const ROUTE_SPLASH = '/';
export const ROUTE_PROFILES = '/profiles';
export const ROUTE_SIGNUP = '/signup';
export const ROUTE_SIGNIN = '/signin';
export const ROUTE_HOME = '/home';



const mapStateToProps = state => (
    {loggedIn: Boolean(state.session.id)}
);


const Auth = ({ component: Component, path, loggedIn, exact }) => {
 return <Route path={path} exact={exact} render={(props) => {
      return !loggedIn ? ( <Component {...props} />) : (<Redirect to={ROUTE_PROFILES} />)
    }} />

};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return <Route path={path} exact={exact} render={(props) => {
     return loggedIn ? (<Component {...props} />) : (<Redirect to={ROUTE_SPLASH} />)
    }} />
};


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
