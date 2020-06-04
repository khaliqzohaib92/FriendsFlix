import {
    RECEIVE_CURRENT_USER_PROFILES, 
    RECEIVE_PROFILE,
    REMOVE_PROFILE
} from '../../actions/profile/profile_action';

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
        default:
            return state;
    }
}

export default profileReducer;
