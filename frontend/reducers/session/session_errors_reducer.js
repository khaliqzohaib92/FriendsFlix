import {
    RECEIVE_CURRENT_USER, 
    RECEIVE_SESSION_ERRORS,
    CLEAR_ERRORS
} from '../../actions/session/session_actions';

const _nullState = [];

const sessionErrorsReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case CLEAR_ERRORS:
        case RECEIVE_CURRENT_USER:
            return _nullState;
        default:
            return state;
    }
}

export default sessionErrorsReducer;
