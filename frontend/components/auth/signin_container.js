import {connect} from 'react-redux';

import { signin } from '../../actions/session/session_actions';
import Signin from './signin';
import {SIGN_IN} from '../../util/constants'

const mSTP = (state)=>{
    return {
        formType: SIGN_IN,
        errors: state.errors.session,
    }
}

const mDTP = (dispatch)=>{
    return {
        action: (user)=>dispatch(signin(user)),
    }
}

export default connect(mSTP, mDTP)(Signin)