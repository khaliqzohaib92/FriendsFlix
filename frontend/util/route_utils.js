import {withRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import React from 'react';

export const ROUTE_SPLASH = '/';
export const ROUTE_PROFILES = '/profiles';
export const ROUTE_SIGNUP = '/singup';
export const ROUTE_SIGNIN = '/singin';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
debugger
 return <Route path={path} exact={exact} render={(props) => {
        debugger
      return !loggedIn ? (
        <Component {...props} />
        ) : (
        <Redirect to={ROUTE_PROFILES} />
        )
    }} />

};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  debugger
  return <Route path={path} exact={exact} render={(props) => {
      debugger
     return loggedIn ? (
        <Component {...props} />
        ) : (
        <Redirect to={ROUTE_SPLASH} />
        )
    }} />
};

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.id)}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
