import {
    RECEIVE_CURRENT_USER, 
    REMOVE_USER
} from '../../actions/session/session_actions';
import {
    RECEIVE_CURRENT_PROFILE, 
    REMOVE_CURRENT_PROFILE
} from '../../actions/session/session_actions';

import {
    CURRENT_PROFILE_ID,
    CURRENT_USER_ID
} from '../../util/constants'
import { getCurrentPorfileId, saveCurrentProfileId, removeProfileId } from '../../util/storage/session_storage';
const _nullState = {[CURRENT_USER_ID]   : null};

const sessionReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {
                [CURRENT_USER_ID]: parseInt(Object.keys(action.user)[0]),
                [CURRENT_PROFILE_ID]: getCurrentPorfileId()//setting currentProfileId to state
            });
        case RECEIVE_CURRENT_PROFILE:
            saveCurrentProfileId(action.profileId) //setting currentProfileId to localstorage
            return Object.assign({}, state, {[CURRENT_PROFILE_ID]: action.profileId});
        case REMOVE_CURRENT_PROFILE:
            removeProfileId() //removing currentProfileId from localstorage
            return Object.assign({}, state, {[CURRENT_PROFILE_ID]: undefined}); 
        case REMOVE_USER:
            removeProfileId() //removing currentProfileId from localstorage
            return _nullState;
        default:
            return state;
    }
}

export default sessionReducer;
