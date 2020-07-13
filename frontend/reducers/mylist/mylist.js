import {
    RECEIVE_MY_LISTS, RECEIVE_MY_LIST, REMOVE_MY_LIST_ITEM,
} from '../../actions/mylist/mylist_action';
import { REMOVE_USER } from '../../actions/session/session_actions';

const _nullState = {}

const MyListReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_MY_LISTS:
            return Object.assign({}, state, action.mylists);
        case RECEIVE_MY_LIST:
            const nextState = Object.assign({}, state);
            nextState[action.mylist.id] = action.mylist;
            return nextState;
        //quick fix to remove the catergories on user logout
        case REMOVE_USER:
            return _nullState;
        default:
            return state;
    }
}

export default MyListReducer;