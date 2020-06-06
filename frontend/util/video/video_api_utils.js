export const fetchVideos= ()=>{
    return $.ajax({
        url: 'api/videos'
    });
};

export const fetchVideo = (videoId)=>{
    return $.ajax({
        url: `api/videos/${videoId}`
    })
};