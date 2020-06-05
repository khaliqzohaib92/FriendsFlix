import {
    RECEIVE_CURRENT_USER_PROFILES, 
    RECEIVE_PROFILE,
    REMOVE_PROFILE
} from '../../actions/profile/profile_action';
import { REMOVE_USER } from '../../actions/session/session_actions';

const _nullState = {};

const profileReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER_PROFILES:
            return Object.assign({}, state, action.profiles);
        case RECEIVE_PROFILE:
            return Object.assign({}, state, action.profile);
        case REMOVE_PROFILE:
            const nextState = Object.assign({},state);
            delete nextState[action.profileId];
            return nextState
            // TODO improve the logic to remove all profiles from the store
        case REMOVE_USER:
            return _nullState;
        default:
            return state;
    }
}

export default profileReducer;
