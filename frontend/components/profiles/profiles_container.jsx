import {connect} from 'react-redux';

import Profiles from './profiles';
import {signout} from '../../actions/session/session_actions'
import {fetchProfiles} from '../../actions/profile/profile_action'

const mSTP = (state)=>{
    return {
        user: state.entities.user[state.session.currentUserId],
        profiles: Object.values(state.entities.profiles),
    }
}

const mDTP = (dispatch)=>{
    return {
        signout: ()=>dispatch(signout()),
        fetchProfiles: ()=>dispatch(fetchProfiles()),
    }
}

export default connect(mSTP, mDTP)(Profiles)