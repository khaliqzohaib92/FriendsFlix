import {connect} from 'react-redux';

import { signin } from '../../actions/session/session_actions';
import Signin from './signin';

const mSTP = (state)=>{
    return {
        formType: "Sign In",
        errors: state.errors.session,
    }
}

const mDTP = (dispatch)=>{
    return {
        action: (user)=>dispatch(signin(user)),
    }
}

export default connect(mSTP, mDTP)(Signin)