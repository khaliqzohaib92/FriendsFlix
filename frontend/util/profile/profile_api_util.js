export const createProfile = (profile)=>{
    return $.ajax({
        method: 'POST',
        url: 'api/profiles',
        data: {profile}
    })
}

export const updateProfile = (profile)=>{
    debugger
    return $.ajax({
        method: 'PATCH',
        url: `api/profiles/${profile.id}`,
        data: {profile}
    })
}

export const fetchProfiles = ()=>{
    return $.ajax({
        url: 'api/profiles'
    })
}

export const fetchProfile = (profileId)=>{
    return $.ajax({
        url: `api/profiles/${profileId}`,
    })
}

export const removeProfile = (profileId)=>{
    return $.ajax({
        method: 'DELETE',
        url: `api/profiles/${profileId}`,
    })
}

