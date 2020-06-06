import {connect} from 'react-redux';

import Profiles from './profiles';
import {signout, receiveCurrentProfile} from '../../actions/session/session_actions'
import {fetchProfiles} from '../../actions/profile/profile_action'
import {withRouter} from 'react-router-dom'
import {ROUTE_PROFILES_MANAGE} from '../../util/route_utils'
import { MANAGE, GENERAL } from '../../util/constants';

const mSTP = (state, ownProps)=>{
    return {
        profiles: Object.values(state.entities.profiles),
        display_type: ownProps.location.pathname.includes(ROUTE_PROFILES_MANAGE) ? MANAGE : GENERAL,
    }
}

const mDTP = (dispatch)=>{
    return {
        fetchProfiles: ()=>dispatch(fetchProfiles()),
        receiveCurrentProfile:(profileId)=>(dispatch(receiveCurrentProfile(profileId))),
    }
}

export default withRouter(connect(mSTP, mDTP)(Profiles))