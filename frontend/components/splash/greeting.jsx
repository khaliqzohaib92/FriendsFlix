import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

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
                <section className="splash-content-container">
                    <span className="splash-main-content">Watch movies, TV shows with friends anytime anywhere</span>
                    <button onClick={this.demoLogin} className="splash-demo-login button-red">Try Demo Login    <FontAwesomeIcon icon={faChevronRight}/></button>
                </section>
            </>
        );
    }
}