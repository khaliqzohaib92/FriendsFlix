//current profile id 

import { CURRENT_PROFILE_ID } from "../constants";

export const saveCurrentProfileId = (profileId)=>{
    localStorage.setItem(CURRENT_PROFILE_ID, parseInt(profileId));
}

export const getCurrentPorfileId = ()=>{
    return localStorage.getItem(CURRENT_PROFILE_ID);
}

export const removeProfileId = ()=>{
    localStorage.removeItem(CURRENT_PROFILE_ID);
}