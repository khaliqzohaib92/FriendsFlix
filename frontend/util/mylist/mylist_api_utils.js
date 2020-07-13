
export const addToMyList = (videoId)=>{
    return $.ajax({
        url: `api/mylists/${videoId}`
    })
};

export const fetchMyLists = (profileId)=>{
    return $.ajax({
        url: `api/profiles/${profileId}/mylists`
    })
};

export const removeMyListItem = (myListId) =>{
    return $.ajax({
        url: `api/mylists/${myListId}`,
        method: 'DELETE'
    })
}