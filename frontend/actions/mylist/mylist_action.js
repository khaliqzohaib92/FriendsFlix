import MyListUtils from '../../util/mylist/mylist_api_utils';

export const RECEIVE_MY_LISTS = "RECEIVE_MY_LISTS";
export const RECEIVE_MY_LIST = "RECEIVE_MY_LIST";
export const DELETE_MY_LIST = "DELETE_MY_LIST";


const receiveMyLists = (mylists)=>{
    return {
        type: RECEIVE_MY_LISTS,
        mylists
    }
}

const receiveMyList = (mylist)=>{
    return {
        type: RECEIVE_MY_LIST,
        mylist
    }
}

const removeMyLists = (mylistId)=>{
    return {
        type: RECEIVE_MY_LISTS,
        mylistId
    }
}

export const fetchMyLists = (profileId)=>dispatch=>{
    return MyListUtils.fetchMyLists(profileId)
    .then(mylists=>dispatch(receiveMyLists(mylists)));
}

export const addToMyList = (videoId)=>dispatch=>{
    return MyListUtils.addToMyList(videoId)
    .then(mylist=>dispatch(removeMyList(mylist)));
}

export const deleteMyList = (myListId)=>dispatch=>{
    return MyListUtils.deleteMyList(myListId)
    .then(()=>dispatch(removeMyLists(myListId)));
}

