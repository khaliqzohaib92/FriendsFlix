import {combineReducers} from 'redux';

import userRecducer  from './user_reducer';
import profileRecducer  from '../profile/profile_reducer';
import videoReducer from '../video/video_reducer'
import categoryRecducer from '../category/category_reducer'

const entitiesReducer = combineReducers({
    user: userRecducer,
    profiles: profileRecducer,
    videos: videoReducer,
    categories: categoryRecducer,
});

export default entitiesReducer;