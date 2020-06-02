import {
    RECEIVE_CURRENT_USER, 
    REMOVE_USER
} from '../../actions/session/session_actions';

const _nullState = {};

const userReducer = (state = _nullState, action)=>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.user;
        case REMOVE_USER:
            return _nullState;
        default:
            return state;
    }
}

export default userReducer;
