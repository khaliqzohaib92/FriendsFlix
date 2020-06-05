import {
    RECEIVE_CURRENT_USER, 
    REMOVE_USER
} from '../../actions/session/session_actions';
import {} from '../../actions/profile/profile_action'
const _nullState = {currentUserId   : null};

const sessionReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {currentUserId: Object.keys(action.user)[0]});
        case REMOVE_USER:
            return _nullState;
        default:
            return state;
    }
}

export default sessionReducer;
