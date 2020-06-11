import { TYPE_ALL } from "../constants";

export const topVideo = (videos, type, genreId)=>{
    // debugger
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
    //debugger
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

// export const filterVideosByType = (videos, type)=>{
//     const videosArr = Object.values(videos);
//     let newVideoArr = [];
//     for(let i = 0; i < videosArr.length; i++){
//         if(videosArr[i].videoType === type || type === TYPE_ALL){
//             newVideoArr(videosArr[i]);
//         }
//     }  

//     return newVideoArr;
// }