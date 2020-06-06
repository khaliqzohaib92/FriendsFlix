import {
    RECEIVE_CATEGORIES,
} from '../../actions/category/category_action';
import { REMOVE_USER } from '../../actions/session/session_actions';

const _nullState = {}

const categoryReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_CATEGORIES:
            return Object.assign({}, state, action.categories);
        //quick fix to remove the catergories on user logout
        case REMOVE_USER:
            return _nullState;
        default:
            return state;
    }
}

export default categoryReducer;