import { TYPE_ALL } from "../constants";

export const topVideo = (videos, type, genreId)=>{
    let tVideo;
    const videoArr = Object.values(videos);
    for(let i = 0; i < videoArr.length; i++){
        if((videoArr[i].videoType === type && 
            videoArr[i].genreIds.includes(genreId)) || type === TYPE_ALL){
            return videoArr[i];
        }
    }  

    return undefined;
}


export const filterVideosByCategory = (videos, videoIds, type, genreId)=>{
    
    if(!videoIds) return undefined;
    const videosArr = [];
    for (let i = 0; i < videoIds.length; i++) {
        let video = videos[videoIds[i]];
        if(!video) continue;
        if(((video.videoType === type && video.genreIds.includes(genreId)) || type === TYPE_ALL) && videoIds.includes(video.id)){
            videosArr.push(video);
        }
    }

    return videosArr;
}

export const filterForSearch = (state ,name)=>{
    const genre = findGenreByName(state, name);
    const videosArr = [];
    let videos = Object.values(state.entities.videos);
    for (let i = 0; i < videos.length; i++) {
        if(videos[i].title.toLowerCase().includes(name.toLowerCase()) ||
         (genre && videos[i].genreIds.includes(genre.id)))
        {            
            videosArr.push(videos[i]);
        }
    }

    return videosArr;
}

function findGenreByName(state, name){
    for (let [id, genre] of Object.entries(state.entities.genres)) {
       if(genre.name.toLowerCase().includes(name.toLowerCase()))
        return genre;
    }
    return undefined;
}

export const fetchMyListVideos = (videoIds, videos)=>{
    return videoIds.map((videoId) => {
        return videos[videoId];
    })
}