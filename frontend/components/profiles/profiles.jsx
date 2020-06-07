import React, { Component } from 'react';
import { ROUTE_PROFILES_FORM, ROUTE_PROFILES_MANAGE, editProfileRoute, ROUTE_HOME } from '../../util/route_utils';
import {Link} from 'react-router-dom';
import { MANAGE } from '../../util/constants';
import { Redirect } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'

class Profiles extends Component {
    constructor(props){
        super(props);
        this.state = {redirectToHome: false};
        this.signout = this.signout.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount(){
        this.props.fetchProfiles()
    }

    signout(e){
        this.props.signout();
    }

    handleProfileClick(profileId){
        return e=>{
            //degbuuger
            e.preventDefault();
            if(this.props.display_type == MANAGE){
                //clicked from manage profile
                //quick fix to open edit form for specific profile
                this.props.history.push(editProfileRoute(profileId))
            }else{
                //clicked from general profile selection
                this.props.receiveCurrentProfile(profileId);

                this.setState({redirectToHome: true});
            }
        }
    }
    goBack(){
        this.props.history.goBack()
    }

    render() {
        if (this.state.redirectToHome) 
        //quick fix to redirect to home when profile is clicked
        return <Redirect to={ROUTE_HOME} />

        const {profiles, user} = this.props;
        return (
            <div className="all-profiles-main"> 
                <h1 className="all-profiles-heading">{this.props.display_type == MANAGE ? "Manage Profile:" : "Who's watching?"}</h1>
                <div className="all-profile-list-container">
                    <ul className="all-profiles-list">
                        {
                            profiles.map(profile=>{
                                return (
                                <li key={profile.id} className="all-profiles-list-item" onClick={this.handleProfileClick(profile.id)}>
                                    <span className="all-profiles-list-item-smile" style={{background: `linear-gradient(${profile.color}, #141414)`}}>
                                        <p>{profile.title[0]}</p>
                                    </span>
                                    {/* overlay in case user hover over profile in manage profile mode */}
                                    {
                                        this.props.display_type == MANAGE ? 
                                        <span className="all-profiles-list-item-smile manage-profile-overlay">
                                            <p> <FontAwesomeIcon icon={faEdit} size="xs"/></p>
                                        </span> :
                                        ""
                                    }
                                    <span className="all-profiles-list-item-text">
                                        {profile.title}
                                    </span>
                                </li>
                                )
                            })
                        }
                    </ul>
                    <Link className="all-profile-add" to={ROUTE_PROFILES_FORM}>
                       <div className="profiles-add-container">
                           <p className="profiles-add"/>
                        </div>
                        <p className="profile-add-text">Add Profile</p> 
                    </Link>
                </div>
                {
                  this.props.display_type == MANAGE ? <button onClick= {this.goBack} className="manage-profiles-done profile-form-continue-btn profile-margin profiles-button">Done</button> :  <Link to={ROUTE_PROFILES_MANAGE} className="all-profiles-manage profile-margin profiles-button" >Manage Profile</Link>
                }
            </div>
        );
    }
}

export default Profiles;