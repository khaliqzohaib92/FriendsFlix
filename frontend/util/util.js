import { ConfigAPP } from "./config";
import { TEST, DUMMY_MOVIE_THUMBNAIL, DUMMY_MOVIE_VIDEO_URL } from "./constants";

export const errorMessages = (error)=>{
    return error.responseJSON;
}

export const randomColor = ()=>{
    let color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
     return color;
}


export const filterVideos = (videos)=>{
    if(ConfigAPP.state !== TEST) return videos;

    let newVideos = {};
    for(let [key, value] of Object.entries(videos)){
        let video = value;
        video.thumbnailUrl = DUMMY_MOVIE_THUMBNAIL;
        video.videoUrl = DUMMY_MOVIE_VIDEO_URL;
        newVideos[key] = video;
    }
    return newVideos;
}