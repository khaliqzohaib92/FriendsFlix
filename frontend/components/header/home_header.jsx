import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {ROUTE_PROFILES, ROUTE_HOME} from '../../util/route_utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faSortDown} from '@fortawesome/free-solid-svg-icons';
import {removeCurrentProfile} from '../../actions/session/session_actions'

import {CURRENT_PROFILE_ID} from '../../util/constants'
import { signout } from '../../actions/session/session_actions';

class HomeHeader extends React.Component {
    constructor(props){
        super(props)
        this.state = {searchBarVisible: false};
        this.showSearchBar = this.showSearchBar.bind(this);
        this.onSearchBarUnfocus = this.onSearchBarUnfocus.bind(this);
        this.signout = this.signout.bind(this);   
        this.openManageProfile = this.openManageProfile.bind(this);
    }

    showSearchBar(e){
        e.preventDefault();
        this.setState({searchBarVisible: true});
        
        const inputSearchElement = document.getElementById("search-input");

        //added this because of async
        //listen for change in in the input field
        let observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if(mutation.attributeName == "class"){
                    inputSearchElement.select();
                }
            });    
        });

        observer.observe(inputSearchElement, {
            attributes: true
        });
    }

    onSearchBarUnfocus(e){
        e.preventDefault();
        this.setState({searchBarVisible: false});
    }

    signout(e){
        e.preventDefault();
        this.props.signout();
    }
   
    openManageProfile(e){
        e.preventDefault();
        this.props.history.push(ROUTE_PROFILES)
    }

    render(){
        // 
        return (
            <header>
                <nav className="splash-nav">
                    <div className="home-nav-contianer-1">
                        <a href="#">
                            <img className="splash-nav-logo home-nav-logo" src={window.logo} alt="FriendsFlix logo"/>
                        </a>
                        <ul className={`home-nav-items-list `}>
                            <li><Link className="home-nav-item active" to="">Home</Link></li>
                            <li><Link className="home-nav-item" to="">TV Shows</Link></li>
                            <li><Link className="home-nav-item" to="">Movies</Link></li>
                            <li><Link className="home-nav-item" to="">My List</Link></li>
                        </ul>
                    </div>
                    
                    <div className={`home-nav-container-2 `}>
                        <div className={`home-nav-search-container  ${this.state.searchBarVisible ? "search-background" : "" }`}>
                            <FontAwesomeIcon onClick={this.showSearchBar} className="home-nav-search-icon" icon={faSearch}/>
                            <input className={`home-nav-search-input ${!this.state.searchBarVisible ? "hidden" : "" }`} onBlur={this.onSearchBarUnfocus} id="search-input" placeholder="Search" type="text" name="search"/>
                        </div>
                        
                        <span className="home-nav-profile-pic">
                            <span><p>D</p></span>
                            <FontAwesomeIcon className="home-nav-profile-down" icon={faSortDown}/>
                        </span>
                        <div className="profile-drop-down">
                            <div className="profile-drop-down-sub-container">
                                <ul className="profile-drop-down-list">
                                    <li onClick={this.openManageProfile} className="profile-drop-down-item">Manage Profile</li>
                                    <li onClick={this.signout} className="profile-drop-down-item">Sign Out</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

const mSTP = (state)=>{
    return {
        currentProfileId: state.session[CURRENT_PROFILE_ID],
    }
}

const mDTP = (dispatch)=>{
    return{
        removeCurrentProfile: ()=>dispatch(removeCurrentProfile()),
        signout:()=>dispatch(signout()),
    }
}
export default withRouter(connect(mSTP, mDTP)(HomeHeader));