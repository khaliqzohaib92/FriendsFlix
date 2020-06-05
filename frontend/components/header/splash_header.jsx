import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {ROUTE_SIGNUP, ROUTE_SIGNIN} from '../../util/route_utils'
import { withRouter } from "react-router-dom";

const SplashHeader = (props)=>{
    // //degbuuger
    const {pathname} = props.location;
    const showButtons = pathname.includes(ROUTE_SIGNIN) || pathname.includes(ROUTE_SIGNUP) ? false : true;
        return (
            <header>
                <nav className="splash-nav">
                        <a href="#">
                            <img className="splash-nav-logo" src={window.logo} alt="FriendsFlix logo"/>
                        </a>
                        <div className={`splash-nav-link-container ${!showButtons ? 'hidden' : ''}`}>
                            <Link to={ROUTE_SIGNUP} className="splash-nav-signup button-red">Sign Up</Link>
                            <Link to={ROUTE_SIGNIN} className="splash-nav-signin button-red">Sign In</Link>
                        </div>
                    </nav>
            </header>
        );
}

export default withRouter(SplashHeader);