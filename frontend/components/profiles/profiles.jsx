import React, { Component } from 'react';
import { ROUTE_SPLASH } from '../../util/route_utils';

class Profiles extends Component {
    constructor(props){
        super(props);
        this.signout = this.signout.bind(this);
    }

    signout(e){
        this.props.signout()
        .then(()=>{this.props.history.push(ROUTE_SPLASH)});
    }

    render() {
        return (
            <div>
                Hello from profiles {this.props.user.email}
                <button onClick={this.signout}>Sign Out</button>
            </div>
        );
    }
}

export default Profiles;