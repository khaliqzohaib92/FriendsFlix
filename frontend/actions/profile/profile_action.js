import * as ProfileApiUtil from '../../util/profile/profile_api_util';
import {errorMessages} from '../../util/util'

export const RECEIVE_CURRENT_USER_PROFILES = "RECEIVE_CURRENT_USER_PROFILES";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILE";
export const RECEIVE_PROFILE_ERRORS = "RECEIVE_PROFILE_ERRORS";
export const REMOVE_PROFILE_ERRORS = "REMOVE_PROFILE_ERRORS";

const receiveProfiles = (profiles)=>{
    return {
        type: RECEIVE_CURRENT_USER_PROFILES,
        profiles
    }
}

const receiveProfile = (profile)=>{
    return {
        type: RECEIVE_PROFILE,
        profile
    }
}

const removeProfile = (profileId)=>{
    return {
        type: REMOVE_PROFILE,
        profileId
    }
}

const receiveProfileErrors = (errors)=>{
    return {
        type: RECEIVE_PROFILE_ERRORS,
        errors
    }
}

const removeProfileErrors = ()=>{
    return {
        type: REMOVE_PROFILE_ERRORS,
    }
}


//thunk action creator
export const createProfile = profile=>dispatch=>{
    return ProfileApiUtil.createProfile(profile)
    .then(profile=>dispatch(receiveProfile(profile)),
    (errors)=>dispatch(receiveProfileErrors(errorMessages(errors))))
}

export const updateProfile = profile=>dispatch=>{
    return ProfileApiUtil.updateProfile(profile)
    .then(profile=>dispatch(receiveProfile(profile)),
    (errors)=>dispatch(receiveProfileErrors(errorMessages(errors))))
}

export const fetchProfiles = ()=>dispatch=>{
    return ProfileApiUtil.fetchProfiles()
    .then(profiles=>dispatch(receiveProfiles(profiles)),
    (errors)=>dispatch(receiveProfileErrors(errorMessages(errors))))
}

export const fetchProfile = (profileId)=>dispatch=>{
    return ProfileApiUtil.fetchProfile(profileId)
    .then(profile=>dispatch(receiveProfile(profile)),
    (errors)=>dispatch(receiveProfileErrors(errorMessages(errors))))
}

export const deleteProfile = (profileId)=>dispatch=>{
    return ProfileApiUtil.removeProfile(profileId)
    .then(()=>dispatch(removeProfile(profileId)),
    (errors)=>dispatch(receiveProfileErrors(errorMessages(errors))))
}