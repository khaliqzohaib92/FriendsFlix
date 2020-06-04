import {combineReducers} from 'redux';

import userRecducer  from './user_reducer';
import profileRecducer  from '../profile/profile_reducer';

const entitiesReducer = combineReducers({
    user: userRecducer,
    profile: profileRecducer,
});

export default entitiesReducer;