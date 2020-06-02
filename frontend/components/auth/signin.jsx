import React, { Component } from 'react';

import AuthForm from './auth_form';

class SignIn extends Component {
    render() {
        debugger
        return (
            <div>
                <AuthForm {...this.props}/>
            </div>
        );
    }
}

export default SignIn;