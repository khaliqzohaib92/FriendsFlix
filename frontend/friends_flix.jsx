import React from 'react';
import ReactDOM from 'react-dom'

import configureStore from './store/store.js'
import Root from './components/main/root'
import {receiveCurrentUser} from './actions/session/session_actions'

// add DOMContentLoaded Listener to render, when html finish loading
document.addEventListener("DOMContentLoaded", ()=>{
    //load success
    
    const store = configureStore();
    
    //populate current user if exist
    if(window.currentUser){
        //dispatch to reducer
        store.dispatch(receiveCurrentUser(window.currentUser));

        //delete currentuser from window
        delete window.currentUser;
    }

    const rootElemenet = document.getElementById('root');

    //render content to dom
    ReactDOM.render(<Root store={store}/>, rootElemenet);

    // //testing
    window.store = store;
    // window.signin = signin;
    // window.signout = signout;
    // window.signup = signup;
});