import {
    RECEIVE_GENRES,
} from '../../actions/genre/genre_action';
import { REMOVE_USER } from '../../actions/session/session_actions';

const _nullState = {}

const GenreReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_GENRES:
            return Object.assign({}, state, action.genres);
        //quick fix to remove the catergories on user logout
        case REMOVE_USER:
            return _nullState;
        default:
            return state;
    }
}

export default GenreReducer;