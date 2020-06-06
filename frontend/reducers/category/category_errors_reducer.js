import {
    RECEIVE_CATEGORIES,
    RECEIVE_CATEGORY_ERRORS
} from '../../actions/category/category_action';

const _nullState = [];

const categoryErrorsReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CATEGORY_ERRORS:
            return action.errors
        case RECEIVE_CATEGORIES:
            return _nullState;
        default:
            return state;
    }
}

export default categoryErrorsReducer;
