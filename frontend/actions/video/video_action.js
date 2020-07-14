import * as VideoApiUtlis from '../../util/video/video_api_utils';
import {errorMessages} from '../../util/util'

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
import {filterVideos} from '../../util/util'

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

export const fetchVideosByGenre = (genreId, type)=>dispatch=>{
    return VideoApiUtlis.fetchVideosByGenre(genreId, type)
    .then(
        videos=>dispatch(receiveVideos(filterVideos(videos))),
        errors=>dispatch(receiveVideoErrors(errorMessages(errors))));
}

export const fetchVideo = (videoId)=>dispatch=>{
    return VideoApiUtlis.fetchVideo(videoId)
    .then(
        video=>dispatch(receiveVideo(filterVideos(video))),
        errors=>dispatch(receiveVideoErrors(errorMessages(errors))));
}

export const searchByName = (name)=>dispatch=>{
    return VideoApiUtlis.searchByName(name)
    .then(
        video=>{
            dispatch(receiveVideos(filterVideos(video)))
        },
        errors=>dispatch(receiveVideoErrors(errorMessages(errors))));
}
