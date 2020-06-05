import {connect} from 'react-redux';

import Greeting from './greeting';
import {signin} from '../../actions/session/session_actions'

const mSTP = (state)=>{
    return {
    }
}

const mDTP = (dispatch)=>{
    return {
        signin: (user)=>dispatch(signin(user))
    }
}

export default connect(mSTP, mDTP)(Greeting)