
export const topVideo = (state, type)=>{
    let tVideo;
    const videos = Object.values(state.entities.videos);
    ////
    for(let i = 0; i < videos.length; i++){
        if(videos[i].videoType === type){
            return videos[i];
        }
    }  

    return undefined;
}


export const filterVideosByCategory = (state, videoIds)=>{
    
    if(!videoIds) return undefined;

    const videosArr = [];
    for (let i = 0; i < videoIds.length; i++) {
        const videoId = videoIds[i];
        videosArr.push(state.entities.videos[videoId]);
    }

    return videosArr;
}