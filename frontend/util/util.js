import { ConfigAPP } from "./config";
import { TEST, DUMMY_MOVIE_THUMBNAIL, DUMMY_MOVIE_VIDEO_URL, TYPE_MOVIES, TYPE_TV_SHOWS, TYPE_ALL  } from "./constants";

import {ROUTE_MOVIES, ROUTE_TV_SHOWS} from './route_utils'

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


export const findType =(path) =>{

    if(path.includes(ROUTE_MOVIES)){
        return TYPE_MOVIES;
    }else if(path.includes(ROUTE_TV_SHOWS)){
        return TYPE_TV_SHOWS;
    }else{
        return TYPE_ALL;
    }
}