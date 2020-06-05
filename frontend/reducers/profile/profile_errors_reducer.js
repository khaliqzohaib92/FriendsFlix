import {
    RECEIVE_CURRENT_USER_PROFILES, 
    RECEIVE_PROFILE,
    RECEIVE_PROFILE_ERRORS,
    REMOVE_PROFILE_ERRORS
} from '../../actions/profile/profile_action';

const _nullState = [];

const profileErrorsReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROFILE_ERRORS:
            return action.errors
        case RECEIVE_CURRENT_USER_PROFILES:
        case RECEIVE_PROFILE:
        case REMOVE_PROFILE_ERRORS:
            return _nullState;
        default:
            return state;
    }
}

export default profileErrorsReducer;
