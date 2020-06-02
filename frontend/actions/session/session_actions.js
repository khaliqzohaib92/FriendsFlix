import * as SessionApiUtil from '../../util/session/session_api_util';
import {errorMessages} from '../../util/util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (user)=>(
    {
        type: RECEIVE_CURRENT_USER,
        user
    }
);

const signoutCurrentUser = ()=>(
    {
        type: REMOVE_USER,
    }
);

const receiveErrors = (errors)=>(
    {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
);

export const signup = user => dispatch=>{
    return SessionApiUtil.signup(user)
    .then(user=>dispatch(receiveCurrentUser(user)),
        errors=>dispatch(receiveErrors(errorMessages(errors))));
}

export const signin = user => dispatch=>{
    return SessionApiUtil.signin(user)
    .then(user=>dispatch(receiveCurrentUser(user)),
    errors=>dispatch(receiveErrors(errorMessages(errors))));
}

export const signout = () => dispatch=>{
    return SessionApiUtil.signout()
    .then(()=>dispatch(signoutCurrentUser()),
    errors=>dispatch(receiveErrors(errorMessages(errors))));
}


