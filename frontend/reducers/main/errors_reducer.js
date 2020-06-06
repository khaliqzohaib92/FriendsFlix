import {combineReducers} from 'redux';

import sessionErrorsReducer  from '../session/session_errors_reducer';
import profileErrorsReducer  from '../profile/profile_errors_reducer';
import videoErrorsReducer  from '../video/video_errors_reducer';
import categoryErrorsReducer  from '../category/category_errors_reducer';

const errorReducer = combineReducers({
    session: sessionErrorsReducer,
    profile: profileErrorsReducer,
    video: videoErrorsReducer,
    category: categoryErrorsReducer,
});

export default errorReducer;