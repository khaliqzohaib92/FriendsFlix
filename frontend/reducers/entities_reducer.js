import {combineReducers} from 'redux';

import userRecducer  from './user_reducer';

const entitiesReducer = combineReducers({
    user: userRecducer,
});

export default entitiesReducer;