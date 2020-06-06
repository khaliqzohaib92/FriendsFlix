import * as SessionApiUtil from '../../util/session/session_api_util';
import {errorMessages} from '../../util/util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const RECEIVE_CURRENT_PROFILE = "RECEIVE_CURRENT_PROFILE";
export const REMOVE_CURRENT_PROFILE = "REMOVE_CURRENT_PROFILE";


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

export const removeErrors = ()=>{
    return {
        type: REMOVE_ERRORS,
    }
}


export const receiveCurrentProfile = (profileId)=>{
    return {
        type: RECEIVE_CURRENT_PROFILE,
        profileId
    }
}

export const removeCurrentProfile = ()=>{
    return {
        type: REMOVE_CURRENT_PROFILE,
    }
}

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




