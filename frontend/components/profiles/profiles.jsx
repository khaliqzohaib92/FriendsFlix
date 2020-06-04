import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {randomColor} from '../../util/util'

class Profiles extends Component {
    constructor(props){
        super(props);
        this.signout = this.signout.bind(this);
        this.openAddProfileForm = this.openAddProfileForm.bind(this)
    }

    componentDidMount(){
        this.props.fetchProfiles();
    }

    signout(e){
        this.props.signout();
    }

    openAddProfileForm(e){
        e.prevenetDefault();
    }

    render() {
        const {profiles, user} = this.props;
        return (
            <>
                Hello from profiles {this.props.user.email}
                <button onClick={this.signout}>Sign Out</button>
                <h1>Who's watching?</h1>
                {
                    profiles.map(profile=>{
                        return (
                        <li key={profile.id}><span style={{color: `${randomColor()}`}}>{profile.title[0]}</span>{profile.title}</li>
                        )
                    })
                }
                <span onClick={this.openAddProfileForm}>
                <FontAwesomeIcon icon={faPlus}/>
                    Add Profile
                </span>
            </>
        );
    }
}

export default Profiles;