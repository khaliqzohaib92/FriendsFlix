import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store.js'
import {signup, signin, signout} from './actions/session_actions'

// add DOMContentLoaded Listener to render, when html finish loading
document.addEventListener("DOMContentLoaded", ()=>{
    //load success

    const store = configureStore();
    const rootElemenet = document.getElementById('root');

    //render content to dom
    ReactDOM.render(<h1>Welcome to FriendsFlix</h1>, rootElemenet);

    // //testing
    // window.store = store;
    // window.signin = signin;
    // window.signout = signout;
    // window.signup = signup;
});