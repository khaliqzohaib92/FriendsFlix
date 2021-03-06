
export const fetchVideo = (videoId)=>{
    return $.ajax({
        url: `api/videos/${videoId}`
    })
};

export const fetchVideosByGenre = (genreId, type)=>{
    return $.ajax({
        url: type ? 
        `api/genres/${genreId}/videos/?type=${type}` : 
        `api/genres/${genreId}/videos`
    })
};

export const searchByName = (name) =>{
    return $.ajax({
        url: `api/videos/?q=${name.toLowerCase()}`
    })
}