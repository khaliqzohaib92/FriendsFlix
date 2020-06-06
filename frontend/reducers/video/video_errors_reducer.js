import {
    RECEIVE_VIDEOS,
    RECEIVE_VIDEO,
    RECEIVE_VIDEO_ERRORS
} from '../../actions/video/video_action';

const _nullState = [];

const videoErrorsReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return action.errors
        case RECEIVE_VIDEO:
        case RECEIVE_VIDEOS:
            return _nullState;
        default:
            return state;
    }
}

export default videoErrorsReducer;
