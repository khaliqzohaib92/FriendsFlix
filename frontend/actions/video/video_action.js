import * as VideoApiUtlis from '../../util/video/video_api_utils';
import {errorMessages} from '../../util/util'

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

const receiveVideos = (videos)=>{
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
}

const receiveVideo = (video)=>{
    return {
        type: RECEIVE_VIDEO,
        video
    }
}

const receiveVideoErrors=(errors)=>{
    return{
        type:RECEIVE_VIDEO_ERRORS,
        errors
    }
}

//thunk action creators

export const fetchVideos = ()=>dispatch=>{
    return VideoApiUtlis.fetchVideos()
    .then(
        videos=>dispatch(receiveVideos(videos)),
        errors=>dispatch(receiveVideoErrors(errorMessages(errors))));
}

export const fetchVideo = (videoId)=>dispatch=>{
    return VideoApiUtlis.fetchVideo(videoId)
    .then(
        video=>dispatch(receiveVideo(video)),
        errors=>dispatch(receiveVideoErrors(errorMessages(errors))));
}