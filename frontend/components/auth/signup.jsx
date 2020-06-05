import React, { Component } from 'react';

import AuthForm from './auth_form';

class Signup extends Component {
    render() {
        // //degbuuger
        return (
            <div>
                <AuthForm {...this.props}/>
            </div>
        );
    }
}

export default Signup;