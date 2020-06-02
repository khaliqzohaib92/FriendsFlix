import {
    RECEIVE_CURRENT_USER, 
    REMOVE_USER
} from '../actions/session_actions';

const _nullState = {id: null};

const sessionReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {id: Object.keys(action.user)[0]});
        case REMOVE_USER:
            return _nullState;
        default:
            return state;
    }
}

export default sessionReducer;
