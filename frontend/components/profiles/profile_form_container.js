import {connect} from 'react-redux';
import ProfileForm from './profile_form';
import {randomColor} from '../../util/util';
import {createProfile, deleteProfile} from '../../actions/profile/profile_action'
import { ADD, EDIT } from '../../util/constants';
import {withRouter} from 'react-router-dom';
import { fetchProfile, updateProfile } from '../../actions/profile/profile_action';

const mSTP = (state, ownProps)=>{
    const id = ownProps.match.params.id;
    const defaultProfile = {
        title: "",
        color: randomColor(),
    };

    let profile;

    if(id && state.entities.profiles[id]){
        profile = state.entities.profiles[id];
    } else {
        profile = defaultProfile;
    }
    return {
        profile: Object.assign({},profile),
        formType: id ? EDIT : ADD,
        errors: state.errors.profile,
    }
}

const mDTP = (dispatch, ownProps)=>{
    const id = ownProps.match.params.id;
    return {
        action: (profile)=>id ? dispatch(updateProfile(profile)) :dispatch(createProfile(profile)),
        fetchProfile: (profileId)=>dispatch(fetchProfile(profileId)),
        deleteProfile: id ? (profileId)=>dispatch(deleteProfile(profileId)) : "",
    }
}


export default withRouter(connect(mSTP, mDTP)(ProfileForm));