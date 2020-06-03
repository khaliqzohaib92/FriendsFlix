import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_SIGNUP, ROUTE_SIGNIN } from '../../util/route_utils';
import Demo from '../../util/demo';

export default class Greeting extends React.Component{
    constructor(props){
        super(props);
        this.demoLogin = this.demoLogin.bind(this);
    }

    demoLogin(e){
        e.preventDefault();
        const demoUser = Demo.user;
        this.props.signin(demoUser);
    }

    render(){
        return (
            <>
                <section className='splash-container'>
                    <nav className="splash-nav">
                        <a href="#">
                            <img className="splash-nav-logo" src={window.logo} alt="FriendsFlix logo"/>
                        </a>
                        <div className="splash-nav-link-container">
                            <Link to={ROUTE_SIGNUP} className="splash-nav-signup">Sign Up</Link>
                            <Link to={ROUTE_SIGNIN} className="splash-nav-signin">Sign In</Link>
                        </div>
                        {/* <button onClick={this.demoLogin}>Demo Login</button> */}
                    </nav>
                </section>
            </>
        );
    }
}