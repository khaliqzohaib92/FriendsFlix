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

export const fetchVideoByType = (type)=>{
    return $.ajax({
        url: `api/videos/?type=${type}`
    })
};