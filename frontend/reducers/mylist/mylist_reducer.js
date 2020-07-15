import {
    RECEIVE_MY_LISTS, RECEIVE_MY_LIST, REMOVE_MY_LIST_ITEM,
} from '../../actions/mylist/mylist_action';
import { REMOVE_USER } from '../../actions/session/session_actions';

const _nullState = []

const MyListReducer = (state = _nullState, action)=>{
    Object.freeze(state);
    let nextState = Object.assign([], state);

    switch(action.type){
        case RECEIVE_MY_LISTS:
            nextState = action.mylists.video_ids
            return nextState;
        case RECEIVE_MY_LIST:
            nextState.push(action.mylist.video_id)
            return nextState
        case REMOVE_MY_LIST_ITEM:
            nextState.splice(nextState.indexOf(action.videoId),1)
            return nextState;
        //quick fix to remove the catergories on user logout
        case REMOVE_USER:
            return _nullState;
        default:
            return state;
    }
}

export default MyListReducer;