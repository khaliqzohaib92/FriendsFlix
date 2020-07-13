import MyListUtils from '../../util/mylist/mylist_api_utils';

export const RECEIVE_MY_LISTS = "RECEIVE_MY_LISTS";
export const RECEIVE_MY_LIST = "RECEIVE_MY_LIST";
export const REMOVE_MY_LIST_ITEM = "REMOVE_MY_LIST_ITEM";


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

const removeMyListItem = (mylistId)=>{
    return {
        type: REMOVE_MY_LIST_ITEM,
        mylistId
    }
}

export const fetchMyLists = (profileId)=>dispatch=>{
    return MyListUtils.fetchMyLists(profileId)
    .then(mylists=>dispatch(receiveMyLists(mylists)));
}

export const addToMyList = (videoId)=>dispatch=>{
    return MyListUtils.addToMyList(videoId)
    .then(mylist=>dispatch(receiveMyList(mylist)));
}

export const removeMyListItem = (myListId)=>dispatch=>{
    return MyListUtils.removeMyListItem(myListId)
    .then(()=>dispatch(removeMyListItem(myListId)));
}

