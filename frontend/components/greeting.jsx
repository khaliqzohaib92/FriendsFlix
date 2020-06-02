import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
            </>
        );
    }
}