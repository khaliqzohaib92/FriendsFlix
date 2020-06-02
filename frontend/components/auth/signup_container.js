import {connect} from 'react-redux';

import { signup } from '../../actions/session/session_actions';
import Signup from './signup';

const mSTP = (state)=>{
    return {
        formType: "Sign Up",
        errors: state.errors.session,
    }
}

const mDTP = (dispatch)=>{
    return {
        action: (user)=>dispatch(signup(user)),
    }
}

export default connect(mSTP, mDTP)(Signup)