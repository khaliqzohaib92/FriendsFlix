import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {ROUTE_PROFILES, ROUTE_HOME} from '../../util/route_utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faSortDown} from '@fortawesome/free-solid-svg-icons';
import {removeCurrentProfile} from '../../actions/session/session_actions'

import {CURRENT_PROFILE_ID} from '../../util/constants'

class ProfileHeader extends React.Component {

    componentDidMount(){
        debugger
        // //remove profile id if user navigated to profile page
        this.props.removeCurrentProfile();
    }
    render(){
        debugger
        return (
            <header>
                <nav className="splash-nav">
                    <div className="home-nav-contianer-1">
                        <a href="#">
                            <img className="splash-nav-logo home-nav-logo" src={window.logo} alt="FriendsFlix logo"/>
                        </a>
                    </div> 
                </nav>
            </header>
        );
    }
}

const mDTP = (dispatch)=>{
    return{
        removeCurrentProfile: ()=>dispatch(removeCurrentProfile()),
    }
}
export default withRouter(connect(null, mDTP)(ProfileHeader));