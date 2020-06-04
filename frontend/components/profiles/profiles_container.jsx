import {connect} from 'react-redux';

import Profiles from './profiles';
import {signout} from '../../actions/session/session_actions'
const mSTP = (state)=>{
    return {
        user: state.entities.user[state.session.currentUserId],
    }
}

const mDTP = (dispatch)=>{
    return {
        signout: ()=>dispatch(signout())
    }
}

export default connect(mSTP, mDTP)(Profiles)