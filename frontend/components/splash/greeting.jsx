import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_SIGNUP, ROUTE_SIGNIN } from '../../util/route_utils';

export default class Greeting extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <Link to={ROUTE_SIGNUP}>Sign Up</Link>
                <Link to={ROUTE_SIGNIN}>Sign In</Link>
            </>
        );
    }
}